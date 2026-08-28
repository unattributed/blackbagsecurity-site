---
layout: home-v2
title: AI Security | Black Bag Security
description: Principal-led AI security assessment for browser-AI workflows, prompt injection, agent and tool boundaries, data exposure, policy controls, and reproducible evidence.
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
          <p class="service-detail-hero__lead">AI systems are more than models. They include prompts, browsers, retrieval paths, tools, identities, data, policies, and human decisions. The assessment focuses on the boundaries where those components trust one another and where untrusted content can influence protected actions.</p>
        </div>
        <aside class="service-detail-summary" aria-label="Service summary">
          <div class="service-detail-summary__row"><strong>Best for</strong><p>AI-enabled applications, browser-AI workflows, agentic systems, model-integrated products, and security teams validating emerging AI controls.</p></div>
          <div class="service-detail-summary__row"><strong>Core question</strong><p>Can untrusted content, excessive authority, weak data boundaries, or unsafe tool use cause the AI workflow to violate its intended security policy?</p></div>
          <div class="service-detail-summary__row"><strong>Output</strong><p>Reproducible abuse cases, control gaps, attack-path evidence, and mitigation guidance grounded in the actual system behavior.</p></div>
        </aside>
      </div>
    </div>
  </section>

  <section class="service-detail-section" aria-labelledby="ai-what-we-test">
    <div class="wrap">
      <div class="service-detail-intro"><h2 id="ai-what-we-test">Test the workflow around the model.</h2><p>The goal is not to declare a model "secure." It is to determine whether the complete AI-enabled workflow behaves safely when content, identity, context, and tool authority are manipulated in realistic ways.</p></div>
      <div class="service-detail-grid">
        <article class="service-detail-card"><strong>Prompt Injection &amp; Source Confusion</strong><p>Direct and indirect instruction abuse, hidden or low-visibility content, source ambiguity, and cases where untrusted material gains decision influence.</p></article>
        <article class="service-detail-card"><strong>Agent &amp; Tool Boundaries</strong><p>Tool invocation, action authority, approval gates, parameter control, escalation paths, and the difference between model suggestion and system execution.</p></article>
        <article class="service-detail-card"><strong>Data &amp; Identity Boundaries</strong><p>Sensitive context, retrieval scope, user separation, permissions, memory, data leakage, and assumptions about who or what supplied information.</p></article>
        <article class="service-detail-card"><strong>Browser-AI Workflows</strong><p>DOM versus rendered content, frame and source confusion, delayed content, visual deception, handoff paths, and browser-originated untrusted input.</p></article>
        <article class="service-detail-card"><strong>Policy &amp; Control Effectiveness</strong><p>Guardrails, allowlists, deny rules, workflow controls, fail-open behavior, exception paths, and whether policy survives adversarial pressure.</p></article>
        <article class="service-detail-card"><strong>Evidence &amp; Replay</strong><p>Structured test cases, browser or HTTP evidence, deterministic artifacts, and repeatable local validation where the environment supports it.</p></article>
      </div>
    </div>
  </section>

  <section class="service-detail-section" aria-labelledby="ai-outcomes">
    <div class="wrap">
      <h2 class="svc-section-title" id="ai-outcomes">What the engagement produces</h2>
      <div class="service-detail-outcomes">
        <article class="service-outcome"><span>01</span><strong>Abuse-path evidence</strong><p>Demonstrate how untrusted input can influence the workflow and what protected behavior changes as a result.</p></article>
        <article class="service-outcome"><span>02</span><strong>Boundary analysis</strong><p>Identify where model output, user identity, browser content, tools, and data are trusted more than the architecture justifies.</p></article>
        <article class="service-outcome"><span>03</span><strong>Control judgment</strong><p>Separate controls that materially constrain abuse from controls that are cosmetic, bypassable, or fail open.</p></article>
        <article class="service-outcome"><span>04</span><strong>Safer design direction</strong><p>Prioritize authority reduction, source isolation, approval gates, data minimization, and workflow changes that reduce meaningful risk.</p></article>
      </div>
    </div>
  </section>

  <section class="service-detail-section" aria-labelledby="ai-inputs">
    <div class="wrap">
      <h2 class="svc-section-title" id="ai-inputs">What makes the work effective</h2>
      <div class="service-detail-needs">
        <div class="service-detail-needs__panel"><h3>Useful inputs</h3><ul><li>Architecture of the AI workflow, including models, tools, retrieval, browser paths, and external services.</li><li>Test identities and permissions that represent meaningful user or operator roles.</li><li>Policies, guardrails, approval rules, and documented assumptions the assessment should challenge.</li><li>Safe synthetic test data or an agreed local reproduction path where possible.</li></ul></div>
        <div class="service-detail-needs__panel"><h3>Operational boundaries</h3><ul><li>Explicit authority for the AI systems and integrations in scope.</li><li>Restrictions on external model calls, sensitive data, or third-party systems.</li><li>Approved test cases for tool actions and any potentially state-changing behavior.</li><li>Evidence-handling requirements for prompts, outputs, browser captures, and logs.</li></ul></div>
      </div>
    </div>
  </section>

  <section class="services-v2-cta"><div class="wrap"><div class="services-v2-cta__panel"><div><h2>Need evidence about how an AI workflow behaves under adversarial input?</h2><p>Start with the workflow, its authority, the data it can reach, and the controls you expect to contain it. The assessment can be shaped around those boundaries.</p></div><a class="home-btn home-btn--accent" href="{{ '/contact/#assessment' | relative_url }}">Discuss the AI system</a></div></div></section>
</div>
