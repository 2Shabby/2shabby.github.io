---
layout: page
title: Write-ups
description: Technical writing, notes, and thoughts on systems and AI.
permalink: /writing/
---

<aside style="background: var(--color-surface); border-left: 3px solid var(--color-accent); padding: 1rem 1.25rem; margin-bottom: 2rem; font-size: 0.9rem;">
  <strong>Note:</strong> This is the only section of this site written entirely by me, without LLM assistance.
</aside>

{% if site.posts.size > 0 %}
<div class="posts-list">
  {% for post in site.posts %}
  <article class="post-preview">
    <header>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
      <div class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
      </div>
    </header>
    {% if post.excerpt %}
    <p>{{ post.excerpt | strip_html | truncate: 200 }}</p>
    {% endif %}
    <a href="{{ post.url | relative_url }}">Read more &rarr;</a>
  </article>
  {% endfor %}
</div>
{% else %}
<div style="text-align: center; padding: 3rem 0;">
  <p style="font-size: 1.25rem; color: var(--color-text-muted);">
    No posts yet. Coming soon.
  </p>
</div>
{% endif %}
