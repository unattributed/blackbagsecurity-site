(() => {
  "use strict";
  const path = window.location.pathname || "/";
  const rootPaths = ["/", "/index.html"];
  if (!rootPaths.includes(path)) return;

  const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
  const normalized = langs.map((lang) => String(lang).toLowerCase());

  const target = normalized.find((lang) =>
    lang.startsWith("th") ||
    lang.startsWith("fr")
  );

  if (!target) return;

  if (target.startsWith("th")) {
    window.location.replace("/th/");
    return;
  }
  if (target.startsWith("fr")) {
    window.location.replace("/fr/");
  }
})();
