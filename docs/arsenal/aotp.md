---
layout: home-v2
title: AOTP | The Engineering Arsenal
description: Authorized-only, evidence-first agentic offensive testing with governed planning, controlled execution, evidence capture, replay, validation, reporting, and retest.
permalink: /arsenal/aotp/
lang: en
ref: arsenal-aotp
arsenal_v2: true
---
<div class="arsenal-v2-page">
  <section class="arsenal-project-hero" aria-labelledby="aotp-title">
    <div class="wrap">
      <a class="arsenal-project-back" href="{{ '/arsenal/' | relative_url }}">Back to the Engineering Arsenal</a>
      <div class="arsenal-project-hero__grid">
        <div>
          <p class="arsenal-project-kicker">Governed Offensive Testing Platform</p>
          <h1 id="aotp-title">AOTP</h1>
          <p class="arsenal-project-lead">Agentic Offensive Testing Platform is an authorized-only, evidence-first system for governed offensive security testing. It combines local AI-assisted planning with deterministic campaign authority, controlled tool execution, evidence capture, replay, validation, and human-reviewed reporting.</p>
        </div>
        <aside class="arsenal-project-summary" aria-label="AOTP summary">
          <div class="arsenal-project-summary__row"><strong>Purpose</strong><p>Make AI-assisted offensive testing controllable, reviewable, and evidence-backed.</p></div>
          <div class="arsenal-project-summary__row"><strong>Operating model</strong><p>Local-first, operator-controlled, explicit authority and human review.</p></div>
          <div class="arsenal-project-summary__row"><strong>Repository</strong><p>Private development repository.</p></div>
        </aside>
      </div>
    </div>
  </section>

  <section class="arsenal-project-section">
    <div class="wrap">
      <div class="arsenal-project-intro">
        <h2>Why it exists</h2>
        <p>Agentic security testing creates a different control problem from conventional automation. A system that can plan, select tools, adapt to evidence, and continue testing needs stronger authority boundaries than a script that performs one known task. AOTP treats scope, rules of engagement, budgets, approvals, stop conditions, evidence quality, and human review as part of the execution architecture.</p>
      </div>
      <div class="arsenal-project-grid">
        <article class="arsenal-project-block"><span>01</span><h3>Campaign authority</h3><p>Defines and enforces scope, rules of engagement, budgets, approvals, and stop conditions before execution can proceed.</p></article>
        <article class="arsenal-project-block"><span>02</span><h3>Governed execution</h3><p>Local models and testing adapters support planning and tool use while Python remains authoritative for campaign and evidence state.</p></article>
        <article class="arsenal-project-block"><span>03</span><h3>Evidence before findings</h3><p>Raw evidence, provenance, replay, negative controls, and review decisions are retained so unsupported candidates can be rejected.</p></article>
        <article class="arsenal-project-block"><span>04</span><h3>Operator workspace</h3><p>A local loopback workspace supports campaign supervision, evidence review, finding approval, reporting, export, and retest workflows.</p></article>
        <article class="arsenal-project-block"><span>05</span><h3>Human-reviewed reporting</h3><p>Automation can assist analysis, but material findings and report claims remain subject to explicit human review.</p></article>
        <article class="arsenal-project-block"><span>06</span><h3>Retest and closure</h3><p>The workflow continues through remediation verification, retest evidence, export validation, and campaign closure rather than ending at detection.</p></article>
      </div>
    </div>
  </section>

  <section class="arsenal-project-status">
    <div class="wrap arsenal-project-status__grid">
      <div>
        <p class="arsenal-project-kicker">Current maturity</p>
        <h2>Engineering foundation, not an inflated readiness claim.</h2>
        <p>AOTP has substantial local engineering and acceptance work behind it, including local vulnerable OWASP application campaign execution and a loopback Operator Workspace. The public description deliberately stops where the evidence stops.</p>
      </div>
      <div class="arsenal-status-list">
        <div class="arsenal-status-item"><strong>Proven</strong><p>Governed local campaign execution, evidence capture, replay-oriented validation, reporting foundations, and operator workflow under explicitly proven local conditions.</p></div>
        <div class="arsenal-status-item"><strong>Not claimed</strong><p>Successful public bug bounty operation, third-party acceptance, payout eligibility, production readiness, or senior-tester parity.</p></div>
        <div class="arsenal-status-item"><strong>Direction</strong><p>Converge with the Security Engagement Platform so engagement authority and execution governance form a continuous control path from authorization through closure.</p></div>
      </div>
    </div>
  </section>

  <section class="arsenal-project-section">
    <div class="wrap">
      <div class="arsenal-project-intro">
        <h2>Related engineering</h2>
        <p>AOTP is the execution and operator-workspace side of a larger engagement architecture. The Security Engagement Platform is being developed as the engagement control plane for identity, authority, scope, provenance, evidence boundaries, and later operation-level enforcement.</p>
      </div>
      <div class="arsenal-project-actions">
        <a class="arsenal-repo-link" href="{{ '/arsenal/security-engagement-platform/' | relative_url }}">Security Engagement Platform</a>
        <a class="arsenal-repo-link" href="{{ '/services/ai-security/' | relative_url }}">AI Security Services</a>
      </div>
    </div>
  </section>
</div>
