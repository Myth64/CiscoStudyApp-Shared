/* ============================================================
   CCNP Study Hub - shared behavior
   Theme toggle (persisted), top-nav active state + "soon" links,
   and small shared helpers used across all hub pages.
   ============================================================ */
(function () {
  "use strict";

  var STUDY = (window.STUDY = window.STUDY || {});

  /* ---- Shared helpers ------------------------------------- */

  // Convert an HTML-ready string into plain text (decodes entities,
  // strips tags). Used to build clean, searchable text.
  STUDY.stripHtml = function (html) {
    var tmp = document.createElement("div");
    tmp.innerHTML = html == null ? "" : String(html);
    return (tmp.textContent || tmp.innerText || "").replace(/\s+/g, " ").trim();
  };

  // Zero-pad a note index (1 -> "01").
  STUDY.pad2 = function (n) {
    return ("0" + n).slice(-2);
  };

  /* ---- Theme toggle --------------------------------------- */

  function initTheme() {
    var root = document.documentElement;
    var toggle = document.getElementById("themeToggle");
    var sun = "\u2600";
    var moon = "\u263D";

    function systemPrefersDark() {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    function isDark() {
      var theme = root.getAttribute("data-theme");
      if (theme === "dark") return true;
      if (theme === "light") return false;
      return systemPrefersDark();
    }

    function updateIcon() {
      if (toggle) toggle.textContent = isDark() ? sun : moon;
    }

    var stored = null;
    try {
      stored = localStorage.getItem("ns-theme");
    } catch (e) {}
    if (stored === "dark" || stored === "light") {
      root.setAttribute("data-theme", stored);
    }
    updateIcon();

    if (toggle) {
      toggle.addEventListener("click", function () {
        var next = isDark() ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try {
          localStorage.setItem("ns-theme", next);
        } catch (e) {}
        updateIcon();
      });
    }

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
        if (!root.getAttribute("data-theme")) updateIcon();
      });
    }
  }

  /* ---- Navigation ----------------------------------------- */

  function initNav() {
    var current = document.body.getAttribute("data-page");
    var links = document.querySelectorAll(".nav-link");
    Array.prototype.forEach.call(links, function (link) {
      if (current && link.getAttribute("data-page") === current) {
        link.classList.add("active");
      }
      // Pages not built yet are marked data-soon; keep them inert.
      if (link.getAttribute("data-soon") === "true") {
        link.classList.add("soon");
        link.setAttribute("aria-disabled", "true");
        link.setAttribute("title", "Coming soon");
        link.addEventListener("click", function (e) {
          e.preventDefault();
        });
      }
    });
  }

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    initTheme();
    initNav();
  });
})();
