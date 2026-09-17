---
title: The physics of a kangaroo strike
description:
  Why a modest change in speed produces a disproportionate change in
  stopping distance and available kinetic energy — and what a simplified
  model can and can't tell you about that.
week: 4
date: 2027-03-15
teachers:
  - priya-lindqvist
slides: /decks/week-04/
spec:
  - you can convert a speed in kilometres per hour to metres per second
  - you can calculate kinetic energy for a stated vehicle mass and speed
  - you can distinguish reaction distance from braking distance
  - you can compare stopping distance and kinetic energy across several speed scenarios
  - you can explain what a simplified collision-physics model leaves out
related:
  - sessions/04-modelling-impact
---

*The Square of Speed Has No Sympathy.*

Week 3 asked *which road* collects the most recorded collisions, and how
much that answer depends on traffic and reporting. This week asks a
different question entirely: once a collision is already happening, what
does speed actually do to it? Collision frequency and collision severity are
separate questions, with separate mathematics behind them — this lecture is
about the second one.

## A prediction, before the formula

If a vehicle's speed doubles, does its kinetic energy double? Write down an
answer before reading further. Most people's instinct says yes — twice the
speed, twice the energy, a straightforward trade. The actual relationship is
worse than that, in a way that matters for exactly the timetable-based
thinking ("I'll just go a little faster to make up the time") this lecture
exists to interrupt. The square of speed has no sympathy for your timetable.

## Kinetic energy: the formula and the units

The kinetic energy of a moving object is:

> E = ½ m v²

where *m* is mass in kilograms, *v* is speed in metres per second, and *E*
comes out in joules. Speed in the formula must be in metres per second, not
kilometres per hour — mixing units is the single most common way to get this
calculation wrong, so converting first is worth doing carefully:

> speed in m/s = speed in km/h ÷ 3.6

This week uses one consistent, clearly **synthetic teaching scenario**
throughout: a 1,500 kg vehicle, at 40, 60 and 80 km/h. Treat these as
illustrative inputs chosen to make the mathematics easy to follow, not
measured values, a safe driving speed, or a claim about any real vehicle.

| Speed (km/h) | Speed (m/s) |
| --- | --- |
| 40 | 11.1 |
| 60 | 16.7 |
| 80 | 22.2 |

At 40 km/h, a 1,500 kg vehicle's kinetic energy is:

> E = ½ × 1,500 × (40 / 3.6)² ≈ **92,600 J** (92.6 kJ)

## Doubling speed, quadrupling energy

Now the same calculation at 80 km/h — exactly double 40 km/h:

| Speed | Kinetic energy |
| --- | --- |
| 40 km/h | 92.6 kJ |
| 60 km/h | 208.3 kJ |
| 80 km/h | 370.4 kJ |

Going from 40 to 80 km/h doubles the speed and **quadruples** the kinetic
energy — 370.4 kJ is four times 92.6 kJ, not two. That's what squaring a
doubled number does: 2² = 4. Going from 40 to 60 km/h — a 50% increase in
speed — produces a 125% increase in energy (208.3 kJ is 2.25 times 92.6 kJ,
and 1.5² = 2.25). A modest change in speed buys a disproportionate change in
the energy available in a collision, for exactly the same vehicle and the
same driver.

This is the vehicle's own kinetic energy — a property of its mass and
speed, nothing else. It is **not** a measure of the energy transferred to an
animal in a collision, and it is **not** a prediction of injury severity for
either party. Those depend on impact geometry, vehicle deformation, contact
area, and how the energy is actually transferred in the fraction of a
second the collision takes — none of which this formula touches. Substituting
an animal's mass into this same equation would not correct for that; it
would just calculate the kinetic energy of a different, hypothetical moving
object, not the energy involved in an impact between two of them. This week
keeps the calculation to what it can honestly claim: the vehicle's own
energy, as a function of the driver's speed choice.

## Reaction distance: the part before braking starts

Before any braking happens at all, the vehicle keeps travelling at its
original speed for the length of time it takes the driver to notice a hazard
and begin braking. That distance is:

> reaction distance = speed × reaction time

This week uses a stated **teaching assumption** of 1.5 seconds reaction
time — a commonly used illustrative figure for an alert driver, not a
measured value for any real driver or this unit's dataset.

| Speed | Reaction distance (1.5 s) |
| --- | --- |
| 40 km/h | 16.7 m |
| 60 km/h | 25.0 m |
| 80 km/h | 33.3 m |

Reaction distance scales directly with speed — 33.3 m is exactly twice
16.7 m, because reaction time here is held constant and distance is just
speed multiplied by a fixed number.

## Braking distance: an idealised model

Once the brakes are applied, an idealised model assumes the vehicle
decelerates at a **constant** rate until it stops:

> braking distance = v² / (2a)

where *a* is the (constant) deceleration in metres per second squared. This
week uses a stated teaching assumption of *a* = 6.5 m/s² — a plausible,
illustrative figure for braking on a sealed rural road, not a rating for any
specific vehicle, tyre, or road surface.

| Speed | Braking distance (a = 6.5 m/s²) |
| --- | --- |
| 40 km/h | 9.5 m |
| 60 km/h | 21.4 m |
| 80 km/h | 38.0 m |

Braking distance depends on the *square* of speed, the same way kinetic
energy does — doubling speed from 40 to 80 km/h roughly quadruples the
braking-distance component (9.5 m to 38.0 m), even though the driver reacts
in exactly the same amount of time in both cases.

## Total stopping distance

Add the two components together:

> total stopping distance = reaction distance + braking distance

| Speed | Reaction | Braking | **Total stopping distance** |
| --- | --- | --- | --- |
| 40 km/h | 16.7 m | 9.5 m | **26.2 m** |
| 60 km/h | 25.0 m | 21.4 m | **46.4 m** |
| 80 km/h | 33.3 m | 38.0 m | **71.3 m** |

Total stopping distance doesn't double *or* quadruple in exact step with
speed — it sits between the two, because reaction distance scales linearly
with speed while braking distance scales with its square. Going from 40 to
80 km/h roughly **2.7 times** the total stopping distance, for double the
speed. Whatever the exact multiplier, the direction is the same one kinetic
energy pointed in: speed costs you more distance and more energy than
instinct suggests.

## What this model leaves out

Every number above comes from a deliberately simple model, and simple models
buy their clarity by leaving things out. Treat this as a genuine limitations
list, not a footnote:

- **road surface** — wet, gravel or icy surfaces reduce achievable
  deceleration well below this week's constant figure;
- **visibility** — everything above assumes the driver notices the hazard
  at the moment reaction time starts counting, which visibility conditions
  (this unit's week 5 topic) directly affect;
- **animal movement** — a kangaroo is not a fixed obstacle; it can move
  toward, away from, or across the vehicle's path during the exact window
  these calculations describe;
- **impact geometry** — where and at what angle a collision occurs changes
  how energy transfers, independent of the vehicle's total kinetic energy;
- **vehicle deformation** — modern vehicles are built to deform and absorb
  energy in a crash, which changes how much energy reaches an occupant or,
  in this context, an animal, compared with a perfectly rigid object;
- **braking conditions** — tyre condition, load, and the vehicle's braking
  system all affect the real achievable deceleration, which this week holds
  constant by assumption.

The calculator is not predicting an injury. It is explaining why speed
deserves a place in the discussion — a place the model can justify, without
the model claiming to settle anything past that.

## Where this goes next

Every distance calculated this week starts counting only after the driver
has detected the animal. Reaction time is a fixed input here; next week
treats it as the actual subject, asking what makes detection at dusk harder
in the first place — which is the question that determines whether any of
this week's stopping distances get a chance to matter at all. The physics
model begins after detection. Next week asks how late that starting point
might be. Professor Lindqvist accepts late assignments more readily than
physics accepts late detection.

## Reading

Khorasani-Zavareh, D., Bigdeli, M., Saadat, S., & Mohammadi, R. (2015).
["Kinetic energy management in road traffic injury prevention: a call for
action"](https://pmc.ncbi.nlm.nih.gov/articles/PMC4288294/), *Journal of
Injury and Violence Research*, 7(1), 36–37. A short, plain statement of the
same physics this lecture works through — kinetic energy scaling with the
square of speed, and why that makes speed management disproportionately
effective compared with other variables.
