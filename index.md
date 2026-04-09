---
layout: home
title: Welcome
description: I work on LLM infrastructure and agent systems.
---

## What I'm working on

Most of my time goes into **Jeeves Core** — a runtime for LLM agents.

It started as a simple question: once you get a local model running, what does it actually take to make it useful? The answer turned out to be everything *around* the model — persistent memory, logging, config, database access, clean module boundaries. The agent frameworks I tried kept tangling these concerns together with the agent logic itself, and rewriting that plumbing for every new idea got old fast.

So Jeeves Core is the layer underneath. Agents plug into a shared runtime that handles the boring but load-bearing parts, and each capability only has to care about its own job. The [Code Analysis Pipeline]({{ '/projects/' | relative_url }}#jeeves-code-analysis) and [Personal Assistant]({{ '/projects/' | relative_url }}#jeeves-assistant) are two capabilities built on top of it — different problems, same foundation.

The broader thing I care about: the bottleneck for useful agents isn't model quality anymore, it's everything else. That's where I want to spend my time.

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
