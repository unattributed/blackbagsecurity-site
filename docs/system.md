---
layout: home-v2
title: The Black Bag Security System | Black Bag Security
description: How Black Bag Security services, methodology, research, engineering projects, trust controls, evidence, and retest work together as one security system.
permalink: /system/
lang: en
ref: system
inner_v3: true
---
<div class="inner-v3">
  <section class="iv3-hero" aria-labelledby="system-title">
    <div class="wrap iv3-hero__grid">
      <div>
        <p class="iv3-eyebrow">The Black Bag Security System</p>
        <h1 id="system-title">one mission.<br>many layers.</h1>
        <p class="iv3-hero__lead">Black Bag Security is not a collection of disconnected services, tools, and research projects. Client work, methodology, offensive testing, secure engineering, infrastructure, AI research, evidence, and retest are designed to reinforce the same mission: reduce implicit trust, make authority explicit, test what matters, and leave behind security decisions that can be defended.</p>
        <div class="iv3-actions"><a class="home-btn home-btn--accent" href="#architecture">See the architecture</a><a class="home-btn" href="{{ '/research/' | relative_url }}">Explore the research</a></div>
      </div>
      <aside class="iv3-signal-panel" aria-label="System principles">
        <div class="iv3-signal"><span>01</span><div><strong>Authority</strong><p>Know who may do what, to which target, under which conditions.</p></div></div>
        <div class="iv3-signal"><span>02</span><div><strong>Adversary</strong><p>Challenge important assumptions from the attacker's perspective.</p></div></div>
        <div class="iv3-signal"><span>03</span><div><strong>Engineering</strong><p>Build the missing control when existing tools are not enough.</p></div></div>
        <div class="iv3-signal"><span>04</span><div><strong>Evidence</strong><p>Keep conclusions traceable, reproducible, bounded, and useful.</p></div></div>
      </aside>
    </div>
  </section>

  <nav class="iv3-jumpbar" aria-label="System page sections"><div class="wrap iv3-jumpbar__inner"><a href="#mission">Mission</a><a href="#architecture">Architecture</a><a href="#loop">Assurance loop</a><a href="#projects">Project roles</a></div></nav>

  <section class="iv3-section" id="mission" aria-labelledby="mission-title">
    <div class="wrap">
      <div class="iv3-section-head"><div><p class="iv3-eyebrow">Mission</p><h2 id="mission-title">The project is never the point. The security outcome is.</h2></div><p>Every service, workflow, tool, and research line earns its place by improving one of four things: authority, adversary understanding, evidence quality, or the ability to operate and recover securely.</p></div>
      <div class="iv3-glance">
        <article><span>01 / REDUCE</span><strong>Reduce implicit trust</strong><p>Make identity, privilege, data, scope, and execution boundaries visible.</p></article>
        <article><span>02 / CHALLENGE</span><strong>Test the assumption</strong><p>Follow realistic attack paths rather than validating controls only in isolation.</p></article>
        <article><span>03 / ENGINEER</span><strong>Build what is missing</strong><p>Create the control, workflow, or evidence mechanism the work actually requires.</p></article>
        <article><span>04 / PROVE</span><strong>Leave a defensible answer</strong><p>Connect the decision to evidence, limitations, remediation, and verification.</p></article>
      </div>
    </div>
  </section>

  <section class="iv3-section iv3-section--dark" id="architecture" aria-labelledby="architecture-title">
    <div class="wrap">
      <div class="iv3-section-head"><div><p class="iv3-eyebrow">Architecture</p><h2 id="architecture-title">Delivery on one side. Engineering on the other. Evidence in the middle.</h2></div><p>The delivery plane frames the client problem and controls the engagement. The engineering plane supplies the specialist capability needed to answer it. Both converge on evidence strong enough to support action.</p></div>
      <div class="system-architecture">
        <div class="system-plane">
          <p class="system-plane__label">Client delivery plane</p>
          <div class="system-node"><span>Problem</span><strong>Services</strong><p>Define what must be understood, protected, validated, or built.</p></div>
          <div class="system-node"><span>Control</span><strong>Methodology</strong><p>Set authority, scope, safety boundaries, evidence standards, and closure criteria.</p></div>
          <div class="system-node"><span>Assurance</span><strong>Trust</strong><p>Protect credentials, client data, engagement artifacts, and the operating boundary.</p></div>
        </div>
        <div class="system-core"><div class="system-core__inner"><span>Shared objective</span><strong>Security decisions you can defend.</strong><p>Evidence connects client need, technical execution, engineering judgment, remediation, and retest.</p></div></div>
        <div class="system-plane">
          <p class="system-plane__label">Engineering plane</p>
          <div class="system-node"><span>Govern</span><strong>Security Engagement Platform</strong><p>Deterministic engagement identity, authorization, scope, stop conditions, and evidence state.</p></div>
          <div class="system-node"><span>Operate &amp; test</span><strong>AOTP</strong><p>Operator-focused offensive security assessment platform connecting campaigns, targets, governed testing, evidence, validation, findings, reporting, exports, and retests with constrained AI assistance.</p></div>
          <div class="system-node"><span>Build &amp; learn</span><strong>OSMAP · OpenBSD · Browser-AI</strong><p>Secure software, resilient infrastructure, and adversarial AI research feed practical lessons back into the whole system.</p></div>
        </div>
      </div>
    </div>
  </section>

  <section class="iv3-section iv3-section--white" id="loop" aria-labelledby="loop-title">
    <div class="wrap">
      <div class="iv3-section-head"><div><p class="iv3-eyebrow">Assurance loop</p><h2 id="loop-title">Every engagement should make the next one better.</h2></div><p>Knowledge should move through the system. Client constraints improve governance. Testing exposes weak assumptions. Engineering turns lessons into reusable controls. Retesting tells us whether those controls actually changed the outcome.</p></div>
      <div class="system-loop">
        <article><span>01</span><strong>Define</strong><p>Start with the security decision, protected outcome, or engineering problem.</p></article>
        <article><span>02</span><strong>Authorize</strong><p>Make scope, permissions, exclusions, stop conditions, and sensitive boundaries explicit.</p></article>
        <article><span>03</span><strong>Execute</strong><p>Use the right mix of manual testing, governed automation, research, and engineering.</p></article>
        <article><span>04</span><strong>Prove</strong><p>Separate observation from conclusion and preserve the evidence needed to support the claim.</p></article>
        <article><span>05</span><strong>Improve</strong><p>Remediate, retest, and feed useful lessons back into tooling, methods, and future design.</p></article>
      </div>
    </div>
  </section>

  <section class="iv3-section iv3-section--soft" id="projects" aria-labelledby="projects-title">
    <div class="wrap">
      <div class="iv3-section-head"><div><p class="iv3-eyebrow">Project roles</p><h2 id="projects-title">Different projects strengthen different parts of the mission.</h2></div><p>They are intentionally complementary. None of them needs to solve every problem because the wider system is designed to combine their strengths.</p></div>
      <div class="system-projects">
        <article><span>Engagement governance</span><strong>Security Engagement Platform</strong><p>Makes authorization, scope, state, and execution boundaries deterministic.</p></article>
        <article><span>Assessment operations</span><strong>AOTP</strong><p>Gives security professionals a governed workspace for authorized testing from campaign definition through evidence, findings, reporting, export, and retest.</p></article>
        <article><span>Secure software</span><strong>OSMAP</strong><p>Explores narrow attack surfaces, privilege separation, and safe rendering in real software.</p></article>
        <article><span>Resilient operations</span><strong>OpenBSD Mailstack</strong><p>Turns hardening, deployment, validation, recovery, and maintenance into one operating system.</p></article>
        <article><span>AI assurance</span><strong>Browser-Safe AI Security</strong><p>Builds reproducible evidence for browser-AI attack paths and control failures.</p></article>
      </div>
      <div class="iv3-quote"><div class="iv3-quote__mark">“</div><div><blockquote>The projects exist to improve the mission, not to become the mission.</blockquote><p>Useful research becomes method, tooling, evidence discipline, engineering practice, or a better security decision.</p></div></div>
    </div>
  </section>

  <section class="iv3-cta"><div class="wrap"><div class="iv3-cta__panel"><div><h2>Bring the problem. We assemble the right layers.</h2><p>You do not need to decide which project, technique, or service applies. Start with the system, the concern, the protected outcome, and the constraints that matter.</p></div><a class="home-btn home-btn--accent" href="{{ '/contact/#assessment' | relative_url }}">Start the conversation</a></div></div></section>
</div>
