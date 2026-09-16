---
title: Macropod behaviour and circadian activity
description:
  Why kangaroo–vehicle collisions cluster at particular times of day — and
  why the graph that seems to show this is not yet the explanation for it.
week: 2
date: 2027-03-01
teachers:
  - marisol-quaye
slides: /decks/week-02/
spec:
  - you can explain what "crepuscular" means without treating it as a complete explanation
  - you can create and interpret a basic time-of-day distribution
  - you can distinguish an observed pattern from an explanation for that pattern
  - you can identify a recording artefact in a dataset
  - you can explain how animal activity, driver visibility, traffic exposure and reporting practices can produce the same apparent pattern
  - you can revise a conclusion after discovering a data-quality problem
related:
  - sessions/02-reading-the-data
---

*Dawn, Dusk, and Other Inconvenient Appointment Times.*

Week 1 showed that one incident cannot establish a general pattern. This
week goes a step further and slightly less comfortable: even a whole
dataset can mislead you, if you trust its first visible pattern before
asking what produced it.

## Your first graph

In the session either side of this lecture, you'll build a time-of-day
distribution from the [collision log](/data/collision-log-synthetic.csv), a
synthetic dataset built for this unit. It will look roughly like this:

| Day period | Records |
| --- | --- |
| dawn | 22 |
| day | 17 |
| dusk | 34 |
| night | 17 |

More records at dawn and dusk than in the middle of the day or the middle of
the night. It's tempting to read that off in one line: *kangaroos are more
active at dawn and dusk, so more collisions happen then.*

Hold that sentence at arm's length for the rest of this lecture. It is not
necessarily wrong — but it bundles together a behavioural claim and a
recording claim, and the graph alone can't tell you which one you're
looking at.

## What is the graph actually a graph of?

A time-of-day distribution of collision *records* answers one question
directly: **when do rows get added to this dataset?** It only answers a
second question — **when are kangaroos on the road?** — if every collision
that happens is recorded, and recorded with an accurate time. Neither is
guaranteed.

A pattern in the spreadsheet may describe kangaroos — or it may describe
the person holding the clipboard. Both explanations are consistent with the
same 34 dusk rows. Telling them apart is this week's actual skill, and the
dataset audit later in this lecture is where you get to practise it.

## Crepuscular activity, and its limits

*Crepuscular* means most active around twilight — dawn and dusk — rather
than in full daylight or the depths of night. It's a real, well-documented
behavioural tendency in many Australian mammals, kangaroos included: a
GPS-tracking study of Eastern Grey Kangaroos in a peri-urban community on
the New South Wales north coast found their movement rate was highest at
dawn (Henderson, Vernes, Körtner & Rajaratnam, 2018).

Notice exactly what that study measured: how far and how fast a tracked
kangaroo moved, over a period of days, for a small number of animals in one
location. It is genuine evidence that dawn movement activity rises. It is
not a measurement of collision risk, a national activity timetable, or a
guarantee that *this* dataset's dusk peak is animal behaviour rather than
something else. Crepuscular is a behavioural pattern, not a booking
confirmation for 6:00pm — it describes a tendency across a population, not
a fixed schedule any individual animal keeps.

Two things can both be true: kangaroos really are more active around
twilight, *and* that fact alone cannot explain a specific spike in a
specific dataset. The first graph is not necessarily wrong. The first
explanation usually is — not because it's false, but because it's
incomplete, and incomplete in a way that feels finished.

## Why kangaroos approach roads at all

Twilight activity explains *when* kangaroos move. It doesn't explain why
that movement brings them onto a road corridor specifically. Several
ordinary pressures do:

- **food and water access** — roadside verges are often the most recently
  disturbed, most open grazing available, and cuttings can hold moisture
  longer than the surrounding paddock;
- **habitat fragmentation** — a road frequently cuts straight through a
  home range or a route between two patches of habitat, so crossing it
  isn't a choice so much as a consequence of where the road was put;
- **movement routes** — established tracks between shelter, water and
  grazing don't reroute themselves around a new road;
- **seasonal conditions** — drought pushes animals to range further for
  food and water, and joey season changes group movement and risk-taking
  around a mob;
- **group movement** — mobs move together, so one animal crossing well
  often means several more are about to.

None of this needs to be dramatic. Most of it is a kangaroo doing what a
kangaroo usually does, on a landscape that happens to have a road through
it.

## The driver's side of the same system

Dawn and dusk aren't just when animals move — they're also when driving
conditions get worse in ways that have nothing to do with animal behaviour:

- **visibility** drops as ambient light falls, cutting the distance at
  which a driver can pick an animal out of roadside shadow;
- **glare** from a low sun sitting near the horizon at both dawn and dusk
  can be worse than full darkness, when headlights do most of the work;
- **traffic volume** peaks at dawn and dusk anyway, because that's when
  most people commute — more vehicles on the road at exactly the hours
  animal activity is rising;
- **roadside vegetation** can block the sightline to the verge earlier
  than a driver would otherwise notice motion there.

Every one of these factors would, on its own, produce more collisions
clustering at dawn and dusk — with no reference to kangaroo behaviour at
all.

## A model for what "observed collisions" actually contains

A collision record isn't a direct readout of animal behaviour. It's the
product of several things all happening together:

> **Observed collision records**
> = animal presence
> × vehicle exposure
> × probability of collision (given presence and exposure)
> × probability of reporting

Change any term and the observed count changes, without anything about
kangaroo behaviour changing at all. More traffic at dusk raises vehicle
exposure. Worse dusk visibility raises the probability of collision given
presence. A wildlife carer's reporting habits can raise or lower the
probability of reporting, independent of anything an animal did. A graph of
observed records is a graph of all four terms multiplied together — never
of animal presence alone.

## Back to the dataset: an inconveniently exact appointment

Look closely at the timestamps behind those 34 dusk records, rather than
just the day-period label. A disproportionate number sit at exactly
**06:00** or exactly **18:00** — not "around dawn," not "roughly early
evening," but the same two clock times, repeated.

Real kangaroo behaviour is not that punctual, and neither, generally, is
traffic. An unusually exact spike at one specific timestamp is a strong
signal that something about *how the row was made* — not *what the animal
did* — produced it.

Checking `report_source` narrows it further: the exact-06:00 and
exact-18:00 rows come overwhelmingly from one source — wildlife carer
call-outs — not from police reports or road-authority logs. And
`data_quality_flag` names the problem directly on those rows: the timestamp
records the *carer's shift-start time*, not the time the collision
happened. Eleven records in the dataset carry exactly this flag.

Either the kangaroos became remarkably punctual, or a human system has
entered the graph. It's the second one. A rostering habit — carers logging
a case at the start of their shift rather than backdating it to when the
animal was found — has been quietly counted as if it were evidence about
when kangaroos cross roads.

## Revising the conclusion

Here's the comparison worth carrying into every other week that uses this
dataset:

| Observed pattern | Tempting explanation | Alternative explanations |
| --- | --- | --- |
| More dusk records | Increased animal activity | More commuter traffic; reduced driver visibility; a reporting artefact |
| More records on one road | Greater collision risk on that road | Greater traffic volume on that road; better reporting coverage on that road |

The first explanation in each row isn't ruled out by this lecture — it's
just no longer the *only* thing the pattern is consistent with, and the
dataset alone can't adjudicate between them.

Once the eleven shift-time records are set aside, the honest version of
this week's finding is:

> The synthetic dataset contains more dusk records, but some timestamps
> reflect wildlife-carer shift times rather than incident times. The
> remaining pattern is consistent with several explanations, including
> animal activity, traffic exposure and visibility, which cannot be
> separated using these records alone.

That's a less satisfying sentence than "kangaroos are crepuscular, so dusk
is dangerous." It's also the one the data can actually support.

## Where this goes next

This week found a *temporal* pattern that partly dissolved on inspection.
Next week does the same exercise in space instead of time: a map of
recorded strikes looks authoritative in a way a spreadsheet column never
quite does, which is exactly why it deserves the same scepticism you just
practised here. Next week we put the problem on a map, where it will
immediately look more authoritative.

## Reading

Henderson, T., Vernes, K., Körtner, G., & Rajaratnam, R. (2018). ["Using GPS
Technology to Understand Spatial and Temporal Activity of Kangaroos in a
Peri-Urban Environment"](https://pmc.ncbi.nlm.nih.gov/articles/PMC6025337/),
*Animals*, 8(6), 97. GPS-tracking evidence for the dawn activity peak this
lecture leans on — read it as evidence about movement, not as a study of
collisions.
