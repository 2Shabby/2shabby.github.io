---
layout: page
title: About
description: Systems & ML engineer building distributed systems and LLM infrastructure.
permalink: /about/
narrow: true
---

## Hi, I'm Mohammad

I'm a systems and machine learning engineer specializing in distributed systems, LLM infrastructure, and agentic AI. I work at the intersection of low-level systems programming and modern AI architectures.

I've built production systems ranging from 82K+ LOC polyglot agentic runtimes to quantum ML pipelines. My work spans edge computing on ARM devices, multi-agent LLM systems with anti-hallucination mechanisms, and physics-constrained neural networks.

I focus on building robust, well-tested systems with clear architectural boundaries - whether it's a microkernel with 5-layer architecture or a quantum state generator with physics-informed loss functions.

**Key areas:** Distributed systems • LLM infrastructure • Agentic architectures • Low-level systems (C, Go, Python) • Edge computing • Quantum ML

---

### Connect

<ul class="social-links" style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
{% if site.data.profile.social.github %}
  <li style="padding: 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
    <strong>GitHub</strong><br>
    <a href="{{ site.data.profile.social.github.url }}" target="_blank" rel="noopener noreferrer">@{{ site.data.profile.social.github.username }}</a>
  </li>
{% endif %}
{% if site.data.profile.social.linkedin %}
  <li style="padding: 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
    <strong>LinkedIn</strong><br>
    <a href="{{ site.data.profile.social.linkedin.url }}" target="_blank" rel="noopener noreferrer">{{ site.data.profile.social.linkedin.username }}</a>
  </li>
{% endif %}
{% if site.data.profile.social.email %}
  <li style="padding: 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-md);">
    <strong>Email</strong><br>
    <a href="{{ site.data.profile.social.email.url }}">{{ site.data.profile.social.email.address }}</a>
  </li>
{% endif %}
</ul>
