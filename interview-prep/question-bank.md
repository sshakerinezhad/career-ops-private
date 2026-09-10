# Question Bank

Real questions from real rounds, with honest status. Maintained by `interview/debrief`; read by `interview/plan` and `interview/practice`.
Status: ✅ Strong · 🟡 Solid · 🔴 Gap · ⚪ not yet asked/assessed

| # | Question (interviewer's words, as recalled) | Company · round · date | Status | Gap notes |
|---|---|---|---|---|
| 1 | "I've looked at your background, but I want to hear it in your words." | Mercor · HM screen (James Moore) · 2026-09-09 | ✅ | Structure and through-line landed. Numbers never said (30,000/3h, 60%→+48%, 21→42). Degree line must match cv.md (B.Eng Eng Physics McMaster; M.Eng AI & Robotics UofT). |
| 2 | "What is GRPO? How does it differ from other methods?" | Mercor · HM screen · 2026-09-09 | 🟡 | Said the critic "gives the reward": wrong, the critic estimates value; reward comes from RM/verifier and GRPO keeps it. Mechanism stated as "average outputs"; should be group-normalized advantage per sample applied per token, clipped ratio, KL in loss. Did not raise prompt_mean vs token_mean (Mercor's own finding). |
| 3 | "Imagine a model and a target, call it Humanity's Last Exam. How do you design an environment for it?" | Mercor · HM screen · 2026-09-09 | 🔴 | Stayed abstract ("model the reward first, then plumbing"). Missed: HLE is verifiable → RLVR; hard parts are prompt set (same shape, difficulty-filtered so groups aren't all-same), verifier (extraction, exact match/judge, hedging → 0), harness, de-risk sequence, failure modes. Full answer in prep file Q3. |
| 4 | "How would you go about masking certain parts of outputs for RL?" (multi-turn tool use) | Mercor · HM screen · 2026-09-09 | 🟡 | Tool outputs masked: correct. Then proposed masking parts of the model's own output to stop gaming: conflates loss mask (which tokens get gradient) with reward function (what gets scored). James asked "what do you mean" = confusion signal. Also admitted not knowing the RL env APIs: learn SkyRL BaseTextEnv.step before onsite. |
| 5 | (Candidate's questions) journey / day to day / what interests you | Mercor · HM screen · 2026-09-09 | 🟡 | Generic. Use the sharper ones from prep file §7 at the onsite. |
