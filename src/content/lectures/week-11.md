---
title: Does the evidence travel?
description:
  Two real overseas case studies, and the five questions to ask before
  importing anything they found into a different road, country, or species.
week: 11
date: 2027-05-03
teachers:
  - rowan-achterberg
  - marisol-quaye
related:
  - sessions/11-learning-from-elsewhere
---

Most of the strongest evidence in this unit's field comes from moose in
Scandinavia and deer in North America — not kangaroos, and not Australia.
That's not a flaw in the literature; it's just where the large, well-funded,
long-running studies happen to have been done. The question this lecture
teaches is how to use that evidence honestly: what transfers, what doesn't,
and how to tell the difference before writing it into a proposal.

## Five questions before you import a finding

1. **Same animal?** Moose, white-tailed deer, and kangaroos are not
   interchangeable — different size, gait, herd behaviour, and road-crossing
   patterns.
2. **Same road type?** A fenced interstate freeway and an unfenced two-lane
   rural road are different engineering problems even before the animal is
   considered.
3. **Same mechanism?** Is the intervention doing the same thing in both
   places (physically excluding animals from the carriageway), or does it
   only look similar on the surface?
4. **What was actually measured?** A usage count, a collision count, an
   exposure-adjusted rate, an injury outcome, and a cost-effectiveness
   figure are five different things — see the outcome ladder below.
5. **What local-context differences matter?** Traffic volume, speed limits,
   fence-end geometry, reporting practices, and species-specific behaviour
   can all change an intervention's real-world result without changing its
   underlying mechanism.

None of "moose," "deer," and "kangaroo" is an internally uniform category
either — a moose in dense forest and a moose on open tundra don't cross
roads the same way, and neither do rural-fringe kangaroo mobs and
urban-fringe ones (Week 2's synthetic dataset spans multiple site types for
exactly this reason).

## The outcome-type ladder

These are not interchangeable, and confusing them is one of the easiest
ways to overstate an intervention's real-world effect:

1. **Usage rate** — how often animals use a crossing structure once it
   exists.
2. **Collision reduction** — whether vehicle-animal collisions actually
   went down.
3. **Exposure-adjusted rate** — collision reduction accounting for changes
   in traffic volume or animal population (Week 3's material).
4. **Injury outcome** — whether the collisions that still happen are less
   severe.
5. **Cost-effectiveness** — outcome achieved per dollar spent.

A high usage rate (animals like using the underpass) says nothing directly
about whether collisions fell — Week 7 already established that a crossing
structure without fencing showed no detectable collision effect in
Rytwinski et al. (2016) despite presumably still being usable. Climbing this
ladder from "1" to "5" requires new evidence at every rung, not an
inference from the rung below.

## Basic principle vs specific parameter

Physical and ecological *principles* transfer reasonably well: fencing that
physically excludes an animal from a carriageway will do that regardless of
country, and a crossing structure only works if animals are willing to use
it. *Specific parameters* — the exact percentage reduction, the exact
predictor weights, the exact cost per kilometre — are local facts about the
study site, its traffic, its species, and its fence geometry, and don't
automatically hold anywhere else.

Related: a pilot study's effect size is not the effect size you'd get from
a national rollout. Pilots are usually sited where the problem is worst
and the local team is most engaged — a national programme built from many
sites, contractors, and maintenance regimes typically regresses toward a
smaller average effect.

## Case one: moose, Sweden

Seiler, A. (2005). "Predicting locations of moose–vehicle collisions in
Sweden," *Journal of Applied Ecology*, 42(2), 371–382.

- **Design**: 2,000 accident sites compared against 2,000 non-accident
  control sites; logistic regression on landscape, road, and traffic
  variables; the resulting model validated on a separate 2,600 road
  sections in Örebro county.
- **Result**: traffic volume, vehicle speed, and the presence of fencing
  were the dominant predictors, correctly classifying 72.7% of accident
  sites.
- **What transfers**: the underlying claim — that traffic volume, speed,
  and fencing presence predict collision risk — is a plausible general
  mechanism, not a Sweden-specific artefact.
- **What doesn't automatically transfer**: the 72.7% classification rate
  is a property of this model, this dataset, and Swedish moose-crossing
  behaviour. Nothing in the study licenses using 72.7% as an expected
  figure for a kangaroo model in Australia.

## Case two: deer, Utah

Bissonette, J. A., & Rosa, S. (2012). "An evaluation of a mitigation
strategy for deer–vehicle collisions," *Wildlife Biology*, 18(4), 414–423.

- **Design**: a treatment area on Interstate 15 with exclusion fencing, two
  underpasses, and one-way escape ramps, compared against an unfenced
  control area; mortality counted across 6 years pre-construction
  (1998–2003) against 2 years post-construction (2005–2006).
- **Result**: a 98.5% decline in mortality in the treatment area, against a
  2.9% decline in the control area over the same period.
- **A useful discussion tension**: the study reports no detectable
  end-of-fence mortality increase in this specific case — which sits in
  direct tension with Week 7's general point that short, poorly-terminated
  fences often *do* show that problem. Both can be true: end-of-fence
  displacement is a known risk, not a guaranteed outcome, and this fence's
  length, escape-ramp design, or local geography may be why it didn't show
  up here. The source doesn't say which, so leave that as unknown rather
  than guessing.
- **What transfers**: fencing plus a crossing structure plus escape ramps,
  as a *combined* mechanism, is a plausible general intervention.
- **What doesn't automatically transfer**: the 98.5%/2.9% figures are
  specific to this freeway, this fence, these two years, and Utah deer.

## A local scenario to test the questions on

Grellan Creek Road (Northern Ranges, 22km, roughly 900 vehicles/day,
Medium sensor coverage) is patrolled on a roughly weekly cycle, and most
reports come from commuting motorists rather than dedicated surveys — which
means its own collision counts already carry the Week 3 exposure-bias
problem, on top of whatever transfer question is being asked. Suppose
someone proposed importing the Utah design wholesale for Grellan Creek Road.
Running the five questions: same animal (no — kangaroo, not deer); same
road type (partially — rural two-lane, not an interstate freeway, so
traffic volume and speed differ substantially); same mechanism (the
fencing-plus-crossing-plus-escape-ramp principle is plausible); what was
measured (mortality decline, which is further up the outcome ladder than a
usage count but still a different quantity from a kangaroo-specific
exposure-adjusted rate); what local differences matter (Grellan's weekly,
commuter-biased reporting means even "before" and "after" counts here would
need the same exposure-adjustment scrutiny as the sourced case studies, not
just a raw before/after comparison). Conclusion: the mechanism is a
reasonable starting hypothesis; the specific effect size is not something
this evidence entitles anyone to promise.

## Where this goes

The final project asks for an intervention argued from at least three of
this unit's strands. Overseas evidence like this is one strand worth using
— but only the mechanism-level claim travels for free. Any specific
percentage, predictor weight, or cost figure from Sweden or Utah needs to be
framed as a hypothesis to test locally, not a result to promise.

## Reading

- Seiler, A. (2005). ["Predicting locations of moose–vehicle collisions in
  Sweden"](https://doi.org/10.1111/j.1365-2664.2005.01013.x), *Journal of
  Applied Ecology*, 42(2), 371–382.
- Bissonette, J. A., & Rosa, S. (2012). ["An evaluation of a mitigation
  strategy for deer–vehicle collisions"](https://doi.org/10.2981/11-122),
  *Wildlife Biology*, 18(4), 414–423.
