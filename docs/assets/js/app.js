(() => {
  "use strict";

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const languageLinks = document.querySelectorAll(".lang-switcher a");
  languageLinks.forEach((link) => {
    link.addEventListener("click", () => {
      try {
        const value = link.dataset.langSwitch;
        if (value === "en" || value === "th" || value === "fr") {
          window.localStorage.setItem("bbs-language-choice", value);
        }
      } catch (err) {
        // Storage is optional.
      }
    });
  });

  const reveals = document.querySelectorAll("[data-reveal]");
  if (reveals.length) {
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
      );
      reveals.forEach((el) => revealObserver.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }
  }

  const jumpbar = document.querySelector(".iv3-jumpbar");
  if (jumpbar) {
    const links = Array.from(jumpbar.querySelectorAll('a[href^="#"]'));
    const tracked = links
      .map((link) => {
        const id = decodeURIComponent(link.getAttribute("href").slice(1));
        const section = document.getElementById(id);
        return section ? { link, section, id } : null;
      })
      .filter(Boolean);

    const setActive = (id) => {
      tracked.forEach(({ link, id: itemId }) => {
        const active = itemId === id;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    links.forEach((link) => {
      link.addEventListener("click", () => {
        const id = decodeURIComponent(link.getAttribute("href").slice(1));
        setActive(id);
      });
    });

    if (tracked.length && "IntersectionObserver" in window) {
      const visibility = new Map();
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => visibility.set(entry.target.id, entry.intersectionRatio));
          let best = tracked[0];
          let bestRatio = -1;
          tracked.forEach((item) => {
            const ratio = visibility.get(item.id) || 0;
            if (ratio > bestRatio) {
              best = item;
              bestRatio = ratio;
            }
          });
          if (best && bestRatio > 0) setActive(best.id);
        },
        { rootMargin: "-24% 0px -58% 0px", threshold: [0, 0.1, 0.35, 0.65, 1] }
      );
      tracked.forEach(({ section }) => sectionObserver.observe(section));
    } else if (tracked.length) {
      setActive((window.location.hash || `#${tracked[0].id}`).slice(1));
    }
  }

  if (document.body.classList.contains("editorial-v3-body")) {
    let ticking = false;
    const updateProgress = () => {
      const root = document.documentElement;
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      const progress = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      root.style.setProperty("--bbs-scroll-progress", `${progress.toFixed(2)}%`);
      ticking = false;
    };

    const requestProgress = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress);
  }
})();
