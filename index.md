---
layout: home
title: Welcome
description: Systems & ML engineer building distributed systems, LLM infrastructure, and edge computing solutions.
---

## What I'm building

**Jeeves Core** has been one of the most interesting and learning-dense projects that I have worked on. It started off with just wanting to get local LLMs to be useful, and learn the pains of creating an E2E project on top of it.

It then grew into a project focused on creating a reusable agent pipeline using open source libraries. However, as I worked on it and tested the various flows, the capability of SLMs surprised me, but the difficulty in creating persistent memory, logging, database access, centralized configuration, modularity, and other good practices started becoming increasingly hard when I was attempting to use various agentic frameworks.

The aim of Jeeves Core was to try and address the gap, by providing a layer of abstraction above which various agentic flows can run, without having to rewrite and reimplement the reusables and primitives that shouldn't be tightly coupled to the agent code itself.

The [Code Analysis Pipeline]({{ '/projects/' | relative_url }}#jeeves-code-analysis) and [AI Personal Assistant]({{ '/projects/' | relative_url }}#jeeves-assistant) are attempts at reusing this abstraction across different agentic tasks. Each capability plugs into the same runtime, sharing the infrastructure while focusing only on its specific job.

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
