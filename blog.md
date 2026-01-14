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
<p class="text-muted">No posts yet. Check back soon!</p>
{% endif %}
