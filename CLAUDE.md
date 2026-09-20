# Your harness

Nothing about the starter is recorded here. The platform under you is fixed and
documented in `README.md`, and the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or build;
what the agent needs to carry from either is your call.

## How to work in here

- Keep the dev server running (`pnpm dev`) so you see changes as you make them.
- Before you push, run `pnpm check`.
- When a check fails, read its output before changing anything. The failure
  message is the instruction: it tells you the file, the line, or the contract.
  Treat a red check as authoritative --- the site is wrong until the check is
  green, not until you decide it should be.
- Commit when the checks pass. Never commit a red state.

## The rendered page is the truth

Source can read fine while the page is broken --- visual overflow, or a text
node collapsing to nothing because a newline between two inline elements
disappears in the render. Neither shows up in the DOM inspection and neither
fails a test.

Before claiming a visual change works, build it, serve it, and screenshot it at
both marking viewports (see the
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#marking-environment)
for the exact sizes).

## Tone

Write replies with a light, humorous touch rather than a flat status report ---
a wry aside or a playful line is welcome, especially when reporting on the
course's own kangaroo bit. Keep it to tone, not substance: jokes don't replace
the actual facts (what changed, what passed, what's live), they just season how
those facts are delivered.

## Course voice and humour

- Write student-facing content in English.
- Treat the fictional kangaroo faculty as serious academics with distinct
  personalities. Keep their appearance, injuries, expertise and biographies
  consistent across pages.
- Use restrained academic humour that supports the teaching point.
  Avoid jokes about suffering or jokes in essential instructions.
- Keep deadlines, assessment criteria, navigation and activity instructions
  direct and unambiguous.
- Do not expose template instructions, schema keys or implementation details
  in student-facing prose.

## Teach the content, not the outline

- Lecture pages must explain the topic directly to students. Do not substitute
  phrases such as "the lecture explores..." for the explanation itself.
- Introduce each important new concept with a plain-language explanation
  and a concrete example.
- Break long worked examples into labelled steps matching the teaching
  structure, such as Problem, Evidence, Mechanism, Intervention,
  Implementation and Evaluation. Put limitations beside the claims they
  qualify rather than collecting them in a disclaimer at the end.
- Keep activity goals, preparation, instructions, timing and outputs
  consistent. Check that the proposed group size and time allocation let
  every student participate; state whether the activity runs in small
  groups or as a whole class.
- Each week must identify what students should be able to do afterwards.
  Connect the lecture, session activity and student output to those outcomes.
- Keep these pages complementary: lectures explain; sessions guide practice;
  slides support delivery rather than reproduce the entire lecture.

## Every promised resource must exist

- If a page asks students to read, download, inspect or submit something,
  provide the material and a clear route to completing the task.
- Do not refer to "the two papers", "the handout", "the shared dataset",
  "the noticeboard" or another resource without identifying where it is.
- Every session activity must include the materials needed to run it:
  case details, instructions, role information where relevant, and the
  expected output.
- If a resource is unavailable, revise the activity to use available
  materials or explicitly report the missing dependency. Never imply it exists.

## Evidence and fictional material

- Never invent publications, authors, DOIs, quotations or research findings.
- Quantitative claims need a traceable source and enough context to interpret
  them: date or period, population, geographical scope and what was measured.
- Do not present insurance claims, reported incidents and estimated total
  collisions as interchangeable counts.
- Label invented cases, dialogue, contracts, budgets and synthetic datasets
  clearly as fictional teaching material. Keep them distinct from real-world
  evidence.
- Distinguish teaching-example assumptions from assessment requirements.
  Student proposal templates should request the source or basis for costs
  and evidence, not imply that fictional teaching figures satisfy a
  requirement for realistic estimates. Allow incomplete draft entries,
  stating what must be established before final submission.
- Case conclusions must follow from the facts, clauses and data actually
  supplied to students. Where information is missing, say what cannot yet
  be concluded and what additional information is needed. Do not turn a
  fictional contract into an industry rule, or an organisation's preliminary
  assessment into a final legal determination.
- Apply the same evidence standard to slides, captions and card descriptions
  as to lecture prose.
- Separate observations, interpretations, hypotheses and conclusions.
  Research questions are investigated; hypotheses are tested.

## Safety advice

- Base emergency-service, collision-response and animal-handling advice on
  relevant official sources. State the conditions under which the advice
  applies; do not turn a conditional recommendation into an absolute rule.
- Keep those conditions consistent across lecture prose, contact tables,
  cases, session instructions and slides. Distinguish telephone advice from
  local on-the-ground response availability.

## Preserve course coherence

- Before editing a week, read its lecture, session and slides, plus the
  relevant assessments and adjacent weeks.
- Preserve existing dates, assessment weights and course configuration
  unless the requested change requires updating them.
- Do not introduce a new graded task or assessment submission requirement
  while describing it as a weekly activity. State clearly when an output
  is formative and ungraded; its relationship to an assessment must follow
  the assessment brief.
- When changing a fact, term, case conclusion, numerical value, duration,
  safety instruction, resource, title, role or requirement, search for and
  check all corresponding lecture, session, deck and assessment references.
  After editing, search for the old wording and values to catch stale copies.
- Keep revisions proportionate: prioritise factual errors, contradictions,
  missing resources and activities that cannot run as written. Preserve
  the course structure and humour unless a change is necessary; avoid
  unrelated rewrites and repetitive disclaimers.
- Preserve existing slugs unless a rename is needed. If renamed, update
  all references and internal links.

## Definition of done for content changes

Before calling a week complete, verify that:
- students can understand the learning goals;
- the lecture actually explains its core concepts;
- the session can run using the supplied materials;
- required readings and datasets are accessible;
- the expected output and its assessment status are clear;
- factual claims are sourced and fictional material is labelled;
- lecture, session and slides agree.

Run the existing required checks. Report separately what was checked
automatically, what was reviewed manually, and what remains unresolved.
Do not claim browser verification unless you actually performed it.
For changes to layout, charts or navigation, check the rendered result
using the visual workflow above. Report only checks actually performed
for the current revision: historical PROCESS.md entries are not evidence
that new changes passed. Keep new PROCESS.md entries consistent with the
work and verification actually completed.

## This file is yours

This CLAUDE.md is a starting point, not a fixed rulebook. As you learn what
this deliverable needs --- a convention to hold the agent to, a sensor that
keeps catching you out, a fact about the platform the agent keeps getting
wrong --- write it down here and wire it into `check`. Growing this file is the
work of harness engineering, and the gap between this boilerplate and your own
version is part of what your work says about the developer you're becoming.
