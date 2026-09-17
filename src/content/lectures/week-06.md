---
title: Roo bars, AEB, and their blind spots
description:
  What a safety technology actually does, under what conditions it's been
  shown to work, and what evidence would justify recommending one.
week: 6
date: 2027-03-29
teachers:
  - callum-beaumont
slides: /decks/week-06/
spec:
  - you can distinguish detection, warning, automatic braking and impact protection as four separate functions
  - you can interpret a technology's stated operating limits rather than its marketing headline
  - you can explain why a high detection rate is not the same claim as a high collision-prevention rate
  - you can identify a false positive and a false negative in a stated trial result, given the denominator
  - you can propose a fair comparison test for a safety-technology claim
related:
  - sessions/06-testing-safety-tech
  - assessments/assignment-1
---

*The Brochure Has Excellent Daytime Vision.*

Week 5 ended on an assumed number: a detection distance, fed into a
stopping-distance model, with no account of where that number would
actually come from. This week asks the question directly. Detection
distance isn't just something a driver's eyes provide — it's something a
piece of technology can claim to provide too, and that claim deserves the
same scrutiny a physics assumption gets.

## A polished claim

> "Our system detects wildlife before you do."

Read that sentence the way you'd read any other unverified claim in this
unit: what, exactly, is it saying? Which wildlife — a kangaroo at 40 metres,
or a bandicoot at 5? At what distance, and in what lighting — the glossy
daylight photo on the box, or the dusk conditions Week 5 spent an entire
lecture on? And with what consequence if the detection happens — does the
vehicle brake, or does a light on the dashboard turn on while the driver's
attention is elsewhere? A claim that answers none of these questions hasn't
told you anything you can act on yet.

## Four different functions

"Safety technology" bundles four functions that a fair evaluation has to
keep separate:

- **detection** — identifies that a possible hazard is present, using
  whatever sensor the system relies on (camera, radar, thermal, or some
  fusion of these);
- **warning** — alerts the driver that a detection has occurred, typically
  through a sound, light, or dashboard message;
- **automatic emergency braking (AEB)** — changes the vehicle's own motion
  in response to a detection, without waiting for the driver;
- **impact protection** — changes some aspect of what happens *if* a
  collision occurs, regardless of whether anything was detected beforehand.

A **roo bar** is squarely in the fourth category, and only the fourth
category. It does not detect an animal. It does not brake the vehicle. Its
presence on the front of a car changes nothing about whether a collision
happens — only, potentially, some aspects of what that collision does to
the vehicle if it occurs. Treating "roo bar fitted" and "collision risk
reduced" as the same claim conflates a structural fitting with a sensing
system, and the specification cards later in this lecture keep that
distinction explicit.

## False positives, false negatives, and a small worked example

Any detection system makes two kinds of mistake, and a vendor's headline
accuracy figure can hide either one:

- a **false negative** — an animal is present and the system fails to
  detect it;
- a **false positive** — no animal is present and the system reports one
  anyway.

Suppose a fictional system is trialled on 100 staged approaches: 40 of them
have an animal actually present near the road, and 60 do not. Of the 40
animal-present trials, the system correctly detects 34 and misses 6 — a
**false negative rate of 6/40 = 15%**. Of the 60 no-animal trials, it
correctly stays quiet on 51 and falsely alerts on 9 — a **false positive
rate of 9/60 = 15%**. Notice the denominator changes: false negative rate is
counted against animal-present trials, false positive rate against
animal-absent trials. A single combined "accuracy" figure across all 100
trials can look impressive while hiding a false negative rate that matters
far more to a driver than a false positive one does.

## Detection distance is a distance margin input, not the whole story

A stated detection or warning distance plugs directly into Week 5's
distance margin:

> Distance margin = assumed detection distance − modelled stopping distance

A vendor's specification sheet is, in effect, supplying the first term. A
120 m stated detection range at 80 km/h (Week 4/5's 71.3 m stopping
distance) gives a margin of +48.7 m — comfortable, on paper. But if that
same system's own documentation admits its range drops to 60 m once the
target is partly obscured by vegetation, the margin at that reduced range
is 60 − 71.3 = **−11.3 m**. The headline range and the fine-print range are
not the same claim, and only one of them describes the roadside scrub
Week 5 spent a scene card on.

## Detection rate is not collision-prevention rate

A system that detects 85% of animals present is not a system that prevents
85% of collisions. Between detection and prevention sit warning
comprehension time, the driver's own reaction, whether the vehicle is
capable of stopping in the distance the warning bought it, and whether the
animal stays still long enough for any of that to matter. A high detection
percentage is a claim about the sensor. A collision-prevention percentage
is a claim about the entire chain from sensor to outcome, and demonstrating
one does not demonstrate the other.

## Performance varies with conditions

The same system's real performance is not one number. It typically varies
with:

- **lighting** — daylight, dusk, full night and headlight glare are
  different sensing problems for a camera-based system, the same way
  they're different problems for a human eye;
- **animal type and posture** — a stationary, broadside kangaroo and a
  fast-moving, end-on wallaby present different signatures to most sensors;
- **obstruction** — roadside vegetation that hides an animal from a driver
  can hide it from a sensor too, though not necessarily in the same way;
- **speed** — a system validated at suburban speeds is not automatically
  validated at highway speeds, and braking physics doesn't get gentler just
  because the manufacturer didn't test that far.

A specification card that states performance under only one of these
conditions has told you about one condition.

## Designing a fair test

A test designer who wants a favourable result can get one without lying,
simply by choosing conditions: daylight only, one animal size, one speed,
a driver's-eye camera angle instead of a real approach geometry. A fairer
test states its conditions in advance, includes the conditions the vendor
would rather skip (dusk, obstruction, a range of speeds and animal types),
reports a real denominator for every rate it quotes, and is explicit about
what it did *not* test rather than letting silence imply success. Being
able to spot which of these a given test skipped is the actual skill this
week is teaching.

## Specification cards

Three fictional systems and a roo bar, each specified consistently and
honestly, including what's unknown:

**System A — optical wildlife-warning.** Detection + warning only; no
braking. Tested in daylight, clear weather, straight rural road. Stated
range: 90 m detection in daylight; the manufacturer's own documentation
notes reduced performance below approximately 20 lux (dusk and below).
Latency: 0.4 s from detection to driver warning. Supported targets: large,
stationary-to-slow-moving animals of kangaroo/deer size; not validated for
small or fast-moving animals. Known limitation: no independent low-light
validation exists for this system.

**System B — thermal wildlife-warning.** Detection + warning only; no
braking. Tested at dusk and night; performance degrades in rain and fog.
Stated range: 120 m; the vendor's own published test note states this
drops to approximately 60 m when the target is partially obscured by
vegetation. Latency: 0.6 s processing delay. Supported targets: medium and
large mammals with a distinguishable heat signature; not validated for
reptiles or animals below a stated size threshold. Known limitation:
warning only — this system does not brake the vehicle under any condition.

**System C — automatic emergency braking (radar/camera fusion).**
Detection + automatic braking. Tested against a limited target-class set
(pedestrian-shaped and vehicle-shaped targets) at speeds up to 60 km/h.
Activates on a time-to-collision threshold rather than a fixed distance.
Latency: approximately 0.3 s from detection to brake actuation, for the
tested target classes only. Supported targets: pedestrian-shaped and
vehicle-shaped targets, per the manufacturer's own test matrix. Wildlife
performance is **explicitly unverified** — no published wildlife trial
exists, and no data exists above 60 km/h.

**Roo bar — impact protection.** Does not detect, warn, or brake. A
structural fitting that may change some vehicle-damage outcomes in
specific, aligned, frontal-impact scenarios. Evidence is still needed on
compatibility across vehicle makes and models, on occupant injury outcomes,
on animal injury and mortality outcomes, and on effects on other road
users — none of these are claimed, either positively or negatively, by
fitting one.

## Where this leaves you

None of the three fictional systems above has been shown to prevent a
collision; each has been shown to do something narrower, under stated
conditions, with a stated gap in the evidence. That gap is not a reason to
dismiss the technology — it's the reason to state, precisely, what would
still need demonstrating before a recommendation could honestly go further
than "conditionally promising." "Wildlife detection" is a category. "The
kangaroo behind that bush" is a test case, and a specification sheet that
never mentions the bush hasn't addressed it.

## Where this connects to your assessment

This week's habits — checking a claim's denominator, separating detection
from prevention, reading a specification's stated limits rather than its
headline — are exactly what the [literature review and hotspot
analysis](/assessments/assignment-1/) asks you to bring to a much larger
body of published evidence. That assignment is due **12 April 2027**, and
is worth 40% of the unit; it is not due this week, and nothing in weeks 4
to 6 adds a new graded requirement to it. Weeks 4 through 6 have been
preparation — the physics, the perception, and now the technology critique
— for the review you'll write once you've had time to apply all three.

A warning delivered after the encounter is a notification, not an
intervention. The brochure has excellent daytime vision.

## Reading

Huijser, M. P., Mosler-Berger, C., Olsson, M., & Strein, M. (2015).
["Wildlife Warning Signs and Animal Detection Systems Aimed at Reducing
Wildlife-Vehicle
Collisions"](https://onlinelibrary.wiley.com/doi/abs/10.1002/9781118568170.ch24),
in *Handbook of Road Ecology* (pp. 198–212). Wiley. A review of real
detection and warning systems and the evidence for their effectiveness,
which varies considerably by system and by study — the same caution this
lecture applies to its own fictional specification cards.
