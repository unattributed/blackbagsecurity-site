---
layout: home-v2
title: OSMAP | Black Bag Security
permalink: /research/osmap/
description: OSMAP is a small Rust webmail access layer for hardened OpenBSD mail systems, designed around narrow attack surface, privilege separation, safe rendering, and bounded operation.
lang: en
ref: research-osmap
research_v2: true
---
<div class="research-v2-page">
  <section class="research-detail-hero" aria-labelledby="research-detail-title">
    <div class="wrap">
      <a class="research-detail-back" href="{{ '/research/' | relative_url }}">All engineering</a>
      <div class="research-detail-hero__grid">
        <div>
          <div class="research-detail-hero__meta"><span class="research-status research-status--bounded">Bounded deployment evidence</span></div>
          <h1 id="research-detail-title">OSMAP</h1>
          <p class="research-detail-hero__lead">OpenBSD Secure Mail Access Platform is a small, security-focused webmail access layer for hardened OpenBSD mail hosts. It is written in Rust, renders on the server, uses no runtime JavaScript, and keeps privileged mailbox access behind a local helper boundary.</p>
        </div>
        <aside class="research-detail-summary" aria-label="Project summary">
          <div><strong>Role</strong><p>Secure software engineering for a high-consequence public interface.</p></div>
          <div><strong>Design bias</strong><p>Narrow attack surface, least privilege, bounded resources, safe rendering, and reversible operations over feature breadth.</p></div>
          <div><strong>Current boundary</strong><p>Actively developed with production-validated slices, but not presented as a turnkey general-availability Roundcube replacement.</p></div>
        </aside>
      </div>
    </div>
  </section>

  <section class="research-detail-section" aria-labelledby="osmap-design">
    <div class="wrap">
      <div class="research-detail-intro"><h2 id="osmap-design">Reduce what the browser-facing process is allowed to do.</h2><p>OSMAP started from a simple question: how much webmail functionality is actually necessary, and how much authority should the public-facing process have? The result is intentionally smaller than a feature-heavy groupware platform.</p></div>
      <div class="research-detail-grid">
        <article class="research-detail-card"><strong>Server-rendered interface</strong><p>No frontend framework, no runtime JavaScript, and no external asset dependency in the normal application path.</p></article>
        <article class="research-detail-card"><strong>Privilege separation</strong><p>An unprivileged web process communicates with a narrowly scoped mailbox helper over a permissioned local Unix socket.</p></article>
        <article class="research-detail-card"><strong>Safe message rendering</strong><p>Plain-text fallback and allowlist-sanitized HTML with remote content blocked reduce the trust placed in hostile email content.</p></article>
        <article class="research-detail-card"><strong>Bounded sessions</strong><p>Password and TOTP login, session controls, logout, revocation, throttling, and worker budgets are treated as first-class security behavior.</p></article>
        <article class="research-detail-card"><strong>Request controls</strong><p>CSRF, same-origin, Host, parsing, resource, and security regression controls are built into the application and validation workflow.</p></article>
        <article class="research-detail-card"><strong>Release evidence</strong><p>Deployment, rollback, WSTG assurance, parser-differential testing, and evidence-dependent release checks keep claims tied to tested conditions.</p></article>
      </div>
    </div>
  </section>

  <section class="research-detail-section research-detail-section--dark" aria-labelledby="osmap-lessons">
    <div class="wrap">
      <div class="research-detail-intro"><h2 id="osmap-lessons">The engineering value is in the design choices.</h2><p>OSMAP is useful beyond mail because it is a working study in reducing browser-facing authority. The same patterns apply to administrative interfaces, internal security tools, local operator workspaces, and any service where the exposed UI does not need direct access to the most privileged operations.</p></div>
      <div class="research-detail-grid">
        <article class="research-detail-card"><strong>Narrow the interface</strong><p>Fewer features and dependencies can remove entire classes of attack surface before compensating controls are considered.</p></article>
        <article class="research-detail-card"><strong>Keep privilege local</strong><p>Expose a small, explicit local capability boundary rather than placing mailbox authority inside the browser-facing service.</p></article>
        <article class="research-detail-card"><strong>Make resource limits security controls</strong><p>Search, attachments, rendering, request parsing, and workers all need explicit bounds when hostile input is expected.</p></article>
        <article class="research-detail-card"><strong>Design for rollback</strong><p>A security-sensitive deployment should be reversible and verifiable, not merely deployable.</p></article>
        <article class="research-detail-card"><strong>Test the parser boundary</strong><p>Edge/origin disagreement and request parsing are security properties, not implementation trivia.</p></article>
        <article class="research-detail-card"><strong>Keep claim boundaries visible</strong><p>Production evidence is valuable only when its host, configuration, corpus, and user cohort remain explicit.</p></article>
      </div>
    </div>
  </section>

  <section class="research-detail-section" aria-labelledby="osmap-status">
    <div class="wrap">
      <div class="research-detail-intro"><h2 id="osmap-status">A deployed slice is not a universal claim.</h2><p>The project contains production-validated and deployed slices, including authenticated assurance and HTTP parser validation, but it explicitly does not claim universal hostile-email safety, full ASVS verification, complete Roundcube parity, or general production readiness.</p></div>
      <div class="research-detail-callout"><strong>Public project</strong><p>OSMAP is published as an operator-integrated security-sensitive project. Its documentation, architecture, known limitations, security model, deployment guidance, and validation gates are part of the engineering record, not secondary packaging.</p></div>
    </div>
  </section>

  <section class="research-cta"><div class="wrap"><div class="research-cta__panel"><div><h2>Need secure software engineered around a smaller trust boundary?</h2><p>OSMAP reflects the same approach used in client work: reduce unnecessary authority, make failure visible, preserve evidence, and design for safe operation after deployment.</p></div><a class="home-btn home-btn--accent" href="{{ '/services/secure-systems-engineering/' | relative_url }}">Explore systems engineering</a></div></div></section>
</div>
