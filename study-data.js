/* ============================================================
   CCNP Study Hub - SAMPLE content (for sharing)
   This is a placeholder version of study-data.js with example
   notes only. To share the tool without your personal material:
     1. Copy the hub files EXCEPT study-data.js (and the .md notes).
     2. Rename this file to study-data.js.
   The recipient then replaces these samples with their own notes.
   ============================================================ */
(function () {
  "use strict";

  window.STUDY_DATA = {
    NOTES: [
      {
        id: "sample-note-one",
        title: "Sample Note \u2014 Replace Me",
        topic: "Network Switching",
        file: "",
        domains: [1],
        badges: [
          { code: "1.1.a", label: "Example objective", domain: 1 }
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
        title: "Sample Note \u2014 Infrastructure",
        topic: "Network Switching",
        file: "",
        domains: [3],
        badges: [
          { code: "3.1.c", label: "Example STP objective", domain: 3 }
        ],
        tldr: "A second example so you can see the domain colors and filtering in action.",
        summary: "Notes tagged to different domains get different accent colors, and the readiness bar is weighted by each domain's exam percentage.",
        examFocus: [
          { text: "<strong>Tip:</strong> tag each note with the domains it covers so filtering and progress work.", gotcha: false }
        ],
        takeaways: [
          "Domains drive color + progress",
          "Topics drive the topic filter"
        ],
        flashcards: [
          { q: "Which table does a switch use to forward a frame?", a: "The MAC address table (CAM)." }
        ],
        cli: [
          { cmd: "show spanning-tree", desc: "Verify STP state and root bridge" }
        ]
      }
    ],

    GLOSSARY: [
      { term: "CAM", expansion: "Content-Addressable Memory", def: "The MAC address table used for Layer 2 forwarding decisions.", domains: [3] },
      { term: "FHRP", expansion: "First Hop Redundancy Protocol", def: "Family of protocols (HSRP, VRRP, GLBP) providing a redundant default gateway.", domains: [1, 3] }
    ]
  };
})();
