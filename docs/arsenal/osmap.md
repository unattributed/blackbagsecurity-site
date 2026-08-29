---
layout: home-v2
title: OSMAP | The Engineering Arsenal
description: OpenBSD Secure Mail Access Platform, a Rust webmail layer for hardened OpenBSD mail hosts built around least privilege, safe rendering, bounded authority, and visible security state.
permalink: /arsenal/osmap/
lang: en
ref: arsenal-osmap
arsenal_v2: true
---
<div class="arsenal-v2-page">
  <section class="arsenal-project-hero" aria-labelledby="osmap-title">
    <div class="wrap">
      <a class="arsenal-project-back" href="{{ '/arsenal/' | relative_url }}">Back to the Engineering Arsenal</a>
      <div class="arsenal-project-hero__grid">
        <div>
          <p class="arsenal-project-kicker">Secure Software</p>
          <h1 id="osmap-title">OSMAP</h1>
          <p class="arsenal-project-lead">OpenBSD Secure Mail Access Platform is a small, security-focused webmail application for hardened OpenBSD mail hosts. It gives users browser access to an existing mail system without replacing the underlying transport, mailbox, filtering, TLS, or firewall architecture.</p>
          <div class="arsenal-project-actions">
            <a class="arsenal-repo-link" href="https://github.com/unattributed/OSMAP" target="_blank" rel="noopener noreferrer">View public repository on GitHub</a>
          </div>
        </div>
        <aside class="arsenal-project-summary" aria-label="OSMAP summary">
          <div class="arsenal-project-summary__row"><strong>Implementation</strong><p>Rust, server-rendered interface, no runtime JavaScript.</p></div>
          <div class="arsenal-project-summary__row"><strong>Security model</strong><p>Least privilege, bounded sessions, safe rendering, local helper boundary, fail-closed controls.</p></div>
          <div class="arsenal-project-summary__row"><strong>Repository</strong><p>Public by design. Production evidence remains bounded to documented deployment conditions.</p></div>
        </aside>
      </div>
    </div>
  </section>

  <section class="arsenal-project-section">
    <div class="wrap">
      <div class="arsenal-project-intro">
        <h2>The problem</h2>
        <p>Adding a browser to a hardened mail host creates a new attack surface. OSMAP approaches that problem without pretending the web application should become the mail server. nginx remains the TLS edge, Dovecot remains authoritative for mailbox access, Postfix remains responsible for submission, and mailbox authority is kept outside the browser-facing process.</p>
      </div>
      <div class="arsenal-project-grid">
        <article class="arsenal-project-block"><span>01</span><h3>Privilege separation</h3><p>The unprivileged web process reaches mailbox authority through a narrowly scoped local helper over a permissioned Unix socket.</p></article>
        <article class="arsenal-project-block"><span>02</span><h3>Safe rendering</h3><p>Plain-text fallback, allowlist-sanitized HTML, remote-content blocking, bounded resource use, and explicit hostile-content limits reduce browser-side exposure.</p></article>
        <article class="arsenal-project-block"><span>03</span><h3>Bounded sessions</h3><p>Password and TOTP authentication, session limits, logout, revocation, CSRF, same-origin, Host, parsing, throttling, and worker-budget controls are part of the design.</p></article>
        <article class="arsenal-project-block"><span>04</span><h3>Security-visible UX</h3><p>The new interface is being designed so sanitization state, blocked content, sender context, cryptographic readiness, and security controls are understandable without making the user interpret backend internals.</p></article>
        <article class="arsenal-project-block"><span>05</span><h3>Accessible interaction</h3><p>The interface is responsive and keyboard-accessible without a frontend framework or external runtime asset dependency.</p></article>
        <article class="arsenal-project-block"><span>06</span><h3>Operational integration</h3><p>OSMAP fits into an existing OpenBSD mail platform rather than displacing native mail, filtering, TLS, PF, WireGuard, monitoring, and recovery controls.</p></article>
      </div>
    </div>
  </section>

  <section class="arsenal-project-status">
    <div class="wrap arsenal-project-status__grid">
      <div>
        <p class="arsenal-project-kicker">Current maturity</p>
        <h2>Production-validated slices with explicit boundaries.</h2>
        <p>The repository contains completed governance, hardening, production deployment, WSTG assurance, WebUI modernization, accessibility, and OpenPGP foundation work. Those results are deliberately scoped to the documented host, configuration, test corpus, and selected user cohort.</p>
      </div>
      <div class="arsenal-status-list">
        <div class="arsenal-status-item"><strong>Deployed and validated</strong><p>Selected-cohort browser mail access, hardened request and rendering boundaries, production deployment evidence, credentialed WSTG assurance, and differential HTTP parser validation.</p></div>
        <div class="arsenal-status-item"><strong>OpenPGP position</strong><p>Policy, diagnostics, helper scaffolding, state models, and UX states exist. Runtime decrypt, verify, sign, encrypt, PGP/MIME, and key-management operations are not yet claimed.</p></div>
        <div class="arsenal-status-item"><strong>Not claimed</strong><p>Universal Roundcube replacement, general hostile-email safety, attachment preview safety, full ASVS verification, or turnkey general-availability deployment.</p></div>
      </div>
    </div>
  </section>

  <section class="arsenal-project-section">
    <div class="wrap">
      <div class="arsenal-project-intro">
        <h2>Design principle</h2>
        <p>The security model should be visible to the user without becoming the user's problem. OSMAP is increasingly exploring that boundary directly: not just how a secure mail access layer behaves internally, but how it communicates protected states, blocked content, cryptographic readiness, and security decisions in the product experience.</p>
      </div>
      <div class="arsenal-project-actions">
        <a class="arsenal-repo-link" href="https://github.com/unattributed/OSMAP" target="_blank" rel="noopener noreferrer">View public repository on GitHub</a>
        <a class="arsenal-repo-link" href="{{ '/services/secure-systems-engineering/' | relative_url }}">Secure Systems Engineering</a>
      </div>
    </div>
  </section>
</div>
