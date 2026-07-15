# Cisco Study Hub

A self-contained, **offline** study suite for **any Cisco certification exam** (CCNA, CCNP, DevNet, CyberOps, and more). No server, no build step, no dependencies -- just open `index.html` in any browser.

> This is a **blank-slate template**. It ships with placeholder demo content in `study-data.js` so it runs immediately. Rebrand it for your exam in `study-config.js`, then replace the demo notes with your own.

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Notes hub: cards, filters (domain / topic / confidence), keyword search |
| `Flashcards.html` | Active-recall flashcards, filterable by domain / topic |
| `Cheat-Sheet.html` | Aggregated "common gotchas" + CLI verification cheat sheet |
| `Glossary.html` | Acronym / term glossary across all domains |

## Quick start

1. Download or clone this repo.
2. Double-click `index.html`. That's it -- it works fully offline.

## Files

- `study.css` -- shared styles for every page.
- `study-common.js` -- shared behavior: config-driven branding, theme toggle, top navigation.
- `study-config.js` -- **the tool**: your exam name and the study "domains" (categories). No personal content.
- `study-data.js` -- **your content**: notes (`NOTES`) and glossary (`GLOSSARY`). Ships as demo placeholders here.
- `study-data.sample.js` -- the pristine placeholder content, kept as a reference / reset point.

## Rebrand it for your exam

Open `study-config.js` and edit the `exam` block and `DOMAINS`:

```js
exam: {
  title: "CCNA Study Hub",              // shown in the header + page titles
  eyebrow: "200-301",                   // small kicker above the heading
  tagline: "My notes for the CCNA.",    // intro sentence
  blueprint: "Study Domains",
  meta: ""                              // optional line, e.g. "120 Minute Exam"
},

DOMAINS: {
  "1": { name: "Network Fundamentals", color: 1 },
  "2": { name: "Network Access",       color: 2 }
  // ... up to 6, each with a color 1-6
}
```

Rename the domains to match your exam's topic areas. Every page picks up the new names and colors automatically.

## Add your notes

1. Open `study-data.js`.
2. Append one object to the `NOTES` array per note:

```js
{
  id: "unique-id",
  title: "Note Title",
  topic: "My Topic",
  file: "",
  domains: [1],
  badges: [{ code: "1.1", label: "Objective", domain: 1 }],
  tldr: "One-line summary.",
  summary: "Full summary (inline HTML allowed).",
  examFocus: [{ text: "Testable fact", gotcha: false }],
  takeaways: ["Key point"],
  flashcards: [{ q: "Question?", a: "Answer." }],
  cli: [{ cmd: "show ...", desc: "What it verifies" }]
}
```

Your note then appears across every page automatically. Add glossary entries to the `GLOSSARY` array the same way.

## Optional: turn on the readiness bar

The Notes page can show a weighted "readiness" progress bar. It stays hidden until you define an exam goal in `study-config.js`:

- give each domain a numeric `weight` (percent) and a `leaves` array of the official sub-topic codes, and
- set `exam.totalSubtopics` to the total number of leaves.

Tag your notes' `badges` with those codes and the bar tracks the distinct objectives you've covered, weighted by domain.

## Note-taking with Obsidian

The recommended way to *write* your study material is [Obsidian](https://obsidian.md) -- a free, local-first Markdown editor. Keep a source `.md` note per subject, then mirror it into `study-data.js`. Because Obsidian stores everything as plain text files on your own disk, your notes stay portable and private.

### Install Obsidian

1. Download from [obsidian.md/download](https://obsidian.md/download) (macOS, Windows, Linux; mobile apps too).
2. macOS: open the `.dmg` and drag **Obsidian** to Applications. Windows: run the installer.
3. Launch Obsidian.

### Create a vault

1. On the start screen choose **Create new vault** (or **Open folder as vault** to reuse an existing folder).
2. Name it (e.g. `My Cisco Notes`) and pick a location. Obsidian adds a hidden `.obsidian/` config folder there.
3. Optionally create topic folders inside it to stay organized.

### Taking notes

1. New note: `Cmd/Ctrl+N` (or right-click a folder -> **New note**).
2. Write in Markdown -- headings (`#`), lists (`-`), bold (`**text**`), and code fences (```) render live.
3. Use `[[wikilinks]]` to connect notes and tags (`#stp`, `#ospf`) to group topics into a knowledge graph.
4. Notes auto-save as `.md`; no export step needed.

### From note to study hub

Once a note is written, add a matching entry to `study-data.js` (above). It then appears as a card, flashcard batch, cheat-sheet content, and glossary source across every page.

## License / content note

The app code is free to use and share. It ships with no copyrighted exam material -- add your own notes.
