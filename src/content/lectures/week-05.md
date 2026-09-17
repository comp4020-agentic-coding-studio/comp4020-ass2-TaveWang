---
title: Human perception and reaction time at dusk
description:
  Why "the driver should have seen it" assumes a detection distance nobody
  measured — and how far a stopping-distance model can travel once you give
  it one.
week: 5
date: 2027-03-22
teachers:
  - priya-lindqvist
  - callum-beaumont
slides: /decks/week-05/
spec:
  - you can distinguish detection from the response that follows detection
  - you can explain how contrast, glare, vegetation and attention may affect detection
  - you can use a stated detection distance with the week 4 stopping model to calculate a distance margin
  - you can recognise why a classroom exercise cannot establish an individual's driving safety
related:
  - sessions/05-fatigue-and-perception
---

*You Cannot Brake for What You Have Not Seen.*

Week 4 built a stopping-distance model and was honest about one thing it
assumed rather than calculated: that the driver notices the animal at the
moment the clock starts. This week removes that assumption. Every metre
Week 4 calculated is still correct — it just doesn't start counting until
something upstream of the physics happens first.

## Last week's number, this week's question

At 80 km/h, Week 4's model put total stopping distance at **71.3 m**: 33.3 m
of reaction distance plus 38.0 m of braking distance, using a 1,500 kg
vehicle, 1.5 s reaction time and 6.5 m/s² deceleration. That number answers
"how far does the vehicle travel once the driver starts responding."

Now ask a different question: what if the animal only becomes detectable
**50 metres** ahead? The stopping distance hasn't changed — it still takes
71.3 m to stop. What's changed is whether 71.3 m of road was ever available
in the first place.

## Five stages, one boundary

A roadside encounter has more stages than "the driver saw it or didn't":

1. the animal is present near the road;
2. it becomes **visible** — detectable in principle, given the driver's
   position, speed and sightline;
3. the driver **recognises** it as a hazard, not a shadow or a road sign;
4. the driver **responds** — foot moves, brake pedal is pressed;
5. braking actually **begins**.

Week 4's "reaction time" is a single number standing in for stages 3 and 4
together — recognition and response, bundled. That bundling is a modelling
choice, not a hidden extra step. If you ever add a separate "recognition
delay" on top of the stated reaction time, check first whether the stated
reaction time already includes it — double-counting the same interval under
two different names is the most common way to get this calculation wrong,
the same way mixing up km/h and m/s was Week 4's.

Stage 2 — becoming visible at all — is what this week is actually about.
Everything from stage 3 onward is Week 4's territory.

## What changes when something is harder to see

Detection distance is not a fixed property of an animal; it's a joint
property of the animal, the road, the light and the driver. Four factors
worth naming separately, because popular accounts collapse them into a
single word — "dark":

- **contrast** — how much an animal's colour and shape stand out against
  what's behind it. A kangaroo against an open paddock and a kangaroo
  against roadside scrub are different detection problems at the same light
  level;
- **glare** — an oncoming headlight or a low sun doesn't just reduce
  brightness, it temporarily degrades the eye's ability to resolve anything
  near it, and recovery from that isn't instantaneous;
- **roadside vegetation** — scrub, long grass and tree lines can hide an
  animal's outline or delay the moment it's separable from its background,
  independent of how much light is available;
- **attention and fatigue** — a driver looking at a dashboard, a passenger,
  or simply tired, can fail to register something that was, in principle,
  visible the whole time.

Resist tidying these into one story. Dusk is not universally worse than full
night — headlights provide a consistent contrast baseline that changing
twilight light levels don't, and a well-lit night stretch can be easier to
read than an unlit one at dusk. Nor does every road present the same
combination of these four factors: a straight, open highway and a scrub-lined
back road are different detection problems even at identical light levels.
The honest version of this section names four separate, road-specific and
condition-specific variables — it does not rank "times of day" against each
other in general.

**A short note from Dr Beaumont.** Every detection-technology claim you'll
meet in week 6 is making an implicit promise about exactly the stage this
week names as stage 2 — becoming visible. A sensor that "detects wildlife"
is claiming to move that boundary earlier than a human driver's own eyes
would. Whether it actually does, under what conditions, and by how much, is
the entire subject of next week.

## Distance margin

Once you have a detection distance — however it was established — it plugs
directly into Week 4's model as a boundary the stopping distance either
clears or doesn't:

> Distance margin = assumed detection distance − modelled stopping distance

A **positive** margin means the simplified model leaves distance to spare
between where the animal became detectable and where the vehicle would
stop. A **negative** margin means stopping before the assumed, stationary
hazard is not possible under those particular assumptions. Neither result is
a guarantee about a real encounter: a positive margin doesn't promise a safe
outcome (the animal might move into the vehicle's path after the calculation
ends, exactly as Week 4's limitations list already warned), and a negative
margin doesn't promise a collision (a driver might still avoid it by
steering, or the animal might move away). The margin describes what a
simplified model can say about a boundary condition — nothing about what
actually happens next to a particular animal on a particular night.

## Four illustrative scenarios

These four scenarios are **invented teaching inputs**, built to isolate one
variable at a time — not measurements of real fatigue, glare or dusk
conditions, and not a claim about any real detection distance. All four use
Week 4's same 1,500 kg vehicle and 6.5 m/s² braking deceleration.

| Scenario | Speed | Detection distance | Reaction time | Reaction distance | Braking distance | Stopping distance | Distance margin |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | 60 km/h | 70 m | 1.5 s | 25.0 m | 21.4 m | 46.4 m | **+23.6 m** |
| B | 80 km/h | 70 m | 1.5 s | 33.3 m | 38.0 m | 71.3 m | **−1.3 m** |
| C | 80 km/h | 50 m | 1.5 s | 33.3 m | 38.0 m | 71.3 m | **−21.3 m** |
| D | 80 km/h | 70 m | 2.0 s | 44.4 m | 38.0 m | 82.4 m | **−12.4 m** |

<svg viewBox="-15 0 515 300" width="100%" height="300" role="img" aria-label="Bar chart of distance margin in metres for four scenarios: Scenario A plus 23.6, Scenario B minus 1.3, Scenario C minus 21.3, Scenario D minus 12.4">
  <line x1="20" y1="140" x2="480" y2="140" stroke="currentColor" stroke-width="1" opacity="0.4" />
  <text x="15" y="144" text-anchor="end" font-size="12" fill="currentColor" opacity="0.7">0 m</text>
  <rect x="40" y="45.6" width="80" height="94.4" rx="4" fill="var(--at-primary)" />
  <rect x="160" y="140" width="80" height="5.2" rx="2" fill="var(--at-primary)" />
  <rect x="280" y="140" width="80" height="85.2" rx="4" fill="var(--at-primary)" />
  <rect x="400" y="140" width="80" height="49.6" rx="4" fill="var(--at-primary)" />
  <text x="80" y="38" text-anchor="middle" font-size="14" fill="currentColor">+23.6 m</text>
  <text x="200" y="159" text-anchor="middle" font-size="14" fill="currentColor">−1.3 m</text>
  <text x="320" y="239" text-anchor="middle" font-size="14" fill="currentColor">−21.3 m</text>
  <text x="440" y="204" text-anchor="middle" font-size="14" fill="currentColor">−12.4 m</text>
  <text x="80" y="270" text-anchor="middle" font-size="14" fill="currentColor">Scenario A</text>
  <text x="200" y="270" text-anchor="middle" font-size="14" fill="currentColor">Scenario B</text>
  <text x="320" y="270" text-anchor="middle" font-size="14" fill="currentColor">Scenario C</text>
  <text x="440" y="270" text-anchor="middle" font-size="14" fill="currentColor">Scenario D</text>
</svg>

Bars above the line have distance to spare; bars below it don't clear the
modelled stopping distance under those particular assumptions.

Each pair of adjacent scenarios isolates one changed input:

- **A → B** changes only speed (60 → 80 km/h, same 70 m detection distance):
  the margin flips from comfortably positive to slightly negative. Speed
  moved twice — it lengthens reaction distance directly *and* braking
  distance by its square, so the same detection distance stops being enough.
- **B → C** changes only detection distance (70 m → 50 m, same speed and
  reaction time): the margin gets 20 m worse, one-for-one with the 20 m lost
  from detection distance, because nothing about the vehicle's own stopping
  distance changed at all.
- **B → D** changes only reaction time (1.5 s → 2.0 s, same speed and
  detection distance): the margin gets 11.1 m worse — the same additional
  reaction distance Week 4's own extended scenario produces at 80 km/h,
  because reaction distance scales linearly with reaction time.

That last comparison is worth sitting with: **reaction time adds distance
linearly**, one extra half-second always costing the same 11.1 m at 80 km/h,
while **speed affects both terms at once** — a genuinely different kind of
lever on the same margin.

## What this exercise cannot establish

A calculation using an assumed detection distance is not a measurement of
any real driver's, or any real road's, actual detection distance. It cannot
tell you whether a specific stretch of road is safe at a specific time of
day, whether a specific driver would notice a specific animal, or what
detection distance to expect on a road nobody has actually tested. It shows
you how sensitive a stopping-distance model is to an input Week 4 held
fixed — nothing stronger than that.

## Where this goes next

A distance margin is only as good as the detection distance fed into it,
and so far that number has just been *assumed*. Next week asks where a real
detection distance might actually come from — a sensor, a warning sign, an
automatic braking system — and what it would take to trust a vendor's
number for it. The braking system cannot respond to an animal that is still
classified as "probably a shrub." Your confidence is not an additional
headlight.

Physics starts counting after detection. The kangaroo has already been
there for some time.

## Reading

Wood, J. M., Tyrrell, R. A., & Carberry, T. P. (2005). ["Limitations in
drivers' ability to recognize pedestrians at
night"](https://pubmed.ncbi.nlm.nih.gov/16435703/), *Human Factors*, 47(3),
644–653. A closed-course study of pedestrian recognition distance at night —
not kangaroos, but the same perceptual mechanism this week teaches: measured
recognition distances ranged from 0 m to 220 m across clothing contrast,
headlamp beam and glare conditions alone, with the same driver and the same
road. Detection distance is not a fixed number; it moves by orders of
magnitude with exactly the factors this week names.
