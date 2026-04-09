---
layout: page
title: About
description: LLM infrastructure and agent systems.
permalink: /about/
narrow: true
---

## Hi, I'm Shahbaz

I build LLM infrastructure and agent systems. The part I find interesting isn't the model — it's everything around it that has to work before an agent can do anything useful. Memory, state, config, boundaries, recovery, running things on the edge.

Before the current pivot, I spent time on quantum ML research and edge/embedded systems. The through-line is the same: I like the layer where messy physical or statistical reality has to meet clean software abstractions.

**What I'm thinking about right now:** runtime design for long-running agents, how to make memory actually useful instead of cosmetic, and pushing more of the agent stack onto local hardware.

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
