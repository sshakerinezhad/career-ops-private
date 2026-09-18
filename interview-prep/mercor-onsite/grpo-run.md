# The small GRPO run (plan T13)

One afternoon on a rented GPU so that reward, KL, completion length and zero-advantage groups are things you have seen in a log. Facts below were verified on 2026-09-18 against the Unsloth notebooks repo (main bce1b9d), the Unsloth RL guide, and TRL main (a98fa6a). Whether a notebook runs unmodified on the box you rent is not verified: the smoke test decides.

## Rent

- Lambda on-demand, 1x A100 40 GB (or 1x H100 80 GB): SSH plus a JupyterLab per instance, Lambda Stack preinstalled, billed per minute. Alternative: a RunPod PyTorch template (JupyterLab on port 8888). Neither page states prices; check on the day.
- Unsloth's own minimum is far below this (5 GB VRAM for models up to 1.5B; 15 GB up to 17B), so a single A100 leaves headroom for 8 generations per prompt with vLLM.

## Which notebook

- First choice: `nb/Qwen2.5_(3B)-GRPO.ipynb` from github.com/unslothai/notebooks (GSM8K, vLLM generation, `num_generations = 8`, `max_steps = 250`; header says it runs on a free Colab T4). It imports `GRPOConfig, GRPOTrainer` from TRL, so what you read afterwards is what you ran.
- Fallback: `nb/Gemma3_(1B)-GRPO.ipynb` (GSM8K, no vLLM). Second fallback: Colab free T4 with either, another day.
- The GSM8K rewards in the notebook: exact-answer correctness, integer-only answer, soft and strict format, XML tag count. The format rewards are the ones a model games; watch for it.

## The afternoon (about 3 hours)

1. 10 min: rent, open JupyterLab, pull the notebook, `pip show trl` (0.18.0 or later logs `frac_reward_zero_std`; older: compute it yourself from per-prompt rewards).
2. 15 min smoke test: run to the first training step. If the install or vLLM fights past 15 minutes, switch to the Gemma notebook; if that fights too, stop and move the run to Colab another day. Do not sink the afternoon.
3. 40 to 60 min: train. Set `max_steps` to 300 or more (Unsloth: "wait for at least 300 steps for the reward to actually increase"; about 30 minutes). If the notebook's `GRPOConfig` has `beta = 0`, set it to a small positive value for this run, otherwise `kl` is not computed or logged and no reference model is loaded. Keep a copy of the logged metrics (CSV or screenshots every 25 steps).
4. While it trains, watch, by TRL's names: `reward` and `rewards/<function>/mean` (which reward moves first: usually format, then correctness); `kl`; `completions/mean_length` and `completions/clipped_ratio` (length growing, hitting the cap); `frac_reward_zero_std` (groups with no signal); `clip_ratio/high_mean` and `low_mean` (how often the PPO clip binds); `entropy`.
5. 45 min: read `trl/trainer/grpo_trainer.py` at these places and write one sentence each, in your words, tied to the derivation deck (`theory-syllabus.md` Part 1):
   - Advantages, `_generate_and_score_completions` L2812 to L2834: group mean, group std, `advantages = rewards - mean`, divided by `std + 1e-4` unless `scale_rewards = "none"`. Deck item 4 (GRPO advantage) and the Dr. GRPO std critique.
   - L2835 and L2877: `is_std_zero`, logged as `frac_reward_zero_std`. Deck item 5 (E[k(G−k)]) and DAPO dynamic sampling; your take-home's flat groups.
   - Loss, `_compute_loss` L3134 to L3171: `log_ratio`, `coef_1 = exp`, `coef_2 = clamp(1 − epsilon_low, 1 + epsilon_high)`, `−min(...)`. Deck item 2 (PPO clip); `epsilon_high` is DAPO's clip-higher (default equals `epsilon` = 0.2; DAPO recommends 0.28).
   - KL, L3151 to L3153 and L3201: `exp(ref − logp) − (ref − logp) − 1`, added with `beta`. Deck item 4 (the k3 estimator).
   - Aggregation, L3205 to L3225, `loss_type`: `grpo` averages per sequence then across sequences; `bnpo` averages over all tokens in the local batch; `dr_grpo` divides by batch × `max_completion_length`; `dapo` (the default) divides by the global token count. Deck item 6: this is Mercor's prompt_mean vs token_mean knob in code.
6. Optional, 30 min: a second run with one knob changed (`loss_type = "grpo"` vs `"bnpo"`, or `epsilon_high = 0.28` vs 0.2) and the same plots side by side.

## What you write down before leaving the box

- The four curves with step numbers: reward, kl, mean completion length, frac_reward_zero_std. Plus clip_ratio and any reward hack (format reward up, correctness flat).
- Five sentences of what happened, one per curve plus one on the hack or its absence.
- The 60-second account for the room, said as what it is: "I ran GRPO with TRL through Unsloth on Qwen2.5-3B, GSM8K, 8 generations per prompt, about 300 steps on one A100. I watched reward, KL, completion length and the fraction of zero-std groups. Here is what moved and when, and here is the line of the trainer that does the thing I was describing." One small run, not industry post-training.

## Sources

github.com/unslothai/notebooks README, section "GRPO & Reinforcement Learning Notebooks"; unsloth.ai/docs RL guide and the GRPO tutorial; github.com/huggingface/trl `trl/trainer/grpo_trainer.py`, `trl/trainer/grpo_config.py`, `docs/source/grpo_trainer.md` ("Logged metrics"); docs.lambda.ai on-demand and billing pages; docs.runpod.io pod connection page.
