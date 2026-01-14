---
layout: page
title: About
description: Systems & ML engineer specializing in distributed systems and LLM infrastructure.
permalink: /about/
nav_order: 2
narrow: true
---

## Hi, I'm Mohammad

I'm a systems and machine learning engineer with deep expertise in building distributed systems, LLM infrastructure, and agentic AI architectures. I specialize in the intersection of low-level systems programming and modern AI technologies.

My work spans from building polyglot agentic runtimes with microkernel architectures to implementing physics-constrained machine learning models for quantum computing research. I'm passionate about creating robust, scalable systems that push the boundaries of what's possible.

### Core Expertise

**Systems & Infrastructure**
- Distributed systems architecture and microkernel design
- Low-level systems programming (C, Go, Python)
- gRPC/IPC communication and PostgreSQL optimization
- Operating systems (compiler design, shell implementation, kernel scheduling)

**AI & Machine Learning**
- LLM infrastructure and multi-provider abstractions (OpenAI, Anthropic, Azure)
- Agentic architectures with multi-agent pipelines
- Quantum machine learning and physics-informed neural networks
- Computer vision and NLP applications

**IoT & Embedded**
- Edge computing on ARM devices (Radxa Rock 5, ESP32)
- Real-time audio processing and voice assistants
- Industrial IoT with Modbus RTU and FreeRTOS
- Kubernetes deployment for edge systems

**Web & Blockchain**
- Smart contract development (Solidity, Ethereum)
- Full-stack development (React, Django, FastAPI)
- Decentralized storage (IPFS) and Web3 integration

### Background

I've built production systems handling everything from real-time voice processing on edge devices to multi-agent LLM pipelines with anti-hallucination mechanisms. My projects range from 82K+ LOC polyglot runtimes to research-grade quantum ML implementations with comprehensive test coverage.

I believe in writing maintainable, well-tested code with clear architectural boundaries. Whether it's a microkernel with 5-layer architecture or a quantum state generator with physics-constrained loss functions, I focus on building systems that are both theoretically sound and practically robust.

### This Site

This portfolio is built with Jekyll and hosted on GitHub Pages. It features a data-driven architecture with zero JavaScript for core functionality, pure CSS dark mode, and semantic HTML throughout. The projects page uses `<details>`/`<summary>` elements for NO-JS category expansion.

Source available at [github.com/2Shabby/2shabby.github.io](https://github.com/2Shabby/2shabby.github.io).

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
