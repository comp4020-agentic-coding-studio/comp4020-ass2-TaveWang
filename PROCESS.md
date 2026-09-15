# Process overview

## What I built

SLOP8258: Vehicular Macropod Avoidance, a fictional postgraduate unit on
kangaroo–vehicle collisions in Australia — a 12-week research-literature
curriculum spanning ecology, impact biomechanics, detection technology, road
engineering, law, and policy, with a convenor, a tutor, two assessments
(a week-6 literature review and a week-12 research proposal), and a week-1
lecture deck, all authored on top of the static course template.

## How I got here

The repo started from the template scaffold and the assignment-2 spec tests at
[`06aee1b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-TaveWang/commit/06aee1b),
carried forward from the previous week's harness at
[`fff8fab`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-TaveWang/commit/fff8fab).

Most of the course content — `course-config.ts`, both people bios, all 12
sessions and lectures, both assessments, and the week-1 deck — went in as one
batch in
[`a3dc540`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-TaveWang/commit/a3dc540),
built from a single brief:

> Build a full postgraduate course website for a research-literature-oriented
> unit on kangaroo-vehicle collisions in Australia — 12 weeks, two staff, two
> assessments (a literature review + hotspot analysis worth 40%, and a
> research proposal worth 60%), and a rewritten week-1 deck.

That same commit added a second, separate request: hand-drawn kangaroo
illustrations across the site, and an injured cartoon kangaroo — bandaged
head, arm in a sling — as a course participant, "Dr Kargaroo", using the
illustration as his profile photo. Two build failures shaped how that art
actually got wired in:

- an MDX file's `<style>{...}</style>` block failed to parse (MDX treats the
  CSS braces as a JavaScript expression), fixed by moving the rule to an
  inline `style` attribute instead;
- decorative SVGs placed in `public/` and referenced with plain
  `src="/kangaroos/...svg"` inside `.astro`/`.mdx` template markup escaped the
  deployment's base path, because the theme's base-path rewriter only runs on
  Markdown prose, not on raw template markup. Moving the SVGs into
  `src/assets/` and importing them with Vite's `?url` suffix — the same
  pattern the theme already used for the hero image — resolved it.

I knew the result was right the same way the harness in `CLAUDE.md` asks for:
`pnpm check` green (typecheck, static build, spec tests, accessibility, and
link-base checks all passing), plus a headless-Chrome screenshot of each
changed page, read back to confirm the illustrations rendered as intended
rather than trusting the raw markup.

The remaining starter placeholders — the homepage's "what you'll do"/"who
it's for" copy, the policies page, and the template's stock hero/card/portrait
images — were still in the tree going into this submission's `pnpm
check:evidence` run. They're replaced in this same pass: the two prose
sections and the policies page now carry real course content, and the four
unreplaced starter images are removed rather than restaged, since the course's
own illustrations (the homepage and People-page kangaroo doodles, and Dr
Kargaroo's portrait) already carry the site's visual identity without them.

The hand-drawn SVG kangaroo art was then swapped out for photorealistic
kangaroo photos, replacing Dr Kargaroo's portrait, the homepage hero, and the
People-page banner. That surfaced a real crop bug, again only visible in a
screenshot: the theme's hero banner is wide and short and center-crops its
image, which hid the kangaroo's face on both the homepage and Dr Kargaroo's
profile page (the square source photos have the face near the top of the
frame). Fixed with a scoped `object-position` override on `.at-hero-image` in
each affected page, verified again by screenshot before committing.

A follow-up screenshot caught the same center-crop problem on the People-page
card thumbnails (`.at-card-image`, cropped to 16:9), and prompted giving
Marisol Quaye and Idris Fenn their own portraits too, using the two remaining
supplied photos rather than the shared decorative banner — one photo per
named person, four photos in total, no reuse.

A further batch of four supplied photos was used to grow the tutor roster:
Rowan Achterberg, Desmond Okafor, Priya Lindqvist, and Callum Beaumont each
joined as a new `people` entry with their own photo, bio, and role, reusing
the same content-collection shape (and inheriting the existing hero- and
card-crop fixes automatically, since both are keyed off the shared theme
classes rather than any per-person markup).

Week 1 was then rewritten from a brief for the unit's actual opening
week: a new title ("Welcome to the Road. Please Remain a Student, Not a
Statistic."), Dr Kargaroo installed as the week's teacher, and the lecture,
its slide deck, and its paired session (renamed from `01-orientation` to
`01-incident-review-committee` to match every other session's
topic-in-the-slug convention) all rebuilt around one throughline: a
professor's own collision doesn't prove a road is dangerous, which sets up
the semester's research question and the personal-story-versus-evidence
distinction the rest of the unit relies on. The paired session designs a
five-role class exercise around a fictional case, clearly labelled as such,
without inventing any real statistic beyond the one already in the deck. The
same pass replaced three stock template paragraphs — on the lectures,
sessions, and assessments index pages — that were explaining the site
template's own mechanics (`related:` fields, weight sums, internal
collection names) rather than telling a student anything about the course,
after a screenshot surfaced one of them as visible, real page content rather
than harness scaffolding.

A second Week 1 pass then turned that outline into material a student could
actually use, keeping the title, Dr Kargaroo's opening, and the five-role
committee format unchanged. The lecture was rewritten to explain risk,
exposure, outcome measures, and uncertainty directly through one running
fictional example (the Yarralong Road case) instead of describing what the
lecture "covers," and gained an explicit learning-objectives list, rendered
on the page itself via the same `SpecList` component sessions already used,
now given a lecture-facing `spec:` field and a second import in
`[slug].astro`. The paired session grew the case into full runnable
materials: an incident briefing, a driver's statement, a wildlife carer's
notes, and five role cards, plus a fill-in Incident-to-Question Brief
template, all explicitly labelled as fictional. Two resource promises that
didn't survive a grep of the repo — "the two papers" and "the syllabus" —
were replaced with a single real, checkable reading (a peer-reviewed source
chosen specifically to illustrate the outcome-measure problem the lecture
teaches; a second, industry-data candidate didn't survive a citation check
and was dropped rather than cited on faith), and the session's premature
claim of dataset access was corrected to point at week 2, where that dataset
actually lives. An unsourced "~16,000" collision estimate on the opening
slide was sent to a background research fork to verify; when it didn't
return a citable figure in time, the number was removed rather than kept on
faith, and the slide was rewritten around the lecture's own thesis instead.
The existing "a question that could turn out to be false" phrasing conflated
two different things and was corrected throughout the lecture, deck, and
session: a research question is investigated and has no truth value of its
own, while a hypothesis derived from it is what evidence can actually show
wrong. Verified the same way as every prior round: `pnpm check` and
`pnpm check:evidence` green, then the rebuilt lecture, session, and deck
screenshotted at both marking viewports before committing.
