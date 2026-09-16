# Why the plan looks like this: the evidence

Compiled 2026-09-16 from a literature pass (about 60 sources; abstracts and four full texts read). Strength: MA = meta-analysis, RCT = randomised, EXP = experiment, OBS = observational. Each row is: finding → what it changes in `mercor-onsite-plan.md`. Numbers are as reported in the cited paper; where a number could not be read, it is not given.

## What is being scored, and rehearsing against it

| Evidence | Strength | What it changes |
|---|---|---|
| Structured, rubric-scored interviews are the strongest single predictor of job performance (Sackett et al. 2022, JAP, ρ ≈ .42); Mercor's invite states the rubric for the post-training round in plain words ("explaining mechanisms rather than recalling terminology", "how you reason through an unfamiliar trade-off"). | MA | Every mock is graded against those two lines. |
| Candidates who correctly identify the scored dimensions get better ratings, controlling for cognitive ability (Melchers et al. 2009, Human Performance; Klehe et al. 2008). | EXP | §1 and §2 of the plan exist to name what each interviewer is scoring. |
| Coaching raises structured-interview scores and increases the interview's reliability rather than gaming it (Maurer et al. 2001, 2008); the active ingredient is skill training plus practice, not familiarity (Tross & Maurer 2008, N = 144). | OBS / EXP | Mocks are skill sessions with a target weakness, not run-throughs. |
| A practice opportunity with no instruction or feedback changed nothing (Roulin, Pham & Bourdage 2023, J Vocational Behavior). | EXP | Every rehearsal ends with a written debrief against the rubric. A mock without a debrief does not count. |
| interviewing.io platform data: about 2x pass rate after five or more practice interviews; only about 20% of candidates perform consistently across interviews. | OBS, self-selected | Eight rehearsals across the three formats (three practical, two post-training mocks, two algorithms mocks, six short drills). Reps are also variance reduction: aim for a stable floor. |

## Transfer: practise the way you will be tested

| Evidence | Strength | What it changes |
|---|---|---|
| Memory depends on the match between practice processing and test processing (Morris, Bransford & Franks 1977); "procedures used in training should be duplicated at test" (Healy, Kole & Bourne 2014). | EXP / review | The practical is rehearsed as 90 timed minutes plus a spoken 15-minute readout, on real data with real API calls. Algorithms are rehearsed as spoken dialogue with an interrupting partner. Post-training is rehearsed as spoken explanation under follow-ups. |
| Test-enhanced learning transfers to new formats, d = 0.40, more with elaborated feedback and application-style questions (Pan & Rickard 2018, Psych Bulletin). | MA | Worksheets are application questions with feedback, not recall lists. |
| Deliberate practice explains little variance in professions long-run (Macnamara et al. 2014, contested). | MA | The short-run design leans on transfer and retrieval, not on hours. |

## Retrieval, spacing, interleaving

| Evidence | Strength | What it changes |
|---|---|---|
| Practice testing and distributed practice are the two high-utility techniques; rereading, highlighting and summarising are low (Dunlosky et al. 2013). Testing beats restudy g = 0.50 (Rowland 2014) and g = 0.61 (Adesope et al. 2017). At one week, study-then-test 56% vs study-study 42% (Roediger & Karpicke 2006). | MA / EXP | No re-reading of the primer. Tutor sessions run in "quiz me" mode wherever knowledge already exists. |
| Optimal review gap grows with the retention interval; for a one-week test the optimal gap was about one day, for five weeks about eleven; roughly 20% of the delay for delays of a few weeks (Cepeda et al. 2008, N > 1,350; Cepeda et al. 2006 MA). | EXP / MA | Retrieval passes on days 1, 4, 8, 9 (flight) and 11, with the last gap deliberately short. |
| Interleaving problem types beats blocking, g = 0.42 overall (Brunmair & Richter 2019), 61% vs 38% one month later in classrooms (Rohrer et al. 2020). Strongest for discriminating problem types; weak for vocabulary. | MA / RCT | Algorithm drills mix archetypes within a session. Worksheets mix RL topics. |
| Attempting a problem before instruction beats instruction-first on conceptual knowledge and transfer, g = 0.36 (Sinha & Kapur 2021). Comparing two analogous cases transferred a principle for 47% vs 6% baseline (Gentner, Loewenstein & Thompson 2003). | MA / EXP | Trade-off drills are attempted aloud before any answer is read, and studied as contrasting pairs (sync vs async, value model vs group baseline, token_mean vs prompt_mean). |

## Explaining mechanisms

| Evidence | Strength | What it changes |
|---|---|---|
| Prompted self-explanation g = 0.55 (Bisra et al. 2018). People overrate their ability to explain mechanisms until they try to write the explanation (Rozenblit & Keil 2002). | MA / EXP | Day 1 of Track C is a closed-book mechanism audit; the misses become the retrieval list. |
| Actually teaching, aloud and without notes, matches retrieval practice and beats teaching with notes (Koh, Lee & Lim 2018); preparing plus teaching g = 0.56 (Kobayashi 2019); expecting to teach improves organisation of recall (Nestojko et al. 2014). | EXP / MA | Explanations are rehearsed to a person or a recorder, notes closed, three times across the window. |
| Actual learning and feeling of learning are anticorrelated under effortful methods (Deslauriers et al. 2019, PNAS). | RCT crossover | If a session feels easy and fluent, that is the signal to switch back to closed-book retrieval. |

## Reasoning aloud and performing while watched

| Evidence | Strength | What it changes |
|---|---|---|
| Thinking aloud does not lower accuracy (r = −.03), it only slows you; instructions to explain improve performance relative to silence (Fox, Ericsson & Best 2011, 94 studies). | MA | Talk through the algorithms round without fear; rehearse pacing phrases. |
| Pressure hurts working-memory tasks through distraction; being watched hurts practised skills through over-monitoring (DeCaro et al. 2011). Practising in front of a camera eliminated choking (Beilock & Carr 2001); pressure training g = 0.67, and the authors recommend pressurised training over more volume (Low et al. 2021, 14 studies, sport and police). | EXP / MA (extrapolated from sport) | Rehearsal 2 and post-training mock 2 run under real observation: camera on, observer scoring, a stated consequence. |
| Pre-performance routines g ≈ 0.64 to 0.70 in sport (Rupprecht et al. 2021). Reappraising arousal as helpful raised practice GRE-math scores, d = 0.82 in a small sample (Jamieson et al. 2010, N = 28); positive on anxiety in a later RCT (Jamieson et al. 2016). | MA (sport) / small EXP | A 60-second pre-segment routine (breath, restate the rubric, first move). One line of reappraisal. Cheap adds, not pillars. |
| Expressive writing before a test (Ramirez & Beilock 2011) failed two high-powered replications (Camerer et al. 2018). Power posing: flat p-curve. Ego depletion: null in 23 labs. | replication failures | Not used. |

## The timed practical

| Evidence | Strength | What it changes |
|---|---|---|
| Implementation intentions ("if Y, then X") raise goal attainment d = 0.65, including disengaging from failing courses of action (Gollwitzer & Sheeran 2006, 94 tests). | MA | The run-sheet carries if-then rules: "if inference is not returning by minute 25, subsample and note it"; "at minute 70, stop building and write". |
| People underestimate task time by a wide margin (Buehler et al. 1994); unpacking a task into steps and planning backward from the end state reduce the bias (Kruger & Evans 2004; Wiese et al. 2016). | EXP | The run-sheet is written backward from the readout, with time boxes, before rehearsal 1. |
| Checklists help when they change behaviour (Haynes et al. 2009), not when imposed (Urbach et al. 2014). | OBS, mixed | A 10-line pre-flight checklist that you actually run in every rehearsal. |

## The presentation

| Evidence | Strength | What it changes |
|---|---|---|
| Rated performance rises with number of out-loud rehearsals and rehearsals in front of an audience (Menzel & Carrell 1994; Smith & Frymier 2006). | OBS / EXP | The readout is rehearsed aloud at least three times, once to a live listener who asks hostile questions. |
| Signalling structure improves retention g = 0.52 and transfer g = 0.31 (Schneider et al. 2018, N = 11,499). Message-first structures are read faster and recalled better (DeAngelo & Yegiyan 2019). | MA / EXP | Five slides, headline first, verbal signposts, nothing that is not one of the three findings. |

## Sleep, travel, the day

| Evidence | Strength | What it changes |
|---|---|---|
| Sleep loss hits sustained attention (g = −0.78) and working memory hardest; reasoning accuracy least (Lim & Dinges 2010, 70 articles). Partial restriction g = −0.38 overall, cumulative (Lowe et al. 2017). Deprivation before learning costs more (g = 0.62) than after (g = 0.28) (Newbury et al. 2021). | MA | Bed by 23:00 every night. Never trade sleep for prep. Retrieval sessions before bed. Protect the last two nights. |
| Westward re-entrainment about 92 min/day vs 57 eastward (Eastman & Burgess 2009); a 3-hour westward shift completes by day 4 with light alone (Janse van Rensburg et al. 2019); melatonin not indicated under five zones westward (Herxheimer & Petrie 2002, Cochrane). | review / RCT / Cochrane | Arriving Fri 25 for Tue 29 is enough. Risk is early waking on the first two SF mornings: evening light, no bright light before about 07:00 PT, PT bedtime. No melatonin. |
| Caffeine 40 to 300 mg improves alertness and offsets sleep loss (McLellan et al. 2016). Acute moderate exercise helps executive function speed g = 0.35, accuracy g = 0.22 (Ludyga et al. 2016). | review / MA | Usual caffeine, not more, not quit. A 15 to 20 minute brisk walk ending 10 to 20 minutes before the start. |

## Notes and cheat sheets

| Evidence | Strength | What it changes |
|---|---|---|
| Crib cards did not improve exam performance; building one that could not be used produced no learning; expecting to use one fostered dependency (Dickson & Miller 2005; Dickson & Bauer 2008; Funk & Dickson 2011). Teaching with notes gave no benefit at one week (Koh et al. 2018). | EXP (one group, MCQ exams) | The one-page card is a retrieval cue list written from memory and then corrected, never open during practice, read once on Mon 28 and once on the morning. |

## Using an LLM

| Evidence | Strength | What it changes |
|---|---|---|
| Vanilla GPT access raised practice scores 48% and lowered unassisted exam scores 17%; a guarded tutor (hints, teacher-written solutions and common errors, no full answers) raised practice 127% with exam performance equal to control (Bastani et al. 2025, PNAS, about 1,000 students). A tutor engineered for active engagement beat an active-learning classroom, d ≈ 0.63 to 1.3 (Kestin et al. 2025, Sci Rep, N = 194). | RCT / RCT | The tutor skill and practice mode ask first and grade second. You never read an explanation you have not first tried to produce. |
| Students who substitute (have the LLM generate solutions) understand each topic less; those who complement (ask for explanations after attempting) understand more; self-perceived benefit exceeds actual benefit (Lehmann, Cornelius & Sting 2024, preprint). | EXP, preprint | In the practical, you read every line Cursor writes and can say why each function exists; in the mocks, the LLM poses and grades, it does not answer. |
| No peer-reviewed RCT of LLM-based interview coaching on real interview outcomes exists as of this pass. | gap | Everything here is extrapolated from tutoring and practice trials. |

## Left out on purpose

Expressive writing (failed replication), power posing (flat p-curve), ego-depletion management (null in 23 labs), self-imposed deadlines (Ariely & Wertenbroch 2002, retracted 2026-09-02), crib sheets to lean on, re-reading and summarising, melatonin for this trip, and any AI coach used as a knowledge source.

## Caveats on this file

The literature pass was done by a research agent and I checked the design-relevant rows against their sources' abstracts where reachable; effect sizes for Powell 2018 (k, N) and Valle 2012 (pooled d) were not retrievable. Sport and police pressure-training results are an extrapolation to interviews. The tutoring RCTs are school mathematics and physics, not adult professional prep.
