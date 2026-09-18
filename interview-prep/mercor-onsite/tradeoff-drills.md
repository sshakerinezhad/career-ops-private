# Trade-off drills (plan T7)

Spoken, 2 minutes each, the routine every time: objective, constraint, two options, failure mode of each, the cheapest experiment that decides it. Attempt before reading a key. Record it. Keys: `tradeoff-drills-key.md`, opened only after the recording; score 0 to 2 on its six items.

Mercor-shaped:
1. Synchronous vs fully asynchronous RL for 100-turn agent tasks.
2. Value model or group baseline for 100-turn tasks.
3. token_mean vs prompt_mean loss aggregation on 2k to 128k-token trajectories.
4. Keep or drop prompts where all 8 rollouts fail.
5. Hard zero vs soft penalty for overlong rollouts.
6. More rollouts per prompt vs more prompts, fixed budget.
7. LLM judge vs programmatic verifier when both are possible.
8. SFT on a stronger model's trajectories vs RL on your own rollouts.
9. A 2x compute budget: rollouts or training?
10. Grading a task whose artifact is a document.

Outside the priorities:
11. DPO vs online RL for a preference dataset.
12. Process reward model vs outcome reward for a 40-step task.
13. LoRA vs full fine-tune under a memory cap.
14. Offline logged trajectories vs on-policy rollouts.
15. Training compute vs test-time compute at a fixed budget.
