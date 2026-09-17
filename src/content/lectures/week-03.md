---
title: Spatial and temporal patterns of vehicle strikes
description:
  Why a map of recorded strikes looks like a finding before anyone has
  checked what the dots represent — and what survives once you check.
week: 3
date: 2027-03-08
teachers:
  - marisol-quaye
slides: /decks/week-03/
spec:
  - you can count recorded collisions by road from the dataset
  - you can distinguish a raw collision count from an exposure-adjusted rate
  - you can state a simple, explicit hotspot definition and apply it consistently
  - you can identify a reporting-coverage limitation that a map alone can't show
  - you can revise a hotspot claim after comparing it against an alternative measure
related:
  - sessions/03-mapping-hotspots
---

*A Red Dot Is Not a Research Finding.*

Last week you found that a *time* axis can mislead you before you've checked
what produced each row. This week does the same exercise on a *space* axis,
and the failure mode is, if anything, more persuasive: reporting practices
that create apparent peaks in time can just as easily create apparent
hotspots in space, and a map sells the illusion harder than a bar chart ever
did.

## Why a map is more convincing than it has earned

Put collision records on a map and something happens that a spreadsheet
column doesn't do on its own: it looks like evidence. A cluster of red dots
on one road reads as a finding, immediately, before anyone has asked what a
dot represents, how it got there, or what else might produce a cluster that
has nothing to do with danger.

A red dot is not a research finding. Twelve red dots are not automatically
twelve times more convincing — they're twelve rows in a table that happen to
share a `road_name` field. The question this lecture asks is the same one
week 2 asked of a time-of-day peak: what does the pattern actually measure,
and what would have to be true for the tempting explanation to be the right
one?

## What the dataset can and can't show you

Before going further, a boundary worth stating plainly: the
[collision log](/data/collision-log-synthetic.csv) records `road_name` and
`region` for each incident. It does **not** record coordinates, a road
network, or anything that would let you plot an exact collision location on
a real map. Nothing in this unit asks you to invent that precision. Every
"map" in this week's material is a schematic built from road-level counts —
useful for comparing roads against each other, not for pinpointing where on
a road an animal was struck.

## Three ways to count the same collisions

Take the raw count of recorded collisions per road. This is the number
everyone reaches for first, because it needs nothing else — just a tally.

| Road | Raw collisions |
| --- | --- |
| Coorabin Road | 18 |
| Grellan Creek Road | 14 |
| Merricourt Highway | 14 |
| Wombaroo Pass | 13 |
| Old Bindari Road | 11 |
| Tindarra Loop Road | 11 |
| Bunjalung Ridge Road | 9 |

Coorabin Road tops this list by a clear margin. Congratulations: you have
found the road with the most records. Whether it is the most dangerous road
remains under review — because a raw count answers exactly one question,
"where were the most collisions recorded," and that question doesn't yet
account for how long each road is or how much traffic uses it.

Two better-adjusted measures need a **denominator**: something to divide the
count by, so that a long, busy road isn't unfairly compared against a short,
quiet one on count alone.

- **Collisions per kilometre** divides the raw count by road length, so a
  38 km highway and a 9 km back road are compared per kilometre of road
  rather than as whole roads.
- **Collisions per million vehicle-kilometres** divides further, by how
  much traffic actually used that road over the period being studied — so a
  road nobody drives isn't compared on equal terms with one that carries
  thousands of vehicles a day.

The map has excellent visual authority and no opinion about your
denominator. It will happily show you eighteen dots on Coorabin Road and let
you draw whatever conclusion you like about what "eighteen" means, without
ever mentioning that Coorabin Road is also the longest, busiest road in the
dataset.

## A companion dataset, built for this comparison

The collision log alone can't support either adjusted measure — it has no
road length or traffic figures. This unit supplies a second, small,
**synthetic** dataset built specifically to make that comparison possible:
the [road network table](/data/road-network-synthetic.csv). Like the
collision log, every value in it is invented teaching data, built to match
the seven roads that already appear in the collision log — not a survey of
any real road. Its data dictionary and reporting-coverage categories are
detailed on this week's session page, which is where you'll join it to your
own counts.

## The worked example: busy road, quiet road

Here is the comparison this week turns on. Coorabin Road, in the raw count
above, looks like the obvious hotspot. Old Bindari Road, with 11 recorded
collisions, doesn't stand out at all on that list.

The road network table gives Coorabin Road a length of 38 km and an average
daily traffic figure of 2,800 vehicles — a long, busy regional link. It
gives Old Bindari Road a length of 9 km and an average daily traffic figure
of 220 vehicles — a short, quiet back road.

Using the observation window covered by the collision log — 4 January 2023
to 12 November 2026, counting both dates: **1,409 days** — the same period
for both roads, which matters, since the formula below only works if every
road is measured over the same span, the exposure-adjusted rate is:

> Recorded collisions per million vehicle-kilometres
> = recorded collisions / (average daily traffic × days observed × road
> length in kilometres) × 1,000,000

For Coorabin Road:

> 18 / (2,800 × 1,409 × 38) × 1,000,000 ≈ **0.12** collisions per million
> vehicle-kilometres

For Old Bindari Road:

> 11 / (220 × 1,409 × 9) × 1,000,000 ≈ **3.94** collisions per million
> vehicle-kilometres

Old Bindari Road has fewer recorded collisions than Coorabin Road, and an
exposure-adjusted rate more than thirty times higher. The busy road *looks*
worse on a map with dots sized by count. The quiet road is where a
comparable stretch of driving is, on this measure, far more likely to end in
a recorded collision.

## What the adjustment assumes — and doesn't fix

Treat that rate as informative, not final. It rests on assumptions worth
naming out loud:

- **average daily traffic is treated as constant** across the whole
  1,409-day window, which real traffic never is — seasonal and long-term
  changes are smoothed away by using a single average figure;
- **it still only counts *recorded* collisions** — exposure adjustment
  changes the denominator, not the numerator, so it cannot correct for
  collisions that were never reported in the first place.

That second point matters enough to say plainly: **exposure adjustment does
not eliminate reporting bias.** It corrects for how much a road is used, not
for how completely its collisions are logged. A road with genuinely
excellent reporting coverage and a road with genuinely poor reporting
coverage can produce the same exposure-adjusted rate for very different
underlying reasons, and the formula above has no way to tell you which
situation you're in.

Which is exactly why reporting coverage needs to be checked as its own
factor, not assumed away.

## Reporting coverage: a road nobody is watching

Two roads can have identical traffic and identical collision risk and still
produce very different numbers of *recorded* collisions, because reporting
depends on someone being in a position to make a report. The road network
table's `reporting_coverage` column names three categories, each with a
short in-universe reason:

- **High** — roads with routine patrols, fixed traffic cameras, or highway
  patrol coverage (Coorabin Road, Merricourt Highway).
- **Medium** — roads with irregular patrols or an active local
  wildlife-carer network, so most incidents eventually get logged, just not
  quickly or consistently (Bunjalung Ridge Road, Grellan Creek Road,
  Tindarra Loop Road).
- **Low** — roads with no routine patrol at all, where a report depends on
  a rare passing motorist or a wildlife carer happening to visit
  (Old Bindari Road, Wombaroo Pass).

Notice which road just posted the highest exposure-adjusted rate in the
dataset: Old Bindari Road, in the **low** reporting-coverage category. If
anything, its true rate could be even higher than 3.94 — a low-coverage road
is the one place a genuinely dangerous stretch could be systematically
under-counted. The exposure adjustment and the reporting-coverage category
point in the same direction here, which is a stronger result than either
alone; they won't always agree so neatly.

## Choosing a hotspot definition, out loud

"Hotspot" is not a fixed, self-evident category — it's a threshold someone
chooses, and different thresholds answer different questions. This unit
uses one explicit, simple definition for teaching purposes:

> A road is a **hotspot** if its exposure-adjusted rate is at least double
> the median rate across the roads being compared.

Across the seven roads in the dataset, the median rate is 1.06 collisions
per million vehicle-kilometres (Bunjalung Ridge Road's figure, sitting
squarely in the middle of the ranked list). Double that is 2.13. Exactly one
road clears it: **Old Bindari Road**, at 3.94. Under a naive "most raw
collisions" definition, the answer was Coorabin Road. Under this definition,
it isn't — a genuinely different road, reached by making the definition
explicit rather than leaving it implied.

A different, equally defensible threshold — top three roads by rate, or
"anything above the mean" rather than the median — would draw the line in a
different place. That's not a flaw in the method; it's why stating your
threshold, and defending it, is exactly what the week 6 assignment's hotspot
analysis asks you to do.

## From this week's session to the assignment

The session hands you the same seven roads and asks you to build both
rankings yourself, then have another pair try to break your hotspot
definition using the exposure figures and reporting-coverage categories
above. That exercise — producing a defensible threshold and surviving a
peer's challenge to it — is a direct rehearsal for the hotspot analysis half
of the week 6 assignment, which asks you to state your exposure adjustment
and defend your threshold in exactly this way.

## Where this goes next

A hotspot ranking, however carefully built, only tells you which roads
collect more recorded collisions — it says nothing about what happens when
one occurs. A road with fewer collisions can still produce far worse
outcomes per collision than a busier one. Next week turns from *how often*
to *how hard*: the physics of what speed does to a collision once it's
already happening.

## Reading

Shilling, F. M., & Waetjen, D. P. (2015). ["Wildlife-vehicle collision
hotspots at US highway extents: scale and data source
effects"](https://natureconservation.pensoft.net/article_preview.php?id=4438&skip_redirect=1),
*Nature Conservation*, 11, 41–60. Two independently collected data sources
for the same US roads produced hotspot clusters with very little overlap —
real-world evidence that "where the hotspots are" depends heavily on which
records you started with, not only on where collisions actually happened.
