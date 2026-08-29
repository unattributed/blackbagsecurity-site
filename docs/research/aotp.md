---
layout: home-v2
title: AOTP | Black Bag Security
permalink: /research/aotp/
description: AOTP is an operator-focused offensive security assessment platform for planning, controlling, executing, evidencing, validating, reporting, exporting, and retesting authorized security work with governed AI assistance.
lang: en
ref: research-aotp
research_v2: true
inner_v3: true
aotp_v3: true
---
<div class="inner-v3">
  <section class="aotp-v3-hero" aria-labelledby="aotp-title">
    <div class="wrap aotp-v3-hero__grid">
      <div>
        <p class="iv3-eyebrow">AOTP / Agentic Offensive Testing Platform</p>
        <h1 id="aotp-title">run the assessment.<br>keep authority visible.</h1>
        <p class="aotp-v3-hero__lead">AOTP is an operator-focused offensive security assessment platform for security professionals to plan, control, execute, evidence, validate, report, export, and retest authorized security work from one governed workspace. Agentic assistance supports planning, reasoning, and execution, while scope, authority, evidence, findings, approvals, and release decisions remain explicit and human-controlled.</p>
        <div class="aotp-v3-role" aria-label="AOTP platform characteristics"><span>Authorized-only</span><span>Campaign-oriented</span><span>Evidence-first</span><span>Human-governed</span><span>Local-first</span></div>
        <div class="iv3-actions"><a class="home-btn home-btn--accent" href="#lifecycle">See the assessment lifecycle</a><a class="home-btn" href="#workspace">Explore the workspace</a></div>
      </div>
      <aside class="aotp-v3-stage" aria-label="Stylized representation of the AOTP Operator Workspace">
        <div class="aotp-v3-stage__screen" aria-hidden="true"><div class="aotp-v3-stage__rail"></div><div class="aotp-v3-stage__top"></div><div class="aotp-v3-stage__badge"></div><div class="aotp-v3-stage__cards"><span></span><span></span><span></span><span></span></div><div class="aotp-v3-stage__table"></div></div>
      </aside>
    </div>
  </section>

  <nav class="iv3-jumpbar" aria-label="AOTP page sections"><div class="wrap iv3-jumpbar__inner"><a href="#positioning">What AOTP is</a><a href="#lifecycle">Assessment lifecycle</a><a href="#workspace">Operator Workspace</a><a href="#agentic">Agentic model</a><a href="#boundary">Current boundary</a></div></nav>

  <section class="iv3-section" id="positioning" aria-labelledby="positioning-title">
    <div class="wrap">
      <div class="iv3-section-head"><div><p class="iv3-eyebrow">Platform role</p><h2 id="positioning-title">A security assessment operating environment, not an AI demo.</h2></div><p>The platform is built around the work a professional tester has to control over the life of an assessment: what is authorized, which targets are ready, what was observed, which observations deserve proof, what becomes a finding, what can be reported, and whether remediation actually changed the outcome.</p></div>
      <div class="iv3-glance">
        <article><span>Designed for</span><strong>Security professionals</strong><p>Penetration testers, application security teams, offensive security operators, and researchers working inside explicit authorization.</p></article>
        <article><span>Primary unit</span><strong>The campaign</strong><p>Scope, targets, evidence, findings, reporting, exports, and retests stay connected to one assessment context.</p></article>
        <article><span>Core control</span><strong>Authority</strong><p>Rules of engagement, approvals, stop conditions, and claim boundaries constrain what the platform may treat as valid work.</p></article>
        <article><span>Core output</span><strong>Defensible evidence</strong><p>Important conclusions are expected to survive replay, review, provenance checks, and human judgment.</p></article>
      </div>
      <div class="aotp-v3-contrast">
        <article><h3>What it is not</h3><p>AOTP is not positioned as a chatbot that launches tools, an autonomous vulnerability scanner, or an engine that promotes model output directly into findings.</p></article>
        <article><h3>What it is designed to become</h3><p>A cohesive workspace where authorized offensive security work can move from campaign definition through technical execution, evidence, validation, reporting, export, remediation, and retest without losing authority or provenance along the way.</p></article>
      </div>
    </div>
  </section>

  <section class="iv3-section iv3-section--soft" id="lifecycle" aria-labelledby="lifecycle-title">
    <div class="wrap">
      <div class="iv3-section-head"><div><p class="iv3-eyebrow">Assessment lifecycle</p><h2 id="lifecycle-title">From authorization to retest in one controlled workflow.</h2></div><p>The Operator Workspace is organized around the actual progression of an assessment rather than around individual tools. Each stage carries forward campaign context, evidence state, review obligations, and the limits of what has been proven.</p></div>
      <div class="aotp-v3-lifecycle">
        <article><span>01</span><strong>Campaign</strong><p>Create or import the assessment context and operating mode.</p></article>
        <article><span>02</span><strong>Scope &amp; authority</strong><p>Define targets, authority sources, action classes, approvals, conflicts, and boundaries.</p></article>
        <article><span>03</span><strong>Targets</strong><p>Track assets, environments, auth profiles, readiness, surfaces, and reset controls.</p></article>
        <article><span>04</span><strong>Evidence</strong><p>Capture, classify, hash, redact, review, replay, and preserve supporting artifacts.</p></article>
        <article><span>05</span><strong>Candidates</strong><p>Keep suspected issues separate from findings until proof and review requirements are met.</p></article>
        <article><span>06</span><strong>Findings</strong><p>Manage proven vulnerabilities, impact, severity, remediation, reportability, and claim boundaries.</p></article>
        <article><span>07</span><strong>Reports &amp; exports</strong><p>Build reviewed outputs, attach evidence, validate packages, and prepare recipient-specific delivery artifacts.</p></article>
        <article><span>08</span><strong>Retest</strong><p>Compare remediation against the original proof and preserve both historical and retest evidence.</p></article>
      </div>
    </div>
  </section>

  <section class="iv3-section iv3-section--dark" id="workspace" aria-labelledby="workspace-title">
    <div class="wrap">
      <div class="iv3-section-head"><div><p class="iv3-eyebrow">Operator Workspace</p><h2 id="workspace-title">The human control surface stays in the middle of the system.</h2></div><p>The workspace design exposes operational state instead of hiding it behind automation. Campaign mode, run state, scope readiness, evidence integrity, candidate proof state, reportability, export validation, and retest comparison are visible as operator decisions.</p></div>
      <div class="aotp-v3-workspace">
        <article><span>Campaign control</span><strong>Know what engagement is active.</strong><p>Campaign identity, operating mode, readiness, progress, imported authority, and active state remain visible while work is performed.</p></article>
        <article><span>Scope control</span><strong>Know what may be tested.</strong><p>In-scope, out-of-scope, ambiguous, and blocked assets are separated, with rules of engagement and action authority available to the operator.</p></article>
        <article><span>Evidence control</span><strong>Know what supports the claim.</strong><p>Evidence items carry classification, integrity state, redaction state, linked objects, replay proofs, and report inclusion status.</p></article>
        <article><span>Qualification control</span><strong>Keep candidates from becoming findings too early.</strong><p>Candidate state, evidence basis, proof design, negative controls, replay plans, and operator review sit between suspicion and promotion.</p></article>
        <article><span>Reporting control</span><strong>Know what is ready to leave the workspace.</strong><p>Findings, report sections, evidence references, redactions, limitations, claim boundaries, and output packages are validated before export.</p></article>
        <article><span>Closure control</span><strong>Know whether remediation changed the outcome.</strong><p>Retests compare original proof with new evidence and retain the history instead of overwriting the original assessment record.</p></article>
      </div>
    </div>
  </section>

  <section class="iv3-section iv3-section--white" id="agentic" aria-labelledby="agentic-title">
    <div class="wrap aotp-v3-proof">
      <div class="aotp-v3-proof__panel">
        <p class="iv3-eyebrow">What agentic means here</p>
        <h3 id="agentic-title">AI assists the operator. It does not inherit the engagement.</h3>
        <p>Local models and agentic orchestration can support planning, test-path reasoning, governed tool use, and analysis. Python remains authoritative for campaign, evidence, finding, report, export, retest, key, and worker behavior. Every active path is intended to remain constrained by campaign authority, evidence policy, stop conditions, and human approval gates.</p>
      </div>
      <div class="aotp-v3-proof__panel">
        <p class="iv3-eyebrow">Workspace control inventory</p>
        <h3>The interface reflects the control model.</h3>
        <p>The normalized Operator Workspace design uses a consistent control taxonomy across eleven pages. That inventory includes global controls, primary navigation, workspace assurance, page context, summary data, search and filters, inventory data, actions, editors, validation, and health state.</p>
        <div class="aotp-v3-inventory"><div><strong>Authority</strong><span>Campaign, mode, scope, ROE, approvals</span></div><div><strong>Assurance</strong><span>Evidence-backed and fail-closed posture</span></div><div><strong>Qualification</strong><span>Candidate proof and finding gates</span></div><div><strong>Delivery</strong><span>Report readiness, export validation, retest</span></div></div>
      </div>
    </div>
  </section>

  <section class="iv3-section iv3-section--soft" id="boundary" aria-labelledby="boundary-title">
    <div class="wrap">
      <div class="iv3-section-head"><div><p class="iv3-eyebrow">Current claim boundary</p><h2 id="boundary-title">The platform can be substantial without pretending the work is finished.</h2></div><p>AOTP has completed major engineering foundations, a local agentic WSTG proof, and a local Operator Workspace runtime MVP. Its current evidence does not establish production readiness, successful public bug bounty operation, external acceptance, payout eligibility, or senior-tester parity.</p></div>
      <div class="iv3-quote"><div class="iv3-quote__mark">“</div><div><blockquote>Comprehensive does not mean autonomous. Governed does not mean finished.</blockquote><p>The value is in connecting the full assessment lifecycle while preserving explicit authority, evidence, review, and claim boundaries.</p></div></div>
      <div class="iv3-deep"><details><summary>Why the distinction matters</summary><div>A polished workspace can make a platform look more mature than its accepted evidence supports. AOTP deliberately keeps implementation state and acceptance state separate. Local proofs establish specific capabilities under specific conditions. They do not automatically establish public-program readiness or production maturity.</div></details><details><summary>How AOTP fits with Security Engagement Platform</summary><div>Security Engagement Platform is being developed as the engagement control plane for identity, written authority, executable scope, stop conditions, evidence boundaries, and delivery state. AOTP is the complementary operator and execution environment that performs governed testing inside that authority. The integration direction is intentional, but the completed combined platform is not presented as finished.</div></details></div>
    </div>
  </section>

  <section class="iv3-cta"><div class="wrap"><div class="iv3-cta__panel"><div><h2>AOTP is being built for people who run security assessments, not for people watching an agent demo.</h2><p>The objective is a professional offensive security workspace where authority, testing, evidence, judgment, reporting, and retest remain connected from beginning to end.</p></div><a class="home-btn home-btn--accent" href="{{ '/system/' | relative_url }}">See how AOTP fits the system</a></div></div></section>
</div>
