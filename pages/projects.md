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

<!-- TODO: Replace this section with your own authentic thoughts. This is your interview question answer, pre-written. -->

**Favourite Project:**

> [YOUR INPUT NEEDED] Which project are you most proud of and why? What made it challenging? What would you do differently? Example: "My favourite project is X because..." — be specific about what you learned and what makes it stand out to you personally.

**Key Learning:**

> [YOUR INPUT NEEDED] What's the most valuable thing you've learned from any of your projects? This could be technical (e.g., "I finally understood why distributed systems are hard when...") or non-technical (e.g., "I learned that finishing a project is harder than starting one"). Be honest and specific.

---

## Get in touch

Feel free to reach out. [Contact]({{ '/about/' | relative_url }}).
