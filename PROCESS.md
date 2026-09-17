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

A third, accuracy-focused pass then tightened claims that had drifted past
what the fictional case, or the cited paper, actually support. The lecture's
risk explanation now names the two real mechanisms (dusk cutting detection
distance, higher speed cutting response time) but stops short of claiming
either was actually in play at Yarralong Road, since the case only supplies
an 80 km/h posted limit and the driver's own unverified estimate — not a
measured speed. The three worked examples under "from blame to a research
question" were rewritten as openly-labelled example hypotheses, each with a
measurable predictor, outcome, comparison and a threshold or time period,
with an explicit line that none of them report a real finding. The driver's
role card changed from "you know exactly what you saw and did" to "you can
report what you remember seeing and doing" — the case never gave the driver
privileged access to her own accuracy. The wildlife carer's clinical
language ("injuries consistent with vehicle impact; deceased on arrival") is
now used identically in the session's carer's notes and the lecture's
uncertainty paragraph, rather than paraphrased differently in each place.
The Rowden, Steinhardt & Sheehan citation was re-checked against the QUT
eprints record for the paper (a first attempt to fetch the PDF directly
returned unreadable binary content) and narrowed to what it actually
demonstrates — the researchers' own in-depth serious-injury crash data,
matched against official government crash records, showing the official
figures undercount — rather than the previous, unsupported claim that
insurance, police and wildlife-carer datasets were all mutually matched.

That pass also closed the week 2 dataset promise, which had stood as a
forward reference with nothing behind it. A new synthetic collision log
(`public/data/collision-log-synthetic.csv`, 90 rows, generated with a fixed
random seed) now exists for students to download from the week 2 session,
alongside a full data dictionary describing every column, an explicit
"synthetic teaching material, not real incidents" statement, and one
deliberate, documented recording artefact for students to find, matching
the session's existing learning objective. The dataset is linked as a plain
Markdown path under `public/`, which the theme's base-path rewriter already
handles for prose links, so no template change was needed. Checked the same
way as every round: `pnpm check` (build, accessibility and link-base checks
all pass, including the new CSV link resolving correctly), `pnpm
check:evidence`, the pre-commit secret-scan pattern run manually over staged
content, and the lecture, both week 1 and week 2 session pages, and the deck
screenshotted at both marking viewports — including the new data-dictionary
table, which wraps without horizontal overflow at 390px.

Week 2 was then built out in full, continuing directly from week 1's theme
(one incident can't establish a pattern) into a harder version of the same
lesson: even a whole dataset can mislead if its first visible pattern is
trusted before anyone asks what produced it. The lecture builds a
day-period distribution from the synthetic collision log (dawn 22, day 17,
dusk 34, night 17), lets the crepuscular explanation look sufficient for a
while — with one real, verified reading (Henderson, Vernes, Körtner &
Rajaratnam, 2018, cross-checked against Crossref's API after both the PMC
and MDPI copies blocked direct fetches) cited for exactly what it measured,
movement rate, not collision risk — then walks back into the dataset to
find that eleven of the dusk-adjacent records sit at exactly 06:00 or
18:00, all from wildlife-carer reports, flagged as shift-start times rather
than incident times. The paired session hands students the same discovery
as a 50-minute in-class sequence (predict, build the first distribution,
write down the tempting one-line explanation before checking it, audit the
timestamps/`report_source`/`data_quality_flag` in that order, rebuild, and
an exit ticket), with a formative, explicitly ungraded "Suspiciously
Punctual Kangaroo Memo" as the pair output. A new ten-slide deck
(`src/decks/week-02.deck.mdx`) carries the same arc for live delivery
without reproducing the lecture's prose. Both the lecture and session moved
from Idris Fenn to Marisol Quaye as teacher, matching her existing bio as
lead investigator on the collision dataset and keeping continuity with the
week 3 session she already teaches. Verified the same way as every round:
`pnpm check` and `pnpm check:evidence` green, the pre-commit secret-scan
pattern run manually over staged content, the lecture and session
screenshotted at both marking viewports (including a full top-to-bottom
mobile pass), and the new deck checked slide-by-slide — all ten sections
confirmed by walking Reveal's slide navigation under Playwright, since a
plain full-page screenshot of a Reveal deck only ever captures the first
slide.

A short usability pass then fixed four things a review of that build
surfaced. The lecture's "either side of this lecture" framing was removed
and its opening section rewritten past-tense, since the lecture now
explicitly debriefs a session that already ran, rather than bracketing it —
the deck's own prediction slide became a "Recap" for the same reason. The
session's "Before the session" prep instruction (load the dataset first) was
quietly contradicting the in-session activity's own first step ("before
opening the dataset... no looking yet"); prep now stops at skimming the data
dictionary, and the first real look at a row happens in-session,
immediately before the prediction. The lecture's "when do rows get added to
this dataset?" line was replaced with "which times are recorded in these
rows?", plus an added sentence making a point the lecture hadn't stated
directly: a collision record needs an animal, a vehicle and a collision all
at once, so even perfectly accurate recording still can't measure the
roadside animal activity that never results in one. And the deck's single
impact slide showing only the four raw day-period totals became two actual
SVG bar charts — computed directly from the CSV (dawn 22/day 17/dusk
34/night 17 raw; dawn 18/day 17/dusk 27/night 17 with the eleven
shift-time-flagged records removed), both labelled as synthetic teaching
data and drawn to the same px-per-record scale so the shrinkage in the dawn
and dusk bars is visually comparable between the two slides. Verified the
same way as every round — `pnpm check` and `pnpm check:evidence` green, a
manual secret-scan over staged content, and the lecture, session and now
eleven-slide deck screenshotted at both marking viewports, including
walking the deck's new chart slides slide-by-slide to confirm the raw SVG
markup actually rendered (bars, proportions, and caption text) rather than
just checking it built.
