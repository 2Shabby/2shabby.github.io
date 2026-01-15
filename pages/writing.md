---
layout: page
title: Write-ups
description: Technical writing, notes, and thoughts on systems and AI.
permalink: /writing/
---

<aside class="writing-note">
  <strong>Note:</strong> This is the only section of this site written mostly by me, with LLM assistance for copy-editing.
</aside>

{% if site.posts.size > 0 %}
<div class="articles-list">
  {% for post in site.posts %}
  {% include article-preview.html post=post %}
  {% endfor %}
</div>
{% else %}
<div class="articles-empty">
  <p>No posts yet. Coming soon.</p>
</div>
{% endif %}
