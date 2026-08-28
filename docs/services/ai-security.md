---
layout: home-v2
title: AI Security | Black Bag Security
description: Principal-led AI security assessment for prompt injection, browser-AI workflows, agent and tool authority, data exposure, policy controls, and reproducible evidence.
permalink: /services/ai-security/
lang: en
ref: service-ai-security
services_v2: true
---
<div class="services-v2-page">
  <section class="service-detail-hero" aria-labelledby="service-title">
    <div class="wrap">
      <a class="service-detail-back" href="{{ '/services/' | relative_url }}">All services</a>
      <div class="service-detail-hero__grid">
        <div>
          <div class="service-detail-hero__number"><span class="icon-mask icon-chip" aria-hidden="true"></span>Service 03</div>
          <h1 id="service-title">AI security</h1>
          <p class="service-detail-hero__lead">AI risk rarely lives in the model alone. It emerges from the system around it: untrusted content, retrieval, browsers, tools, identities, data, approvals, and the authority granted to model output. The assessment tests those boundaries as one workflow and records what protected behavior changes under adversarial input.</p>
        </div>
        <aside class="service-detail-summary" aria-label="Service summary">
          <div class="service-detail-summary__row"><strong>Best for</strong><p>AI-enabled products, browser-AI workflows, agentic systems, model-integrated applications, and security teams evaluating new AI controls.</p></div>
          <div class="service-detail-summary__row"><strong>Core question</strong><p>Can untrusted input, excessive authority, weak source separation, or unsafe data access cause the workflow to violate an intended security boundary?</p></div>
          <div class="service-detail-summary__row"><strong>Output</strong><p>Reproducible abuse cases, boundary analysis, control observations, supporting evidence, and mitigation priorities tied to actual system behavior.</p></div>
        </aside>
      </div>
    </div>
  </section>

  <section class="service-detail-section" aria-labelledby="ai-what-we-test">
    <div class="wrap">
      <div class="service-detail-intro"><h2 id="ai-what-we-test">Test the authority around the model.</h2><p>The objective is not to label a model "secure." It is to determine whether the complete AI-enabled system keeps untrusted content, model output, user authority, tools, and sensitive data within their intended boundaries.</p></div>
      <div class="service-detail-grid">
        <article class="service-detail-card"><strong>Prompt Injection &amp; Source Confusion</strong><p>Direct and indirect instruction abuse, hidden or low-visibility content, source ambiguity, competing instructions, and cases where untrusted material gains decision influence.</p></article>
        <article class="service-detail-card"><strong>Agent &amp; Tool Authority</strong><p>Tool invocation, parameter control, approval gates, action scope, privilege escalation, and the boundary between model suggestion and system execution.</p></article>
        <article class="service-detail-card"><strong>Data &amp; Identity Boundaries</strong><p>Retrieval scope, memory, permissions, user separation, sensitive context, data leakage, and assumptions about who supplied or is entitled to information.</p></article>
        <article class="service-detail-card"><strong>Browser-AI Workflows</strong><p>DOM versus rendered content, frame and source confusion, delayed content, visual deception, handoff paths, and browser-originated untrusted input.</p></article>
        <article class="service-detail-card"><strong>Policy &amp; Control Effectiveness</strong><p>Guardrails, allowlists, deny rules, approval logic, fail-open behavior, exception paths, and whether policy still constrains the workflow under adversarial pressure.</p></article>
        <article class="service-detail-card"><strong>Evidence &amp; Replay</strong><p>Structured cases, browser or HTTP evidence, deterministic artifacts, and repeatable local validation when the system and data boundary support it.</p></article>
      </div>
    </div>
  </section>

  <section class="service-detail-section" aria-labelledby="ai-outcomes">
    <div class="wrap">
      <h2 class="svc-section-title" id="ai-outcomes">What comes back from the engagement</h2>
      <div class="service-detail-outcomes">
        <article class="service-outcome"><span>01</span><strong>Demonstrated abuse paths</strong><p>Show how adversarial input changes the workflow and identify the protected action, data, or decision affected by that influence.</p></article>
        <article class="service-outcome"><span>02</span><strong>Authority map</strong><p>Clarify where model output, browser content, tools, identities, retrieval, and data are trusted more than the architecture justifies.</p></article>
        <article class="service-outcome"><span>03</span><strong>Control effectiveness</strong><p>Distinguish controls that materially constrain abuse from controls that are cosmetic, bypassable, overly permissive, or fail open.</p></article>
        <article class="service-outcome"><span>04</span><strong>Safer design priorities</strong><p>Prioritize authority reduction, source isolation, approval gates, data minimization, and workflow changes according to the risk they actually remove.</p></article>
      </div>
    </div>
  </section>

  <section class="service-detail-section" aria-labelledby="ai-inputs">
    <div class="wrap">
      <h2 class="svc-section-title" id="ai-inputs">Inputs that materially improve the assessment</h2>
      <div class="service-detail-needs">
        <div class="service-detail-needs__panel"><h3>Technical context</h3><ul><li>Architecture of the AI workflow, including models, retrieval, tools, browser paths, memory, and external services.</li><li>Test identities and permissions that represent meaningful user, operator, or agent authority.</li><li>Documented policies, guardrails, approval rules, and assumptions the assessment should challenge.</li><li>Safe synthetic data or an agreed local reproduction path where possible.</li></ul></div>
        <div class="service-detail-needs__panel"><h3>Operating authority</h3><ul><li>Explicit authorization for the models, applications, tools, and integrations in scope.</li><li>Restrictions on external model calls, sensitive data, or third-party systems.</li><li>Approved behavior for tool actions and any state-changing test cases.</li><li>Evidence-handling rules for prompts, outputs, browser captures, logs, and synthetic sensitive data.</li></ul></div>
      </div>
    </div>
  </section>

  <section class="services-v2-cta"><div class="wrap"><div class="services-v2-cta__panel"><div><h2>Need evidence about what an AI-enabled system can be made to do?</h2><p>Start with the workflow, the authority it holds, the data it can reach, and the controls expected to contain it. The assessment can be shaped around those boundaries.</p></div><a class="home-btn home-btn--accent" href="{{ '/contact/#assessment' | relative_url }}">Discuss the AI system</a></div></div></section>
</div>
