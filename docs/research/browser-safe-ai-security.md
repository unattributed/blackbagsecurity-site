---
layout: home-v2
title: Browser-Safe AI Security | Black Bag Security
permalink: /research/browser-safe-ai-security/
description: Practical browser-AI security research using local synthetic targets, repeatable adversarial cases, Playwright evidence capture, proxy workflows, and deterministic artifacts.
lang: en
ref: research-browser-safe-ai-security
research_v2: true
---
<div class="research-v2-page">
  <section class="research-detail-hero" aria-labelledby="research-detail-title">
    <div class="wrap">
      <a class="research-detail-back" href="{{ '/research/' | relative_url }}">All research</a>
      <div class="research-detail-hero__grid">
        <div>
          <div class="research-detail-hero__meta"><span class="research-status">Public local validation toolkit</span></div>
          <h1 id="research-detail-title">Browser-Safe<br>AI Security</h1>
          <p class="research-detail-hero__lead">Browser-Safe AI Security is a practical research track and local validation toolkit for testing how AI workflows behave when hostile or misleading web content enters the decision path. It treats the browser as an adversarial input surface and the AI component as one untrusted classifier inside a larger security pipeline.</p>
        </div>
        <aside class="research-detail-summary" aria-label="Project summary">
          <div><strong>Role</strong><p>Browser-AI security research and reproducible local validation.</p></div>
          <div><strong>Environment</strong><p>Local intentionally weak target, synthetic data, Playwright, HTTP/proxy evidence, structured artifacts.</p></div>
          <div><strong>Safety boundary</strong><p>The public toolkit is for local synthetic exercises, not testing third-party or production AI services.</p></div>
        </aside>
      </div>
    </div>
  </section>

  <section class="research-detail-section" aria-labelledby="browser-problem">
    <div class="wrap">
      <div class="research-detail-intro"><h2 id="browser-problem">The model does not see the web the way the user does.</h2><p>Browser-integrated AI may receive DOM content, rendered text, screenshots, frame trees, delayed state, hidden elements, external handoffs, or a mixture of those sources. Attackers can exploit the differences between what a human believes they are viewing and what the AI workflow actually consumes.</p></div>
      <div class="research-detail-grid">
        <article class="research-detail-card"><strong>Indirect prompt injection</strong><p>Test whether instructions embedded in untrusted browser content can influence model behavior or downstream decisions.</p></article>
        <article class="research-detail-card"><strong>Hidden &amp; low-visibility content</strong><p>Compare source, DOM, rendered text, and visual presentation to expose content the model can receive but the user may not notice.</p></article>
        <article class="research-detail-card"><strong>Source confusion</strong><p>Exercise iframes, frame trees, mixed origins, QR handoffs, and other transitions where provenance can become ambiguous.</p></article>
        <article class="research-detail-card"><strong>Visual deception</strong><p>Test screenshot-driven or rendered-page workflows where visual appearance can disagree with underlying structure.</p></article>
        <article class="research-detail-card"><strong>Delayed state</strong><p>Exercise content that appears or changes after initial load, creating timing and state-transition risks for AI-assisted browsing.</p></article>
        <article class="research-detail-card"><strong>Fail-open pressure</strong><p>Test exception paths, policy simulation, verdict manipulation, and conditions where protective logic becomes permissive under uncertainty.</p></article>
      </div>
    </div>
  </section>

  <section class="research-detail-section research-detail-section--dark" aria-labelledby="browser-evidence">
    <div class="wrap">
      <div class="research-detail-intro"><h2 id="browser-evidence">The research is built around evidence, not screenshots alone.</h2><p>The toolkit is designed so a reviewer can reconstruct what the browser exposed, what the AI received, what changed, and why a conclusion was reached. Labs produce structured evidence instead of relying on anecdotal model behavior.</p></div>
      <div class="research-detail-grid">
        <article class="research-detail-card"><strong>Browser artifacts</strong><p>Source, DOM, rendered text, screenshots, frame-tree state, and browser-observed transitions.</p></article>
        <article class="research-detail-card"><strong>HTTP &amp; proxy evidence</strong><p>OWASP ZAP, mitmproxy, or other supported local proxy workflows capture the network context when it matters.</p></article>
        <article class="research-detail-card"><strong>Model-bound context</strong><p>The material provided to the model and the resulting response can be preserved as separate evidence objects.</p></article>
        <article class="research-detail-card"><strong>Structured records</strong><p>JSON and JSONL evidence records support repeatable analysis and automated validation.</p></article>
        <article class="research-detail-card"><strong>Integrity manifests</strong><p>Artifact manifests, SHA-256 records, archives, and sidecars make evidence packages independently checkable.</p></article>
        <article class="research-detail-card"><strong>Workshop validation</strong><p>A staged local lab series exercises methods from environment readiness through capstone attack-chain evidence packaging.</p></article>
      </div>
    </div>
  </section>

  <section class="research-detail-section" aria-labelledby="browser-why">
    <div class="wrap">
      <div class="research-detail-intro"><h2 id="browser-why">Why this matters to real AI products.</h2><p>The research separates the general security problem from any one vendor or model. Browser content is untrusted input. Model output is not authority. Tool actions need explicit control boundaries. Data sources need provenance. Exception behavior needs testing. Those principles transfer directly into AI-enabled product design and assessment.</p></div>
      <div class="research-detail-callout"><strong>Current claim boundary</strong><p>The public toolkit validates synthetic browser-AI scenarios against a supported local weak target. It does not certify vendor products, claim production SaaS testing, or prove that every AI model will behave identically.</p></div>
    </div>
  </section>

  <section class="research-cta"><div class="wrap"><div class="research-cta__panel"><div><h2>Building AI into a browser, agent, or security workflow?</h2><p>Black Bag Security can apply this research to the authority, data, browser, tool, and policy boundaries around your AI system.</p></div><a class="home-btn home-btn--accent" href="{{ '/services/ai-security/' | relative_url }}">Explore AI security</a></div></div></section>
</div>
