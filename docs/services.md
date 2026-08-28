---
layout: home-v2
title: Services | Black Bag Security
description: Principal-led application and API security, adversary validation, AI security, and secure systems engineering. Testing designed to answer security decisions with reproducible evidence.
permalink: /services/
lang: en
ref: services
services_v2: true
---
<div class="services-v2-page">
  <section class="services-v2-hero" aria-labelledby="services-title">
    <div class="wrap services-v2-hero__grid">
      <div>
        <p class="svc-eyebrow">Services</p>
        <h1 id="services-title">test what matters.<br>prove what fails.<br>engineer what lasts.</h1>
        <p class="services-v2-hero__lead">
          Security work should answer a decision. Can this boundary be crossed? Does this control actually stop the attack path? Can this workflow be abused? Will the system remain secure when something fails? Black Bag Security designs engagements around those questions, then supports the answer with reproducible evidence, technical judgment, and a path to verification.
        </p>
        <div class="services-v2-hero__actions">
          <a class="home-btn home-btn--accent" href="{{ '/contact/#assessment' | relative_url }}">Discuss an engagement</a>
          <a class="home-btn" href="#how-we-work">See how we work</a>
        </div>
      </div>

      <aside class="services-v2-hero__principles" aria-label="Engagement principles">
        <div class="svc-principle">
          <span class="icon-mask icon-target" aria-hidden="true"></span>
          <div><strong>Decision-led</strong><p>Begin with the security decision that needs evidence, not a predetermined tool list.</p></div>
        </div>
        <div class="svc-principle">
          <span class="icon-mask icon-shield" aria-hidden="true"></span>
          <div><strong>Explicitly bounded</strong><p>Scope, authority, safety limits, escalation, and data handling are agreed before testing starts.</p></div>
        </div>
        <div class="svc-principle">
          <span class="icon-mask icon-evidence" aria-hidden="true"></span>
          <div><strong>Evidence-driven</strong><p>Material findings are supported by enough proof to reproduce the failure and defend the conclusion.</p></div>
        </div>
        <div class="svc-principle">
          <span class="icon-mask icon-deliverables" aria-hidden="true"></span>
          <div><strong>Closed-loop</strong><p>The work is not complete when a finding is written. Remediation and retest determine whether the risk is actually resolved.</p></div>
        </div>
      </aside>
    </div>
  </section>

  <section class="services-v2-lines" aria-labelledby="primary-services">
    <div class="wrap">
      <div class="services-v2-lines__intro">
        <h2 id="primary-services">Four service lines. One standard of proof.</h2>
        <p>The technology changes. The discipline does not. Understand the trust boundary. Exercise realistic failure paths. Preserve the evidence. Explain the root cause. Prioritize what changes risk. Verify the fix.</p>
      </div>

      <div class="services-v2-lines__grid">
        <article class="svc-line-card">
          <div class="svc-line-card__number">01<span class="icon-mask icon-model" aria-hidden="true"></span></div>
          <h3>Application &amp; API Security</h3>
          <p class="svc-line-card__statement">Find where identity, authority, state, and data cross application trust boundaries, then test whether those boundaries hold.</p>
          <div class="svc-line-card__focus" aria-label="Application and API security focus areas">
            <span>Authentication, MFA, recovery, and sessions</span>
            <span>Authorization, roles, and object access</span>
            <span>API authority and data exposure</span>
            <span>Business logic and protected state changes</span>
            <span>Input handling and browser attack surface</span>
            <span>Targeted code, configuration, and dependency review</span>
          </div>
          <a class="svc-text-link" href="{{ '/services/application-api-security/' | relative_url }}">Explore this service</a>
        </article>

        <article class="svc-line-card">
          <div class="svc-line-card__number">02<span class="icon-mask icon-target" aria-hidden="true"></span></div>
          <h3>Adversary Validation</h3>
          <p class="svc-line-card__statement">Choose a protected outcome and determine which controls stop the path, which actions are detected, and which assumptions fail.</p>
          <div class="svc-line-card__focus" aria-label="Adversary validation focus areas">
            <span>Objective-led attack paths</span>
            <span>Identity, privilege, and trust relationships</span>
            <span>Preventive control effectiveness</span>
            <span>Detection and telemetry coverage</span>
            <span>Response assumptions where in scope</span>
            <span>Evidence-backed attack narratives</span>
          </div>
          <a class="svc-text-link" href="{{ '/services/adversary-validation/' | relative_url }}">Explore this service</a>
        </article>

        <article class="svc-line-card">
          <div class="svc-line-card__number">03<span class="icon-mask icon-chip" aria-hidden="true"></span></div>
          <h3>AI Security</h3>
          <p class="svc-line-card__statement">Assess the complete AI workflow: models, tools, browsers, identities, data, policies, approvals, and the authority connecting them.</p>
          <div class="svc-line-card__focus" aria-label="AI security focus areas">
            <span>Prompt injection and source confusion</span>
            <span>Agent and tool execution boundaries</span>
            <span>Identity, retrieval, memory, and data exposure</span>
            <span>Browser-AI attack paths</span>
            <span>Guardrail and policy effectiveness</span>
            <span>Reproducible local validation where appropriate</span>
          </div>
          <a class="svc-text-link" href="{{ '/services/ai-security/' | relative_url }}">Explore this service</a>
        </article>

        <article class="svc-line-card">
          <div class="svc-line-card__number">04<span class="icon-mask icon-code" aria-hidden="true"></span></div>
          <h3>Secure Systems Engineering</h3>
          <p class="svc-line-card__statement">Reduce attacker authority in the architecture itself, then make the important security assumptions observable, testable, and recoverable.</p>
          <div class="svc-line-card__focus" aria-label="Secure systems engineering focus areas">
            <span>Threat-informed architecture and data flow</span>
            <span>Least privilege and privilege separation</span>
            <span>Authentication, keys, secrets, and trust boundaries</span>
            <span>Platform and service hardening</span>
            <span>Security logging and operational evidence</span>
            <span>Backup, rollback, recovery, and validation</span>
          </div>
          <a class="svc-text-link" href="{{ '/services/secure-systems-engineering/' | relative_url }}">Explore this service</a>
        </article>
      </div>
    </div>
  </section>

  <section class="services-v2-process" id="how-we-work" aria-labelledby="engagement-process">
    <div class="wrap">
      <h2 class="svc-section-title" id="engagement-process">How an engagement becomes evidence</h2>
      <p class="services-v2-process__lead">A good assessment is not a sequence of tools. It is a controlled process for turning a security question into a technically supportable decision.</p>
      <div class="services-v2-process__grid">
        <article class="svc-process-step"><span class="svc-process-step__number">01 / DEFINE</span><h3>Define the decision</h3><p>State what needs to be known, what protected outcome matters, and what evidence would change the risk decision.</p></article>
        <article class="svc-process-step"><span class="svc-process-step__number">02 / BOUND</span><h3>Bound the work</h3><p>Establish authority, scope, access, prohibited actions, safety controls, escalation, and evidence handling.</p></article>
        <article class="svc-process-step"><span class="svc-process-step__number">03 / TEST</span><h3>Exercise realistic paths</h3><p>Use manual analysis and purpose-fit tooling to test the paths that could cross trust boundaries or change protected outcomes.</p></article>
        <article class="svc-process-step"><span class="svc-process-step__number">04 / PROVE</span><h3>Support the conclusion</h3><p>Preserve the requests, responses, state changes, artifacts, conditions, and reasoning needed to reproduce material findings.</p></article>
        <article class="svc-process-step"><span class="svc-process-step__number">05 / VERIFY</span><h3>Close the loop</h3><p>Translate the failure into an engineering correction, then retest the original path to determine whether the issue is resolved.</p></article>
      </div>
    </div>
  </section>

  <section class="services-v2-specialist" aria-labelledby="specialist-capabilities">
    <div class="wrap">
      <div class="services-v2-specialist__head">
        <h2 id="specialist-capabilities">Depth when surface testing is not enough.</h2>
        <p>Specialist techniques are introduced when they improve the quality of the answer. They are not added merely to make an engagement appear broader.</p>
      </div>
      <div class="services-v2-specialist__grid">
        <article class="svc-specialist-card"><strong>Vulnerability Research</strong><p>Investigate unfamiliar failure modes, ambiguous exploitability, or behavior that requires deeper experimentation before a defensible conclusion can be reached.</p></article>
        <article class="svc-specialist-card"><strong>Reverse Engineering</strong><p>Analyze binaries, protocols, and implementation behavior when the attack path cannot be understood from the exposed interface alone.</p></article>
        <article class="svc-specialist-card"><strong>Code &amp; Dependency Review</strong><p>Use targeted source, configuration, and dependency analysis to explain runtime behavior, identify root cause, or challenge a security assumption.</p></article>
        <article class="svc-specialist-card"><strong>Agentic Security Engineering</strong><p>Build human-governed automation for repeatable security research and evidence workflows where operator authority and verification remain explicit.</p></article>
      </div>
    </div>
  </section>

  <section class="services-v2-models" aria-labelledby="engagement-models">
    <div class="wrap">
      <h2 class="svc-section-title" id="engagement-models">Choose the engagement shape after the question is clear.</h2>
      <div class="services-v2-models__grid">
        <article class="svc-model-card"><span>01</span><h3>Fixed scope</h3><p>Defined systems, access, objectives, constraints, and deliverables. Best when the decision boundary is already understood and repeatability matters.</p></article>
        <article class="svc-model-card"><span>02</span><h3>Objective-led</h3><p>Begin with a protected outcome or defensive assumption and allow the testing path to follow the evidence within agreed rules of engagement.</p></article>
        <article class="svc-model-card"><span>03</span><h3>Engineering or research sprint</h3><p>Focused technical work for architecture, hardening, root cause, reverse engineering, or research questions that do not fit a conventional penetration test.</p></article>
      </div>
    </div>
  </section>

  <section class="services-v2-cta">
    <div class="wrap">
      <div class="services-v2-cta__panel">
        <div><h2>Bring the security question, not a perfect statement of work.</h2><p>Describe the system, the concern, the decision you need to make, and the constraints that cannot be crossed. The engagement can be shaped from there.</p></div>
        <a class="home-btn home-btn--accent" href="{{ '/contact/#assessment' | relative_url }}">Discuss the problem</a>
      </div>
    </div>
  </section>
</div>
