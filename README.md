# CCNP Study Hub (Shareable Edition)

A self-contained, **offline** study suite for the **Cisco CCNP ENCOR 350-401** exam. No server, no build step, no dependencies — just open `CCNP-Study.html` in any browser.

> This is the **blank-slate / shareable edition**. It ships with placeholder demo content in `study-data.js` so it runs immediately. Replace that content with your own study notes to make it yours.

## Pages

| Page | Purpose |
| --- | --- |
| `CCNP-Study.html` | Notes hub: cards, filters (domain / topic / confidence), search, weighted readiness bar |
| `Flashcards.html` | Active-recall flashcards, filterable by domain / topic |
| `Cheat-Sheet.html` | Aggregated "common gotchas" + CLI verification cheat sheet |
| `Glossary.html` | Acronym / term glossary across all domains |

## Quick start

1. Download or clone this repo.
2. Double-click `CCNP-Study.html`. That's it — it works fully offline.

## Files

- `study.css` — shared styles for every page.
- `study-common.js` — shared behavior: theme toggle + top navigation.
- `study-config.js` — **the tool**: ENCOR blueprint (domains, weights, colors, 47 sub-topics). No personal content.
- `study-data.js` — **your content**: notes (`NOTES`) and glossary (`GLOSSARY`). Ships as demo placeholders here.
- `study-data.sample.js` — the pristine placeholder content, kept as a reference/reset point.

## Make it yours

1. Open `study-data.js`.
2. Append one object to the `NOTES` array per note:

```js
{
  id: "unique-id",
  title: "Note Title",
  topic: "Network Switching",
  file: "Network Switching/Note Title.md",
  domains: [3],
  badges: [{ code: "3.1.c", label: "STP", domain: 3 }],
  tldr: "One-line summary.",
  summary: "Full summary (inline HTML allowed).",
  examFocus: [{ text: "Testable fact", gotcha: false }],
  takeaways: ["Key point"],
  flashcards: [{ q: "Question?", a: "Answer." }],
  cli: [{ cmd: "show ...", desc: "What it verifies" }]
}
```

Your note then appears across every hub page automatically. Add glossary entries to the `GLOSSARY` array the same way.

## License / content note

The app code is free to use and share. Cisco exam blueprint topic labels are referenced for study organization only; no copyrighted Cisco exam material is included.
