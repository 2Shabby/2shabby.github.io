---
layout: page
title: Projects
description: Things I've tended to over time.
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

## Open to conversations

If something here resonates or sparks a thought, I'd be glad to hear from you. [Say hello]({{ '/about/' | relative_url }}).
