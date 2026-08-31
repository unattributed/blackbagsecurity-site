---
layout: home-v2
title: AI Security | Black Bag Security
description: Security testing for AI-enabled products, agents, browsers, retrieval, memory, tools, and data flows, focused on authority boundaries, evidence, remediation, and retest.
permalink: /services/ai-security/
lang: en
ref: ai-security
services_v2: true
marketing_v3: true
---
<div class="market-page">
  <section class="market-hero" aria-labelledby="ai-title">
    <div class="wrap market-hero__grid">
      <div>
        <p class="market-kicker">AI Security</p>
        <h1 id="ai-title">AI changes what can see, decide, and act. <span>Test the authority, not just the prompt.</span></h1>
        <p class="market-lead">Modern AI systems combine untrusted content, model behavior, retrieval, memory, tools, browser state, identities, and downstream actions. We test the whole trust chain.</p>
        <div class="market-actions"><a class="market-btn market-btn--accent" href="{{ '/contact/#assessment' | relative_url }}">Discuss an AI system</a><a class="market-btn" href="#ai-boundary">See the trust boundary</a></div>
      </div>
      <div class="market-visual" aria-label="AI trust boundary"><span class="market-visual__title">Where influence becomes authority</span>
        <div class="market-flow market-flow--5">
          <article class="market-node" data-step="01"><strong>Untrusted input</strong><p>Prompt · web · document · message</p></article>
          <article class="market-node" data-step="02"><strong>Model</strong><p>Interpretation · planning · generation</p></article>
          <article class="market-node" data-step="03"><strong>Authority gate</strong><p>Policy · identity · confirmation · scope</p></article>
          <article class="market-node" data-step="04"><strong>Tools &amp; data</strong><p>Browser · API · retrieval · memory</p></article>
          <article class="market-node" data-step="05"><strong>Action</strong><p>Read · write · send · execute</p></article>
        </div>
        <div class="market-outcome"><strong>Client question</strong><p>Can untrusted influence become trusted action outside the system’s intended authority?</p></div>
      </div>
    </div>
  </section>

  <section class="market-section market-section--soft" id="ai-boundary" aria-labelledby="ai-method"><div class="wrap market-split"><div class="market-message"><p class="market-kicker">How we test</p><h2 id="ai-method">Treat the model as one component in a <span>larger security system.</span></h2><p>The important failures often occur where model output crosses into tools, authenticated browser state, private retrieval, persistent memory, external services, or business actions.</p></div>
    <div class="market-visual"><span class="market-visual__title">AI attack surface</span><div class="market-stack">
      <div class="market-stack__band"><strong>Influence</strong><span>Direct and indirect prompt injection, source confusion, malicious content, and adversarial instructions.</span></div>
      <div class="market-stack__band"><strong>Context</strong><span>System prompts, retrieval, memory, browser state, user identity, and hidden application data.</span></div>
      <div class="market-stack__band"><strong>Authority</strong><span>Tool permissions, approval gates, identity propagation, scope enforcement, and action boundaries.</span></div>
      <div class="market-stack__band"><strong>Consequence</strong><span>Data exposure, unintended actions, cross-context influence, unsafe execution, or control bypass.</span></div>
    </div></div>
  </div></section>

  <section class="market-section" aria-labelledby="ai-focus"><div class="wrap"><div class="market-section__head"><div><p class="market-kicker">Where depth goes</p><h2 id="ai-focus">Test the places where AI becomes <span>operational authority.</span></h2></div><p>We focus on the boundaries that can turn persuasive text into a security consequence.</p></div>
    <div class="market-card-grid"><article class="market-card"><span class="market-card__code">Prompt &amp; source trust</span><h3>Can untrusted content redirect the system?</h3><p>Direct injection, indirect injection, content provenance, source weighting, instruction hierarchy, and context confusion.</p></article><article class="market-card"><span class="market-card__code">Tools &amp; agents</span><h3>Can planning exceed intended authority?</h3><p>Tool invocation, multi-step behavior, permission boundaries, confirmation gates, retries, and delegated actions.</p></article><article class="market-card"><span class="market-card__code">Retrieval &amp; memory</span><h3>Can private context leak or persist incorrectly?</h3><p>Cross-user exposure, data scoping, memory contamination, retrieval boundaries, and sensitive context handling.</p></article><article class="market-card"><span class="market-card__code">Browser AI</span><h3>Can page content abuse authenticated browser state?</h3><p>DOM context, frame boundaries, extension or assistant behavior, browser actions, session state, and evidence capture.</p></article></div>
  </div></section>

  <section class="market-section market-section--grid" aria-labelledby="ai-proof"><div class="wrap market-split"><div class="market-message"><p class="market-kicker">Evidence matters more than spectacle</p><h2 id="ai-proof">Make the AI failure path <span>repeatable.</span></h2><p>AI behavior can vary. A useful finding therefore needs controlled inputs, captured context, observable actions, boundary conditions, and enough replay information to distinguish a real security property from a one-off model response.</p></div>
    <div class="market-visual"><span class="market-visual__title">Reproducible AI evidence</span><div class="market-flow market-flow--4"><article class="market-node" data-step="01"><strong>Input</strong><p>Preserve the influencing content and source.</p></article><article class="market-node" data-step="02"><strong>Context</strong><p>Record relevant model, browser, identity, or tool state.</p></article><article class="market-node" data-step="03"><strong>Action</strong><p>Capture the observable security consequence.</p></article><article class="market-node" data-step="04"><strong>Replay</strong><p>Repeat under bounded conditions and compare controls.</p></article></div><div class="market-outcome"><strong>Evidence before AI narrative</strong></div></div>
  </div></section>

  <section class="market-close" aria-labelledby="ai-close"><div class="wrap market-close__panel"><div><p class="market-kicker">Start with the authority boundary</p><h2 id="ai-close">Tell us what the AI can access, what it can act on, and what must never cross that line.</h2><p>We will map the influence path, permission model, sensitive context, and evidence needed to test the system safely.</p></div><a class="market-btn market-btn--accent" href="{{ '/contact/#assessment' | relative_url }}">Discuss the AI system</a></div></section>
</div>
