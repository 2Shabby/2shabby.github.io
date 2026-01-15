---
layout: home
title: Welcome
description: Systems & ML engineer building distributed systems, LLM infrastructure, and edge computing solutions.
---

## What I'm building

**Jeeves Core** has been one of the most interesting and learning-dense projects that I have worked on. It started off with just wanting to get local LLMs to be useful, and learn the pains of creating an E2E project on top of it.

It grew into a reusable agent runtime—the difficulty in creating persistent memory, logging, database access, and modularity when using various agentic frameworks led me to build an abstraction layer that different agentic flows can run on top of.

The [Code Analysis Pipeline]({{ '/projects/' | relative_url }}#jeeves-code-analysis) and [AI Personal Assistant]({{ '/projects/' | relative_url }}#jeeves-assistant) are capabilities built on this runtime, each plugging into the same infrastructure while focusing on its specific job.

---

## Featured Projects

{% assign featured_count = 0 %}
{% for category in site.data.projects.categories %}
  {% for project in category.items %}
    {% if project.status == "active" and featured_count < 3 %}
<div class="project-item">
  <h4>{{ project.name }}</h4>
  <p>{{ project.tagline }}</p>
  <div class="project-tags">
    {% for tag in project.tags limit:4 %}
    {% include tag.html tag=tag %}
    {% endfor %}
  </div>
</div>
    {% assign featured_count = featured_count | plus: 1 %}
    {% endif %}
  {% endfor %}
{% endfor %}

<div class="text-center mt-2">
  <a href="{{ '/projects/' | relative_url }}">View all projects &rarr;</a>
</div>
