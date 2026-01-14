# Jekyll GitHub Pages Template

A clean, fast, and accessible Jekyll site template optimized for GitHub Pages' built-in build pipeline. **No custom GitHub Actions required.**

## Features

- ✅ **GitHub Pages Native** - Uses Jekyll built-in to GitHub Pages
- ✅ **Zero Plugins** - Maximum compatibility, no unsupported dependencies
- ✅ **Light & Dark Mode** - CSS-only with optional JS toggle
- ✅ **Mobile First** - Responsive design for all devices
- ✅ **Accessible** - Semantic HTML, ARIA labels, skip links
- ✅ **SEO Ready** - Open Graph, Twitter Cards, canonical URLs
- ✅ **Data-Driven** - Projects and social links from YAML files
- ✅ **Baseurl Safe** - Works at root or any subpath

---

## Quick Start

### Publishing as a User Site (username.github.io)

1. **Create repository** named exactly `username.github.io`

2. **Clone and customize:**
   ```bash
   git clone https://github.com/username/username.github.io.git
   cd username.github.io
   ```

3. **Edit `_config.yml`:**
   ```yaml
   url: "https://username.github.io"
   baseurl: ""  # Leave empty for user sites
   title: "Your Site Title"
   description: "Your site description"
   ```

4. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial setup"
   git push origin main
   ```

5. **Enable GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
   - Click **Save**

6. **Wait 1-2 minutes** and visit `https://username.github.io`

### Publishing as a Project Site (username.github.io/repo-name)

1. **Create or use existing repository**

2. **Edit `_config.yml`:**
   ```yaml
   url: "https://username.github.io"
   baseurl: "/repo-name"  # Must match your repository name
   title: "Your Site Title"
   ```

3. **Push and enable Pages** (same as above)

4. **Visit** `https://username.github.io/repo-name`

---

## Important: Baseurl Configuration

The `baseurl` setting is critical for links and assets to work correctly:

| Site Type | url | baseurl |
|-----------|-----|---------|
| User site | `https://username.github.io` | `""` (empty) |
| Project site | `https://username.github.io` | `"/repo-name"` |
| Custom domain | `https://yourdomain.com` | `""` (empty) |

**All internal links use `relative_url` filter**, so changing baseurl automatically updates all paths.

---

## Local Development

### Prerequisites

- Ruby 2.7+ 
- Bundler (`gem install bundler`)

### Setup

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# With drafts
bundle exec jekyll serve --drafts

# With live reload
bundle exec jekyll serve --livereload
```

Visit `http://localhost:4000` (or `http://localhost:4000/repo-name` for project sites).

### Without Ruby (Quick Preview)

You can push directly to GitHub and let GitHub Pages build it. Each push triggers a build.

---

## File Structure

```
/
├── _config.yml           # Site configuration
├── _layouts/
│   ├── default.html      # Base layout
│   ├── page.html         # Standard pages
│   ├── post.html         # Blog posts
│   ├── project.html      # Project pages
│   └── home.html         # Homepage
├── _includes/
│   ├── head.html         # <head> content
│   ├── meta.html         # SEO/social meta tags
│   ├── header.html       # Site header
│   ├── nav.html          # Navigation
│   ├── footer.html       # Site footer
│   ├── social-links.html # Social links partial
│   └── projects-grid.html # Projects grid partial
├── _data/
│   ├── projects.yml      # Project data
│   ├── social.yml        # Social links
│   └── navigation.yml    # (Optional) nav config
├── _posts/               # Blog posts
│   └── YYYY-MM-DD-title.md
├── assets/
│   ├── css/style.css     # Main stylesheet
│   ├── js/main.js        # Optional JavaScript
│   └── img/              # Images
├── index.md              # Homepage
├── about.md              # About page
├── projects.md           # Projects page
├── blog.md               # Blog listing
├── contact.md            # Contact page
├── 404.html              # Custom 404 page
├── README.md             # This file
└── LICENSE               # MIT License
```

---

## Customization

### Site Information

Edit `_config.yml`:

```yaml
title: "Your Name"
description: "Your tagline or description"
author:
  name: "Your Name"
  email: "you@example.com"

url: "https://username.github.io"
baseurl: ""
```

### Navigation

Pages with `nav_order` front matter appear in navigation, sorted by order:

```yaml
---
title: About
nav_order: 2
nav_title: About Me  # Optional: different nav text
permalink: /about/
---
```

### Projects

Edit `_data/projects.yml`:

```yaml
- title: My Project
  description: What it does
  image: /assets/img/project.png
  tags:
    - JavaScript
    - React
  demo_url: https://demo.example.com
  repo_url: https://github.com/user/repo
  featured: true
```

### Social Links

Edit `_data/social.yml`:

```yaml
- name: GitHub
  url: https://github.com/username
  icon: "📦"

- name: Email
  url: mailto:you@example.com
  icon: "✉️"
```

### Theme Colors

Edit `assets/css/style.css` CSS variables:

```css
:root {
  --color-primary: #4361ee;
  --color-bg: #ffffff;
  /* ... */
}
```

### Adding Blog Posts

Create files in `_posts/` with format `YYYY-MM-DD-title.md`:

```yaml
---
layout: post
title: "My Post Title"
date: 2024-01-15 10:00:00 -0500
categories: [category]
tags: [tag1, tag2]
author: Your Name
---

Post content in Markdown...
```

---

## SEO Configuration

### Setting site.url

The `url` in `_config.yml` must be your actual site URL for SEO tags to work:

```yaml
# Correct
url: "https://username.github.io"

# Wrong
url: ""
url: "http://localhost:4000"
```

### Custom Domain

If using a custom domain:

1. Add `CNAME` file with your domain
2. Update `_config.yml`:
   ```yaml
   url: "https://yourdomain.com"
   baseurl: ""
   ```

---

## How Links Work

All internal links use Jekyll's `relative_url` filter:

```liquid
<a href="{{ '/about/' | relative_url }}">About</a>
<link href="{{ '/assets/css/style.css' | relative_url }}">
<img src="{{ '/assets/img/photo.jpg' | relative_url }}">
```

This prepends `baseurl` automatically, so links work for both user and project sites.

---

## GitHub Pages Constraints

This template follows GitHub Pages constraints:

- ✅ Uses only GitHub Pages safe Jekyll features
- ✅ No unsupported plugins
- ✅ No custom build process required
- ✅ Standard Kramdown markdown
- ✅ Static assets only

---

## Troubleshooting

### Site not building

- Check **Actions** tab for build errors
- Ensure `_config.yml` is valid YAML
- Check for Liquid syntax errors

### Links broken on project site

- Ensure `baseurl: "/repo-name"` matches exactly
- Use `| relative_url` for all internal links

### CSS not loading

- Check path uses `| relative_url`
- Clear browser cache

### 404 page not showing

GitHub Pages automatically serves `404.html` for missing pages.

---

## License

MIT License - see [LICENSE](LICENSE)
