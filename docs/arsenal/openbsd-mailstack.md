---
layout: home-v2
title: OpenBSD Mailstack | The Engineering Arsenal
description: A public operator-focused framework for building, validating, maintaining, hardening, monitoring, backing up, and recovering an OpenBSD mail platform.
permalink: /arsenal/openbsd-mailstack/
lang: en
ref: arsenal-openbsd-mailstack
arsenal_v2: true
---
<div class="arsenal-v2-page">
  <section class="arsenal-project-hero" aria-labelledby="mailstack-title">
    <div class="wrap">
      <a class="arsenal-project-back" href="{{ '/arsenal/' | relative_url }}">Back to the Engineering Arsenal</a>
      <div class="arsenal-project-hero__grid">
        <div>
          <p class="arsenal-project-kicker">Secure Infrastructure</p>
          <h1 id="mailstack-title">OpenBSD Mailstack</h1>
          <p class="arsenal-project-lead">OpenBSD Mailstack is a public, operator-focused framework for building and maintaining a hardened OpenBSD mail platform. It packages architecture, configuration patterns, staged deployment, validation, backup, recovery, monitoring, maintenance, hardening, and public-safe operational workflows into a reproducible engineering baseline.</p>
          <div class="arsenal-project-tech" aria-label="OpenBSD Mailstack technology stack"><span>OpenBSD</span><span>OSMAP</span><span>nginx</span><span>Postfix</span><span>Dovecot</span><span>Rspamd</span><span>MariaDB / Redis</span><span>ClamAV</span><span>PF / Suricata / WireGuard</span><span>OSMAP-admin</span></div>
          <figure class="arsenal-project-visual"><img src="{{ '/assets/img/openbsd-mailstack-secure-infrastructure.webp' | relative_url }}" alt="OpenBSD Mailstack architecture showing PF, Suricata and WireGuard network controls, Postfix transport, Dovecot mailbox services, Rspamd and ClamAV filtering, OSMAP web access, MariaDB and Redis state services, monitoring, backup and recovery" decoding="async" /></figure>
          <div class="arsenal-project-actions">
            <a class="arsenal-repo-link" href="https://github.com/unattributed/openbsd-mailstack" target="_blank" rel="noopener noreferrer">View public repository on GitHub</a>
          </div>
        </div>
        <aside class="arsenal-project-summary" aria-label="OpenBSD Mailstack summary">
          <div class="arsenal-project-summary__row"><strong>Platform</strong><p>OpenBSD mail and control-plane engineering.</p></div>
          <div class="arsenal-project-summary__row"><strong>Core services</strong><p>OSMAP, nginx, Postfix, Dovecot, Rspamd, OSMAP-admin, MariaDB, Redis, ClamAV, PF, Suricata, WireGuard and DNS.</p></div>
          <div class="arsenal-project-summary__row"><strong>Repository</strong><p>Public by design and deliberately sanitized from private production evidence and secrets.</p></div>
        </aside>
      </div>
    </div>
  </section>

  <section class="arsenal-project-section">
    <div class="wrap">
      <div class="arsenal-project-intro">
        <h2>More than installation notes</h2>
        <p>The project is designed around the operational lifecycle of a security-sensitive service. Building the host is only one phase. The framework also addresses how configuration is rendered, how changes are validated, how exposure is controlled, how failures are detected, how the system is recovered, and how the public repository avoids leaking site-specific secrets or control-plane doctrine.</p>
      </div>
      <div class="arsenal-project-grid">
        <article class="arsenal-project-block"><span>01</span><h3>Staged deployment</h3><p>Phase documentation, apply scripts, verify scripts, rendering paths, and install-order guidance make deployment reviewable instead of relying on undocumented operator memory.</p></article>
        <article class="arsenal-project-block"><span>02</span><h3>Exposure control</h3><p>PF, Suricata, WireGuard, DNS, TLS, service bindings, and operator-supplied network values are treated as part of the system architecture.</p></article>
        <article class="arsenal-project-block"><span>03</span><h3>Validation</h3><p>QEMU lab paths, repository gates, rendered-config integrity checks, host-service checks, documentation checks, and production regression workflows support repeatable verification.</p></article>
        <article class="arsenal-project-block"><span>04</span><h3>Secrets and state</h3><p>Tracked examples are separated from ignored local inputs, runtime secrets, private keys, provider credentials, and operator-only workspaces.</p></article>
        <article class="arsenal-project-block"><span>05</span><h3>Resilience</h3><p>Backup, disaster recovery, monitoring, maintenance, post-install checks, and recovery procedures are part of the published engineering path.</p></article>
        <article class="arsenal-project-block"><span>06</span><h3>Public-safe design</h3><p>The repository publishes reusable architecture and sanitized production observations without becoming a mirror of the private deployment or exposing operational evidence.</p></article>
      </div>
    </div>
  </section>

  <section class="arsenal-project-status">
    <div class="wrap arsenal-project-status__grid">
      <div>
        <p class="arsenal-project-kicker">Public engineering baseline</p>
        <h2>Reusable where it should be. Private where it must be.</h2>
        <p>The public repository is intentionally substantial enough to build and operate the same class of system while keeping production evidence, restore archives, real credentials, private keys, and site-specific control-plane doctrine out of the public tree.</p>
      </div>
      <div class="arsenal-status-list">
        <div class="arsenal-status-item"><strong>Published</strong><p>Phase scripts and documentation, rendered configuration paths, QEMU validation, backup and recovery, monitoring, maintenance, hardening, runtime-secret handling, and optional advanced layers.</p></div>
        <div class="arsenal-status-item"><strong>Operator supplied</strong><p>Domains, hostnames, network exposure values, provider accounts, credentials, runtime secrets, private keys, and final environment-specific hardening choices.</p></div>
        <div class="arsenal-status-item"><strong>Intentionally excluded</strong><p>Raw production evidence, operational telemetry, encrypted recovery payloads, private restore archives, live API keys, passwords, private keys, and private automation overlays.</p></div>
      </div>
    </div>
  </section>

  <section class="arsenal-project-section">
    <div class="wrap">
      <div class="arsenal-project-intro">
        <h2>Relationship to OSMAP</h2>
        <p>OSMAP sits above this class of hardened mail infrastructure as the browser access layer. The projects intentionally remain separate: the mailstack defines the underlying service and operational platform, while OSMAP focuses on reducing and controlling the additional browser-facing attack surface.</p>
      </div>
      <div class="arsenal-project-actions">
        <a class="arsenal-repo-link" href="https://github.com/unattributed/openbsd-mailstack" target="_blank" rel="noopener noreferrer">View public repository on GitHub</a>
        <a class="arsenal-repo-link" href="{{ '/arsenal/osmap/' | relative_url }}">OSMAP</a>
      </div>
    </div>
  </section>
</div>
