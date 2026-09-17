---
company: Mercor
role: Research Engineer, Post Training
round: screen
date: 2026-09-09
interviewer_role: Hiring Manager (Eng), James Moore
source: debrief
input_source: recall
tracker: 32
---

Reconstructed from Shayan's recall on 2026-09-10 (no recording; AI notetaker was on the invite, transcript not in hand). Wording is paraphrase unless quoted.

## Q1
**Interviewer:** I've looked at your background, but I want to hear it in your words.
<!-- competency: narrative, self-presentation -->
**Candidate:** Engineering at McMaster, master's at UofT. Currently at BMO's AI Centre of Excellence: agent evaluations for a tool serving $200B+ AUM; caught it systematically biased toward downplaying investment risk; building an agentic data layer to replace workflows in the bank; now creating RL environments for financial agents. Part-time at Merlyn Labs, a research collective started with friends: Stanford BEHAVIOR Challenge, 8th place, training VLAs on household tasks in OmniGibson; then calibrating π0.5 baselines on benchmarks and doing RL on top; more recently game environments for agents, Settlers of Catan with the action space expanded to negotiation, saving trajectories for later retraining. Through-line: I find out how systems break, build the tests to catch it, and create the fixes.

## Q2
**Interviewer:** (after describing the team's work) What is GRPO? How does it differ from other methods?
<!-- competency: rl-fundamentals, post-training -->
**Candidate:** PPO, the classic one, is based on a bunch of models, one being a critic model; the critic is used to verify the outputs and give the reward. GRPO gets rid of the critic and instead takes the outputs of the model over a bunch of samples, eight or sixteen, averages those and uses that to update the tokens. (Then a short exchange on trade-offs, no specifics recalled.)

## Q3
**Interviewer:** One of the things we do is figure out how to train things. Imagine you have some model and some thing you need it to do, call it Humanity's Last Exam. How do you go about designing an environment for it?
<!-- competency: environment-design, rlvr, problem-structuring -->
**Candidate:** It's vague, so I'll make assumptions: the model is pretrained. First and foremost I focus on how we model reward. I'd look at what Humanity's Last Exam is, what the criteria for success are, how to model and test for that. Once we have that, build the plumbing, set up an environment, choose the method. My ideal workflow is to throw the model into some simple environment with GRPO and run it to test the harness, see how it works and how it breaks. (Candidate's own note: fumbled, no clear answer.)

## Q4
**Interviewer:** One of the interesting things is masking. Say you have these APIs we call for RL: the model calls tools, the tools output results. How would you go about masking certain parts of outputs for RL?
<!-- competency: multi-turn-rl, loss-masking, reward-design -->
**Candidate:** (First: I don't know those APIs; RL is newer in my current work. Interviewer: sure, just to give you an idea, and framed the question.) First and most obviously, mask tool outputs. You don't need those; you want to know what the model did, not what the tools output. I'd also be interested in masking parts of the model's final output, what it said rather than what it did.
**Interviewer:** What do you mean by that?
**Candidate:** Say the task is to output a PDF, a defined-benefit plan form. It outputs the document, and it might also output other text: here is what this is, here is what I did, maybe reasoning traces. Those additional answers might be the model trying to game the verifier. Spitballing, but I'd be interested in masking that out too because I care about the actual end result, what it gave you, not what it says it gave you. Related to the scattergun thing where models say a lot to hedge their bets.

## Q5
**Interviewer:** Any questions for me?
<!-- competency: candidate-questions -->
**Candidate:** Tell me about your journey, how you got here. What's your day to day, what do you work on, what's interesting to you? (Interviewer answered; details not recalled. Interviewer had to jump.)
