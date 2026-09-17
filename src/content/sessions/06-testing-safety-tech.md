---
title: The Vendor Demo Tribunal
description:
  Cross-examining three fictional wildlife-safety specification cards —
  classifying their real function, calculating their real performance, and
  deciding what evidence would actually justify a recommendation.
week: 6
date: 2027-03-29
teachers:
  - callum-beaumont
spec:
  - you can classify a described safety technology as detection, warning, automatic braking or impact protection
  - you can calculate a detection rate, false negative rate and false positive rate from a stated trial table, with the correct denominator for each
  - you can propose a fair test for a technology claim, or state that the evidence supplied is insufficient
related:
  - lectures/week-06
  - assessments/assignment-1
---

## Before the session

Read this week's lecture, especially the four-function taxonomy and the
three specification cards — you'll classify and calculate from them
directly. Bring a calculator. There's no submission due this week: the
literature review and hotspot analysis isn't due until 12 April 2027, well
after this session.

## The specification cards

The same three fictional systems and the roo bar from the lecture, restated
here for quick reference during the session.

| Card | Function | Stated range / distance | Latency | Supported targets | Key limitation |
| --- | --- | --- | --- | --- | --- |
| System A (optical) | detection + warning | 90 m in daylight, reduced below ~20 lux | 0.4 s | large, slow/stationary animals | no independent low-light validation |
| System B (thermal) | detection + warning | 120 m, drops to ~60 m if obscured by vegetation | 0.6 s | medium/large mammals with a heat signature | warning only, no braking |
| System C (AEB fusion) | detection + automatic braking | time-to-collision triggered, tested to 60 km/h | 0.3 s (tested classes) | pedestrian-shaped, vehicle-shaped | wildlife performance unverified, no data above 60 km/h |
| Roo bar | impact protection only | not applicable | not applicable | not applicable | compatibility and injury-outcome evidence still needed |

## The trial table

A synthetic trial result for one fictional detection system, tested on 100
staged approaches:

| System report | Animal present (40 trials) | No animal present (60 trials) |
| --- | --- | --- |
| System reported "detected" | 34 (true positives) | 9 (false positives) |
| System reported "clear" | 6 (false negatives) | 51 (true negatives) |

Every rate you calculate from this table needs its own denominator — the
40 animal-present trials, or the 60 no-animal trials — never the combined
100.

## Lighting, speed and obstruction scenarios

Four short scenarios for the specification-comparison step:

- **Scenario 1**: clear daylight, kangaroo stationary at the verge, 50 km/h.
- **Scenario 2**: dusk, kangaroo partially obscured by roadside scrub,
  80 km/h.
- **Scenario 3**: full night, kangaroo moving across the road, 100 km/h.
- **Scenario 4**: clear daylight, kangaroo stationary and unobstructed,
  90 km/h.

## In the session

This runs as one 50-minute sequence, after a short lecture recap. Work in
the same pairs as previous weeks.

1. **5 minutes — pick a claim.** Read the lecture's opening vendor claim
   again ("our system detects wildlife before you do"). Each pair writes
   one sentence naming which of the four specification cards they'd
   initially find most convincing, and why.
2. **10 minutes — classify.** For each of the three systems and the roo
   bar, write down which of the four functions (detection, warning,
   automatic braking, impact protection) it actually performs. Some cards
   perform more than one; the roo bar performs none of the first three.
3. **10 minutes — compare against scenarios.** For each of the four
   lighting/speed/obstruction scenarios above, decide which specification
   cards' stated operating conditions actually cover it, and which don't.
   Write one sentence per scenario naming the gap, if there is one.
4. **10 minutes — calculate.** From the trial table, calculate the
   detection rate, false negative rate and false positive rate, stating
   the denominator you used for each.
5. **10 minutes — propose a test, or say the evidence is insufficient.**
   For one specification card of your choice, either propose a fair test
   that would extend its stated evidence to a condition it doesn't yet
   cover, or conclude that the evidence supplied is insufficient to
   recommend it for that condition. Both are acceptable answers — you are
   not required to pick a winner if the cards don't support one.
6. **5 minutes — recommend.** Write a short recommendation for one system,
   stated with explicit conditions and caveats (for example: "recommended
   for daylight, low-speed rural roads; insufficient evidence for dusk or
   highway speeds").

## Afterwards

This session's output is the **Brochure Cross-Examination** — a one-page
pair submission. It's **formative and ungraded**: it's practice at reading
a specification honestly and calculating from a trial table, not a mark on
which system you preferred. It does not introduce any new assessed
requirement of its own.

**The Brochure Cross-Examination**

- The claim you initially found most convincing (from step 1).
- The actual function of the system behind that claim (from step 2).
- Two operating limits of that system, stated in your own words.
- One calculated performance measure from the trial table, with its
  denominator stated explicitly.
- One proposed test, or a stated conclusion of insufficient evidence
  (from step 5).
- Your conditional recommendation from step 6.

Keep your cross-examination. The same habits — checking a denominator,
separating a sensor's claim from a system's outcome, naming what a
specification doesn't cover — are exactly what the [literature review and
hotspot analysis](/assessments/assignment-1/) rewards when applied to
published research instead of a specification card. That assignment is due
12 April 2027 and worth 40% of the unit; nothing from weeks 4 to 6 changes
that.
