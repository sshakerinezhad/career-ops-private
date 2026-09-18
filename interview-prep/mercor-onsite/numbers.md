# Numbers to have cold (plan T11), and the questions for Charlie (T12)

Cover the right column, recite, score. 100% on two days.

| Cue | Number |
|---|---|
| 397B run | Pass@1 16.11 → 27.29 on 480 held-out APEX-Agents tasks; 1,928 training tasks |
| 35B harness fixes, zero training | mean reward 22.74 → 28.69 (not Pass@1; the 35B's Pass@1 went 13.96 → 22.71 after RL) |
| Post-training total lift | 10 to 12 points, both models |
| Best single knob | prompt_mean over token_mean, +3.9; nudge +3.0; OLF cost 1.5; DPPO vs GLM-5 loss within noise, DPPO more and shorter turns (21 → 32; 834 → 588 tokens per turn) |
| Health check | trainer vs inference logprob difference below 0.03 |
| Overfit subset | 32 tasks, non-zero reward variance, batch 32, 8 samples per prompt, synchronous |
| Concurrency | 550 (35B), 300 (397B); staleness bound (max_staleness_steps + 1) × mini_batch × n_samples = 1,024; GPU split 12:4 and 12:8 |
| Terminal-Bench 2.1, k = 3 | 397B 50.6 → 55.4; 35B 44.6 → 50.9; paired gains +4.9 and +6.4, both CIs exclude 0 |
| APEX-Agents 1.1 | 240 tasks, 80 per domain, 31 worlds; rubrics 1 to 11 criteria, mean 3.98; judge calibrated on 1,407 items, 354 held out; FN 5.3 → 8.0% to catch scattergunning; Fable 5.1 Pass@1 68.6 |
| APEX-Accounting | 160 held-out tasks; 13.7 criteria per task; judge 97.1% accuracy vs three-expert majority (Fleiss κ 0.857); Mean Criteria@3 |
| Take-home | 120 tasks, 5 skills, 5,760 rollouts, groups of 8; E[spread] = (7/8)p(1−p); clean +0.031, 16 of 16; poisoned +0.041, 12 of 16, three banks lose 5 to 12 points |
| Your own | $200B+ AUM · hundreds of synthesized inputs · nearly 30,000 clients in 3 hours · 8th of BEHAVIOR-1K, 22 of 50 trained, 10,000+ demos · 60% masked → up to +48% · 3x chunking · 96 → 21 → 42 (LoRA 15 to 21; video prior 42 → 35; too conservative 26) · batch 64, LR 1e-5 |

## Questions for Charlie, pick two

1. How often does the logprob check catch something now that the vLLM bug is fixed?
2. What do the 480 held-out tasks show that the 1,928 training tasks do not?
3. Is step-wise training or TITO the default for new harnesses, and why?
4. What would you run next if compute were free?
