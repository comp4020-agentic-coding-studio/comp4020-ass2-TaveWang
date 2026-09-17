---
title: Reading the collision data
description:
  Getting hands-on with the shared dataset before this week's lecture on
  macropod behaviour asks you to explain what's in it.
week: 2
date: 2027-03-01
teachers:
  - marisol-quaye
spec:
  - you can produce a basic time-of-day distribution from the dataset and state a prediction before seeing it
  - you can write down the most tempting one-sentence explanation of a graph, before checking whether the data supports it
  - you can audit exact timestamps, report_source, and data_quality_flag to find a recording artefact
  - you can rebuild a graph with flagged records handled, and revise your conclusion accordingly
  - you can name a type of data, beyond this dataset, that would help separate animal activity from traffic exposure
related:
  - lectures/week-02
---

## The dataset

Download the [collision log](/data/collision-log-synthetic.csv) (CSV, 90
records, 2023–2026). It's a synthetic dataset built by the teaching team for
this unit — modelled on how Australian jurisdictions structure animal-strike
reports (police, insurance, wildlife-carer, and road-authority logs) — not a
record of real incidents. Treat every figure in it as teaching material, not
evidence about any real road.

**Data dictionary**

| Column | Meaning |
| --- | --- |
| `incident_id` | Unique record identifier |
| `date`, `time` | When the incident was logged |
| `day_period` | `dawn` / `day` / `dusk` / `night`, derived from `time` |
| `road_name`, `region` | Fictional road and region names |
| `speed_limit_kmh` | The posted limit at the site, not a measured vehicle speed; blank where not recorded |
| `vehicle_type` | Vehicle involved |
| `species` | Animal species; blank where not recorded |
| `outcome` | What the reporting source observed — not a single, agreed severity scale |
| `report_source` | Which record type produced the row: `police`, `insurance claim`, `wildlife carer`, or `road authority maintenance log` |
| `data_quality_flag` | A known issue with that specific row, where one exists |

The log contains at least one deliberate recording artefact — a pattern that
reflects how a record got made, not when the incident happened. Finding it
is part of this session.

## Before the session

Skim the data dictionary above so you know what the columns mean — but don't
open the CSV itself yet. The first time you look at an actual row happens in
the session, right after you've written down a prediction with nothing to
bias it.

## In the session

This runs as one 50-minute sequence. Work in the same pairs throughout.

1. **5 minutes — predict.** Before opening the dataset, each pair predicts
   which day period (`dawn`, `day`, `dusk`, `night`) will contain the most
   records, and writes one sentence saying why. No looking yet.
2. **10 minutes — build the first distribution.** Produce a count of
   records by `day_period`, and a second breakdown by month or season.
   Compare with another pair: the shapes should roughly agree.
3. **5 minutes — write the tempting explanation.** In one sentence, write
   the most tempting explanation for your first graph. Don't hedge it —
   the point of the next step is testing this exact sentence, not a
   cautious version of it.
4. **15 minutes — audit.** Look past the day-period label to the exact
   values behind it. Work through these in order, stopping as soon as one
   of them gives you something:
   - Are any exact times unusually common — not "around dusk," but the
     same clock time, repeated?
   - Which `report_source` produced those specific rows?
   - What does `data_quality_flag` say on those rows, if anything?
   - Does the timestamp on those rows describe when the collision
     happened, or when someone's reporting process started?
5. **10 minutes — revise.** Decide, as a pair, how to handle whatever you
   found: remove those records, separate them into their own category, or
   annotate them and keep them visible. Rebuild your distribution with that
   decision applied, and write a revised one-sentence conclusion.
6. **5 minutes — exit ticket.** Submit your original sentence, your revised
   sentence, and the one thing that changed your mind.

## Afterwards

This session's output is the **Suspiciously Punctual Kangaroo Memo** — a
one-page pair submission. It's **formative and ungraded**: it's practice at
revising a conclusion when the data turns out to need it, not a mark on
whether your first graph was right.

**The Suspiciously Punctual Kangaroo Memo**

- The original graph (your day-period distribution from step 2).
- The revised graph (same distribution, with the audited records handled).
- The original explanation (your one sentence from step 3).
- The recording artefact you identified (what it was, and which column
  revealed it).
- The revised conclusion (your one sentence from step 5).
- One additional type of data — not in this dataset — that would help
  separate animal activity from traffic exposure as the cause of any
  remaining pattern.

Keep a copy of both distributions — the revised one is the starting point
for the hotspot mapping in week 3, where the same question about records
versus reality comes back in a different shape.
