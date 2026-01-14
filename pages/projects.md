---
layout: page
title: Projects
description: A collection of things I've built, organized by category.
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

## Want to collaborate?

I'm always open to interesting projects and collaborations. If you have an idea you'd like to discuss, feel free to [get in touch]({{ '/contact/' | relative_url }}).
