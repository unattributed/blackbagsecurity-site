(() => {
  "use strict";

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const languageLinks = document.querySelectorAll(".lang-switch a");
  languageLinks.forEach((link) => {
    link.addEventListener("click", () => {
      try {
        const value = link.textContent && link.textContent.trim().toLowerCase();
        if (value === "en" || value === "fr") {
          window.localStorage.setItem("bbs-language-choice", value);
        }
      } catch (err) {
        // ignore storage errors
      }
    });
  });

  const reveals = document.querySelectorAll("[data-reveal]");
  if (!reveals.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
})();
