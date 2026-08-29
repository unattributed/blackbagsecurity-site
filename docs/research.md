---
layout: home-v2
title: Engineering | Black Bag Security
description: Security platforms, systems engineering, and applied research across governed offensive testing, secure software, hardened infrastructure, and browser-AI security.
permalink: /research/
lang: en
ref: research
research_v2: true
inner_v3: true
---
<div class="inner-v3">
  <section class="iv3-hero" aria-labelledby="engineering-title">
    <div class="wrap iv3-hero__grid">
      <div>
        <p class="iv3-eyebrow">Engineering</p>
        <h1 id="engineering-title">build what the<br>mission demands.</h1>
        <p class="iv3-hero__lead">Platforms, systems, and applied research developed around real security problems. Some projects govern assessments. Some operate them. Some reduce attack surface or strengthen resilience. Together they form one engineering system built to make security work more controlled, repeatable, and defensible.</p>
        <div class="iv3-actions"><a class="home-btn home-btn--accent" href="#ecosystem">See the ecosystem</a><a class="home-btn" href="{{ '/system/' | relative_url }}">See how it all fits together</a></div>
      </div>
      <aside class="iv3-signal-panel" aria-label="Engineering principles">
        <div class="iv3-signal"><span>01</span><div><strong>Problem-led</strong><p>Engineering starts with a real security problem, not a technology looking for one.</p></div></div>
        <div class="iv3-signal"><span>02</span><div><strong>Evidence-bound</strong><p>Claims stay inside what has actually been implemented and validated.</p></div></div>
        <div class="iv3-signal"><span>03</span><div><strong>Operator-controlled</strong><p>Automation supports judgment. It does not silently inherit authority.</p></div></div>
        <div class="iv3-signal"><span>04</span><div><strong>Composable</strong><p>Projects are designed to reinforce one another and complete the wider mission.</p></div></div>
      </aside>
    </div>
  </section>

  <nav class="iv3-jumpbar" aria-label="Engineering page sections"><div class="wrap iv3-jumpbar__inner"><a href="#ecosystem">Ecosystem</a><a href="#projects">Platforms &amp; systems</a><a href="#principles">Engineering principles</a><a href="#boundaries">Applied research</a></div></nav>

  <section class="iv3-section iv3-section--dark" id="ecosystem" aria-labelledby="ecosystem-title">
    <div class="wrap">
      <div class="iv3-section-head"><div><p class="iv3-eyebrow">Platform convergence</p><h2 id="ecosystem-title">Govern first. Operate deliberately. Prove everything.</h2></div><p>The Security Engagement Platform and AOTP are complementary layers. One establishes engagement authority and state. The other gives security professionals the operating environment for authorized technical assessment work. Evidence, findings, reporting, and retest close the loop.</p></div>
      <div class="iv3-flow">
        <div class="iv3-flow__node"><span>Control plane</span><strong>Security Engagement Platform</strong><p>Engagement identity, written authority, approved scope, exclusions, stop conditions, client constraints, evidence boundaries, and delivery state.</p></div>
        <div class="iv3-flow__arrow">→</div>
        <div class="iv3-flow__node"><span>Assessment platform</span><strong>AOTP</strong><p>Campaign control, targets, governed testing, AI-assisted execution, evidence, candidate qualification, findings, reports, exports, and retests.</p></div>
        <div class="iv3-flow__arrow">→</div>
        <div class="iv3-flow__node"><span>Assurance loop</span><strong>Evidence, findings &amp; retest</strong><p>Traceable proof, report-safe outputs, remediation state, comparison to the original failure path, closure, and retained provenance.</p></div>
      </div>
    </div>
  </section>

  <section class="iv3-section" id="projects" aria-labelledby="projects-title">
    <div class="wrap">
      <div class="iv3-section-head"><div><p class="iv3-eyebrow">Platforms, systems &amp; applied research</p><h2 id="projects-title">Different projects. One engineering philosophy.</h2></div><p>Each line of work strengthens a different part of the mission: engagement governance, assessment operations, secure software, resilient infrastructure, or adversarial AI assurance.</p></div>
      <div class="iv3-card-grid">
        <article class="iv3-card"><span class="iv3-card__index">01 / SECURITY ENGAGEMENT PLATFORM</span><h3>Make authority executable.</h3><p>The next-generation engagement control plane for turning written authorization, scope, rules, execution boundaries, evidence state, and delivery requirements into deterministic controls.</p><div class="iv3-deep"><details><summary>Current direction</summary><div>It is evolving from internal engagement tooling already used to structure authorized assessment work. The migration path establishes hardened engagement identity, engagement-bound authorization, executable scope records, exclusions, stop conditions, and later operation-level controls. It is intended to integrate with AOTP rather than duplicate the assessment environment.</div></details></div><div class="iv3-card__footer"><div class="iv3-chips"><span>In development</span><span>Authorization</span><span>Scope</span><span>Evidence governance</span></div><a class="research-link" href="{{ '/research/security-engagement-platform/' | relative_url }}">Platform direction</a></div></article>

        <article class="iv3-card"><span class="iv3-card__index">02 / AOTP</span><h3>Run governed offensive assessments end to end.</h3><p>An operator-focused offensive security assessment platform for security professionals to manage authorized campaigns from scope and targets through evidence, candidate validation, findings, reporting, exports, and retests, with AI assistance constrained by explicit authority and human review.</p><div class="iv3-deep"><details><summary>Current boundary</summary><div>A substantial engineering foundation and local runtime MVP exist, but AOTP is not presented as production-ready, as a successful public bug-bounty system, or as a replacement for a senior tester.</div></details></div><div class="iv3-card__footer"><div class="iv3-chips"><span>Assessment platform</span><span>Operator workspace</span><span>Evidence-first</span><span>Human-governed</span></div><a class="research-link" href="{{ '/research/aotp/' | relative_url }}">Explore AOTP</a></div></article>

        <article class="iv3-card"><span class="iv3-card__index">03 / OSMAP</span><h3>Reduce the public attack surface.</h3><p>A small Rust webmail access layer for hardened OpenBSD mail systems, designed around server-side rendering, no runtime JavaScript, privilege separation, bounded resources, and safe message rendering.</p><div class="iv3-deep"><details><summary>Why it exists</summary><div>OSMAP explores how a security-sensitive browser interface can stay deliberately narrow while integrating with existing mail infrastructure. Deployment evidence is real but bounded to documented environments and conditions.</div></details></div><div class="iv3-card__footer"><div class="iv3-chips"><span>Rust</span><span>OpenBSD</span><span>Privilege separation</span></div><a class="research-link" href="{{ '/research/osmap/' | relative_url }}">OSMAP summary</a></div></article>

        <article class="iv3-card"><span class="iv3-card__index">04 / OPENBSD MAILSTACK</span><h3>Make secure operations repeatable.</h3><p>An operator-focused framework for building and maintaining a hardened OpenBSD mail platform with phased deployment, verification, monitoring, backup, recovery, and public-safe operational documentation.</p><div class="iv3-deep"><details><summary>Why it matters</summary><div>The project treats deployment, validation, maintenance, hardening, and recovery as parts of one system rather than as separate afterthoughts.</div></details></div><div class="iv3-card__footer"><div class="iv3-chips"><span>Infrastructure</span><span>Recovery</span><span>Validation</span></div><a class="research-link" href="{{ '/research/openbsd-mailstack/' | relative_url }}">Mailstack summary</a></div></article>

        <article class="iv3-card"><span class="iv3-card__index">05 / BROWSER-SAFE AI SECURITY</span><h3>Turn browser-AI risk into reproducible evidence.</h3><p>Applied security research and a local validation toolkit for indirect prompt injection, hidden content, source confusion, visual deception, frame boundaries, delayed content, fail-open behavior, and reviewer-grade evidence packaging.</p><div class="iv3-deep"><details><summary>What makes it different</summary><div>The work uses synthetic local targets and structured browser, DOM, screenshot, proxy, model, JSON, manifest, and hash artifacts so claims can be reviewed rather than accepted from screenshots or anecdotes.</div></details></div><div class="iv3-card__footer"><div class="iv3-chips"><span>Applied research</span><span>Browser AI</span><span>Prompt injection</span><span>Playwright</span></div><a class="research-link" href="{{ '/research/browser-safe-ai-security/' | relative_url }}">Research summary</a></div></article>

        <article class="iv3-card"><span class="iv3-card__index">SYSTEM VIEW</span><h3>The projects are designed to collaborate.</h3><p>Governance improves assessment execution. Offensive work improves validation. Secure software exposes real trust-boundary problems. Infrastructure engineering adds operational and recovery discipline. Applied AI research tests new authority surfaces across the system.</p><div class="iv3-card__footer"><div class="iv3-chips"><span>Govern</span><span>Operate</span><span>Validate</span><span>Recover</span></div><a class="research-link" href="{{ '/system/' | relative_url }}">View the whole system</a></div></article>
      </div>
    </div>
  </section>

  <section class="iv3-section iv3-section--soft" id="principles">
    <div class="wrap">
      <div class="iv3-section-head"><div><p class="iv3-eyebrow">Engineering principles</p><h2>Build only what makes the mission stronger.</h2></div><p>The objective is not to accumulate projects. Each project should improve control, evidence, resilience, operator judgment, or the ability to answer a security question that existing tools cannot answer well enough.</p></div>
      <div class="iv3-glance">
        <article><span>01</span><strong>Reduce implicit trust</strong><p>Make authority, identity, scope, privilege, and data boundaries explicit.</p></article>
        <article><span>02</span><strong>Fail closed on ambiguity</strong><p>Unclear scope, weak evidence, stale state, or unresolved conflicts should block a claim.</p></article>
        <article><span>03</span><strong>Preserve provenance</strong><p>Important conclusions should trace back to source, execution state, evidence, and review.</p></article>
        <article><span>04</span><strong>State the limits</strong><p>A project can be useful before it is finished. Claim boundaries are part of the engineering record.</p></article>
      </div>
    </div>
  </section>

  <section class="iv3-section iv3-section--white" id="boundaries">
    <div class="wrap">
      <div class="iv3-quote"><div class="iv3-quote__mark">“</div><div><blockquote>A polished interface is not proof that the underlying security claim is true.</blockquote><p>Implementation state, validation status, known limits, and unproven claims remain visible by design.</p></div></div>
      <div class="iv3-deep">
        <details><summary>Where applied research fits</summary><div>Research is one engineering mode, not the identity of the whole section. It is used when a security question requires new test methods, controlled experiments, validation harnesses, or evidence models that established tools do not provide.</div></details>
        <details><summary>How engineering enters client work</summary><div>Platforms, systems, and research capability are brought into assessments or engineering engagements when they help answer the client problem more safely or convincingly. The client engagement does not become an experiment simply because specialist engineering is used behind it.</div></details>
        <details><summary>Why Black Bag Security publishes bounded claims</summary><div>Security tooling is especially vulnerable to confidence inflation. A successful local test does not prove production readiness. A candidate does not become a finding because automation produced it. A platform does not become operationally mature because the UI looks complete. Those distinctions remain explicit.</div></details>
      </div>
    </div>
  </section>

  <section class="iv3-cta"><div class="wrap"><div class="iv3-cta__panel"><div><h2>Need specialist engineering applied to a real security problem?</h2><p>Bring the question. The right combination of assessment operations, secure software, infrastructure engineering, reverse analysis, AI security, and applied research can be assembled around it.</p></div><a class="home-btn home-btn--accent" href="{{ '/contact/#assessment' | relative_url }}">Discuss the problem</a></div></div></section>
</div>
