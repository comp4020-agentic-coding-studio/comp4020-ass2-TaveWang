---
title: Mapping the hotspots
description:
  Turning raw collision counts into a defensible hotspot ranking — and
  watching that ranking change once traffic and road length are accounted for.
week: 3
date: 2027-03-08
teachers:
  - marisol-quaye
spec:
  - you can count recorded collisions by road and produce a first ranking
  - you can join a road dataset and calculate counts per kilometre and rates per million vehicle-kilometres
  - you can state an explicit hotspot definition and apply it consistently
  - you can challenge another pair's hotspot definition using traffic exposure and reporting coverage
  - you can explain which conclusion changed between your first and revised ranking, and why
related:
  - lectures/week-03
---

## The road network table

This session adds a second dataset to the one you already know. Download
the [road network table](/data/road-network-synthetic.csv) (CSV, 7 rows) —
like the collision log, it's **synthetic teaching data** built by the
teaching team, covering exactly the seven roads that already appear in the
collision log. It is not a survey of any real road, and it does not contain
coordinates or a road network you could plot on a real map.

**Data dictionary**

| Column | Meaning |
| --- | --- |
| `road_name` | Matches `road_name` in the collision log exactly |
| `region` | Matches `region` in the collision log |
| `road_length_km` | Invented road length, kilometres |
| `avg_daily_traffic_vehicles` | Invented average daily traffic count, treated as constant over the observation window |
| `reporting_coverage` | `High`, `Medium`, or `Low` — how consistently incidents on that road get reported at all |
| `reporting_coverage_notes` | A short, in-universe reason for that category (patrol frequency, wildlife-carer coverage, phone reception) |

## A schematic, not a map

Neither dataset gives you coordinates, so nothing in this session asks you
to plot an exact collision location. Instead, a **road schematic** shows
counts or rates at the road level — one bar or one mark per road, arranged
for comparison, not for geography. Here's the format, shown with four
hypothetical roads and made-up counts — not this week's actual data, which
you'll tally and rank for yourself in step 2 below:

<svg viewBox="0 0 640 160" width="100%" height="160" role="img" aria-label="Schematic bar chart illustrating the format with hypothetical data: Road A 5, Road B 4, Road C 3, Road D 2">
  <rect x="180" y="10" width="200" height="18" rx="3" fill="var(--at-primary)" />
  <rect x="180" y="45" width="160" height="18" rx="3" fill="var(--at-primary)" />
  <rect x="180" y="80" width="120" height="18" rx="3" fill="var(--at-primary)" />
  <rect x="180" y="115" width="80" height="18" rx="3" fill="var(--at-primary)" />
  <text x="172" y="23" text-anchor="end" font-size="13" fill="currentColor">Road A</text>
  <text x="388" y="23" text-anchor="start" font-size="13" fill="currentColor">5</text>
  <text x="172" y="58" text-anchor="end" font-size="13" fill="currentColor">Road B</text>
  <text x="348" y="58" text-anchor="start" font-size="13" fill="currentColor">4</text>
  <text x="172" y="93" text-anchor="end" font-size="13" fill="currentColor">Road C</text>
  <text x="308" y="93" text-anchor="start" font-size="13" fill="currentColor">3</text>
  <text x="172" y="128" text-anchor="end" font-size="13" fill="currentColor">Road D</text>
  <text x="268" y="128" text-anchor="start" font-size="13" fill="currentColor">2</text>
</svg>

Bar length is proportional to count only. Road order, spacing and bar
position are arbitrary — this schematic represents aggregated records by
road, not any real geography, road shape, or exact collision location. You
will build the actual raw-count schematic, and the equivalent schematic for
a rate instead of a raw count, for this week's seven real roads during the
session — that's where you'll see how much the bars reorder.

## The exposure formula

You'll need this in step 3 below, before the lecture that debriefs this
session has a chance to give it to you:

> Recorded collisions per million vehicle-kilometres
> = recorded collisions / (average daily traffic × days observed × road
> length in kilometres) × 1,000,000

Use an observation window of **1,409 days** for every road — 4 January 2023
to 12 November 2026, counting both dates. Every road must be measured over
the same span, or the comparison between roads stops being fair.

## Before the session

Bring your revised week 2 time distribution and skim the data dictionary
above. You don't need to open either CSV before the session starts.

Note: a record with an uncertain incident *time* (last week's flagged
records) is still fine to use here. Week 2's timestamp problem was about
*when* a collision happened — it doesn't affect that record's `road_name`,
which is all this session needs.

## In the session

This runs as one 50-minute sequence, before the lecture debriefs it. Work in
the same pairs as week 2.

1. **5 minutes — predict.** Without opening either dataset, each pair
   predicts which road will look most dangerous, and writes one sentence
   saying why.
2. **10 minutes — first ranking.** Open the collision log and count
   records by `road_name`. Rank all seven roads from most to fewest
   records. This is your **first ranking**.
3. **10 minutes — join and calculate.** Join the road network table to
   your counts by `road_name`. For each road, calculate collisions per
   kilometre, then collisions per million vehicle-kilometres using the
   exposure formula above and its stated 1,409-day observation window. Show
   your working for at least two roads.
4. **10 minutes — choose a definition and re-rank.** Using your calculated
   rates, decide on an explicit hotspot definition (a fixed threshold — for
   example, "at least double the median rate" — not a vague impression),
   apply it, and produce your **revised ranking**.
5. **10 minutes — peer challenge.** Swap your first ranking, revised
   ranking and stated definition with another pair. Try to break their
   definition using the traffic and reporting-coverage figures: does a
   road get excluded that shouldn't be, or included on the strength of good
   reporting rather than real risk?
6. **5 minutes — exit ticket.** Submit one sentence naming which
   conclusion changed between your first and revised ranking, and why.

## Afterwards

This session's output is the **Hotspot Appeal Form** — a one-page pair
submission. It's **formative and ungraded**: it's practice at defending a
threshold against a challenge, not a mark on which road you picked.

**The Hotspot Appeal Form**

- Your first ranking (from step 2).
- Your revised ranking (from step 4).
- Your annotated road schematic — bars or marks for all seven roads,
  labelled with the measure you used, in the format shown above.
- Your stated hotspot definition, in one sentence.
- Your exposure calculation, shown in full for at least two roads.
- One reporting-coverage limitation that could change your conclusion if
  it were different.
- A short statement of what your evidence actually supports — not what you
  suspect, what the numbers in front of you can defend.

Keep a copy of everything above. The week 6 assignment's hotspot analysis
asks you to state an exposure adjustment and defend a hotspot threshold for
the same regional dataset — this session is where you practise doing that
once, before you do it again for the assignment.
