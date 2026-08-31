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
        // ignore storage errors
      }
    });
  });

  const practiceSection = document.querySelector(".win-home .win-why");
  if (practiceSection) {
    const stylesheetHref = "/assets/css/bbs-homepage-practice-v21.css";

    const renderPracticeControl = () => {
      if (!practiceSection.isConnected) return;

      practiceSection.outerHTML = `
        <section class="win-practice-control" aria-labelledby="why-black-bag">
          <div class="wrap">
            <div class="win-practice-control__grid">
              <div class="win-practice-control__message">
                <p class="win-kicker">Why Black Bag</p>
                <h2 id="why-black-bag">A smaller practice can be a <span>stronger control.</span></h2>
                <p class="win-practice-control__lead">Built deliberately to be regimented, organized, efficient, and effective.</p>
                <p>The principal sets the standard. Policy, process, quality, security, and shared knowledge make that standard repeatable across every engagement.</p>
                <div class="win-practice-control__callout">
                  <strong>The principal sets the tone.</strong>
                  <span>The organization applies it in totality.</span>
                  <em>Excellence is institutional.</em>
                </div>
              </div>

              <div class="win-practice-system" aria-label="Black Bag Security institutional delivery model">
                <div class="win-practice-system__principal">
                  <span class="win-practice-system__label">The principal</span>
                  <strong>Sets the standard. Defines the policy.</strong>
                  <p>Leads by example and establishes the operating expectations applied across the practice.</p>
                </div>

                <div class="win-practice-system__policy">
                  <span class="win-practice-system__label">Policy &amp; standards</span>
                  <strong>One operating system for the work</strong>
                  <p>Methodology · Tools · Quality · Ethics · Security</p>
                </div>

                <div class="win-practice-system__functions" aria-label="Organizational functions">
                  <article class="win-practice-function"><strong>Operations</strong><p>Planned.<br>Tracked.<br>Accountable.</p></article>
                  <article class="win-practice-function"><strong>Assessors</strong><p>Skilled.<br>Aligned.<br>Empowered.</p></article>
                  <article class="win-practice-function"><strong>Quality assurance</strong><p>Reviewed.<br>Verified.<br>Consistent.</p></article>
                  <article class="win-practice-function"><strong>Security</strong><p>Protected.<br>Controlled.<br>Monitored.</p></article>
                  <article class="win-practice-function"><strong>Knowledge</strong><p>Documented.<br>Shared.<br>Improved.</p></article>
                </div>

                <div class="win-practice-delivery">
                  <strong class="win-practice-delivery__title">Uniform delivery of excellence</strong>
                  <div class="win-practice-delivery__steps" aria-label="Repeatable delivery lifecycle">
                    <span>Define<br>&amp; scope</span>
                    <span>Plan<br>&amp; prepare</span>
                    <span>Assess<br>&amp; verify</span>
                    <span>Analyze<br>&amp; validate</span>
                    <span>Report<br>&amp; deliver</span>
                    <span>Improve<br>&amp; repeat</span>
                  </div>
                </div>

                <div class="win-practice-system__outcome">
                  <span class="win-practice-system__label">Client outcomes</span>
                  <strong>Consistent results. Trusted delivery. Stronger security.</strong>
                  <p>The standard belongs to Black Bag Security, not to one engagement or one individual execution path.</p>
                </div>
              </div>
            </div>
          </div>
        </section>`;
    };

    const existingStylesheet = document.querySelector(`link[href="${stylesheetHref}"]`);
    if (existingStylesheet) {
      renderPracticeControl();
    } else {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = stylesheetHref;
      stylesheet.addEventListener("load", renderPracticeControl, { once: true });
      document.head.appendChild(stylesheet);
    }
  }

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
