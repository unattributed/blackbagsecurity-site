---
layout: home-v2
title: The Engineering Arsenal | Black Bag Security
description: Security platforms, hardened software, customer-specific testing systems, controlled proof-of-concept tooling, and experimental engineering built to solve difficult security problems with evidence and control.
permalink: /arsenal/
lang: en
ref: arsenal
arsenal_v2: true
---
<div class="home-v2-page arsenal-v2-page">
  <section class="home-v2-hero" aria-labelledby="arsenal-title">
    <div class="wrap home-v2-hero__grid">
      <div class="home-v2-hero__copy">
        <p class="home-v2-hero__eyebrow">The Engineering Arsenal</p>
        <h1 id="arsenal-title">built.<br>tested.<br>refined.</h1>
        <p class="home-v2-hero__lead">
          <span>Security platforms, hardened software, testing systems, and experimental tooling developed to solve real operational problems.</span>
          <span>Not a catalogue of products. Not a collection of third-party tools.</span>
          <span>The common thread is engineering that makes security work more controlled, observable, reproducible, and useful.</span>
        </p>
        <div class="home-v2-hero__actions">
          <a class="home-btn home-btn--accent" href="#arsenal">Explore the arsenal</a>
          <a class="home-btn" href="{{ '/methodology/' | relative_url }}">See how the work is done</a>
        </div>
      </div>

      <div class="home-v2-hero__visual">
        <img src="{{ '/assets/img/arsenal-lattice.svg' | relative_url }}" width="620" height="410" alt="Connected Engineering Arsenal system lattice showing authority, offensive testing, secure software, infrastructure, AI security, and evidence" />
      </div>
    </div>
  </section>

  <section class="home-v2-research" id="arsenal" aria-labelledby="inside-arsenal">
    <div class="wrap">
      <div class="home-v2-research__head">
        <h2 class="section-title" id="inside-arsenal">Inside the Engineering Arsenal</h2>
      </div>

      <div class="arsenal-grid">
        <article class="arsenal-card">
          <div class="arsenal-card__meta"><span>Platform</span><span>In development</span></div>
          <h3>Security Engagement Platform</h3>
          <p>The engagement control plane: identity, written authorization, executable scope, evidence boundaries, provenance, reporting, and the controls that determine what work is allowed to proceed.</p>
          <a href="{{ '/arsenal/security-engagement-platform/' | relative_url }}">Explore the platform</a>
        </article>

        <article class="arsenal-card">
          <div class="arsenal-card__meta"><span>AOTP</span><span>Active</span></div>
          <h3>Agentic Offensive Testing Platform</h3>
          <p>Authorized-only, evidence-first agentic offensive testing with governed planning, controlled execution, evidence capture, replay, validation, human review, reporting, and retest.</p>
          <a href="{{ '/arsenal/aotp/' | relative_url }}">Explore AOTP</a>
        </article>

        <article class="arsenal-card">
          <div class="arsenal-card__meta"><span>Secure software</span><span>Active</span></div>
          <h3>OSMAP</h3>
          <p>Secure browser access to a hardened OpenBSD mail system, designed around least privilege, safe rendering, bounded authority, accessible interaction, and visible security state.</p>
          <a href="{{ '/arsenal/osmap/' | relative_url }}">Explore OSMAP</a>
        </article>

        <article class="arsenal-card">
          <div class="arsenal-card__meta"><span>Infrastructure</span><span>Public</span></div>
          <h3>OpenBSD Mailstack</h3>
          <p>An operator-focused framework for building, validating, maintaining, hardening, monitoring, backing up, and recovering a security-sensitive OpenBSD mail platform.</p>
          <a href="{{ '/arsenal/openbsd-mailstack/' | relative_url }}">Explore mailstack</a>
        </article>

        <article class="arsenal-card">
          <div class="arsenal-card__meta"><span>AI security</span><span>Public</span></div>
          <h3>Browser-Safe AI Security</h3>
          <p>Controlled local testing for browser-AI attack paths, source confusion, prompt injection, state manipulation, visual deception, and reproducible evidence capture.</p>
          <a href="{{ '/arsenal/browser-safe-ai-security/' | relative_url }}">Explore AI testing</a>
        </article>
      </div>
    </div>
  </section>

  <section class="arsenal-engagement-engineering" aria-labelledby="engagement-engineering-title">
    <div class="wrap">
      <div class="arsenal-engagement-engineering__intro">
        <div>
          <p class="arsenal-project-kicker">Customer-specific engineering</p>
          <h2 id="engagement-engineering-title">Sometimes the proof has to be engineered.</h2>
        </div>
        <div class="arsenal-engagement-engineering__copy">
          <p>Off-the-shelf scanners and testing frameworks are useful, but they do not always answer the question an engagement actually needs to resolve. When the target, protocol, workflow, control, or failure condition is specific to the customer, Black Bag Security can engineer purpose-built tooling to validate, verify, test, reproduce, and explain it.</p>
          <p>That can include custom test harnesses, protocol or workflow tooling, validators, verifiers, controlled exploit demonstrations, and bounded proof-of-concept implementations. Where it improves understanding, a validated attack path can be reduced to a controlled "push-button" PoC so the customer can reproduce the security consequence without reconstructing the original testing environment.</p>
          <p>The objective is practical evidence, not theatrical exploitation. The tooling is designed to show what a malicious actor with equivalent access and capability could do to the applications, infrastructure, data, operations, customer trust, or reputation in scope. The attacker model can range from opportunistic abuse to well-resourced or state-aligned threat actors when that is part of the authorized engagement.</p>
        </div>
      </div>

      <div class="arsenal-engagement-engineering__grid">
        <article class="arsenal-engagement-engineering__item">
          <span>01 / VALIDATE</span>
          <h3>Answer the actual security question</h3>
          <p>Build the minimum purpose-fit instrumentation needed to determine whether the suspected control failure, attack path, or trust assumption is real.</p>
        </article>
        <article class="arsenal-engagement-engineering__item">
          <span>02 / REPRODUCE</span>
          <h3>Turn behavior into repeatable evidence</h3>
          <p>Reduce important conditions to a controlled reproduction that can survive review, comparison, remediation work, and retest.</p>
        </article>
        <article class="arsenal-engagement-engineering__item">
          <span>03 / DEMONSTRATE</span>
          <h3>Make impact observable</h3>
          <p>Use bounded PoCs and exploit demonstrations where they provide a clearer, safer explanation of what a real attacker could achieve than prose or scanner output alone.</p>
        </article>
        <article class="arsenal-engagement-engineering__item">
          <span>04 / HAND OVER</span>
          <h3>Leave the client with something useful</h3>
          <p>Where appropriate, provide the customer-specific reproduction, evidence context, operating constraints, and retest path so remediation teams can verify the security outcome themselves.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="home-v2-why" aria-labelledby="built-not-collected">
    <div class="wrap">
      <h2 class="section-title" id="built-not-collected">Built, Not Collected</h2>
      <div class="home-v2-why__grid">
        <div class="home-v2-why__item">
          <span class="icon-mask icon-scope" aria-hidden="true"></span>
          <span>
            <h3>Authority &amp; Control</h3>
            <p>Scope, authorization, stop conditions, and operator decisions are treated as engineering inputs, not paperwork around the edges.</p>
          </span>
        </div>
        <div class="home-v2-why__item">
          <span class="icon-mask icon-evidence" aria-hidden="true"></span>
          <span>
            <h3>Evidence &amp; Replay</h3>
            <p>Important conclusions are designed to survive review, reproduction, comparison, and retest.</p>
          </span>
        </div>
        <div class="home-v2-why__item">
          <span class="icon-mask icon-code" aria-hidden="true"></span>
          <span>
            <h3>Secure Systems</h3>
            <p>Least privilege, bounded authority, fail-closed behavior, recoverability, and observable state shape the implementation.</p>
          </span>
        </div>
        <div class="home-v2-why__item">
          <span class="icon-mask icon-target" aria-hidden="true"></span>
          <span>
            <h3>Adversarial Engineering</h3>
            <p>Tools and platforms are developed from the attacker's perspective, then constrained by evidence, safety, and operational reality.</p>
          </span>
        </div>
      </div>
    </div>
  </section>
</div>
