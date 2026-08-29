---
layout: home-v2
title: Browser-Safe AI Security | The Engineering Arsenal
description: A local validation toolkit and workshop track for reproducible browser-based AI security testing using synthetic targets and evidence-first workflows.
permalink: /arsenal/browser-safe-ai-security/
lang: en
ref: arsenal-browser-safe-ai-security
arsenal_v2: true
---
<div class="arsenal-v2-page">
  <section class="arsenal-project-hero" aria-labelledby="browser-ai-title">
    <div class="wrap">
      <a class="arsenal-project-back" href="{{ '/arsenal/' | relative_url }}">Back to the Engineering Arsenal</a>
      <div class="arsenal-project-hero__grid">
        <div>
          <p class="arsenal-project-kicker">AI Security Validation</p>
          <h1 id="browser-ai-title">Browser-Safe AI Security</h1>
          <p class="arsenal-project-lead">A local validation toolkit and workshop track for browser-based AI security testing. It pairs synthetic attack cases with a deliberately weak local target so practitioners can study browser-AI trust failures without testing third-party systems or relying on screenshots and anecdotes as evidence.</p>
          <div class="arsenal-project-actions">
            <a class="arsenal-repo-link" href="https://github.com/unattributed/ai-browser-security-test-suite" target="_blank" rel="noopener noreferrer">View public repository on GitHub</a>
          </div>
        </div>
        <aside class="arsenal-project-summary" aria-label="Browser-Safe AI Security summary">
          <div class="arsenal-project-summary__row"><strong>Purpose</strong><p>Reproducible local validation of browser-AI attack paths and control failures.</p></div>
          <div class="arsenal-project-summary__row"><strong>Evidence</strong><p>Browser, DOM, rendered text, screenshots, frame trees, HTTP, proxy captures, JSON/JSONL, manifests and hashes.</p></div>
          <div class="arsenal-project-summary__row"><strong>Repository</strong><p>Public AGPL-3.0-or-later project using local synthetic targets and data.</p></div>
        </aside>
      </div>
    </div>
  </section>

  <section class="arsenal-project-section">
    <div class="wrap">
      <div class="arsenal-project-intro">
        <h2>The browser changes the AI threat model</h2>
        <p>When AI is embedded in a browser workflow, the model is only one component in a larger trust chain. Source HTML, rendered content, hidden DOM, frames, screenshots, delayed state changes, QR handoffs, user approvals, external navigation, and tool authority can all influence what the AI sees and what the system does next.</p>
      </div>
      <div class="arsenal-project-grid">
        <article class="arsenal-project-block"><span>01</span><h3>Indirect prompt injection</h3><p>Exercises how untrusted browser content can influence an AI workflow without being presented as an explicit user instruction.</p></article>
        <article class="arsenal-project-block"><span>02</span><h3>Source confusion</h3><p>Tests hidden DOM, low-visibility content, frame trees, and DOM-versus-rendered-page mismatches that can change the model's interpretation of a page.</p></article>
        <article class="arsenal-project-block"><span>03</span><h3>Visual deception</h3><p>Uses screenshot and rendering scenarios to examine where visual state and machine-readable state diverge.</p></article>
        <article class="arsenal-project-block"><span>04</span><h3>State transitions</h3><p>Delayed content, navigation, QR handoff, and off-browser transitions are captured as part of the attack chain instead of treated as isolated prompts.</p></article>
        <article class="arsenal-project-block"><span>05</span><h3>Synthetic sensitive data</h3><p>Local synthetic data allows handling and leakage behaviors to be exercised without putting real customer data or credentials at risk.</p></article>
        <article class="arsenal-project-block"><span>06</span><h3>Evidence packaging</h3><p>Playwright, HTTP and proxy capture, structured evidence, deterministic hashing, manifests, reports, and archive sidecars support reviewer-grade reproduction.</p></article>
      </div>
    </div>
  </section>

  <section class="arsenal-project-status">
    <div class="wrap arsenal-project-status__grid">
      <div>
        <p class="arsenal-project-kicker">Safety boundary</p>
        <h2>Local targets. Synthetic data. Reproducible evidence.</h2>
        <p>The project is intentionally designed for controlled experimentation. It does not require testing production SaaS, real credentials, customer data, or third-party browser-AI products in order to study the security mechanics.</p>
      </div>
      <div class="arsenal-status-list">
        <div class="arsenal-status-item"><strong>Included</strong><p>Labs 00 through 12, Playwright-backed evidence, proxy and HTTP workflows, structured JSON/JSONL records, artifact manifests, deterministic hashing, workshop material, and validation checks.</p></div>
        <div class="arsenal-status-item"><strong>Supported target</strong><p>A deliberately weak local Ollama-backed web UI used only as an authorized synthetic test environment.</p></div>
        <div class="arsenal-status-item"><strong>Not claimed</strong><p>Vendor certification, production SaaS testing, hardening of third-party AI products, or exploit-development training against real systems.</p></div>
      </div>
    </div>
  </section>

  <section class="arsenal-project-section">
    <div class="wrap">
      <div class="arsenal-project-intro">
        <h2>Why it belongs in the Arsenal</h2>
        <p>The project turns an emerging security problem into something testable and reviewable. Instead of debating whether a browser-AI behavior is dangerous in the abstract, the toolkit captures the page state, model-visible context, network behavior, model response, and resulting artifacts so the conclusion can be inspected and repeated.</p>
      </div>
      <div class="arsenal-project-actions">
        <a class="arsenal-repo-link" href="https://github.com/unattributed/ai-browser-security-test-suite" target="_blank" rel="noopener noreferrer">View public repository on GitHub</a>
        <a class="arsenal-repo-link" href="{{ '/services/ai-security/' | relative_url }}">AI Security Services</a>
      </div>
    </div>
  </section>
</div>
