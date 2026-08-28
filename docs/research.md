---
layout: home-v2
title: Research | Black Bag Security
description: Practical security research and engineering across governed offensive testing, secure software, hardened infrastructure, and browser-AI security.
permalink: /research/
lang: en
ref: research
research_v2: true
---
<div class="research-v2-page">
  <section class="research-hero" aria-labelledby="research-title">
    <div class="wrap research-hero__grid">
      <div>
        <p class="research-eyebrow">Research &amp; Engineering</p>
        <h1 id="research-title">build what the<br>work demands.</h1>
        <p class="research-hero__lead">Black Bag Security research is practical by design. When existing tools do not provide enough control, evidence, safety, or operational clarity, we engineer the missing layer, test it, document its limits, and use what survives validation to improve the work.</p>
      </div>
      <aside class="research-hero__aside" aria-label="Research principles">
        <div><strong>Practical</strong><p>Research begins with a real security problem, not a technology looking for a use case.</p></div>
        <div><strong>Evidence-bound</strong><p>Capabilities are described according to what has actually been implemented and validated.</p></div>
        <div><strong>Operator-controlled</strong><p>Automation supports human judgment. Authority, scope, review, and final decisions remain explicit.</p></div>
        <div><strong>Reusable</strong><p>Useful lessons are turned into repeatable tooling, controls, documentation, and validation workflows.</p></div>
      </aside>
    </div>
  </section>

  <section class="research-lines" aria-labelledby="research-lines-title">
    <div class="wrap">
      <div class="research-lines__intro">
        <h2 id="research-lines-title">One engineering philosophy. Five active lines of work.</h2>
        <p>These projects are different in form, but they share the same questions: what is trusted, who has authority, what happens when assumptions fail, what evidence survives review, and how can the result be made safer and more repeatable?</p>
      </div>

      <div class="research-grid">
        <article class="research-card research-card--primary">
          <div class="research-card__meta"><span class="research-card__index">01</span><span class="research-status">In development</span></div>
          <h3>Security Engagement Platform</h3>
          <p class="research-card__role">Engagement control plane</p>
          <p>A next-generation engagement platform for turning written authority, scope, rules of engagement, execution boundaries, evidence state, and delivery requirements into deterministic controls. It is evolving from internal tooling already used to structure authorized assessment work and is being designed to integrate with AOTP rather than duplicate its execution engine.</p>
          <div class="research-card__tags"><span>Engagement identity</span><span>Authorization</span><span>Executable scope</span><span>Evidence governance</span><span>Retest lifecycle</span></div>
          <a class="research-link" href="{{ '/research/security-engagement-platform/' | relative_url }}">Read the platform direction</a>
        </article>

        <article class="research-card">
          <div class="research-card__meta"><span class="research-card__index">02</span><span class="research-status research-status--bounded">Engineering foundation</span></div>
          <h3>AOTP</h3>
          <p class="research-card__role">Governed offensive execution</p>
          <p>Authorized-only, evidence-first offensive testing with local AI-assisted planning, deterministic campaign authority, controlled tool execution, replay, validation, human review, reporting, and retest workflows.</p>
          <div class="research-card__tags"><span>Local AI</span><span>WSTG</span><span>Evidence replay</span><span>Human approval</span></div>
          <a class="research-link" href="{{ '/research/aotp/' | relative_url }}">Read the AOTP summary</a>
        </article>

        <article class="research-card">
          <div class="research-card__meta"><span class="research-card__index">03</span><span class="research-status research-status--bounded">Bounded deployment evidence</span></div>
          <h3>OSMAP</h3>
          <p class="research-card__role">Secure software engineering</p>
          <p>A small Rust webmail access layer for hardened OpenBSD mail systems, designed around server-side rendering, no runtime JavaScript, privilege separation, bounded resources, safe message rendering, and a narrow public attack surface.</p>
          <div class="research-card__tags"><span>Rust</span><span>OpenBSD</span><span>Privilege separation</span><span>Safe rendering</span></div>
          <a class="research-link" href="{{ '/research/osmap/' | relative_url }}">Read the OSMAP summary</a>
        </article>

        <article class="research-card">
          <div class="research-card__meta"><span class="research-card__index">04</span><span class="research-status">Public engineering baseline</span></div>
          <h3>OpenBSD Mailstack</h3>
          <p class="research-card__role">Secure infrastructure &amp; resilience</p>
          <p>An operator-focused framework for building and maintaining a hardened OpenBSD mail platform with phased deployment, verification, monitoring, backup, recovery, hardening, runtime-secret handling, and public-safe operational documentation.</p>
          <div class="research-card__tags"><span>OpenBSD</span><span>Mail infrastructure</span><span>Recovery</span><span>Validation gates</span></div>
          <a class="research-link" href="{{ '/research/openbsd-mailstack/' | relative_url }}">Read the mailstack summary</a>
        </article>

        <article class="research-card">
          <div class="research-card__meta"><span class="research-card__index">05</span><span class="research-status">Public local validation toolkit</span></div>
          <h3>Browser-Safe AI Security</h3>
          <p class="research-card__role">AI security research</p>
          <p>A local browser-AI security test suite for repeatable work on indirect prompt injection, hidden content, source confusion, visual deception, frame boundaries, delayed content, fail-open behavior, and reviewer-grade evidence packaging.</p>
          <div class="research-card__tags"><span>Browser AI</span><span>Prompt injection</span><span>Playwright</span><span>Deterministic evidence</span></div>
          <a class="research-link" href="{{ '/research/browser-safe-ai-security/' | relative_url }}">Read the research summary</a>
        </article>
      </div>
    </div>
  </section>

  <section class="research-convergence" aria-labelledby="convergence-title">
    <div class="wrap">
      <div class="research-convergence__head">
        <h2 id="convergence-title">The platform direction: govern first, execute second, prove everything.</h2>
        <p class="research-convergence__lead">Security Engagement Platform and AOTP are being designed as complementary layers. The engagement layer establishes what may happen and under what conditions. AOTP performs governed technical execution inside that authority. Evidence, findings, reporting, and retest state then close the loop.</p>
      </div>
      <div class="research-flow" aria-label="Future platform integration model">
        <div class="research-flow__node"><span class="research-flow__label">Control plane</span><strong>Security Engagement Platform</strong><p>Engagement identity, written authority, approved scope, exclusions, stop conditions, client constraints, evidence boundaries, and delivery state.</p></div>
        <div class="research-flow__arrow" aria-hidden="true">→</div>
        <div class="research-flow__node"><span class="research-flow__label">Execution plane</span><strong>AOTP</strong><p>Campaign planning, governed tools, browser and API testing, local AI assistance, evidence capture, replay, candidate validation, and human review.</p></div>
        <div class="research-flow__arrow" aria-hidden="true">→</div>
        <div class="research-flow__node"><span class="research-flow__label">Assurance loop</span><strong>Evidence, Findings &amp; Retest</strong><p>Traceable evidence, defensible findings, report-safe outputs, remediation state, retest comparison, closure, and retained provenance.</p></div>
      </div>
      <p class="research-convergence__note">This is the intended engineering direction. The full Security Engagement Platform and AOTP integration is not presented as complete or production-ready.</p>
    </div>
  </section>

  <section class="research-philosophy" aria-labelledby="research-philosophy-title">
    <div class="wrap">
      <div class="research-philosophy__head">
        <h2 id="research-philosophy-title">Research is useful when it changes how the work is done.</h2>
        <p class="research-philosophy__lead">The objective is not to accumulate projects. Each line of research is expected to produce a practical improvement in control, evidence, resilience, or operator judgment.</p>
      </div>
      <div class="research-principles">
        <article class="research-principle"><strong>Reduce implicit trust</strong><p>Make authority, identity, scope, privilege, and data boundaries explicit wherever possible.</p></article>
        <article class="research-principle"><strong>Fail closed on ambiguity</strong><p>Unclear scope, weak evidence, stale state, or unresolved conflicts should block a claim rather than silently widen it.</p></article>
        <article class="research-principle"><strong>Preserve provenance</strong><p>Important technical conclusions should be traceable to source material, execution state, evidence, and review decisions.</p></article>
        <article class="research-principle"><strong>State the limits</strong><p>A project can be valuable before it is finished. Status and claim boundaries are part of the engineering record.</p></article>
      </div>
    </div>
  </section>

  <section class="research-cta">
    <div class="wrap">
      <div class="research-cta__panel">
        <div><h2>Need research applied to a real security problem?</h2><p>Research capability can be brought into an assessment or engineering engagement when standard testing does not answer the question well enough.</p></div>
        <a class="home-btn home-btn--accent" href="{{ '/contact/#assessment' | relative_url }}">Discuss the problem</a>
      </div>
    </div>
  </section>
</div>
