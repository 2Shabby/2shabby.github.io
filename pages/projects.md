---
layout: page
title: Projects
description: Things I've worked on.
permalink: /projects/
---

<div class="projects-container">
  {% for category in site.data.projects.categories %}
  <details class="project-category" open>
    <summary class="category-header">
      <h2>{{ category.label }}</h2>
      {% if category.description %}
      <p class="category-description">{{ category.description }}</p>
      {% endif %}
      <span class="category-count">({{ category.items | size }} {% if category.items.size == 1 %}project{% else %}projects{% endif %})</span>
    </summary>

    <div class="category-body">
      {% for project in category.items %}
        {% include project-item.html project=project %}
      {% endfor %}
    </div>
  </details>
  {% endfor %}
</div>

---

## My Favourite Project & Learning

The most significant project for me is **Jeeves Core**.

It started from wanting to write a reusable agent pipeline using open source libraries. But as I built, the difficulty in creating persistent memory, logging, database access, centralized configuration, modularity, and other good practices started becoming increasingly hard.

Jeeves Core was born out of that difficulty. The aim is to provide a layer of abstraction above which various agentic flows can run—without having to rewrite and reimplement the reusables and primitives that shouldn't be tightly coupled to the agent code itself.

The [Code Analysis Pipeline](/projects/#jeeves-code-analysis) and [AI Personal Assistant](/projects/#jeeves-assistant) are attempts at reusing this abstraction across different agentic tasks. Each capability plugs into the same runtime, sharing the infrastructure while focusing only on its specific job.

---

## Get in touch

Feel free to reach out. [Contact]({{ '/about/' | relative_url }}).
