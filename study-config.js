/* ============================================================
   CCNP Study Hub - exam configuration (part of the TOOL)
   This file defines the ENCOR 350-401 blueprint: exam metadata
   and the six domains with their weights, colors, and official
   leaf sub-topics. It contains no personal study material, so it
   ships with the tool. Personal content lives in study-data.js.
   ============================================================ */
(function () {
  "use strict";

  window.STUDY_CONFIG = {
    exam: {
      title: "CCNP \u00b7 ENCOR 350-401",
      eyebrow: "Implementing Cisco Enterprise Network Core Technologies",
      blueprint: "ENCOR 350-401 v1.2 \u2014 Exam Domains",
      meta: "120 Minute Exam \u00b7 CCNP &amp; CCIE Enterprise",
      totalSubtopics: 47
    },

    // Display order of the domains in the blueprint grid.
    DOMAIN_ORDER: ["1", "2", "3", "4", "5", "6"],

    // domain number -> { name, weight (%), color index (d1-d6), leaf sub-topics }
    // Weighted readiness = sum over domains of weight * (covered leaves / total leaves)
    DOMAINS: {
      "1": {
        name: "1.0 Architecture",
        weight: 15,
        color: 1,
        leaves: ["1.1.a", "1.1.b", "1.2.a", "1.2.b", "1.3.a", "1.3.b", "1.4"]
      },
      "2": {
        name: "2.0 Virtualization",
        weight: 10,
        color: 2,
        leaves: ["2.1.a", "2.1.b", "2.1.c", "2.2.a", "2.2.b", "2.3.a", "2.3.b"]
      },
      "3": {
        name: "3.0 Infrastructure",
        weight: 30,
        color: 3,
        leaves: ["3.1.a", "3.1.b", "3.1.c", "3.2.a", "3.2.b", "3.2.c", "3.2.d", "3.3.a", "3.3.b", "3.3.c", "3.3.d"]
      },
      "4": {
        name: "4.0 Network Assurance",
        weight: 10,
        color: 4,
        leaves: ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6"]
      },
      "5": {
        name: "5.0 Security",
        weight: 20,
        color: 5,
        leaves: ["5.1.a", "5.1.b", "5.2.a", "5.2.b", "5.3", "5.4.a", "5.4.b", "5.4.c", "5.4.d"]
      },
      "6": {
        name: "6.0 Automation &amp; AI",
        weight: 15,
        color: 6,
        leaves: ["6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7"]
      }
    }
  };
})();
