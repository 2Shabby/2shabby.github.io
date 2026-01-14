---
layout: page
title: Blog
description: Thoughts, tutorials, and updates.
permalink: /blog/
nav_order: 4
---

{% if site.posts.size > 0 %}
<div class="posts-list">
  {% for post in site.posts %}
  <article class="post-preview">
    <header>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
      <div class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
        {% if post.author %}
        <span>by {{ post.author }}</span>
        {% endif %}
      </div>
    </header>
    {% if post.excerpt %}
    <p>{{ post.excerpt | strip_html | truncate: 200 }}</p>
    {% endif %}
    <a href="{{ post.url | relative_url }}" class="read-more">Read more &rarr;</a>
  </article>
  {% endfor %}
</div>
{% else %}
<div style="text-align: center; padding: 3rem 0;">
  <p style="font-size: 1.25rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
    No blog posts yet. In the meantime, check out my projects.
  </p>
  <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary">View Projects</a>
</div>
{% endif %}
