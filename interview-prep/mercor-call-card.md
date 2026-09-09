# MERCOR · James Moore · Wed 13:00–13:20 ET · meet.google.com/gzy-xivr-vyu

**James:** research eng under Aksh, training side (SkyRL) + environments. Peer, not HR. Ask what he works on in minute 1.
**Leave him with:** (1) finds failures, builds the eval/fix, with numbers · (2) read their work, incl. APEX 1.1 from *yesterday* · (3) gap = LLM-scale RL plumbing, said plainly.
**Clock:** 0–2 pitch · 2–14 his Qs · 14–18 my Qs · 18–20 close. **Every answer ≤90s. Headline first. Stop when landed.**

---

## 0 · OPEN / CLOSE

- **Open:** "Hi James, good to meet you. Happy to start wherever you'd like."
- **Close:** "Thanks, this was useful. I'm keen. What's the next step and roughly when?"
- **Don't know:** "I don't know that. Here's what I'd check: ___."
- **BMO stop line:** "That's as far as I can go on internal detail."
- **Start date:** "2–4 weeks from offer. Canadian citizen, TN at the border, no sponsorship. Just relocation time."

---

## 1 · PITCH (90s, ~200 words)

1. **BMO AI CoE** (day): found systematic bias to **downplay investment risk** in GenAI tool, **$200B+ AUM** → built deterministic eval pipeline, **hundreds of synthesized inputs**, catches it at scale. Now: graph agent layer (**~30,000 clients screened in 3h**, was days) + RL environments for wealth agents (starting).
2. **Merlyn Labs** (night): **3 people, research collective**, nights/weekends. **8th, BEHAVIOR-1K**; found **proprioceptive collapse** (mask 60% → **up to +48%**). **LIBERO-PRO:** π0.5 **96→21** on position swap; showed **recipe-induced, NOT architectural**; conservative FFT **21→42**. Contributed **RLinf** integration (RL on BEHAVIOR). Now: **Catan** agent env, negotiation + strict rules, harness done.
3. **Epineuron** (before): FDA Breakthrough neurostim device, firmware/PCB. One sentence.
4. **Through-line (keep verbatim):** "I treat systems like games: find how they work, how they break, build the test, fix it, repeat. Puzzles. I love it."

---

## 2 · LITMUS (certain)

**Game:** model = 5 skills. 120 tasks, groups of 8, 5,760 rollouts = 720 groups. Learning ∝ **k(8−k)/64**: max at 4/8, **zero at 0/8 or 8/8**. Job: keep betting on ~50% tasks while everything gets easier.

| Call | What | Why (measured) |
|---|---|---|
| 1 Census | Epoch 1 = one group per task | Blind start; trains at uniform rate anyway |
| 2 Stale | Trust **newest** reading, decay by age, never average | p drifts **+0.12/epoch** mid-band; one reading already at noise floor (RMSE .095 vs .093) |
| 3 Bonus | Age bonus for **1 & 2 of 8 ONLY, not 0** | 0/8 tasks mostly never move (~38% of bank). First draft hit 0s; Claude caught it, I retargeted |
| 4 Skill tilt | Favor skills I've fed least (own credit tally) | Pass prob **multiplies** across skills; one weak skill caps everything. `reasoning` in 13/120 tasks. **Biggest term** |
| 5 Softmax | Weighted random, not argmax | Argmax hammers one 4/8 task → one skill hogs budget |
| Skipped | **Poison.** Wrote threat model, honest pass | 30 min short |

**Result:** 16 held-out banks (never tuned on): **+0.029** avg pass (0.874→0.903), **16/16 wins**, weakest skill **+0.058** (2× mean). Baseline wasted **52%** of rollouts on flat groups; mine **27%**.
**Score = ?** Grader computes pass prob on hidden test tasks from final 5 skills, averages. I rebuilt a stand-in test set from gymsim's band function. "Salt" = seed drawing a new bank.
**Tools:** Claude Code for implementation + sweeps. My calls: census, p(1−p), bank hard tasks, staleness. Claude's: k∈{1,2} retarget, softmax.

**Depth pulls:**
- **`_W = 0` (wake term):** re-probe parked 0/8 tasks when my tally says their skills moved (evidence, not timer). Swept 16 banks: **monotonically worse** (+.026 at 0 → +.021 at .5). Softmax already gives 47 parked tasks a few % of picks, enough. Explicit term steals from tasks good *now*. Set 0, left branch + numbers. **"Built it, measured it, it lost, turned it off, left the receipt."**
- **Poison, 30 more min:** sign-flipped credit, same size → hurts most on the 4/8 tasks I farm; **my picker is the attack surface**. Tally trusts + sign → tilt steers *away* from drained skill. Fix 1: **cap lifetime groups/task** (bounds damage; clean-bank cost = retires a task still paying). Fix 2: **quarantine** skills where tally says fed but their tasks lag. Poison frac ∈ [0, .40], **can be 0 → detector must pay for itself**. Measure with salt sweep, poison on/off.
- **Budget dependence:** 960 = +0 (census is whole run) · 2880 **+.058** · 5760 +.029 · 11520 +.010.

**NEVER say:** semaphore/backoff/retries/parallel calls (not in this code) · DeepSeek · "ran over" (submitted at 74 min) · bonus on 0/8.

---

## 3 · THE GAP: "Run RL on an LLM?"

"**Not on a language model, no.**" → RLinf integration so RL runs on BEHAVIOR; simple rejection sampling on π0.5 rollouts, **didn't go deep**, more data beat it → BMO RL envs starting, experts write rubrics (your shape) → Catan: rollouts → distill into open weights → RL, game outcome as verifier → "Litmus *is* this problem under a GRPO rule. What transfers: non-model errors to 0 first, no gain without ablation. What I'd learn: trainer/inference plumbing at scale. Your logprob-mismatch check is the kind of thing I haven't done."
**Vocab if pushed:** GRPO drops critic, advantage = (r − group mean)/std · DAPO: clip-higher, dynamic sampling, token-level loss, soft overlong · Mercor: **prompt_mean +3.9** over token_mean (2k–128k trajectories) · DPPO masks / GLM-5 truncates, within noise. **Stop where knowledge stops.**

---

## 4 · DEPTH BRANCHES

### BMO (stop line ready)
| Pull | Answer |
|---|---|
| Bias finding | GenAI tool for advisors, $200B+ AUM. Spot checks can't show "systematic." Hundreds of synthesized inputs, deterministic → quantified skew toward downplaying risk |
| Eval pipeline how | Synthesized inputs, deterministic runs, flags misaligned outputs; now runs at scale on new outputs → **stop line** |
| Graph agent layer | Orchestration harness: graph + analysis + search tools over client data, multi-hop Qs. ~30,000 clients found/sorted/screened for defined-benefit plans in 3h → **stop line** |
| RL environments | Virtual work-worlds of BMO tasks; employees/experts supply rubrics + verifiable rewards; R&D, not in workflow yet; "same shape as yours" → **stop line** |
| Agent provisioning | Agent stood up from written role + scope definition → **stop line** |
| Greeter robot | **Never mention** |

### Merlyn
| Pull | Answer |
|---|---|
| What is Merlyn | "Three of us, nights and weekends. 8th at BEHAVIOR-1K, wrote up methods, contribute to open RL infra." Never funding/company/startup |
| BEHAVIOR | Trained on **22 of 50** task types, scored on 50, **10,000+ demos**, OmniGibson. Proprio collapse: model leaned on proprioception, masking 60% → +48%. **Chunked execution beat temporal ensembling 3×**. Boundary resampling **doubled** long-tail subtasks |
| LIBERO-PRO recipe | Videos: arm went to *old* object location → memorization. FFT **batch 64, LR 1e-5** |
| "Lucky hyperparam?" | (1) **stable 8k–27k steps** (2) **matched standard LIBERO**, no trade-off (3) **bounded**: batch 16/LR 1e-6 → 26%. LoRA **15–21 at matched hparams**. Video prior **42→35**, worse |
| Paper status | "We wrote it up; rejected at CoRL; result stands." Never published/under review |
| RLinf | Contributed flow-matching VLA integration. **Did not build RLinf.** Rejection sampling only, shallow |
| LessWrong | = BEHAVIOR findings for alignment audience. **NOT** the LIBERO-PRO paper |

### Catan (your words, 09-08)
| Pull | Answer |
|---|---|
| Story, in order | Wanted agent env → Catan. Started on **Catanatron** → its bots scored moves by **peeking at hidden state** → rebuilt native engine. View = full transcript (board, every action, every message) + legal actions + negotiate action. Every action + reasoning trace saved. Games played, **no numbers yet, compute-bound** |
| Why | (a) RL env for strong agents (b) watch strategy + negotiation = agent eval / alignment |
| Train on it how | Save per turn: view, legal set, raw completion (tokens), action, message. **Step 1** rejection-sampling SFT on winners' turns (cheap). **Step 2** branch from saved states, sample continuations → preference pairs. **Step 3** RL, outcome as verifier; sparse/long-horizon, VP-delta gameable. Caveat: API models give text not tokens → open weights for post-training |
| Negotiation eval | Message log → judge scores promises kept vs broken, separate from win rate |
| TI | Much harder, in progress. Only if asked |

---

## 5 · WHY MERCOR (+ APEX 1.1, bring it up)

Their loop = probe limits → build benchmark → post-train to prove lift = my loop, smaller. **397B post:** harness fixes alone gave 35B **~6 pts before any RL** (22.7→28.7); RL 397B **16.1→27.3**; **file-diff grading much harder to overfit** = my LIBERO-PRO lesson (published number was a recipe artifact); "algorithm mattered less than data."
**APEX-Agents 1.1, Sep 8 (yesterday):** 80 tasks/domain, 3 expert audits · killed **scattergunning** (hedged multi-answers gaming grader) · judge → DeepSeek-v4-Flash · info moved from system prompt into files · **26,302 trajectories** scanned for MCP failures · new **Pass^4** consistency metric. **Say:** "Scattergunning is the same bug class as file-diff: grade a committed artifact, not narration."

---

## 6 · ASK HIM (pick 2)

1. "Harness fixes moved 35B ~6 pts before RL. How's team time split now, harness/verifier vs training loop?"
2. "Saw 1.1 yesterday. How'd you catch scattergunning: trajectory review or Pass^4 dropping? Is 'grade the artifact' a design rule for new tasks now?"
3. "How does this Post-Training req split from Benchmarking / Real Environments siblings? What's a normal week?"
- Backup (if SkyRL): "What surprised you most in de-risking before the 397B run?"

---

## 7 · DON'T

Say "published"/"under review" · say "startup" for Merlyn · greeter robot · "US-authorized" · "sort out the visa" · VLM judges depth · "50, 60, 100%" (it's **48%**) · "learning decay" (not in paper) · raise comp (if asked: "calibrating; your public reqs show $180–500K + equity, where does this sit?") · mention Charlie · fill silence · "super adaptable, always learning" · "we" for solo work.

**After (13:20):** write his Qs in his words → `/career-ops interview/debrief`.
