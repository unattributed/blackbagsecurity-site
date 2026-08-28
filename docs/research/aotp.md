---
layout: home-v2
title: AOTP | Black Bag Security
permalink: /research/aotp/
description: AOTP is Black Bag Security's authorized-only, evidence-first engineering foundation for governed offensive security testing with local AI assistance and human review.
lang: en
ref: research-aotp
research_v2: true
---
<div class="research-v2-page">
  <section class="research-detail-hero" aria-labelledby="research-detail-title">
    <div class="wrap">
      <a class="research-detail-back" href="{{ '/research/' | relative_url }}">All research</a>
      <div class="research-detail-hero__grid">
        <div>
          <div class="research-detail-hero__meta"><span class="research-status research-status--bounded">Engineering foundation</span></div>
          <h1 id="research-detail-title">AOTP</h1>
          <p class="research-detail-hero__lead">Agentic Offensive Testing Platform is an authorized-only, evidence-first platform for governed offensive security testing. It combines local AI-assisted planning with deterministic campaign authority, controlled tool execution, evidence capture, replay, validation, human-reviewed findings, reporting, and retest workflows.</p>
        </div>
        <aside class="research-detail-summary" aria-label="Project summary">
          <div><strong>Role</strong><p>Governed offensive execution and operator workspace.</p></div>
          <div><strong>Design principle</strong><p>AI may assist planning and analysis, but campaign authority and material security decisions remain deterministic and human-controlled.</p></div>
          <div><strong>Current boundary</strong><p>Engineering foundation and local runtime MVP. It is not presented as production-ready or as a replacement for a senior tester.</p></div>
        </aside>
      </div>
    </div>
  </section>

  <section class="research-detail-section" aria-labelledby="aotp-problem">
    <div class="wrap">
      <div class="research-detail-intro"><h2 id="aotp-problem">Agentic testing needs stronger controls, not weaker ones.</h2><p>Security automation becomes dangerous when planning, authority, execution, evidence, and reporting collapse into one opaque loop. AOTP is an attempt to separate those responsibilities so local AI can help an operator without silently expanding scope or turning an unsupported observation into a finding.</p></div>
      <div class="research-detail-grid">
        <article class="research-detail-card"><strong>Campaign authority</strong><p>Scope, rules of engagement, budgets, approvals, stop conditions, and reserved actions are intended to govern every active path.</p></article>
        <article class="research-detail-card"><strong>Local AI assistance</strong><p>Local models support planning and reasoning without making the model the authority for target access or final findings.</p></article>
        <article class="research-detail-card"><strong>Governed tools</strong><p>Browser, HTTP, API, and testing adapters are expected to operate inside explicit campaign authority rather than as unrestricted tool calls.</p></article>
        <article class="research-detail-card"><strong>Evidence capture</strong><p>Raw evidence, artifacts, provenance, review state, and validation records are first-class parts of the campaign lifecycle.</p></article>
        <article class="research-detail-card"><strong>Replay &amp; validation</strong><p>Candidates are expected to survive proof, replay, negative controls, or technical rationale before promotion to reportable findings.</p></article>
        <article class="research-detail-card"><strong>Human review</strong><p>Finding approval, report approval, export, retest, and claim boundaries remain explicit operator decisions.</p></article>
      </div>
    </div>
  </section>

  <section class="research-detail-section research-detail-section--dark" aria-labelledby="aotp-workspace">
    <div class="wrap">
      <div class="research-detail-intro"><h2 id="aotp-workspace">The Operator Workspace is the human control surface.</h2><p>The local workspace is designed so an operator can understand scope, targets, credentials, testing state, evidence, candidates, findings, reports, exports, and retests without manually editing internal state. Ambiguous scope and unresolved authority conflicts are supposed to block launch rather than disappear behind a dashboard.</p></div>
      <div class="research-detail-grid">
        <article class="research-detail-card"><strong>Scope &amp; authority</strong><p>Import authority, resolve conflicts, approve deterministic scope, retain references, and reject ambiguous scope.</p></article>
        <article class="research-detail-card"><strong>Campaign supervision</strong><p>Understand target state, execution readiness, blockers, evidence state, and review obligations from one local interface.</p></article>
        <article class="research-detail-card"><strong>Finding review</strong><p>Separate suspicion from proof and require evidence, reproduction, impact, remediation, retest steps, and claim boundaries.</p></article>
        <article class="research-detail-card"><strong>Report &amp; export</strong><p>Prepare recipient-specific packages with evidence indexes, redaction state, manifests, and export validation.</p></article>
        <article class="research-detail-card"><strong>Retest workflow</strong><p>Compare remediation against the original proof without overwriting historical evidence.</p></article>
        <article class="research-detail-card"><strong>Local-first design</strong><p>Loopback operation, local evidence roots, local assets, local models, and no automatic external submission by default.</p></article>
      </div>
    </div>
  </section>

  <section class="research-detail-section" aria-labelledby="aotp-status">
    <div class="wrap">
      <div class="research-detail-intro"><h2 id="aotp-status">A useful platform must be honest about what it has not proven.</h2><p>AOTP has completed substantial engineering foundations and local benchmark work, but its own project status deliberately rejects claims of production readiness, successful public bug bounty operation, external acceptance, payout eligibility, or senior-tester parity until those claims have evidence.</p></div>
      <div class="research-detail-callout"><strong>Why that matters</strong><p>The claim boundary is itself part of the research. Agentic security tooling should not be allowed to manufacture confidence merely because an interface looks complete or an automated pipeline produced output.</p></div>
    </div>
  </section>

  <section class="research-cta"><div class="wrap"><div class="research-cta__panel"><div><h2>Interested in governed AI-assisted security testing?</h2><p>AOTP research informs Black Bag Security's approach to automation, evidence, operator control, and AI security without replacing the human judgment required for professional assessment work.</p></div><a class="home-btn home-btn--accent" href="{{ '/services/ai-security/' | relative_url }}">Explore AI security</a></div></div></section>
</div>
