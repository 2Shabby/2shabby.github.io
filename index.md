---
layout: home
title: Welcome
description: A clean, fast, and accessible personal website built with Jekyll and GitHub Pages.
cta:
  - text: View Projects
    url: /projects/
  - text: About Me
    url: /about/
---

## What I Do

I build robust, scalable software with a focus on clean architecture and user experience. My work spans systems engineering, web applications, and developer tooling.

### Featured Projects

Here are some highlights from my portfolio:

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
  {% if project.repo_url %}
  <a href="{{ project.repo_url }}" target="_blank" rel="noopener noreferrer">View on GitHub &rarr;</a>
  {% endif %}
</div>
    {% assign featured_count = featured_count | plus: 1 %}
    {% endif %}
  {% endfor %}
{% endfor %}

<div class="text-center mt-2">
  <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary">View All Projects</a>
</div>

---

## Get In Touch

Interested in collaborating or have a question? Feel free to [reach out]({{ '/contact/' | relative_url }}).
