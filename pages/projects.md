---
layout: page
title: Projects
description: Things I've worked on.
permalink: /projects/
---

<div class="project-highlight" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1.5rem; margin-bottom: 2rem;">

### The one I keep coming back to

**Jeeves Core** has been one of the most interesting and learning-dense projects that I have worked on. It started off with just wanting to get local LLMs to be useful, and learn the pains of creating an E2E project on top of it.

It then grew into a project focused on creating a reusable agent pipeline using open source libraries. However, as I worked on it and tested the various flows, the capability of SLMs surprised me—but the difficulty in creating persistent memory, logging, database access, centralized configuration, modularity, and other good practices started becoming increasingly hard when I was attempting to use various agentic frameworks.

The aim of Jeeves Core was to try and address the gap, by providing a layer of abstraction above which various agentic flows can run, without having to rewrite and reimplement the reusables and primitives that shouldn't be tightly coupled to the agent code itself.

The [Code Analysis Pipeline](#jeeves-code-analysis) and [AI Personal Assistant](#jeeves-assistant) are attempts at reusing this abstraction across different agentic tasks. Each capability plugs into the same runtime, sharing the infrastructure while focusing only on its specific job.

</div>

---

<div class="projects-container">
  {% for category in site.data.projects.categories %}
  <details class="project-category">
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

## Get in touch

Feel free to reach out. [Contact]({{ '/about/' | relative_url }}).
