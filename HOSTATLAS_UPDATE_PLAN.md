# The Host Atlas — Claude Code Update Plan
## hostatlas.guide · Launch-ready update · April 2026

This document is a direct instruction set for Claude Code. Read it fully before touching any file. Every change listed here has been decided and approved. Do not interpret, improvise, or add features not listed. Execute in the order given.

---

## What the live site looks like right now (gap analysis)

Before making any changes, understand what is wrong with the current build:

| Element | Live site | Required |
|---|---|---|
| Product name | `HostAtlas` everywhere | `The Host Atlas` everywhere |
| Tagline | Not visible on site | Playfair italic, prominent in hero and footer |
| Screen order | Problem → Lenses → Gap → Experience → Platform → Insight → Gains → CTA | Hero → Problem → Experience → Transformation → Personal → Platform → Insight → Gains → CTA |
| CTA language | "Request a conversation →" | "Get in touch" |
| Hero image | Eiffel Tower / Paris bridge (wrong — famous landmark) | Silent stretch river, no landmark |
| S2 left image | Generic coastal shot | Person at railing from behind, looking out |
| S3 image | City/river with known skyline | Unnamed fjord or cliff face |
| S9 image | Generic beach | Calm water at dusk, deck level, no landmark |
| Positioning line | "Guides lead the highlights. We cover the river." | "Guides bring the highlights to life. The Host Atlas curates the silent stretches." |
| Verbatims | Plain italic text with left border | Floating callout boxes over landscape image with bronze anchor line |
| Cruise types | "river and coastal cruise operators" | "river, coastal, and expedition cruise operators" |
| Individual curation | Not on site | Full Screen 5 dedicated section |
| Insight cards | Abstract text descriptions | Concrete route signal cards (Rhine km 512, Douro, Moselle) |
| Wallpaper split | Not on site | Side-by-side same image, left desaturated / right with POI card |
| Footer | "HostAtlas — a contextual experience layer for scenic transit." | "The Host Atlas · River, coastal, and expedition cruise operators · hostatlas.guide" |

---

## PRIORITY ORDER — execute in this sequence

### PASS 1 — Global find-and-replace (do this first, across all files)

These changes touch every file. Do them before anything structural.

**1.1 Product name**
Find every instance of `HostAtlas` (and `Hostatlas`, `hostatlas` in display text) and replace with `The Host Atlas`.
- Page title: `The Host Atlas — Curated narratives for the silent stretches`
- Nav logo: `The Host Atlas`
- All body copy, headings, captions, footer, meta tags, og:title, og:description
- Image alt text

**1.2 CTA language**
Find every instance of `Request a conversation` and replace with `Get in touch`.
Find every instance of `Request a conversation →` and replace with `Get in touch`.
The mailto link stays: `hello@hostatlas.guide`

**1.3 Tagline — add where missing**
The tagline `Curated narratives for the silent stretches` must appear in:
- Hero section (Playfair italic, ~18px, bronze `#C49A5C`, positioned between the two headline lines or directly beneath the product name)
- Nav logo area (desktop only, beneath "The Host Atlas", Inter italic 11px, bronze 45% opacity)
- Screen 9 closing section (Playfair italic, bronze, centred, above the primary CTA)
- Page footer (plain text, Inter 12px)
- `<meta name="description">` and `og:description`

**1.4 Cruise types — add expedition**
Find: `river and coastal cruise operators`
Replace with: `river, coastal, and expedition cruise operators`
This applies everywhere this phrase appears. In the hero body copy only — not repeated elsewhere.

**1.5 Positioning line — update wording**
Find: `"Guides lead the highlights. We cover the river."`
Replace with: `"Guides bring the highlights to life. The Host Atlas curates the silent stretches."`
This line appears in the operator/platform section. It also needs to be added to Screen 2 (the problem section) as a closing statement. Exact wording — never paraphrased.

**1.6 Insight headline**
Find: `Curiosity becomes signal.`
Replace with: `Curiosity leaves a trace.`

---

### PASS 2 — Screen restructure

The current screen order is wrong. The new order is:

```
Screen 1 — Hero (keep, update content)
Screen 2 — The Problem / Silent Stretches (currently screen 2 — keep, update)
Screen 3 — The Guest Experience / What This Is (currently screen 5 — move earlier)
Screen 4 — The Transformation / Lenses (currently screen 3 — move later)
Screen 5 — Personal Relevance / Each Guest (NEW — does not exist on live site)
Screen 6 — Operator Platform (currently screen 6 — keep position, update)
Screen 7 — Insight Layer (currently screen 7 — keep, update cards)
Screen 8 — What Operators Gain (currently screen 8 — keep, minor updates)
Screen 9 — Closing CTA (currently screen 9 — keep, update copy)
```

The restructure means:
- Moving the Experience section (film + steps + demo) from position 5 to position 3
- Moving the Lenses section from position 3 to position 4
- Adding a new Screen 5 (personal relevance) — full spec below

---

### PASS 3 — Image updates

**Critical:** Current images are wrong. They show famous landmarks (Eiffel Tower, recognisable city skylines). This is the opposite of the brand intention.

Place all local image files in: `public/images/`

**Image slot assignments:**

| Filename | Used in | Brief |
|---|---|---|
| `hero-01.jpg` | Screen 1 hero, full bleed | River from deck level, winding ahead, unnamed hills, no landmark. Overlay rgba(0,0,0,0.42) |
| `screen2-deck-river.jpg` | Screen 2, left column + verbatim callout section | Single figure at ship railing from behind, passing unnamed landscape. World dominant, human small |
| `screen4-fjord-cliffs.jpg` | Screen 4, full bleed background | Deep fjord or unnamed cliffs, no famous landmark, overlay rgba(27,61,47,0.87) |
| `screen5-deck-coastal.jpg` | Screen 5, left column | Two or three figures on deck, same coastline, each absorbed separately. Early morning light |
| `screen6-phone-operator.jpg` | Screen 6, right column | Portrait phone mockup with operator brand applied — Deep Green top bar, logo placeholder |
| `screen9-evening-water.jpg` | Screen 9, full bleed | Calm water at dusk, deck level, no port or landmark. Overlay rgba(27,61,47,0.78) |

Until local files are provided, replace current Unsplash images with these Unsplash IDs (better silent-stretch approximations than current):
- Hero: `photo-1523906834658-6e24ef2386f9` (winding river, no landmark)
- Screen 2: `photo-1530521954074-e64f6810b32d` (person at railing from behind)
- Screen 4: `photo-1469854523086-cc02fe5d8800` (deep fjord, unnamed cliffs)
- Screen 9: `photo-1500514966906-fe245eea9344` (calm water, golden hour, deck level)

---

### PASS 4 — Copy updates per screen

#### Screen 1 — Hero

**Keep:**
- Headline: `"What's that over there?"`
- Second line: `The highlights are covered. The silent stretches aren't.`

**Add:**
- Tagline as brand line: `Curated narratives for the silent stretches` — Playfair italic, bronze, between the two headline lines or directly beneath. Not a caption — a brand statement.

**Update body copy — replace current with:**
> The Host Atlas gives river, coastal, and expedition cruise operators a contextual experience layer for the journey between the highlights — turning what guests observe into something they understand.

**Update CTA:** `Request a conversation →` → `Get in touch`

---

#### Screen 2 — The Problem / The Silent Stretches

**Update headline:**
Find: `Every guest asks it. In different ways.`
Replace with: `Every journey carries the same question.`

**Update intro paragraph — replace with:**
> You're on deck. Something catches your eye — a ruined tower on a hillside, a cluster of boats in a cove, a stretch of cliff face that seems to hold something. And the question forms, almost involuntarily.

**Update naming moment:**
Find: `We call these the silent stretches.`
Replace with: `These are the silent stretches.`

**Update closing paragraph:**
Find: `Not because the landscape is empty. Because no one has mapped what it holds.`
Replace with: `Not because the landscape is empty — because what it holds is rarely named.`

**Add after the problem statement — new closing paragraph:**
> When information does exist, it often arrives too late. By the time an announcement is made, the moment has passed — the castle has slipped behind the bend.

**Add positioning line at the end of this screen:**
> *Guides bring the highlights to life. The Host Atlas curates the silent stretches.*
> Style: Playfair italic, Deep Green border-left 2px bronze `#C49A5C`, padding-left 16px.

**Verbatim callout treatment — IMPORTANT VISUAL CHANGE:**
The three verbatim quotes currently render as plain italic text with a left border. This needs to change.

New treatment: Float the verbatims as callout boxes over the `screen2-deck-river.jpg` landscape image. The image should be full-width, approximately 60vh height, object-cover. Each verbatim box:
- Background: `#F5F3EF`
- Border: `0.5px solid rgba(196,154,92,0.5)`
- Border-radius: 8px
- Padding: 14px 16px
- Font: Playfair italic 15px
- Max-width: 260px
- Position: absolute, scattered across the image (left-third, centre, right-third)
- Below each box: a thin vertical bronze line (1px, 18px tall) descending to a bronze dot (5px diameter) — the dot is the anchor point on the landscape
- Attribution below each dot: Inter 11px, muted — `Rhine Gorge · Day 3 · afternoon sailing` etc.

Verbatim 1 (left): `"What's that over there?"` — Rhine Gorge · Day 3 · afternoon sailing
Verbatim 2 (centre): `"Are those vines? Whose are they? What do they make?"` — Douro Valley · morning transit
Verbatim 3 (right): `"The guide finished an hour ago. We've been sailing since."` — Norwegian coast · Hurtigruten sailing

**Add wallpaper split element:**
Below the verbatim callout section and above the problem statement paragraphs, add a side-by-side layout:
- Two panels, equal width, same background image (`screen2-deck-river.jpg`)
- Left panel: `filter: saturate(0.35)` — caption below: `"Without context, scenery becomes wallpaper."`
- Right panel: full colour — one POI card absolutely positioned (top-right): Deep Green bg `rgba(27,61,47,0.92)`, bronze border, text: Category "History", Title "Burg Sooneck · c. 1170"
- Caption below right panel: `"The same stretch. Now it has a story."`
- Caption style: Inter 12px, muted, centred under each panel

---

#### Screen 3 — The Guest Experience (moved from position 5)

This section already exists on the live site. Move it to position 3 in the page order. No major copy changes needed here except:

**Update headline:**
Find: `What if that moment on deck had an answer?`
Replace with: `What if the answer were already there?`

**Update intro copy — replace with:**
> The Host Atlas introduces a layer of context — shaped by place, and revealed only when the guest reaches for it. There is no app to download. No account to create. No announcement to listen out for.

**Add opt-in framing paragraph after the three steps:**
> It is personal and quiet: the guest chooses when to look, and what to explore. Nothing is broadcast. Nothing interrupts. The landscape stays primary. Content saves to the device before departure — poor signal in a fjord or remote valley is never an issue.

**Replace the current demo placeholder with the AR phone mockup (landscape mode):**
Landscape orientation phone frame (aspect-ratio 16/9). Deep Green interior simulating a live camera view. Three POI cards:
1. History · Medieval fortification · c. 1280 · 340m ahead
2. Local producers · Weingut Becker estate · Riesling · since 1847
3. Geology · Devonian slate formation · 380 million years old

Each POI card: `background: rgba(27,61,47,0.92)`, `border: 0.5px solid #C49A5C`, Playfair italic title. Below each card: thin bronze line to a bronze dot (the landscape anchor). Mini-map bottom-left: Rhine Gorge · 3 nearby stories. Status bar top: `The Host Atlas · Live · Rhine Valley`.

Caption beneath phone: `What the guest sees — points of interest surfaced in real time, as the vessel moves through the route.`

---

#### Screen 4 — The Transformation / Lenses (moved from position 3)

This is the current "unread landscape" section. Move it to position 4. Copy updates:

**Replace headline:**
Find: `The silent stretch isn't silent because there's nothing there. It's unread.`
Replace with: `What passes by is rarely explained.`

**Replace opening body copy — new first paragraph:**
> A hill is just a hill until it has a story. A bridge is just a bridge. A ruin on a slope is just a ruin. Without interpretation, the guest's eye moves across the landscape without landing anywhere. The scenery accumulates — and eventually becomes background.

**Keep:** the four lens cards (History & Stories, Geology & Nature, Culture & Local Life, Local Producers & Makers) — no changes.

**Update the personalisation paragraph:**
Find: `Your neighbour on deck may be following an entirely different story through the same landscape — in their own language, around their own interests. That's not possible with a guide and a microphone. It is the nature of a personal lens.`
Replace with: `The Host Atlas adds the interpretive layer that makes the landscape legible. History. Folklore. Geology. Local life. The people who have lived, worked, and made things in the places the vessel is passing through right now.`

**Keep closing line:** `Applied to the same stretch of river, these lenses turn a silent hour into a rich one. The landscape doesn't change. What guests understand about it does.`

---

#### Screen 5 — Personal Relevance / Each Guest (NEW — BUILD FROM SCRATCH)

This screen does not exist on the live site. Build it in full.

**Position:** Between Screen 4 (Transformation/Lenses) and Screen 6 (Operator Platform).

**Layout:** White panel · two-column desktop · `screen5-deck-coastal.jpg` left column · content right column · max-width 1100px

**Overline:** `FOR EACH GUEST` — Inter 500, 10px, letter-spacing 0.09em, uppercase, Deep Green

**Headline:** `Not every guest is curious about the same thing.` — Playfair Display 500, 40px desktop / 28px mobile, Near Black

**Body paragraph 1:**
> Two guests stand at the same railing, looking at the same stretch of valley. One notices the rows of vines on the slope — who planted them, what variety, whose label ends up on the bottle. The other notices the earthworks on the hillside above — the outline of something older, something that predates the vineyard by eight centuries.

**Body paragraph 2:**
> A guide with a microphone can tell one story to the group. The Host Atlas can tell both stories simultaneously — to different guests, in different languages, at different depths.

**Four guest example cards — 2×2 grid:**
Each card: background `#F5F3EF`, border-radius 7px, padding 14px, Inter 12.5px

Card 1 — **The history reader:** Following the conflict history of a valley they've been sailing through for two hours. The earthworks, the fortifications, the siege that ended a dynasty.
Card 2 — **The wine curious:** Tracing the vineyard estates visible from the deck — the families behind them, the terroir, the harvests that mattered.
Card 3 — **The geology watcher:** Reading the rock faces for what they reveal: which era, which force, which event shaped the cliff the vessel is passing right now.
Card 4 — **The local life follower:** Noticing the villages, the fishing boats, the small industries along the bank — what people here have always made their lives from.

**Individual curation statement — key differentiator line:**
Style: Playfair italic, border-left 2px `#C49A5C`, padding-left 16px, Deep Green text, 16px

> *The same silent stretch can hold many different stories. The Host Atlas curates the right one for each guest — in their language, at their pace, around their own curiosity.*

**Closing paragraph:**
> This is not something a guide — however knowledgeable, however skilled — can do for every guest simultaneously. It is not a criticism. It is simply the nature of the format: one voice, one story, one group. The Host Atlas works in the space that format cannot reach.

---

#### Screen 6 — Operator Platform

Minor copy updates only. Structure stays.

**Update positioning line at the bottom of this section:**
Find: `"HostAtlas is designed to work alongside your existing guide programme. Guides lead the highlights. We cover the river."`
Replace with (same styling — Playfair italic, border-left bronze):
> *Guides bring the highlights to life. The Host Atlas curates the silent stretches.*

**Add** "expedition" to any mention of cruise operator types in this section if present.

---

#### Screen 7 — Insight Layer

**Update headline:**
Find: `Curiosity becomes signal.`
Replace with: `Curiosity leaves a trace.`

**Update the three insight cards — replace abstract descriptions with concrete route signal format:**

Remove current card content. Replace with:

Card 1:
- Label (bronze, Inter 500 10px uppercase): `ROUTE SIGNAL · RHINE · KM 512`
- Finding (Playfair italic 14px, off-white): *"12 guests reached for context here on the last three sailings. No story exists yet."*
- Recommendation (Inter 12px, off-white 65%): Feature drawing attention: remains of a medieval toll station, currently unnamed in the route. **Recommended: one story, history lens, 3-minute audio — before the next sailing.**

Card 2:
- Label: `THEME RESONANCE · DOURO · THIS SEASON`
- Finding: *"Geology stories outperformed history stories by 2.3× dwell time."*
- Recommendation: Guests staying significantly longer with schist terracing content than village histories. **Recommended: expand geology lens on the upper Douro corridor before spring sailings.**

Card 3:
- Label: `SEASONAL DRIFT · MOSELLE · OCTOBER`
- Finding: *"October guests show 40% lower engagement with harvest content than September guests."*
- Recommendation: They already know the harvest. They want the post-harvest story — what happens to the wine, where it goes. **Recommended: a late-season layer before October sailings resume.**

Card styling: `background: rgba(255,255,255,0.07)`, `border: 0.5px solid rgba(196,154,92,0.25)`, `border-radius: 8px`, `padding: 16px 18px`. The section background should be Deep Green `#1B3D2F`.

**Keep pull quote:** `"When there's nothing there yet — that's the most interesting signal of all."`

---

#### Screen 8 — What Operators Gain

Minor updates only.

**Update local commerce section label:**
Find: `What This Can Become`
Replace with: `AN EXPANSION LAYER`

**Update local commerce closing note:**
Find: `A developing layer — one we are exploring with operators who see the potential in turning the journey itself into an authentic commercial route.`
Replace with: `Available to operators who want it — present and ready for those exploring it.`

**Update closing line:**
Find: `HostAtlas turns scenic transit from an unmanaged stretch of the journey into a branded, measurable, compounding experience asset.`
Replace with: `The Host Atlas transforms the journey between the highlights into something defined, measurable, and lasting.`

---

#### Screen 9 — Closing CTA

**Update headline:**
Find: `Currently working with a select number of operators.`
Replace with: `Currently in conversation with a select number of operators.`

**Update body copy — replace both paragraphs with:**
> We are in conversation with a small number of river, coastal, and expedition cruise operators. If the premise is relevant to your routes and your guests, we would be glad to find some time.

> There is no form. No funnel. Just a conversation with the people who built it.

**Add before the CTA — what the meeting covers (Inter 14px, off-white 60%):**
> See the prototype on a real route · Discuss what a deployment could look like for your itineraries · Walk through the insight layer with real sailing data

**Add tagline echo above CTA:**
`Curated narratives for the silent stretches` — Playfair italic, bronze `#C49A5C`, centred, 16px, padding 8px 0

**Update CTA:**
Find: `Request a conversation →`
Replace with: `Get in touch`

**Update secondary contact line — keep but add Calendly reference:**
`Schedule a call via Calendly · Or write directly: hello@hostatlas.guide`

**Update footer:**
Find: `HostAtlas — a contextual experience layer for scenic transit. River and coastal cruise operators. hostatlas.guide`
Replace with: `The Host Atlas · River, coastal, and expedition cruise operators · hostatlas.guide`

---

### PASS 5 — Meta and SEO

Update all of the following:

```html
<title>The Host Atlas — Curated narratives for the silent stretches</title>
<meta name="description" content="The Host Atlas gives river, coastal, and expedition cruise operators a contextual experience layer for the journey between the highlights. Curated narratives for the silent stretches.">
<meta property="og:title" content="The Host Atlas — Curated narratives for the silent stretches">
<meta property="og:description" content="A contextual experience layer for river, coastal, and expedition cruise operators. Turning scenic transit into curated narrative.">
```

---

## What NOT to do

- Do not add any new features, sections, or pages not listed above
- Do not change design tokens (colours, fonts, spacing scale) — they are correct
- Do not change the nav structure
- Do not add a contact form — the CTA is `mailto:hello@hostatlas.guide`
- Do not animate anything beyond what already exists
- Do not use any font other than Playfair Display and Inter
- Do not use any colour other than the five tokens: `#1B3D2F`, `#FBFAF8`, `#F5F3EF`, `#1A1A2E`, `#C49A5C`
- Do not paraphrase the locked positioning line — use it exactly as written

---

## Verification checklist — run before marking complete

- [ ] "The Host Atlas" appears everywhere — zero instances of "HostAtlas"
- [ ] Tagline appears in hero, nav (desktop), Screen 9, footer, meta tags
- [ ] "Get in touch" everywhere — zero instances of "Request a conversation"
- [ ] "river, coastal, and expedition cruise operators" in hero body
- [ ] Locked positioning line appears identically in Screens 2 and 6
- [ ] Screen order: Hero → Problem → Experience → Transformation → Personal → Platform → Insight → Gains → CTA
- [ ] Screen 5 (personal relevance) built and in correct position
- [ ] Verbatim callout boxes floating over landscape image in Screen 2
- [ ] Wallpaper split element present in Screen 2
- [ ] AR phone mockup (landscape) in Screen 3
- [ ] Three route signal cards (Rhine / Douro / Moselle) in Screen 7
- [ ] No famous landmarks in any image
- [ ] `hero-01.jpg` used in Screen 1 (or Unsplash fallback if local file not yet provided)
- [ ] Footer updated: "The Host Atlas · River, coastal, and expedition cruise operators · hostatlas.guide"
- [ ] Meta title and description updated

---

*The Host Atlas · hostatlas.guide · Update plan v1 · April 2026*
*Source of truth: hostatlas_screens_final.html and hostatlas_screens_annotations.md*

---

## PASS 6 — Research findings and verbatims

These are real traveller verbatims drawn from Cruise Critic, TripAdvisor, River Cruise Advisor, Rick Steves Travel Forum, Viator, and independent travel blogs. They are documented evidence, not marketing copy. Treat them as such — they carry more weight than anything The Host Atlas says about itself.

Execute Pass 6 after Pass 5. Do not merge these into existing body copy paragraphs. Each finding gets its own visual treatment as specified below.

---

### 6.1 Screen 2 — Three findings as a visual evidence block

Add a new visual section inside Screen 2 (TheMomentSection or TheProblemsSection), positioned AFTER the verbatim callout image section and BEFORE the wallpaper split.

**Visual treatment:**
- Dark tinted background: `#1B3D2F` (Deep Green), full width, padding 80px 0
- Three findings stacked vertically, centred, max-width 720px, gap 64px between each
- Each finding:
  - Stat/statement: Playfair Display italic, 22px, off-white `#F5F3EF`, margin-bottom 16px
  - Verbatim below: floating callout box treatment — background `#F5F3EF`, border `0.5px solid rgba(196,154,92,0.5)`, border-radius 8px, padding 14px 18px, Playfair italic 15px, Near Black text, max-width 520px, centred
  - Bronze thin line (1px, 12px tall) above each verbatim box connecting statement to quote
  - No attribution names — source line appears once at the bottom of all three

**Finding 1:**
Statement: `"60–80% of the journey unfolds without guided context."`
Body (Inter 16px, off-white 70%, max-width 560px, centred, margin-bottom 20px):
Most commentary is triggered at major landmarks. The quiet time between castles, villages, and scenic points often passes in silence.
Verbatim: `"The journey was fine… but was expecting a narrated tour, but that did not occur."`

**Finding 4:**
Statement: `"Curiosity is constant. Answers are often missing."`
Body (same style):
Guests try to identify what they see in real time — Googling from the deck, taking repeated photos, asking each other what they just passed.
Verbatim: `"Staff didn't know the landmarks… asked about the mountain… they didn't know."`

**Finding 6:**
Statement: `"The journey itself often has no narrator."`
Body (same style):
Guides cover landmarks. Excursions cover destinations. Port talks cover what comes next. But the journey in between is often left unexplained.
Verbatim: `"The scenery was extraordinary, but too often the journey passed without explanation, leaving us to wonder what we were seeing."`

**Source line — below all three findings:**
Inter 11px, off-white 35%, centred, margin-top 48px:
`Research drawn from Cruise Critic, TripAdvisor, River Cruise Advisor, Rick Steves Travel Forum, Viator, and independent travel blogs.`

---

### 6.2 Screen 5 — Finding 3 added to personal relevance section

In PersonalRelevanceSection, add Finding 3 as a pull quote immediately after the four guest example cards and before the individual curation statement.

**Treatment:**
- Full-width, centred, max-width 600px
- Bronze border-left 2px `#C49A5C`, padding-left 20px
- Statement: Playfair italic 18px, Deep Green `#1B3D2F`
- Verbatim below: same border-left treatment, Playfair italic 16px, Near Black

Statement: `"Guests are surrounded by stories — but much of the landscape remains unexplained."`

Verbatim: `"We would have liked more information about the buildings we could see on shore, and about the biology, ecology and history of the river itself."`

No attribution. No source line here — it was already credited in Screen 2.

---

### 6.3 Screen 7 — Finding 5 opens the insight section

In the InsightSection (Deep Green background), add Finding 5 as the opening statement BEFORE the headline "Curiosity leaves a trace."

**Treatment:**
- Playfair italic 20px, off-white 80%, centred, max-width 600px, margin-bottom 48px
- Verbatim below in callout box: background `rgba(255,255,255,0.07)`, border `0.5px solid rgba(196,154,92,0.3)`, border-radius 8px, padding 14px 18px, Playfair italic 15px, off-white text, centred, max-width 500px

Statement: `"The experience is relaxing — and quietly frustrating."`

Verbatim: `"The scenery was beautiful, but long stretches of sailing could feel quiet, repetitive, and sometimes a little boring."`

---

### 6.4 Screen 9 — Closing verbatim above tagline echo

In ClosingSection, add Finding 6's verbatim as a standalone typographic moment ABOVE the tagline echo and ABOVE the primary CTA.

**Treatment:**
- Playfair italic, 24px desktop / 18px mobile, off-white 85%, centred, max-width 560px
- No box. No border. No attribution. Just the words, large, in the landscape.
- Generous padding above and below: 48px

Verbatim text:
`"The scenery was extraordinary, but too often the journey passed without explanation, leaving us to wonder what we were seeing."`

---

### 6.5 Screen 2 — Closing line (locked)

At the very end of Screen 2, after the wallpaper split and after the three findings block, add this single line as a standalone typographic moment:

**Treatment:**
- Playfair italic, 28px desktop / 20px mobile, Deep Green `#1B3D2F`, centred, max-width 600px, padding 80px 0
- No border. No box. Just the line.

Text: `"Extraordinary landscapes, quietly unexplained."`

This is the closing statement of the problem. It sits immediately before the locked positioning line:
`"Guides bring the highlights to life. The Host Atlas curates the silent stretches."`

---

### 6.6 Verification — Pass 6

After completing Pass 6, confirm:
- [ ] Three findings block present in Screen 2 on Deep Green background
- [ ] Each finding has statement + body + verbatim callout box
- [ ] Source attribution line present below the three findings
- [ ] Finding 3 verbatim present in Screen 5 after guest example cards
- [ ] Finding 5 present in Screen 7 before main headline
- [ ] Finding 6 verbatim present in Screen 9 above tagline echo, large, no box
- [ ] Closing line "Extraordinary landscapes, quietly unexplained." present at end of Screen 2
- [ ] No finding appears more than once across the site
- [ ] No verbatim is attributed by name — source line in Screen 2 covers all

