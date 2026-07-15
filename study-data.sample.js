/* ============================================================
   Cisco Study Hub - SAMPLE content (placeholder)
   This is a placeholder version of study-data.js with example
   notes only, so the hub renders out-of-the-box. Replace these
   with your own notes (and glossary terms) in study-data.js.

   Keep this sample file as a reference/reset point.
   ============================================================ */
(function () {
  "use strict";

  window.STUDY_DATA = {
    NOTES: [
      {
        id: "sample-note-one",
        title: "Sample Note \u2014 Replace Me",
        topic: "Sample Topic",
        file: "",
        domains: [1],
        badges: [
          { code: "1.1", label: "Example objective", domain: 1 }
        ],
        tldr: "This is a placeholder card so the hub renders out-of-the-box. Edit study-data.js to add your own notes.",
        summary: "Replace this with a summary of your note. Text fields accept inline HTML, so you can use <strong>bold</strong> and dashes &mdash; like this. Each note becomes a card here, plus flashcards and cheat-sheet entries once those are filled in.",
        examFocus: [
          { text: "<strong>Exam focus:</strong> add the high-yield facts a question would test here.", gotcha: false },
          { text: "<strong>Common gotcha:</strong> mark tricky/distractor items with gotcha:true so they appear on the cheat sheet.", gotcha: true }
        ],
        takeaways: [
          "One-line takeaway",
          "Another key point",
          "Add as many as you like"
        ],
        flashcards: [
          { q: "What is a flashcard?", a: "A question/answer pair used for active recall practice." }
        ],
        cli: [
          { cmd: "show running-config", desc: "Example verification command" }
        ]
      },

      {
        id: "sample-note-two",
        title: "Sample Note \u2014 Second Domain",
        topic: "Sample Topic",
        file: "",
        domains: [3],
        badges: [
          { code: "3.1", label: "Example objective", domain: 3 }
        ],
        tldr: "A second example so you can see the domain colors and filtering in action.",
        summary: "Notes tagged to different domains get different accent colors, and the domain/topic/confidence filters work across every page.",
        examFocus: [
          { text: "<strong>Tip:</strong> tag each note with the domains it covers so filtering works.", gotcha: false }
        ],
        takeaways: [
          "Domains drive color + filtering",
          "Topics drive the topic filter"
        ],
        flashcards: [
          { q: "How do I add my own flashcards?", a: "Add q/a pairs to a note's flashcards array in study-data.js." }
        ],
        cli: [
          { cmd: "show version", desc: "Example verification command" }
        ]
      }
    ],

    GLOSSARY: [
      { term: "Example Term", expansion: "Example Expansion", def: "Replace with a real definition. Terms are indexed A-Z and filterable by domain.", domains: [1] },
      { term: "Sample Acronym", expansion: "Sample Acronym Meaning", def: "Another placeholder entry so the glossary renders with content.", domains: [3] }
    ]
  };
})();
