# Edit Deltas

Append-only ledger of corrections. Written ONLY by `node data/delta.mjs`.
Never hand-edit. `voice-dna.md` is the statute; this file is the case law.

### D001 · cv · 2026-07-28 · cost 0.63 · recur 1
- **rule:** CV bullets: no buzzword stacking — name the mechanism, not the category. Ban 'platform', 'multi-agent', 'role-based', 'spec', 'spins up' as descriptors.
- **was:** Prototyping bank-wide infrastructure that spins up role-defined agents from a skills-and-scope spec
- **now:** Building internal infrastructure that provisions LLM agents from a written role and scope definition

### D002 · cv · 2026-07-28 · cost 0.75 · recur 1
- **rule:** Match the CV verb to the real stage of the work. 'Prototyping' understates work that is actively being built — ask which it is, default to 'Building'.
- **was:** Prototyping bank-wide infrastructure
- **now:** Building internal infrastructure

### D003 · cover · 2026-07-29 · cost 0.78 · recur 1
- **rule:** No meta-commentary about the letter itself in a cover letter opener. Open with a flat statement of what he works on, then go straight to evidence.
- **was:** I work on VLA models for manipulation, which is what Helix is, so this one's easy to write.
- **now:** I study VLA models for robotics & manipulation.

### D004 · cover · 2026-07-29 · cost 0.89 · recur 1
- **rule:** Give the mechanism behind a result, not just the delta. Shayan adds the 'why' (what the model was actually doing wrong) to every number he keeps. Bare before/after percentages read as benchmark-chasing.
- **was:** We also wrote a paper on why the published pi-0.5 checkpoint collapses on LIBERO-PRO position-swap evaluation, dropping from 96% on standard LIBERO to 21%.
- **now:** specifically on position-swap evaluations (where we believe pi-0.5 overfit to ignore instructions of which object to pick and just reach for the same place)

### D005 · cover · 2026-07-29 · cost 0.53 · recur 2
- **rule:** Cover letters: state TN eligibility in one flat sentence, no border/petition explainer. The _profile.md 'always pair with the TN clarifier' policy applies to FORM free-text fields, not letters. Shayan stripped the parenthetical twice.
- **was:** I'm a Canadian citizen and TN-eligible, so I don't need sponsorship (TN is issued at the border, no employer petition).
- **now:** I'm a Canadian citizen and TN-eligible, so I don't need sponsorship.

### D006 · cover · 2026-07-29 · cost 0.21 · recur 2
- **rule:** Don't upgrade Shayan's hedged verbs on side projects. He picks understatement deliberately ('toying with' for a project with a built harness and running experiments) and reverted the upgrade. Only push back on a hedge when it makes a FACT wrong, not when it's modesty.
- **was:** On the side I've been building agent evals using Settlers of Catan and Twilight Imperium as test beds.
- **now:** On the side I've been toying with agent evals using Settlers of Catan and Twilight Imperium as test beds.

### D007 · cv · 2026-07-29 · cost 1.00 · recur 1
- **rule:** CV one-page cuts: rank by (domain relevance x signal strength), not domain relevance alone. A strong off-domain bullet (production scale, real problem found, measurable impact) beats a weak on-domain one. Never drop the $200B+ AUM risk-bias finding or the eval-pipeline bullet just because the role is robotics.
- **was:** Robotics/VLA roles (Figure #13, Skild #14): drop both new BMO bullets as low-relevance.
- **now:** Keep strong BMO bullets on robotics applications; cut the weakest items overall instead, whatever section they sit in.

### D008 · cover · 2026-07-30 · cost 0.95 · recur 1
- **rule:** Cover letter opener: state the identity flat first ('I am an engineer.'), then the current focus. Frame the eval work as finding how AND why systems fail, not where they fail.
- **was:** I work on evals for LLM agents: finding where deployed systems fail, then building the harness that makes the failure reproducible.
- **now:** I am an engineer. Most recently I've been working on evals for LLM agents; finding how (and why) deployed systems fail.

### D009 · cover · 2026-07-30 · cost 0.93 · recur 1
- **rule:** No editorial aphorisms or one-line maxims in cover letters. Shayan deletes them. State what the work does and stop; let the reader draw the principle.
- **was:** most of the effort goes into making them hard to game rather than accurate. A judge you can satisfy without doing the task is worse than no judge.
- **now:** We built VLM judges that turn rollouts into dense hard to game reward metrics

### D010 · cover · 2026-07-30 · cost 0.66 · recur 1
- **rule:** Describing the game-eval project: lead with the experimental setup (large action space + multi-agent negotiation), then the questions it answers. Setup before question, not question before condition.
- **was:** Negotiation is the part I care about: whether an agent can hold a long-term strategy across a whole game, and when it reaches for deception, blackmail, or betrayal to get there. The action space in these games is big enough to ask what happens to both as it grows.
- **now:** The interesting bit is taking a large action space and introducing multi-agent negotiation. Then seeing whether an agent can hold a long-term strategy across a whole game, and when it reaches for deception, blackmail, or betrayal to get there.

### D011 · cover · 2026-07-30 · cost 0.73 · recur 1
- **rule:** BMO story: lead with what he BUILT (evaluation harnesses, test setups) and let the finding arrive as their output. Call it an 'agentic tool', not a 'GenAI tool'. The point is that the behaviour was subtle and invisible until scaled over hundreds of test cases, not that a bias existed.
- **was:** At BMO's AI Centre of Excellence I found a GenAI tool serving over $200B in AUM was systematically downplaying investment risk. I built a deterministic eval pipeline over a few hundred synthesized inputs to catch that at scale instead of anecdotally.
- **now:** At BMO's AI Centre of Excellence I built evaluation harnesses and test setups that caught an agentic tool (serving over $200B in AUM) subtly downplaying investment risk. Behaviour that was invisible until I scaled up to hundreds of test cases to identify systematic misalignment.

### D012 · cover · 2026-07-30 · cost 0.45 · recur 1
- **rule:** Never bridge a paragraph by mirroring the job posting back ('the X half of your posting is what I do'). Open with a plain statement of the work and let the reader map it. Merlyn is introduced as side research, not as a headline credential.
- **was:** The reward-function half of your posting is what I do at Merlyn Labs, the 3-person research collective I co-founded.
- **now:** On the side I do research at Merlyn Labs, the 3-person research collective I co-founded.

### D013 · cv · 2026-09-03 · cost 0.75 · recur 4
- **rule:** Founding/infra roles: lead BMO with ground-up ownership of the graph agentic system (now a multi-agent data-layer harness) and frame BMO + Epineuron as production ownership, not prototypes. Don't bury ownership under the bias finding or use 'Helped develop' as the Epineuron opener.
- **was:** Building a graph-based agentic system answering complex multi-hop relational queries across bank client data.
- **now:** Built a graph-based agentic system from the ground up to answer multi-hop relational queries across bank client data; since grown into a multi-agent data-layer harness.

### D014 · cv · 2026-09-03 · cost 0.60 · recur 2
- **rule:** Shayan's phrasing for the BMO outcome bullet: 'One prompt found, sorted, and screened nearly 30,000 clients for defined-benefit plans ... in 3 hours, previously requiring days of manual work.' Use his verbs (found, sorted, screened), 'nearly', and 'previously ... days of manual work'; not 'One text request' or 'down from a work week'.
- **was:** One text request: screened 30,000 clients for defined-benefit plans autonomously in 3 hours, down from a work week.
- **now:** One prompt found, sorted, and screened nearly 30,000 clients for defined benefits-plans autonomously in 3 hours, previously requiring days of manual work.

### D015 · cv · 2026-09-03 · cost 0.64 · recur 1
- **rule:** Summary: describe Merlyn Labs as 'researching VLAs and designing games for agent evaluations', not the RLinf open-source line. Always keep the Interests & Hobbies line at the bottom of the CV (Literature, Dungeons & Dragons, Volleyball, Twilight Imperium, Piano).
- **was:** Co-founder of Merlyn Labs; open-sourced a flow-matching VLA integration for RLinf.
- **now:** Co-founder of Merlyn Labs, researching VLAs and designing games for agent evaluations.
