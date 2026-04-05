(() => {
  "use strict";

  if (window.location.pathname !== "/" && window.location.pathname !== "/index.html") return;

  try {
    const langPref = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    const normalized = String(langPref).toLowerCase();

    if (normalized.startsWith("th")) {
      window.location.replace("/th/");
      return;
    }

    if (normalized.startsWith("fr")) {
      window.location.replace("/fr/");
      return;
    }

    if (normalized.startsWith("de")) {
      window.location.replace("/de/");
    }
  } catch (err) {
  }
})();
