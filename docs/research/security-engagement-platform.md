---
layout: home-v2
title: Security Engagement Platform | Black Bag Security
permalink: /research/security-engagement-platform/
description: The engineering direction for Black Bag Security's engagement control plane, covering authorization, executable scope, evidence governance, delivery state, and future AOTP integration.
lang: en
ref: research-security-engagement-platform
research_v2: true
---
<div class="research-v2-page">
  <section class="research-detail-hero" aria-labelledby="research-detail-title">
    <div class="wrap">
      <a class="research-detail-back" href="{{ '/research/' | relative_url }}">All research</a>
      <div class="research-detail-hero__grid">
        <div>
          <div class="research-detail-hero__meta"><span class="research-status">In development</span></div>
          <h1 id="research-detail-title">Security<br>Engagement Platform</h1>
          <p class="research-detail-hero__lead">The Security Engagement Platform is the planned control plane for authorized security work. Its job is to turn engagement identity, written authority, scope, exclusions, stop conditions, evidence state, and delivery requirements into deterministic records that execution systems can consume without silently widening what an operator is allowed to do.</p>
        </div>
        <aside class="research-detail-summary" aria-label="Project summary">
          <div><strong>Role</strong><p>Engagement governance and control plane.</p></div>
          <div><strong>Current foundation</strong><p>Hardened engagement namespaces, authorization records, and draft executable scope records are already implemented in the predecessor codebase.</p></div>
          <div><strong>Future relationship</strong><p>Designed to integrate with AOTP as the execution plane rather than duplicate its testing engine.</p></div>
        </aside>
      </div>
    </div>
  </section>

  <section class="research-detail-section" aria-labelledby="sep-problem">
    <div class="wrap">
      <div class="research-detail-intro"><h2 id="sep-problem">The problem is bigger than launching tools.</h2><p>Professional security work begins before the first request is sent and continues after the last finding is written. Authorization, scope, safe execution, evidence handling, communication, reporting, remediation, and retest all need a reliable state model. Ad hoc folders and operator memory do not scale well enough for that job.</p></div>
      <div class="research-detail-grid">
        <article class="research-detail-card"><strong>Engagement identity</strong><p>One explicit company and engagement namespace, with no authority inferred from directories, browser sessions, hostnames, or prior runs.</p></article>
        <article class="research-detail-card"><strong>Written authorization</strong><p>Versioned authorization records bind permitted targets, actions, restrictions, stop conditions, validity state, and provenance to the engagement.</p></article>
        <article class="research-detail-card"><strong>Executable scope</strong><p>Scope records are designed to narrow written authority into exact URLs or path prefixes, methods, actions, exclusions, and rate ceilings.</p></article>
        <article class="research-detail-card"><strong>Fail-closed state</strong><p>Ambiguous identity, unsafe filesystem state, stale authorization, conflicting scope, or invalid records should stop progression instead of broadening it.</p></article>
        <article class="research-detail-card"><strong>Evidence governance</strong><p>The platform direction treats evidence, provenance, client data, report-safe artifacts, and retention as first-class engagement state.</p></article>
        <article class="research-detail-card"><strong>Lifecycle closure</strong><p>Findings, remediation ownership, retest evidence, closure state, and delivery records belong to the engagement rather than to an isolated scanner run.</p></article>
      </div>
    </div>
  </section>

  <section class="research-detail-section research-detail-section--dark" aria-labelledby="sep-progression">
    <div class="wrap">
      <div class="research-detail-intro"><h2 id="sep-progression">Progression is deliberately staged.</h2><p>The current migration work separates local governance from target-facing execution. That boundary is intentional. Authority records do not start tools. Scope records do not contact targets. Later slices add operation-level checks and controlled executor integration only after the engagement state can fail closed correctly.</p></div>
      <div class="research-detail-grid">
        <article class="research-detail-card"><strong>CAP-002</strong><p>Hardened engagement namespaces and explicit engagement identity.</p></article>
        <article class="research-detail-card"><strong>CAP-003</strong><p>Engagement-bound authorization records with deterministic semantic digests and lifecycle validation.</p></article>
        <article class="research-detail-card"><strong>CAP-004</strong><p>Draft executable scope records with inclusions, exclusions, methods, actions, stop conditions, and rate ceilings.</p></article>
        <article class="research-detail-card"><strong>Later execution slices</strong><p>Operation checks, redirect and transformed-target decisions, browser and proxy dispatch, API/WSTG integration, and agent dispatch.</p></article>
        <article class="research-detail-card"><strong>AOTP integration</strong><p>Approved engagement authority can become deterministic campaign authority for governed offensive execution.</p></article>
        <article class="research-detail-card"><strong>Assurance return path</strong><p>Evidence, finding state, reporting, remediation, and retest can flow back into one engagement record with retained provenance.</p></article>
      </div>
    </div>
  </section>

  <section class="research-detail-section" aria-labelledby="sep-why">
    <div class="wrap">
      <div class="research-detail-intro"><h2 id="sep-why">Why this matters beyond internal tooling.</h2><p>A well-designed engagement platform can make senior security work more repeatable without reducing it to automation. The objective is to remove avoidable ambiguity and operator bookkeeping while preserving the human judgment required for testing, evidence qualification, risk interpretation, and client communication.</p></div>
      <div class="research-detail-callout"><strong>Current claim boundary</strong><p>The Security Engagement Platform name describes the forward engineering direction. The full renamed platform, later executor slices, and AOTP integration are not presented as complete, generally available, or production-ready.</p></div>
    </div>
  </section>

  <section class="research-cta"><div class="wrap"><div class="research-cta__panel"><div><h2>Interested in the engineering behind controlled security delivery?</h2><p>The same principles already shape Black Bag Security engagements: explicit scope, evidence discipline, secure handling, transparent limitations, and retest-driven closure.</p></div><a class="home-btn home-btn--accent" href="{{ '/methodology/' | relative_url }}">See the methodology</a></div></div></section>
</div>
