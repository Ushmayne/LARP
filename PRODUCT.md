# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js. One responsive web app, designed mobile-first. Native iOS/Android apps are not planned for now.

## Users

People who are about to spend time around fans of a topic they know little or nothing about, and who want to hold their own in the conversation:

- **Social survival:** a date, the in-laws, or a friend group that's deep into a sport, show, game, or hobby. They want to keep up and not look lost.
- **Work small talk:** client dinners, office chat, networking. They need enough to bond over the big game or the show everyone's watching.
- **Curious but busy:** people who genuinely want to get into a topic and use a pack as a fast on-ramp, not just a bluff.

The job in every case: get conversation-ready on a topic in about five minutes.

## Product Purpose

Larp helps people act like they know a topic when in real life they may not. A short, focused **pack** gives someone the names, language, opinions, and deep cuts they need to pass in a conversation, and a **vibe check** tells them whether they'd pass. Success means a user opens a pack before an event, finishes it in minutes, and walks in able to keep up, and sometimes surprises a real fan.

## Positioning

Larp is not an encyclopedia or a course. It's a conversation kit built for passing as a fan: it teaches what fans actually say and argue about, not what a textbook would cover. It's in on the joke. Bluffing is the premise, and the content is written by people who really know the topic (the community), with the Larp team curating the best of it.

## Operating Context

- Used right before or on the way to a social or work moment, often on a phone with only a few minutes free.
- Covers **any fandom** from launch: sports, shows, games, music, cars, wine, and anything else people geek out about. Sports set the tone of the voice ("know ball") but don't limit the scope.
- A topic has one or more packs. Users browse or search topics, open a pack, read through it, and take its vibe check.

## Capabilities and Constraints

**Pack contents.** A typical pack includes:

- **Key facts & names:** the players, teams, characters, eras, or works you're expected to know.
- **Slang & phrases:** lines you can drop into conversation, with what they mean.
- **Hot takes:** ready-made opinions so you can join the debate.
- **Insane ball knowledge:** deep-cut facts that make you sound like a lifelong fan.
- **Vibe check:** a short quiz at the end that tells you whether you'd pass as a real fan.

**Pack authorship.** Community plus curated: anyone can **write a pack**, and the Larp team curates and features the best ones.

**Terminology** (use these names plainly): packs, topics, vibe check, write a pack.

**Accounts** (decided 2026-11-24): the landing page is public; reading topics and packs, taking vibe checks, and writing a pack all require signing in. Sign-in is OAuth only (Google and GitHub) through Supabase Auth. No passwords.

**Open product decisions** (not decided; do not invent):

- How curation and moderation work (review queue, ratings, featured status).
- Monetization, if any.
- Whether vibe check results are shareable, and in what form.

## Brand Commitments

The brand guide at `inspo/brandguide.txt` (Nov 24, 2026) is binding. It defines the Pink Pop palette, contrast rules, typography, logo usage, and UI style. Visual specifics belong there and in DESIGN.md, not here.

- **Name:** lowercase "larp" in the logo wordmark; "Larp" at the start of a sentence.
- **Mark:** Groucho disguise glasses (eyebrows, round frames, nose, mustache) on a rounded-square tile. Logo rules in the guide (clear space, minimum size, no recolouring, SVG on the web) apply.
- **Voice:** in on the joke. Playful, confident, a little cheeky, never mean. Short sentences, like talking to a friend. Uses the audience's slang ("know ball", "hot take", "run it back") without overdoing it. Jokes about bluffing, never about the hobbies or their fans.
- **Taglines in use:** "Know ball in 5 minutes." · "Act like you know ball." · "Larp responsibly." · "Could you pass as a real fan?"
- **Icons:** simple line icons, never emoji.

## Evidence on Hand

- `inspo/brandguide.txt`: the brand guide.
- `inspo/larp-icon.svg`: the app icon (pink tile, plum glasses, salmon nose).
- **Missing assets the guide refers to:** `larp-logo-on-plum`, `larp-logo-on-pink`, `larp-logo-transparent`, `larp-icon-square`, and PNG exports. These need to be produced or supplied.
- **No real content yet:** there are no packs, topics, users, testimonials, usage numbers, or press. Future work must not fabricate any of them. Placeholder content must be clearly marked as placeholder.

## Product Principles

1. **Five minutes or it failed.** Every pack is scannable and finishable on a phone in about five minutes. Cut anything that doesn't help someone hold a conversation.
2. **Say what fans say.** Prioritise the phrases, takes, and deep cuts real fans use over textbook completeness.
3. **In on the joke, never at anyone's expense.** The bluff is the bit. The fans and their hobbies are never the punchline.
4. **Fans write it, Larp vouches for it.** Community authorship gives packs credibility, and curation keeps quality high.
5. **Prove it.** The vibe check closes the loop: users should leave knowing whether they'd pass.

## Accessibility & Inclusion

- Text contrast meets WCAG AA: 4.5:1 for body text, 3:1 for large or bold text. The brand guide's contrast table lists which colour pairings are allowed.
- Mobile-first, phone-friendly reading is a core requirement, not a later adaptation.
