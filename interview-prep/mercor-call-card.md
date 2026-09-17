# MERCOR · James Moore · 13:00–13:20 ET · meet.google.com/gzy-xivr-vyu

James = research eng under Aksh, SkyRL training + environments. Peer. Ask what he works on, minute 1.
**Clock:** 0–2 pitch · 2–14 his Qs · 14–18 my Qs · 18–20 close. **≤90s per answer. Headline first. Stop.**
**Leave him with:** finds failures + builds the fix, with numbers · read their work incl. APEX 1.1 *yesterday* · gap = LLM RL plumbing, said plainly.

## 0 · LINES
- **Open:** "Hi James, good to meet you. Happy to start wherever you'd like."
- **Close:** "Thanks, this was useful. I'm keen. Next step and roughly when?"
- **Don't know:** "I don't know that. Here's what I'd check: ___." · **BMO stop:** "That's as far as I can go on internal detail."
- **Start:** "2–4 weeks from offer. Canadian citizen, TN at the border, no sponsorship."

## 1 · PITCH (90s)
1. **BMO:** bias to **downplay investment risk**, GenAI tool, **$200B+ AUM** → deterministic eval pipeline, **hundreds of synthesized inputs**. Now: graph agent layer (**30,000 clients, 3h, was days**) + RL envs for wealth agents (starting).
2. **Merlyn:** **3 people, collective, nights/weekends.** **8th BEHAVIOR-1K**; **proprioceptive collapse** (mask 60% → **+48%**). **LIBERO-PRO:** π0.5 **96→21**; **recipe-induced, NOT architectural**; conservative FFT **21→42**. **RLinf** integration. Now: **Catan** agent env.
3. **Epineuron:** FDA Breakthrough neurostim, firmware/PCB. One sentence.
4. **Close verbatim:** "I treat systems like games: how they work, how they break, build the test, fix, repeat. Puzzles."

## 2 · LITMUS
5 skills · 120 tasks · groups of 8 · 5,760 rollouts. Learning ∝ **k(8−k)/64**: max 4/8, **zero at 0 or 8**. Job: bet on ~50% tasks while all get easier.

| Call | Why |
|---|---|
| **Census** epoch 1, one group each | blind; trains at uniform rate anyway |
| **Newest reading, decay by age**, never average | drift **+0.12/epoch**; one group already at noise floor |
| **Bonus for 1 & 2 of 8 ONLY, not 0** | 0/8 mostly never move (~38%). Draft hit 0s; Claude caught, I retargeted |
| **Skill tilt** (own credit tally) → **biggest term** | pass prob **multiplies** across skills; weak skill caps all. `reasoning` 13/120 |
| **Softmax** not argmax | argmax hammers one 4/8 task |
| **Skipped poison** | honest pass, wrote threat model |

**Result:** 16 held-out banks: **+0.029** (0.874→0.903), **16/16**, weakest skill **+0.058**. Flat-group waste **52%→27%**. Stand-in test set rebuilt from gymsim band fn; salt = seed for a new bank.
**Tools:** Claude Code impl + sweeps. Mine: census, p(1−p), bank hard tasks, staleness. Claude's: k∈{1,2}, softmax.
- **`_W=0`:** re-probe parked 0/8 when tally says skills moved. 16 banks, **monotonically worse**. Softmax already gives parked tasks a few % picks. **"Built it, measured it, lost, turned off, left the receipt."**
- **Poison +30min:** flipped sign, same size → hits my 4/8 farm; **picker = attack surface**; tally steers *away* from drained skill. Fix 1 **cap groups/task** (cost: retires a paying task). Fix 2 **quarantine** skill where tally says fed but tasks lag. Frac ∈ [0,.4], **can be 0 → must pay for itself**. Measure: salt sweep poison on/off.
- Budget: 960 +0 · 2880 **+.058** · 5760 +.029 · 11520 +.010.
- **NEVER:** semaphore/backoff/parallel · DeepSeek · "ran over" (74 min) · bonus on 0.

## 3 · GAP "RL on an LLM?"
"**Not on a language model.**" → RLinf integration; simple rejection sampling on π0.5, **shallow** → BMO RL envs starting → Catan: rollouts → distill open weights → RL, outcome = verifier → "Litmus *is* this under a GRPO rule. Transfers: non-model errors to 0, no gain without ablation. Learn here: trainer/inference plumbing. Your logprob-mismatch check = haven't done."
**Vocab:** GRPO drops critic, adv=(r−mean)/std · DAPO: clip-higher, dynamic sampling, token loss, soft overlong · **prompt_mean +3.9** · DPPO masks/GLM-5 truncates, noise. **Stop where knowledge stops.**

## 4 · DEPTH
**BMO** · bias: advisors' tool; spot checks can't show "systematic"; synthesized inputs, deterministic → quantified skew · graph layer: harness w/ graph+analysis+search tools, multi-hop, 30k clients/3h · RL envs: virtual BMO work-worlds, experts write rubrics, R&D, "same shape as yours" · provisioning: agent from role+scope doc · → **stop line** · **never greeter robot**
**Merlyn** · BEHAVIOR: **22 of 50** trained, scored on 50, **10k demos**, OmniGibson; chunking beat ensembling **3×**; boundary resampling **doubled** long-tail · LIBERO-PRO: videos → arm to *old* location = memorization; FFT **b64, LR 1e-5** · **"lucky hparam?"** → **stable 8k–27k** · **matched std LIBERO** · **bounded** (b16/1e-6 → 26%) · LoRA **15–21 matched** · video prior **42→35** · paper: "wrote it, rejected CoRL, result stands" · RLinf: contributed integration, **didn't build it** · LessWrong = BEHAVIOR, **not** the paper
**Catan** · wanted env → Catanatron → bots **peeked hidden state** → rebuilt native engine · view = full transcript + legal actions + negotiate · every action + reasoning saved · games played, **no numbers, compute-bound** · why: RL env + negotiation eval/alignment · **train:** save view/legal/tokens/action/msg → **1** rejection-SFT on winners → **2** branch saved states → pref pairs → **3** RL, outcome verifier (VP-delta gameable) · API = text not tokens → open weights · negotiation: judge promises kept/broken · TI only if asked

## 5 · WHY MERCOR + APEX 1.1 (bring up)
Their loop = mine, smaller. **397B:** harness alone **+6 pts** on 35B (22.7→28.7) before RL; 397B **16.1→27.3**; **file-diff grading hard to overfit** = my LIBERO-PRO lesson; "algorithm < data."
**1.1, Sep 8:** 80 tasks/domain, 3 audits · killed **scattergunning** (hedged multi-answers) · judge → DeepSeek-v4-Flash · info → files not sys prompt · **26,302 trajectories** scanned · **Pass^4**. **Say:** "same bug class as file-diff: grade a committed artifact, not narration."

## 6 · ASK (pick 2)
1. "Harness alone moved 35B ~6 pts. Team time now: harness/verifier vs training loop?"
2. "1.1 yesterday: caught scattergunning via trajectory review or Pass^4 dropping? 'Grade the artifact' a design rule now?"
3. "How does Post-Training split from Benchmarking / Real Environments siblings? Normal week?"

## 7 · DON'T
"published"/"under review" · "startup" · robot · "US-authorized" · "sort out visa" · VLM judges · "50/60/100%" (**48%**) · "learning decay" · comp (if asked: "your reqs show $180–500K+equity, where's this?") · Charlie · fill silence · "adaptable/always learning" · "we" for solo
