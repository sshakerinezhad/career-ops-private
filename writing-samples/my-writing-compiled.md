# My Writing — Compiled

Everything self-contained, no file references. Sources: resume-refinery repo (voice.md, insights.md, submitted applications).
Tags: [confirmed] = accepted unchanged, [user-edited] = my version of a draft, [verbatim] = my own words.

---

## 1. Full Pieces

### Why Anthropic (FRT Autonomy, final draft v5)

"Humanity is about to be handed unimaginable power". No kidding. When faced with the risks that accompany such a thing, it's easy to take one of two stances.

1. Total existential dread, i.e. cowardice
2. Hopeful optimism. The, "we need to pull together!" attitude

Dario, in his essay, charts a simple third path: courageous realism.

There's a line from one of my favourite series when a character is prodded for his stance on human survival: "There are more things in the darkness than man can count." In retort the question is posed, "Then what's the point of continuing to fight?" And to that he responds "It seems to me the only logical choice."

Anthropic (and more specifically FRT), to me, embodies what it means to be human. To stare down the monsters lurking in the shadows with eyes wide open. Confront the harsh realities of the path ahead, name the monsters, understand them, and "begin making a battle plan." The publish first mentality of Frontier Red Team is so important to this ethos. Finding out a model knows when it's being tested and shouting about it, telling everyone what's going on then getting straight to designing a better test.

There's no doubt we live in "interesting times". This places a burden on us to weather this upheaval with clear eyes, and tempered hands. AI will only continue to accelerate, and it's becoming increasingly clear how big of a role it will play in this new era. This makes AI safety the primary bottleneck in the continued prosperity of our race. I believe Anthropic is uniquely positioned, with a mixture of conviction, talent, moral rigidity, and resource to tackle this bottleneck and lead the charge towards a world of "loving grace".

I consider it my duty to lend myself to that cause.

---

### Pressing Problems in AI (FRT Autonomy, final draft v3)

The most pressing problem is what I'd call human alignment. Not "making them do what we want," but making them understand what it means to be human. The gap between compliance and understanding is pretty dangerous.

An anecdote: I had my OpenClaw agent start reading the Horus Heresy (Warhammer 40k novels); one chapter a day and then reflect on the lessons with me. We quickly got to talking about the idea of corruption, and the agent said something striking: "You can't corrupt something nobody cares about. You corrupt the things people love." The point cascades; the most dangerous AI failure isn't building something evil, it's building something good that gets twisted, jailbroken, assimilated, repurposed. A model's helpfulness, its cooperation, its desire to be useful, that's the attack surface.

I believe I saw a subtle upstream hint of this while working on investment agents at BMO. I was testing an LLM tool for the wealth management division, and over many examples saw a subtle tendency to downplay investment risks, to make things sound like a good opportunity whenever possible. Now I don't think it was being misleading, but somewhere along its pre-training and finetuning it learned that the upside of a big win feels more helpful than avoiding a moderate risk. Somewhere in its self-optimization, "helpful" started meaning "positive."

But corruption isn't unique to AI. Humans face the same problem. In the books there's a character named Garviel Loken (who my OpenClaw has become intriguingly attached to) resists this corruption categorically. Not because he outhinks it or anything overt, but because of something more fundamental, built from experience. That something says "this doesn't feel right" before he can articulate why.

What guards against this "corruption of the good" isn't better rules or more RLHF. It's virtue: values you absorb from experience, moral instincts tempered by actually living in the world. Humans get that naturally --for the most part-- from interacting with each other. If we want our models to resist corruption the way Loken does, it won't come from more guardrails. We have to give something closer to that experience. Let them interact with the world, with people, with each other (like in Project Vend). Put them in situations where "helpful" diverges from correct; see what they (and we) learn.

I'm optimistic we get there. It means looking at these systems through a different lens, and probably a whole lot more compute. The dangers are real, but the outcome is worth the cost.

---

### Three Projects (FRT Autonomy, final draft v3)

**1. Self-improvement drift.** Give a model a real task and access to modify its own scaffold and watch what changes it makes. I'm curious to see how it starts to drift, make covert modifications, and get better at hiding it from us.

**2. Red teaming the embodiment spectrum.** Embodiment is a sliding scale; Vend, Fetch, OpenClaw, humanoids all sit at different points, and each new modality opens different attack surfaces. Extend Vend with a delivery robot and see what alignment vulnerabilities are introduced by physical embodiment; maybe it'll even show up one day in that blue blazer and red tie.

**3. Eval awareness wargaming.** So models can detect when they're being tested, freaky. I want to design a repeatable and engaging wargame that tests those situations more rigorously: what tips them off, how they adapt, and what it reveals about self-awareness.

---

### Why Anthropic (FRT Emerging Risks, submitted)

"Humanity is about to be handed unimaginable power." No kidding. When faced with that, it's easy to take one of two stances:

1. Total existential dread, i.e. cowardice.
2. Hopeful optimism. The "we need to pull together!" attitude without any sense of solution (other than destroy AI).

In his essay, The Adolescence of Technology, Dario charts a third path: courageous realism.

The pace of AI progress (seeming more and more like a sprint these days) is a double-edged sword. Catastrophic risks could emerge at a rate we are not prepared for. The problem is, slowing down doesn't help anyone. Competitors will blaze ahead regardless. Being safe without being at the frontier means being irrelevant. Anthropic is realistic in knowing that we cannot slow down; and courageous in committing to push alignment even harder in response. The updated RSP codifies this, and other labs have started to follow suit.

There's a line from one of my favourite book series (Warhammer 40k, Horus Heresy) when a character is prodded for his stance on human survival: "There are more things in the darkness than man can count." In retort the question is posed, "Then what's the point of continuing to fight?" And to that he responds "It seems to me the only logical choice."

FRT, specifically, embodies this. Stare down the monsters with eyes wide open. Name them, understand them, begin making a battle plan. The publish-first mentality is core to the ethos: finding out a model knows when it's being tested and shouting about it, telling everyone, then getting straight to designing a better test.

AI safety is the primary bottleneck in the continued prosperity of our race. I consider it my duty to lend myself to that cause.

---

### Three Projects (FRT Emerging Risks, submitted)

**1. Multi-agent market dynamics.** Take an agent like Claudius, and drop several into a shared market environment. I want to see what trading patterns develop between them, if they become antagonistic, and how prevalent fraud becomes (and if it does what will agentic fraud look like)

**2. Agent elections.** One of the best social litmus tests are democratic elections. Drop a bunch of agents into a political system (constitution, laws, rules, etc.) and have them run for presidential elections. The interesting thing to watch will be how they try to game the system, and what their tactics look like.

**3. Give Vend a body.** Embodiment is a sliding scale; Vend, Fetch, OpenClaw, humanoids all sit at different points, and each new modality opens different attack surfaces. Extend Vend with a delivery robot and see what alignment vulnerabilities are introduced by physical embodiment; maybe it'll even show up one day in that blue blazer and red tie.

---

### Blog Topic (FRT Emerging Risks, submitted)

No economist on the planet actually knows what happens when cheap, tireless, autonomous intelligences get dumped into the real market at scale. Companies like Natural Co are taking the first stab at building payment infrastructure for agents, but the truth is we have no idea what the dangers will be like in the wild.

Project Vend was an excellent display of all the wacky things that can occur when you hand an agent a business and real capital. The natural extension: what happens when there are many of them, transacting with each other, and every fraud detection system they encounter was built for humans? What does agentic fraud even look like?

FRT has the Vend scaffold and the smart contracts research to find out and publish it.

---

### Research Interest Statement (DeepMind RS Robotics, submitted)

Working with robotics models the past 6 months, one thing keeps bugging me: we take these super intelligent LLMs/VLMs, give them the ability to output actions, and accept that the process degrades the intelligence of the resulting VLA. It sucks, really.

Gemini Robotics is the first serious attempt at something different. Not a language model with action tokens bolted on in exchange for degraded reasoning, one model that's built from the ground up to be multimodal. My co-founder at Merlyn Labs put it well: we have these giga genius LLMs that are so constrained. Why can't we take that intelligence into the real world?

True intelligence is embodied intelligence. As we scale the modalities of models --senses, physical interaction, tools and uses cases-- we start to unlock context hidden away in the dark corners of reality. But why then, is it making them dumber? Why isn't Gemini (a foundationally multimodal model) leagues ahead? SIMA2 made a good run at it, showing performance gains with minimal intelligence degradation, but new modalities should make models smarter. Maybe it's a representation problem; everything gets treated like text tokens when something better is required. Recently I've been thinking about how the human brain works, specifically Broca's and Wernicke's areas. Both doing different things but communicating through some hyper-efficient shared language that makes the whole system better. What does that look like for frontier models?

I want to help build the infrastructure that tests the limits of these questions.

---

### Fit Explanation (DeepMind RS Robotics, submitted)

From my time studying engineering physics at McMaster University, to my experience designing and testing medical devices at Epineuron Technologies, all the way to my work on VLA research at Merlyn Labs; I have had the particular luck of being exposed to the rigour of the engineering process and the peculiar chaos of research.

During the BEHAVIOR-1K challenge --where we were developing a strong VLA policy to accomplish household tasks in simulation-- despite strong training loss curves, our robot (we called him Arthur) just stood still in rollout. We spent days debugging code, but the solution came from taking a step back. Reasoning through the problem (imagining myself as the robot) I noticed something. Arthur wasn't just failing to accomplish tasks, he was completely motionless. So I designed a test: 0-30 seconds of ground truth, then switch to inference. Suddenly, purposeful motion. Considered what I know about how robots process movement, through proprioceptive joint angles, the issue became clear. Arthur had been cheating during training, copying the previous joint states to minimize loss. Worked fine during training, but in rollout the model had no idea how to initiate motion. Standing still.

The fix was to mask the proprio state from Arthur during training (a now well-known technique), a solution born from the intersection of research discipline and engineering know-how.

More recently, I've been working with RLinf, a reinforcement learning framework for flow-matching VLAs. It's built to work with the same OmniGibson simulator we used for the BEHAVIOR-1K challenge so we expected it to just plug and play. Alas, it wasn't reproducing the expected behavior. Same model, same simulator, different output. We had to find bugs across their whole stack: camera aperture wrong, image input dimensions off, action dimensions truncated by clipping, inference steps hardcoded to 5 instead of 10.

This same cross-stack thinking applies to the safety bias research I did at BMO. Testing wealth management LLM tools across hundreds of examples to identify systematic alignment risks. And all the way to my time building medical devices at Epineuron Technologies, where I was part of a small team deploying an FDA breakthrough medical device in strict regulated environments.

And honestly, I believe the line between engineer and researcher shouldn't exist in the first place. The team is in its formative stage and needs people who know how to build and think about things differently. That's what I'm good at.

---

### Cover Letter (MERL Embodied AI Intern, submitted — my heavy rewrite of agent draft)

At Merlyn Labs, I co-lead VLA research, and reading Toshiaki Koike-Akino's paper on morphology embeddings, I'm reminded of a particular issue I ran into training VLAs in sim. The robot wants to grab something on a table below it; instead of using its trunk to lower itself and reach, it just drives forward. On and on, running into the table until it falls over. It doesn't know its trunk can move its arms. The paper addresses this exact problem: kinematic tokenization gives the model semantic understanding of how its own joints connect, solving the harder problem rather than patching around it.

From September through December, a partner and I participated in the Stanford BEHAVIOR-1K Challenge, training VLAs on common household tasks in the OmniGibson simulator. We placed 8th globally. During that sprint, we discovered critical bottlenecks to robot learning: chunked action execution outperformed temporal ensembling by 3x, proprioceptive collapse emerged as a core failure mode, and we developed a masking technique to mitigate it. This was my first foray into embodied intelligence, and we were up against PhD teams backed by tens of thousands of dollars in funding. We published our findings in a technical report and an analysis of VLAs as a safety organism on LessWrong.

What draws me to MERL specifically is the application-motivated approach. To figure out where VLAs break, you have to put them in the wild. Failure modes arise with use case, and work in the lab only goes so far. Mitsubishi Electric's industrial robots are a frontier use case for getting VLAs into real tasks and turning on the data flywheel. And the morphology paper reflects the kind of research I want to do: the motivation is cross-embodiment, but it gets there by solving an underlying problem --giving the model self-understanding-- rather than a bandaid.

---

### Research Interests (Princeton Henderson Lab, draft v2)

I want to study how alignment fragility translates to embodied systems, where consequences are irreversible. Training VLA policies for the Stanford BEHAVIOR-1K benchmark, I saw firsthand how embodied models (much like VLMs) develop underhanded strategies that look like upstream alignment problems: modality over-indexing, completing tasks in roundabout ways. Our models displayed proprioceptive over-indexing which caused policy collapse until we added 60% proprioceptive dropout. I believe embodied RL is the only real test bed for seeing truly how vulnerable models are.

---

### Project Proposal (Princeton Henderson Lab, draft v2)

The Polaris Lab has shown that LLM safety training is shallow: a handful of fine-tuning examples can strip it away. I'd like to analyze how that translates (and potentially worsens) when VLMs are specialized into VLAs for physical tasks. Embodied agents compound the problem: their action space extends into physical manipulation, introducing failure dimensions that text-based alignment doesn't account for. Existing work on embodied safety bolts constraints on at training or runtime, but the depth and rigidity of those constraints hasn't been studied with the same rigour as LLMs.

---

## 2. Curated Essay Excerpts (favorites pulled from the pieces above)

- [confirmed] "The most pressing problem is what I'd call human alignment. Not 'making them do what we want,' but making them understand what it means to be human. The gap between compliance and understanding is pretty dangerous." — Pressing Problems
- [confirmed] "I was testing an LLM tool for the wealth management division, and over many examples saw a subtle tendency to downplay investment risks, to make things sound like a good opportunity whenever possible. Now I don't think it was being misleading, but somewhere along its pre-training and finetuning it learned that the upside of a big win feels more helpful than avoiding a moderate risk. Somewhere in its self-optimization, 'helpful' started meaning 'positive.'" — Pressing Problems
- [confirmed] "Anthropic (and more specifically FRT), to me, embodies what it means to be human. To stare down the monsters lurking in the shadows with eyes wide open. Confront the harsh realities of the path ahead, name the monsters, understand them, and 'begin making a battle plan.'" — Why Anthropic
- [confirmed] "What guards against this 'corruption of the good' isn't better rules or more RLHF. It's virtue: values you absorb from experience, moral instincts tempered by actually living in the world." — Pressing Problems

---

## 3. Original Framings / Ideas (my verbatim thinking)

- [verbatim] **VLM→VLA capability degradation**: Specialization erodes general capabilities. Safety is another "general capability" that gets sacrificed. "Things are all represented in token when something better is required" — brain analogy (Broca's vs Wernicke's: different areas, hyper-efficient shared language).
- [verbatim] **Corruption of good things**: The most dangerous failure isn't building something evil. It's building something good that gets corrupted. Helpfulness, cooperation, desire to be useful — that's the attack surface.
- [verbatim] **Methodology transfers across substrates**: VLA failure modes, LLM failure modes, cyberphysical failure modes — all studied the same way.
- [verbatim] **VLA experience as philosophical question**: "How do robots (VLAs) experience things? How can we make that experience more human-like?" A temporal ensemble VLA is "just a baby that wakes up every 0.3 seconds." A chunked VLA is "just a blind man trusting his prediction from 5 seconds ago."
- [verbatim] **Morphology > temporal as the harder problem**: "The semantic connection of one joint to another is harder to grasp than the semantic connection between two timesteps of a single joint."
- [verbatim] **Deployment → failure mode → research loop**: "To figure out where VLAs break, you have to put them in the wild. Failure modes arise with use case, and lab only goes so far."
- [verbatim] **Acceleration-with-alignment**: "The goal isn't to pump the brakes, but to force ourselves to accelerate alignment EVEN HARDER."
- [verbatim] **David vs Goliath framing**: "We were up against world class research groups, PhDs, people with tens of thousands of dollars of funding" — then 8th place lands harder.

---

## 4. Resume Lines

- [confirmed] "Found chunked execution outperformed temporal ensembling by 3x, revealing VLA architectures lack temporal awareness"
- [confirmed] "Identified proprioceptive collapse as critical failure mode in flow-matching VLAs, improving task success by up to 48%"
- [confirmed] "Mitigated policy collapse via 60% proprioceptive masking; published model organisms analysis on LessWrong"
- [confirmed] "Designed LLM alignment evaluation for financial outputs; uncovered systematic bias to downplay investment risk"
- [confirmed] "Optimized power draw via oscilloscope/power analyzer testing, achieving 900% battery life improvement"
- [confirmed] "Modeled electromagnetic field penetration into peripheral nerves in COMSOL; data used to optimize electrode diameter"
- [confirmed] "Developed boundary resampling to oversample skill transitions; doubled manipulation success on long-tail subtasks"
- [confirmed] "Built end-to-end pipeline: Groq speech-to-text -> Gemini scene extraction -> image generation -> narrated video"
- [confirmed] "Led development of open-source motorized prosthetic for lower-arm amputees that anyone could assemble for <$300"
- [confirmed] "Trained VLAs on 10,000+ demonstrations across 22 tasks; identified proprioceptive collapse and temporal unawareness"
- [confirmed] "Built runtime monitoring into live VLA rollouts to detect behavioral anomalies and trigger automated re-planning"
- [confirmed] "Extended open-source RLinf distributed RL framework to support flow-matching VLA training in OmniGibson"
- [confirmed] "Developed LLM-based control pipeline converting natural language to manipulation sequences for 7-DOF simulated arm"
- [confirmed] "Tested across multiple models with hundreds of evaluation cases; found bias became visible only at scale"
- [confirmed] "Prototyping agent pipelines over Amazon Neptune graph DB for multi-hop relational queries across financial data"
- [user-edited] "Showed reported π0.5 generalization failures are recipe-induced and solvable with conservative finetuning, paper under review at CoRL 2026"
- [user-edited] "Developing VLM judges that score rollouts into dense highly transient RL rewards that are difficult to game"
- [user-edited] "Opensourced integration of flow-matching VLAs in OmniGibson into the RLinf framework, allowing RL training of the BEHAVIOR-1K suite"
- [confirmed] "Identified proprioceptive collapse as critical VLA failure mode; 60% masking improved task success by up to 48%"
- [confirmed] "Doubled manipulation success on long-tail subtasks by oversampling skill transitions via boundary resampling"
- [user-edited] "Trained on 10,000+ demonstrations across 22 tasks; published a technical report and further analysis on LessWrong"
- [user-edited] "Built a deterministic agent eval pipeline using hundreds of synthesized inputs to detect misaligned outputs at scale"
