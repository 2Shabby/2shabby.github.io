---
layout: page
title: About
description: Wandering through systems and machine learning.
permalink: /about/
narrow: true
---

## Hi, I'm Mohammad

I tend to find myself drawn to the quieter questions in systems and machine learning—how things fit together, where the boundaries blur between low-level code and emergent behavior.

Over time, I've wandered through various territories: polyglot runtimes, edge devices, quantum states. Each project has been less about arriving somewhere and more about seeing what unfolds when you follow a thread carefully.

I'm drawn to systems that hold together gracefully—where architecture emerges from constraints rather than being imposed upon them.

**Recurring interests:** distributed systems • language model infrastructure • systems programming • edge computing • quantum ML

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
