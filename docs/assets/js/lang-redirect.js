(() => {
  "use strict";
  const path = window.location.pathname || "/";
  const rootPaths = ["/", "/index.html"];
  if (!rootPaths.includes(path)) return;

  const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
  const normalized = langs.map((lang) => String(lang).toLowerCase());

  const target = normalized.find((lang) =>
    lang.startsWith("ja") ||
    lang.startsWith("ko") ||
    lang === "pt-br" ||
    lang.startsWith("pt") ||
    lang.startsWith("ar")
  );

  if (!target) return;

  if (target.startsWith("ja")) {
    window.location.replace("/ja/");
    return;
  }
  if (target.startsWith("ko")) {
    window.location.replace("/ko/");
    return;
  }
  if (target === "pt-br" || target.startsWith("pt")) {
    window.location.replace("/pt-br/");
    return;
  }
  if (target.startsWith("ar")) {
    window.location.replace("/ar/");
  }
})();
