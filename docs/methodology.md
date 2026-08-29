---
layout: home-v2
title: Methodology | Black Bag Security
description: How Black Bag Security plans, controls, executes, validates, reports, and retests security work. Clear scope, reproducible evidence, practical communication, and defensible conclusions.
permalink: /methodology/
lang: en
ref: methodology
methodology_v2: true
---
<div class="method-v2-page">
  <section class="method-v2-hero" aria-labelledby="method-title">
    <div class="wrap method-v2-hero__grid">
      <div>
        <p class="method-eyebrow">Methodology</p>
        <h1 id="method-title">make the work clear.<br>make the evidence useful.</h1>
        <p class="method-v2-hero__lead">Security testing can be technically complex. The engagement should not be. Black Bag Security makes the objective, boundaries, progress, evidence, conclusions, and next steps understandable to the people who have to act on them.</p>
        <div class="method-v2-hero__actions">
          <a class="home-btn home-btn--accent" href="#operating-model">See the operating model</a>
          <a class="home-btn" href="{{ '/contact/#assessment' | relative_url }}">Discuss an assessment</a>
        </div>
      </div>

      <aside class="method-v2-hero__expect" aria-label="What clients can expect">
        <div class="method-expect__head">What you can expect</div>
        <div class="method-expect"><span>01</span><p><strong>Know what is being tested.</strong> Scope, objectives, access, and constraints are explicit before execution begins.</p></div>
        <div class="method-expect"><span>02</span><p><strong>Know what is not being tested.</strong> Limitations and unavailable prerequisites are documented rather than hidden.</p></div>
        <div class="method-expect"><span>03</span><p><strong>See claims validated.</strong> Suspicious behavior is treated as a lead until evidence supports a material conclusion.</p></div>
        <div class="method-expect"><span>04</span><p><strong>Leave with a path forward.</strong> Findings connect to remediation, residual risk, and verification.</p></div>
      </aside>
    </div>
  </section>

  <section class="method-v2-promises" aria-labelledby="method-promises">
    <div class="wrap">
      <div class="method-v2-intro">
        <div>
          <p class="method-eyebrow">Operating principles</p>
          <h2 id="method-promises">Four promises shape the work.</h2>
        </div>
        <p>The exact test plan changes with the system, the risks, and the engagement constraints. These principles do not. They keep the work focused on useful answers instead of activity for its own sake.</p>
      </div>

      <div class="method-v2-promises__grid">
        <article class="method-promise-card"><span class="method-promise-card__number">01</span><span class="icon-mask icon-target" aria-hidden="true"></span><h3>Purpose before tools</h3><p>Start with the question the engagement needs to answer. Tools support the investigation. They do not define it.</p></article>
        <article class="method-promise-card"><span class="method-promise-card__number">02</span><span class="icon-mask icon-shield" aria-hidden="true"></span><h3>Safety before speed</h3><p>Authority, prohibited actions, stop conditions, test data, and escalation paths are established before risky work begins.</p></article>
        <article class="method-promise-card"><span class="method-promise-card__number">03</span><span class="icon-mask icon-evidence" aria-hidden="true"></span><h3>Evidence before claims</h3><p>A finding should be supportable. Where certainty is limited, the report should say so rather than overstate the result.</p></article>
        <article class="method-promise-card"><span class="method-promise-card__number">04</span><span class="icon-mask icon-deliverables" aria-hidden="true"></span><h3>Closure before completion</h3><p>The work should lead to a decision, remediation direction, and a way to determine whether the problem was actually resolved.</p></article>
      </div>
    </div>
  </section>

  <section class="method-v2-lifecycle" id="operating-model" aria-labelledby="method-lifecycle">
    <div class="wrap">
      <div class="method-v2-lifecycle__head">
        <div><p class="method-eyebrow">Operating model</p><h2 id="method-lifecycle">From security question to verified outcome.</h2></div>
        <p>Each phase reduces a different kind of uncertainty: what matters, what is authorized, what can fail, what can be proven, what should change, and whether the change worked.</p>
      </div>

      <div class="method-v2-lifecycle__grid">
        <article class="method-step"><span>01 / UNDERSTAND</span><h3>Understand the problem</h3><p>Identify the system, concern, business context, important workflows, and the decision the work needs to support.</p></article>
        <article class="method-step"><span>02 / AUTHORIZE</span><h3>Bound the engagement</h3><p>Agree scope, access, authority, safety limits, escalation, data handling, and any prerequisites needed for meaningful testing.</p></article>
        <article class="method-step"><span>03 / TEST</span><h3>Exercise realistic paths</h3><p>Use manual analysis and purpose-fit tooling to test the behaviors most likely to change the security decision.</p></article>
        <article class="method-step"><span>04 / VALIDATE</span><h3>Challenge the result</h3><p>Reproduce important behavior, rule out false positives, establish conditions and impact, and preserve supporting evidence.</p></article>
        <article class="method-step"><span>05 / REPORT</span><h3>Make the answer usable</h3><p>Explain what happened, why it matters, what caused it, what was not proven, and what should happen next.</p></article>
        <article class="method-step"><span>06 / VERIFY</span><h3>Test the correction</h3><p>Where retest is in scope, exercise the original failure path again and document whether the issue is resolved, mitigated, or still present.</p></article>
      </div>
    </div>
  </section>

  <section class="method-v2-evidence" id="evidence-first" aria-labelledby="evidence-title">
    <div class="wrap method-v2-evidence__grid">
      <div class="method-v2-evidence__statement">
        <p class="method-eyebrow">Evidence-first</p>
        <h2 id="evidence-title">A lead is not automatically a finding.</h2>
        <p>A scanner alert, unusual response, suspicious state change, or promising attack path starts an investigation. Material conclusions are stronger when the behavior can be reproduced, placed in context, and connected to real impact.</p>
        <blockquote>We would rather state an honest limitation than manufacture certainty unsupported by the evidence.</blockquote>
      </div>

      <div class="method-v2-evidence__qualities">
        <article><span class="icon-mask icon-evidence" aria-hidden="true"></span><div><strong>Reproducible</strong><p>Capture enough context, conditions, requests, responses, state, or artifacts for the important behavior to be understood and repeated where practical.</p></div></article>
        <article><span class="icon-mask icon-data" aria-hidden="true"></span><div><strong>Proportionate</strong><p>Collect what is needed to support the conclusion, not every piece of data the environment makes available.</p></div></article>
        <article><span class="icon-mask icon-doc" aria-hidden="true"></span><div><strong>Traceable</strong><p>Connect the conclusion to the evidence, the affected system, the test conditions, and the limits of what was established.</p></div></article>
        <article><span class="icon-mask icon-shield" aria-hidden="true"></span><div><strong>Protected</strong><p>Treat credentials, sensitive data, screenshots, logs, traffic captures, and working artifacts as security-sensitive material.</p></div></article>
      </div>
    </div>
  </section>

  <section class="method-v2-standards" aria-labelledby="standards-title">
    <div class="wrap">
      <div class="method-v2-intro method-v2-intro--standards">
        <div><p class="method-eyebrow">Coverage and judgment</p><h2 id="standards-title">Standards give structure. Judgment gives meaning.</h2></div>
        <p>Established testing standards can help organize coverage and make work easier to review. They are useful guides, not substitutes for understanding the actual system.</p>
      </div>
      <div class="method-v2-standards__grid">
        <article><span>01</span><h3>Use frameworks where they fit</h3><p>For application work, established references such as OWASP WSTG and ASVS can help structure coverage, verification, and control mapping.</p></article>
        <article><span>02</span><h3>Follow the system where it leads</h3><p>Architecture, roles, workflows, data, constraints, and observed behavior determine where deeper testing is warranted.</p></article>
        <article><span>03</span><h3>Separate coverage from conclusions</h3><p>A completed test case is not the same as a vulnerability. A blocked prerequisite is not the same as a passed control. Reporting should preserve those distinctions.</p></article>
      </div>
    </div>
  </section>

  <section class="method-v2-communication" aria-labelledby="communication-title">
    <div class="wrap">
      <div class="method-v2-communication__head">
        <p class="method-eyebrow">Communication</p>
        <h2 id="communication-title">No disappearing into a black box.</h2>
        <p>The engagement should remain understandable while it is happening. Communication cadence is agreed with the client and scaled to the work rather than imposed as ceremony.</p>
      </div>
      <div class="method-v2-communication__grid">
        <article><strong>Before testing</strong><p>Confirm objectives, scope, access, responsibilities, constraints, prerequisites, and how important issues should be escalated.</p></article>
        <article><strong>During testing</strong><p>Surface meaningful progress, blockers, scope questions, prerequisite gaps, and material issues at the level and cadence the engagement requires.</p></article>
        <article><strong>At closeout</strong><p>Separate confirmed findings, limitations, unresolved questions, residual risk, and retest status so stakeholders know what the work did and did not establish.</p></article>
      </div>
    </div>
  </section>

  <section class="method-v2-delivery" aria-labelledby="delivery-title">
    <div class="wrap">
      <div class="method-v2-intro">
        <div><p class="method-eyebrow">Secure delivery</p><h2 id="delivery-title">Protect the engagement as carefully as the target.</h2></div>
        <p>Testing often requires privileged access and creates sensitive evidence. Those materials should not become a new source of risk.</p>
      </div>
      <div class="method-v2-delivery__grid">
        <article><span class="icon-mask icon-target" aria-hidden="true"></span><h3>Explicit authority</h3><p>Work stays inside the agreed scope and rules of engagement. Ambiguity is resolved before expanding activity.</p></article>
        <article><span class="icon-mask icon-data" aria-hidden="true"></span><h3>Data minimization</h3><p>Use synthetic, disposable, or limited data where practical and collect only what is necessary to support the work.</p></article>
        <article><span class="icon-mask icon-shield" aria-hidden="true"></span><h3>Sensitive artifact handling</h3><p>Credentials, evidence, client data, and transfer paths are handled according to the engagement's security requirements.</p></article>
        <article><span class="icon-mask icon-deliverables" aria-hidden="true"></span><h3>Stop and escalate</h3><p>Unexpected production risk, unclear authority, or unsafe conditions should trigger escalation rather than improvised continuation.</p></article>
      </div>
      <a class="method-inline-link" href="{{ '/trust/' | relative_url }}">Read the trust and handling principles</a>
    </div>
  </section>

  <section class="method-v2-retest" id="remediation-and-retest" aria-labelledby="retest-title">
    <div class="wrap method-v2-retest__grid">
      <div>
        <p class="method-eyebrow">Remediation and retest</p>
        <h2 id="retest-title">A code change is not the same as a proven fix.</h2>
        <p>Where verification is part of the engagement, the retest returns to the original failure path. The question is not whether something changed. The question is whether the security condition that created the finding still exists.</p>
      </div>
      <div class="method-v2-retest__states">
        <article><strong>Resolved</strong><p>The original failure path can no longer be reproduced under the retest conditions.</p></article>
        <article><strong>Mitigated</strong><p>Risk is reduced, but the underlying condition or a meaningful variant remains.</p></article>
        <article><strong>Not resolved</strong><p>The original issue or equivalent security impact remains reproducible.</p></article>
        <article><strong>Unable to verify</strong><p>A missing prerequisite, unavailable environment, or other constraint prevents a defensible retest conclusion.</p></article>
      </div>
    </div>
  </section>

  <section class="method-v2-readers" aria-labelledby="readers-title">
    <div class="wrap">
      <div class="method-v2-readers__head"><p class="method-eyebrow">Reporting</p><h2 id="readers-title">One body of evidence. Different readers.</h2><p>The report should work for the person making the risk decision and the person responsible for fixing the problem.</p></div>
      <div class="method-v2-readers__grid">
        <article><span>Leadership</span><h3>What matters and what should happen next</h3><p>Clear risk context, material findings, limitations, priorities, and the decisions that require attention.</p></article>
        <article><span>Engineering and security</span><h3>Enough detail to reproduce and remediate</h3><p>Technical evidence, affected behavior, root cause, conditions, remediation direction, and retest context.</p></article>
        <article><span>Governance and assurance</span><h3>What was covered and what was established</h3><p>Scope, methodology, limitations, finding status, evidence-backed conclusions, and closure state without forcing every reader into raw technical detail.</p></article>
      </div>
    </div>
  </section>

  <section class="method-v2-cta">
    <div class="wrap">
      <div class="method-v2-cta__panel">
        <div><h2>You should not need to manage the methodology.</h2><p>Bring the system, the concern, and the constraints. Black Bag Security will make the testing plan, evidence standard, safety boundaries, and expected outputs explicit before the work begins.</p></div>
        <a class="home-btn home-btn--accent" href="{{ '/contact/#assessment' | relative_url }}">Discuss the work</a>
      </div>
    </div>
  </section>
</div>
