/* ============================================================
   Cisco Study Hub - configuration (part of the TOOL)
   This file is where you brand the hub for whatever exam you are
   studying and define your study "domains" (categories). It holds
   no personal study material - that lives in study-data.js.

   To make this yours:
     - exam.title    -> shows in the header and page titles
     - exam.eyebrow  -> small kicker above the main heading
     - exam.tagline  -> intro sentence under the heading
     - DOMAINS       -> rename/recolor the categories your notes use

   Optional: to turn on the weighted "readiness" bar, give each
   domain a numeric `weight` (percent) and a `leaves` array of the
   official sub-topic codes, and set exam.totalSubtopics to the
   total number of leaves. Leave them off and the bar stays hidden.
   ============================================================ */
(function () {
  "use strict";

  window.STUDY_CONFIG = {
    exam: {
      title: "Cisco Study Hub",
      eyebrow: "Your personal study companion",
      tagline: "Add your notes and they appear here as searchable cards, with matching flashcards, cheat-sheet entries, and glossary terms.",
      blueprint: "Study Domains",
      meta: "",
      totalSubtopics: 0
    },

    // Display order of the domains in the blueprint grid.
    DOMAIN_ORDER: ["1", "2", "3", "4", "5", "6"],

    // domain number -> { name, color index (d1-d6) }
    // Rename these to match your exam's domains/topics. Add an
    // optional `weight` (%) and `leaves` array to enable the
    // readiness bar (see the note at the top of this file).
    DOMAINS: {
      "1": { name: "Domain 1", color: 1 },
      "2": { name: "Domain 2", color: 2 },
      "3": { name: "Domain 3", color: 3 },
      "4": { name: "Domain 4", color: 4 },
      "5": { name: "Domain 5", color: 5 },
      "6": { name: "Domain 6", color: 6 }
    }
  };
})();
