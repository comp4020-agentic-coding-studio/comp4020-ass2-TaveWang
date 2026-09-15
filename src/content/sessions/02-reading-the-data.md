---
title: Reading the collision data
description:
  Getting hands-on with the shared dataset before this week's lecture on
  macropod behaviour asks you to explain what's in it.
week: 2
date: 2027-03-01
teachers:
  - idris-fenn
spec:
  - you can produce a basic time-of-day and time-of-year distribution from the dataset
  - you can identify at least one recording artefact that isn't a real pattern
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

Load the dataset in whatever tool you're comfortable with. No analysis yet —
just get a feel for its shape: how many records, what fields, what's missing.

## In the session

Working in pairs, produce a time-of-day and time-of-year distribution of
recorded strikes. Compare across pairs: the distributions should roughly
agree, and where they don't is usually a data-entry artefact rather than a
real signal.

## Afterwards

Keep your distribution — you'll compare it against the lecture's account of
macropod circadian activity, and it's the starting point for the hotspot
mapping in week 3.
