---
layout: page
title: Writing
description: Notes on software and technology.
permalink: /writing/
narrow: true
---

{% if site.posts.size > 0 %}
<div class="articles-list">
  {% for post in site.posts %}
  {% include article-preview.html post=post %}
  {% endfor %}
</div>
{% else %}
<div class="articles-empty">
  <p>No posts yet.</p>
</div>
{% endif %}
