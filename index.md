---
layout: home
title: Welcome
description: A clean, fast, and accessible personal website built with Jekyll and GitHub Pages.
nav_order: 1
nav_title: Home
cta:
  - text: Learn More
    url: /about/
  - text: View Projects
    url: /projects/
---

## Features

<div class="feature-grid">
  <div class="feature-card">
    <h3>🚀 GitHub Pages Ready</h3>
    <p>Built specifically for GitHub Pages. No custom actions required—just push and publish.</p>
  </div>
  
  <div class="feature-card">
    <h3>🎨 Light & Dark Mode</h3>
    <p>Respects system preferences with CSS-only dark mode and optional JavaScript toggle.</p>
  </div>
  
  <div class="feature-card">
    <h3>📱 Mobile First</h3>
    <p>Responsive design that looks great on all devices, from phones to desktops.</p>
  </div>
  
  <div class="feature-card">
    <h3>♿ Accessible</h3>
    <p>Semantic HTML with proper ARIA labels, skip links, and keyboard navigation.</p>
  </div>
  
  <div class="feature-card">
    <h3>🔧 Data-Driven</h3>
    <p>Projects and social links powered by YAML data files for easy updates.</p>
  </div>
  
  <div class="feature-card">
    <h3>🔍 SEO Optimized</h3>
    <p>Complete with Open Graph tags, Twitter cards, and canonical URLs.</p>
  </div>
</div>

## Featured Projects

{% include projects-grid.html limit=3 %}

<p class="text-center mt-2">
  <a href="{{ '/projects/' | relative_url }}" class="btn btn-secondary">View All Projects</a>
</p>
