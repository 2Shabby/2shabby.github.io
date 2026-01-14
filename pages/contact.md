---
layout: page
title: Contact
description: Connect with me on GitHub, LinkedIn, or via email.
permalink: /contact/
nav_order: 5
narrow: true
---

<ul class="social-links" style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem;">
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
