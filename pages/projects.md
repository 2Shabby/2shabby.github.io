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

## Get in touch

Feel free to reach out. [Contact]({{ '/about/' | relative_url }}).
