#!/usr/bin/env python3
"""
===========================================================================
ANALYSIS ONLY. READS HIDDEN SIMULATOR STATE. NEVER IMPORTED BY curriculum/.
===========================================================================

This script reaches into `Simulator._pass_prob`, which a scheduler must never
do. That is deliberate and sanctioned: README.md says the practice bank's
difficulties are recoverable on purpose, "because you cannot calibrate an
estimator against a target you can never see". Nothing in `curriculum/` imports
this file, and the scheduler it drives sees only `choose`/`observe`, exactly as
it does under `bin/train`.

WHAT IT ANSWERS

1. Is the census wired correctly?  Every task should get exactly `group`
   rollouts inside the census window, and they should sum to the window.

2. How wrong is p_hat?  A census gives k out of 8. At p = 0.5 that estimator has
   standard deviation sqrt(0.25/8) = 0.177, so it is a blunt instrument by
   construction. Knowing how blunt says whether a phase-2 policy can act on one
   group or should spend a second before committing budget.

3. How fast does p drift?  This is the one that changes phase-2 design. A census
   reading measures a moving target: the model trains, proficiency rises, every
   task gets easier. A task measured at 0.5 may sit at 0.8 by the last epoch and
   be teaching nothing. The drift-per-epoch number below is what sets the decay
   weight on stale observations -- otherwise that constant is invented.

4. What did the census cost?  Flat groups (k=0 or k=8) bank exactly zero credit.
   The flat count is the part of epoch 1 that bought information and no learning.

USAGE

    python tools/check_census.py
    python tools/check_census.py --config config/run.json --budget 5760
    python tools/check_census.py --json runs/census.json
"""

import argparse
import json
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import curriculum  # noqa: E402
import gymsim  # noqa: E402


def pearson(xs, ys):
    n = len(xs)
    if n < 2:
        return float("nan")
    mx, my = sum(xs) / n, sum(ys) / n
    sxy = sum((x - mx) * (y - my) for x, y in zip(xs, ys))
    sxx = sum((x - mx) ** 2 for x in xs)
    syy = sum((y - my) ** 2 for y in ys)
    if sxx <= 0 or syy <= 0:
        return float("nan")
    return sxy / math.sqrt(sxx * syy)


def spread(k, size):
    """Learning a closed group of `size` with `k` passes actually banks."""
    if size <= 1:
        return 0.0
    return k * (size - k) / float(size * size)


def drive(cfg):
    """Run the scheduler exactly as bin/train does, recording hidden truth."""
    sim = gymsim.Simulator(cfg)          # no out_dir: never clobber a real run
    tasks = gymsim.public_tasks(sim.tasks)
    sched = curriculum.Scheduler(
        tasks, sim.budget, sim.cadence, sim.group, int(cfg.get("scheduler_seed", 0))
    )

    census_len = sched._census_len
    ids = [t["task_id"] for t in tasks]

    p_start = {tid: sim._pass_prob(tid) for tid in ids}

    # Per task, over the census window only: rollouts, passes, and the mean true
    # p the group actually faced. Mean rather than a snapshot because proficiency
    # can move mid-group at a cadence boundary, and k/8 estimates the average p
    # the group saw, not p at any one instant.
    c_n = {tid: 0 for tid in ids}
    c_k = {tid: 0 for tid in ids}
    c_p = {tid: 0.0 for tid in ids}

    for i in range(sim.budget):
        tid = sched.choose()
        in_census = i < census_len
        if in_census:
            c_p[tid] += sim._pass_prob(tid)
        passed = sim.rollout(tid)
        sched.observe(tid, passed)
        if in_census:
            c_n[tid] += 1
            c_k[tid] += 1 if passed else 0

    sim.close()
    p_end = {tid: sim._pass_prob(tid) for tid in ids}

    rows = []
    for tid in ids:
        n = c_n[tid]
        rows.append({
            "task_id": tid,
            "skills": next(t["skills"] for t in tasks if t["task_id"] == tid),
            "n": n,
            "k": c_k[tid],
            "p_hat": (c_k[tid] / n) if n else None,
            "p_true_census": (c_p[tid] / n) if n else None,
            "p_start": p_start[tid],
            "p_true_end": p_end[tid],
            "spread": spread(c_k[tid], n),
        })
    return sim, sched, rows, census_len


def report(args):
    cfg = gymsim.load_config(args.config)
    if args.budget:
        cfg["budget"] = int(args.budget)

    sim, sched, rows, census_len = drive(cfg)
    group = sim.group
    n_tasks = len(rows)
    measured = [r for r in rows if r["n"] > 0]

    # ---- 1. wiring ------------------------------------------------------
    total_census = sum(r["n"] for r in rows)
    full = sum(1 for r in rows if r["n"] == group)
    print("=" * 78)
    print("CENSUS WIRING")
    print("=" * 78)
    print("  budget            %d" % sim.budget)
    print("  tasks             %d" % n_tasks)
    print("  group             %d" % group)
    print("  census window     %d rollouts  (expected min(%d, %d) = %d)"
          % (census_len, n_tasks * group, sim.budget, min(n_tasks * group, sim.budget)))
    print("  rollouts placed   %d  %s" % (total_census,
          "OK" if total_census == census_len else "MISMATCH"))
    print("  tasks at n=%d      %d / %d  %s" % (group, full, n_tasks,
          "OK" if full == n_tasks else "(short window, expected below budget %d)" % (n_tasks * group)))

    # ---- 2. estimator quality -------------------------------------------
    errs = [r["p_hat"] - r["p_true_census"] for r in measured]
    mae = sum(abs(e) for e in errs) / len(errs)
    rmse = math.sqrt(sum(e * e for e in errs) / len(errs))
    corr = pearson([r["p_hat"] for r in measured],
                   [r["p_true_census"] for r in measured])
    # What a k-of-n estimator can do at best, given each task's own true p.
    ideal = sum(math.sqrt(r["p_true_census"] * (1 - r["p_true_census"]) / r["n"])
                for r in measured) / len(measured)
    print()
    print("=" * 78)
    print("ESTIMATOR  p_hat = k/n  vs  true p during the census")
    print("=" * 78)
    print("  MAE               %.4f" % mae)
    print("  RMSE              %.4f   (binomial floor for these p and n: %.4f)"
          % (rmse, ideal))
    print("  correlation       %.4f" % corr)
    print("  bias (mean err)   %+.4f" % (sum(errs) / len(errs)))
    print("  -> RMSE near the floor means the estimator is as good as %d samples"
          % group)
    print("     allow. It does NOT mean p_hat is accurate; it means the census")
    print("     cannot be sharpened without spending more rollouts on the task.")

    # ---- 3. what the census cost and bought ------------------------------
    flat = [r for r in measured if r["k"] == 0 or r["k"] == r["n"]]
    zeros = sum(1 for r in measured if r["k"] == 0)
    maxed = sum(1 for r in measured if r["k"] == r["n"])
    live = [r for r in measured if 3 <= r["k"] <= 5]
    banked = sum(r["spread"] for r in measured)
    print()
    print("=" * 78)
    print("WHAT EPOCH 1 BOUGHT")
    print("=" * 78)
    print("  flat groups       %d / %d  (%.0f%% of the window taught nothing)"
          % (len(flat), len(measured), 100.0 * len(flat) / len(measured)))
    print("    k=0 (too hard)  %d      <- bank these, revisit once prof rises" % zeros)
    print("    k=n (too easy)  %d      <- retire these, they only get easier" % maxed)
    print("  k in 3..5         %d      <- near-0.5, the tasks worth repeating" % len(live))
    print("  spread banked     %.2f    (max possible %.2f at k=n/2 everywhere)"
          % (banked, 0.25 * len(measured)))

    # ---- 4. drift, the number phase 2 needs ------------------------------
    epochs_after = (sim.budget - census_len) / float(census_len) if census_len else 0.0
    drifts = [r["p_true_end"] - r["p_true_census"] for r in measured]
    print()
    print("=" * 78)
    print("DRIFT  how stale a census reading gets  (%.2f epochs after the census)"
          % epochs_after)
    print("=" * 78)
    if epochs_after <= 0:
        print("  budget ends with the census; no drift to measure. Re-run with")
        print("  --budget 5760 to see it.")
    else:
        print("  mean drift        %+.4f  over the rest of the run" % (sum(drifts) / len(drifts)))
        print("  per epoch         %+.4f" % (sum(drifts) / len(drifts) / epochs_after))
        print("  max / min         %+.4f / %+.4f" % (max(drifts), min(drifts)))
        print()
        print("  by census difficulty (drift is not uniform -- this is the point):")
        print("    %-14s %5s  %9s  %9s  %9s" % ("p_true_census", "n", "mean p_end", "drift", "per epoch"))
        bins = [(0.0, 0.1), (0.1, 0.3), (0.3, 0.5), (0.5, 0.7), (0.7, 0.9), (0.9, 1.01)]
        for lo, hi in bins:
            grp = [r for r in measured if lo <= r["p_true_census"] < hi]
            if not grp:
                continue
            d = sum(r["p_true_end"] - r["p_true_census"] for r in grp) / len(grp)
            pe = sum(r["p_true_end"] for r in grp) / len(grp)
            print("    [%.1f, %.1f)     %5d  %9.4f  %+9.4f  %+9.4f"
                  % (lo, min(hi, 1.0), len(grp), pe, d, d / epochs_after))
        print()
        print("  Read this as the decay weight for phase 2: a census p_hat is only")
        print("  worth its face value for as long as drift stays inside the")
        print("  estimator noise above. Once drift exceeds RMSE, the reading is")
        print("  stale and the task needs re-measuring, not re-trusting.")

    # ---- 5. per-task table ----------------------------------------------
    if args.table:
        print()
        print("=" * 78)
        print("PER-TASK  (sorted by true census p)")
        print("=" * 78)
        print("  %-16s %2s %2s %6s %8s %6s %8s %8s"
              % ("task_id", "n", "k", "p_hat", "p_true", "err", "p_end", "drift"))
        for r in sorted(measured, key=lambda r: r["p_true_census"]):
            print("  %-16s %2d %2d %6.3f %8.3f %+6.3f %8.3f %+8.3f"
                  % (r["task_id"], r["n"], r["k"], r["p_hat"], r["p_true_census"],
                     r["p_hat"] - r["p_true_census"], r["p_true_end"],
                     r["p_true_end"] - r["p_true_census"]))

    # ---- 6. simulator's own accounting -----------------------------------
    print()
    print("=" * 78)
    print("SIMULATOR group_stats (whole run, census + dummy phase 2)")
    print("=" * 78)
    for k, v in sorted(sim.group_stats.items()):
        print("  %-20s %s" % (k, v))

    if args.json:
        os.makedirs(os.path.dirname(os.path.abspath(args.json)), exist_ok=True)
        with open(args.json, "w", encoding="utf-8") as f:
            json.dump({"census_len": census_len, "budget": sim.budget,
                       "group": group, "rows": rows,
                       "group_stats": sim.group_stats}, f, indent=2, sort_keys=True)
        print()
        print("wrote %s" % args.json)

    ok = (total_census == census_len)
    return 0 if ok else 1


def main():
    ap = argparse.ArgumentParser(
        description="Validate the phase-1 census against hidden ground truth.")
    ap.add_argument("--config", default=os.path.join("config", "run.json"))
    ap.add_argument("--budget", type=int, default=None,
                    help="override the config budget (try 960 / 2880 / 11520)")
    ap.add_argument("--json", default=None, help="also write the full table here")
    ap.add_argument("--table", action="store_true", help="print every task")
    args = ap.parse_args()
    raise SystemExit(report(args))


if __name__ == "__main__":
    main()
