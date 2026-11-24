---
name: Larp
description: Five-minute fandom packs. Act like you know ball.
colors:
  hot-pink: "#d83f87"
  plum: "#2a1b3d"
  indigo: "#44318d"
  salmon: "#e98074"
  grey-blue: "#a4b3b6"
  field: "#c3cdcf"
  plum-soft: "rgb(42 27 61 / 0.82)"
  hair-plum: "rgb(42 27 61 / 0.28)"
  hair-light: "rgb(164 179 182 / 0.22)"
typography:
  display:
    fontFamily: "Fredoka, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 8.6vw + 0.6rem, 7.5rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-2px"
  page-title:
    fontFamily: "Fredoka, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw + 1rem, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-2px"
  headline:
    fontFamily: "Fredoka, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 3vw + 1.35rem, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-2px"
  title:
    fontFamily: "Fredoka, ui-rounded, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1vw + 1.2rem, 2.125rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.5px"
  sticker:
    fontFamily: "Fredoka, ui-rounded, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.3px"
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 0.4vw + 1.08rem, 1.375rem)"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.2vw + 1rem, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.1
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.09em"
  tag:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.06em"
rounded:
  pill: "999px"
  lg: "28px"
  md: "18px"
  tail: "8px"
spacing:
  section: "clamp(4rem, 8vw, 7.5rem)"
  content-max: "1180px"
  gutter: "24px"
  gutter-mobile: "16px"
  row: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.hot-pink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.6rem"
    height: "3.25rem"
  button-on-dark:
    backgroundColor: "{colors.hot-pink}"
    textColor: "{colors.plum}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.6rem"
    height: "3.25rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.plum}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.6rem"
  button-secondary-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.grey-blue}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.6rem"
  tag:
    backgroundColor: "{colors.salmon}"
    textColor: "{colors.plum}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: "0.28rem 0.75rem"
  tag-grey:
    backgroundColor: "{colors.grey-blue}"
    textColor: "{colors.plum}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: "0.28rem 0.75rem"
  sticker:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.grey-blue}"
    typography: "{typography.sticker}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 1.15rem 0.45rem"
  sticker-indigo:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.grey-blue}"
    typography: "{typography.sticker}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 1.15rem 0.45rem"
  search-pill:
    backgroundColor: "{colors.grey-blue}"
    textColor: "{colors.plum}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.35rem 0.35rem 1.15rem"
  input-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.plum}"
    typography: "{typography.body}"
    padding: "0.75rem 1rem"
    height: "3.25rem"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.grey-blue}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 1.1rem"
    height: "2.75rem"
  chip-selected:
    backgroundColor: "{colors.grey-blue}"
    textColor: "{colors.plum}"
  bubble-fan:
    backgroundColor: "{colors.grey-blue}"
    textColor: "{colors.plum}"
    rounded: "{rounded.lg}"
    padding: "1.1rem 1.45rem"
  bubble-you:
    backgroundColor: "{colors.salmon}"
    textColor: "{colors.plum}"
    rounded: "{rounded.lg}"
    padding: "1.1rem 1.45rem"
  reply:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.grey-blue}"
    padding: "0.85rem 1.4rem"
    height: "3.5rem"
  reply-right:
    backgroundColor: "{colors.salmon}"
    textColor: "{colors.plum}"
  jump-link-current:
    backgroundColor: "{colors.grey-blue}"
    textColor: "{colors.plum}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.95rem"
  checklist:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.grey-blue}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
---

# Design System: Larp

## Overview

**Creative North Star: "The Group Chat Cheat Sheet"**

Larp is Pink Pop: a loud hot pink hero, then full-bleed bands of plum, grey blue and indigo, ending in a plum footer. Color comes in whole bands, not boxes. Each band sets its own text color and focus color, so a page reads as a stack of colored floors. Headlines are big, bold, tightly tracked Fredoka; everything you read is Inter.

The system is built to show the lines you would actually say. Its two signature forms are the chat exchange (grey blue fan bubbles, salmon "you" bubbles, indigo reply pills) and the cheat-sheet row (a Fredoka label on the left, Inter content on the right, divided by plum rules). Pills carry every action and tag; tilted plum and indigo stickers carry topics. The brand guide (inspo/brandguide.txt) binds the palette, contrast pairs, type sizes and logo rules. This file records what the build settled beyond it.

The build rejects boxed cards, course modules and progress dashboards. Grouping comes from 3px plum rules and band changes, never from bordered or shadowed panels.

**Key Characteristics:**
- Full-bleed color bands in a fixed order: pink hero, plum, grey blue, indigo CTA, plum footer.
- Fredoka 700 headlines at about -2px tracking; Inter 400 body at 1.55 line height.
- Pills for every button, tag, chip, search field and jump link.
- Tilted topic stickers (2 to 5 degrees) with the one shared soft shadow.
- 3px plum rules in place of boxes; label-and-content rows on grey blue.
- Chat bubbles and reply pills as the place where the product shows its point.

## Colors

Five brand colors from the brand guide, used as whole bands and pills, plus one lifted field tone and three translucent rule and text tints.

### Primary
- **Hot Pink** (hot-pink): the loud color. The home hero band, primary buttons on dark bands, the plum button's text, page titles and section headlines on plum, the footer tagline, the logo tile on plum, and the last stop on the five-minute rail.

### Secondary
- **Indigo** (indigo): the second surface. The call-to-action band, indigo stickers, vibe-check reply pills, the reading-bar track, the rail line, quiz step pips, and the 3px rule on top of the footer. Grey blue text on indigo passes for body copy.

### Tertiary
- **Salmon** (salmon): the rare accent. Tags and badges, the "you" chat bubble, the reading-bar fill and timer, rail time stamps and dots, small labels on plum, the correct reply, the highlighted phrase in an indigo CTA headline, text selection, and the focus ring on plum and indigo.

### Neutral
- **Plum** (plum): the calm base. Page background, header and footer, pack bar, primary button fill, text on pink, grey blue and salmon, 3px rules, sticker fill, the write-a-pack checklist panel.
- **Grey Blue** (grey-blue): reading text on plum and indigo; the background of reading bands (packs list, cheat sheet, write a pack); fan bubbles, the search pill, the current jump link and selected chips.
- **Field Grey** (field): grey blue lifted, used only as the fill of text inputs and radio buttons so they read on a grey blue band.
- **Soft Plum** (plum-soft): secondary text on grey blue (row subtitles, section notes, composer hints, placeholders).
- **Plum Hairline** (hair-plum): the thin 1.5px divider between rows inside a cheat-sheet section or composer list.
- **Light Hairline** (hair-light): the 1px divider on plum (footer fine print, checklist, missed questions).

### Named Rules
**The Band Rhythm Rule.** Color arrives as full-bleed bands in the brand order: pink hero, plum, grey blue, indigo call to action, plum footer. Inner pages swap the pink hero for a plum page head. Each band sets its text color and its focus-ring color (plum ring on pink and grey blue, salmon ring on plum and indigo).

**The Small Pink Trap Rule.** Pink text appears only at headline size or 19px bold and up, and only on plum (or as plum on pink). Pink never carries text on indigo or grey blue. Anything small uses salmon or grey blue.

**The Rare Salmon Rule.** Salmon stays small: pills, the "you" bubble, progress, stamps, labels, rings. It never fills a band or a large panel, so it keeps its pop.

## Typography

**Display Font:** Fredoka 600/700 (with ui-rounded, system-ui)
**Body Font:** Inter 400 to 700 (with system-ui)

**Character:** Fredoka is round, bold and a bit goofy, tightened hard so it hits like a punchline. Inter does all the reading, with bold Inter for leads, buttons and labels.

### Hierarchy
- **Display** (Fredoka 700, 3.4rem to 7.5rem fluid, 0.92): the home hero headline only, capped at about 9 to 10ch.
- **Page title** (Fredoka 700, 3rem to 6rem fluid, 0.95): the h1 in plum page heads (pack titles, topics), set in hot pink. On a topic page the title becomes an indigo sticker (see Components).
- **Headline** (Fredoka 700, 2.25rem to 3.5rem fluid, 1.02, -2px): section headings and cheat-sheet section heads.
- **Title** (Fredoka 700, 1.5rem to 2.125rem fluid, 1.12, -0.5px): row titles, rail step titles, empty-state headings. Hot-take lines use the same voice slightly larger (1.6rem to 2.125rem).
- **Sticker / row label** (Fredoka 600, 1.5rem, 1.15, -0.3px): topic stickers and the left-hand label of cheat-sheet rows.
- **Lead** (Inter 700, 1.1875rem to 1.375rem, 1.4): the line under a headline, and the "cut" lines in the deep-cuts section.
- **Body** (Inter 400, 1.0625rem to 1.125rem, 1.55): everything you read, held to 40 to 62ch.
- **Button** (Inter 700, 1.1875rem / 19px): every full-size button, including the header CTA. Small buttons drop to 1rem.
- **Label** (Inter 700, 0.875rem, 0.09em, uppercase): functional labels only: rail time stamps, chat speaker names, the question counter, the caption next to a placeholder tag, the label of a sticker group.
- **Tag** (Inter 700, 0.8125rem, 0.06em, uppercase): text inside tags and badges.

### Named Rules
**The Tight Fredoka Rule.** Every Fredoka headline runs at about -2px tracking and a line height near 1. Loose display type is off-brand.

**The Label Earns Its Place Rule.** Uppercase labels name something the reader needs (who is speaking, what time, which question). They never sit above a headline as decoration.

## Layout

Content sits in a centered column, max 1180px with 24px gutters (16px under 520px). Bands run full width; vertical band padding is fluid from 4rem to 7.5rem. The home hero is a two-column grid (headline, search and stickers left; chat exchange right) that stacks under 900px in the order headline, search, stickers, chat.

Lists are rows, not grids. A pack row is three columns (13rem sticker lead, title and subtitle, time and a round go button) that collapses to two under 760px. Cheat-sheet sections use a 17rem label column beside the content column, stacking to one column under 860px. Write a pack is a two-column composer with a 19rem sticky checklist on the right that moves above the form under 960px.

The five-minute rail is a horizontal five-step timeline on desktop (10px indigo bar, salmon dots, pink final stop) that turns into a vertical line on the left under 900px.

On pack pages a sticky plum bar holds horizontally scrolling jump links (faded at the right edge), the minutes-left timer, and a 6px indigo track with a salmon fill that grows as you read.

## Elevation & Depth

Mostly flat. Depth comes from band color changes and plum rules. One shared soft shadow marks things that feel "picked up" off the page.

### Shadow Vocabulary
- **Pop** (`box-shadow: 0 10px 24px -10px rgb(33 21 47 / 0.55), 0 2px 6px -2px rgb(33 21 47 / 0.35)`): stickers (including the topic-title sticker), chat bubbles, the search pill at rest, and buttons on hover.

### Named Rules
**The Picked-Up Rule.** Only stickers, bubbles, the search pill and hovered buttons cast the Pop shadow. Rows, sections, fields, the checklist panel and the header are flat.

## Shapes

Pills everywhere something can be pressed or tagged: buttons, tags, chips, stickers, search, jump links, quiz pips, the rail bar. Larger soft shapes use 26 to 28px radii (chat bubbles, reply pills, the checklist panel). Speech shapes keep one corner tight (8px) on the speaker's side: bottom-left for the fan, bottom-right for you. Stickers are tilted from -3 to 4 degrees, cycling by position so a group never lines up. Structure comes from 3px plum rules under section heads and around row lists, with 1.5px plum hairlines between rows.

**The No Boxes Rule.** Content is never grouped in a bordered or shadowed card. Use a band, a 3px plum rule, or a row. The plum checklist on Write a pack is the one panel, and it is flat.

## Components

### Buttons
Chunky, confident pills.
- **Shape:** full pill, 3.25rem tall minimum, 3px border in the fill color.
- **Primary:** plum fill, hot pink text, 19px bold Inter. Used on pink and grey blue bands.
- **On dark:** hot pink fill, plum text. Used on plum and indigo bands, including the header CTA on inner pages.
- **Secondary:** transparent with a 3px plum outline and plum text; on dark bands the outline and text are grey blue.
- **Hover / Focus / Active:** lifts 1px and gains the Pop shadow on hover; presses to 0.97 scale; focus shows a 3px ring 3px out in the band's focus color. Disabled is 55% opacity with no lift.
- **Small:** 2.6rem tall, 1rem text. The header CTA is a compact 2.9rem with full 19px text.
- **Icons:** line icons (Lucide, stroke 2.5 to 2.75) at 1.15em, never emoji.

### Tags
- **Style:** salmon or grey blue pill, plum uppercase text, optional 15px line icon (the Placeholder tag carries a flask).
- **Use:** badges such as Placeholder, and the "Use it" / "Drop it" markers in cheat-sheet rows.

### Topic Stickers
- **Style:** plum or indigo pill, grey blue Fredoka 600 at 24px (20px small), tilted, with the Pop shadow.
- **Hover:** straightens, lifts 3px and scales to 1.04.
- **Topic title:** on a topic page the h1 itself is an indigo sticker at page-title scale (2.75rem to 5.5rem), tilted -3 degrees. This goes beyond the brand guide's 24px sticker size.

### Chips
- **Style:** transparent pill with a 2px grey blue outline on plum; selected chips fill grey blue with plum text. Used as the topic filters.

### Inputs / Fields
- **Search pill:** grey blue pill with a 3px plum border, plum line icon, semibold plum input text, pink caret, plum button at the right end. On plum the border turns grey blue. Focus puts a ring around the whole pill.
- **Text fields:** field-grey fill, 2px plum border, plum text, pink caret, 3.25rem tall. Focus lightens the fill slightly and adds a 3px plum ring.
- **Radios:** custom 1.6rem field-grey circles that fill plum with a field-grey inner ring when checked.

### Navigation
- **Header:** logo left (inverted plum tile on the pink hero, pink tile on plum), "Topics" as bold text and the Write a pack pill on the right. The current page is underlined at 3px.
- **Pack bar:** sticky plum bar with pill jump links; the current section fills grey blue.
- **Footer:** plum, separated from the band above by a 3px indigo rule; the hot pink Fredoka tagline "Larp responsibly.", bold links, and a hairline above the fine print.

### Chat Exchange (signature)
- **Fan bubble:** grey blue, plum text, tail bottom-left, aligned left. A big variant sets the line in Fredoka 700.
- **You bubble:** salmon, plum text, tail bottom-right, aligned right.
- **Speaker names:** uppercase label at the top of each bubble ("Real fan", "You, larping").
- **Motion:** bubbles rise, scale and unblur in (620ms, staggered 160ms) when motion is allowed.
- **Vibe check:** each question is a big fan bubble. Answers are right-aligned indigo reply pills (tail bottom-right, 3px border that turns salmon on hover). After answering, the right reply fills salmon, a wrong pick goes hollow with a grey blue outline, the rest go hollow, and the fan replies with the explanation.

### Cheat-Sheet Row (signature)
The pack layout, chosen by the user on 2026-11-24 over Editorial and Tabs. On grey blue: section head (headline plus a soft-plum note) over a 3px plum rule, then rows of Fredoka 600 label beside Inter content, split by plum hairlines and closed with a 3px rule. Slang rows add a salmon "Use it" tag and a bold example line; hot takes set the take in Fredoka with a line-icon pushback line; deep cuts swap to a bold lead line beside a "Drop it" tag.

### Five-Minute Rail (signature)
The home page shows how a pack works as a five-stop timeline with time stamps; the pack page shows the same idea as the salmon reading bar that counts down the minutes left.

## Do's and Don'ts

### Do:
- **Do** build pages as full-bleed bands in the order pink hero (or plum page head), plum, grey blue, indigo CTA, plum footer.
- **Do** use plum fill and pink text for buttons on pink or grey blue, and pink fill and plum text on plum or indigo, always as 19px bold pills.
- **Do** separate content with 3px plum rules and 1.5px plum hairlines instead of cards.
- **Do** show topics as tilted plum or indigo Fredoka stickers.
- **Do** show product value as a chat exchange: grey blue fan bubbles, salmon "you" bubbles.
- **Do** set the focus ring per band: plum on pink and grey blue, salmon on plum and indigo.
- **Do** use simple line icons at stroke 2.5 or more.

### Don't:
- **Don't** put pink text on indigo or grey blue, or use pink for any small text.
- **Don't** use boxed or shadowed cards, card grids, course modules or progress dashboards.
- **Don't** fill a band or large panel with salmon.
- **Don't** put the Pop shadow on rows, sections, fields or panels.
- **Don't** use emoji as icons.
- **Don't** place an uppercase label above a headline as a decorative eyebrow.
- **Don't** put the transparent logo on plum, or stretch, rotate or recolor the glasses.
