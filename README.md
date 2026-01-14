# GitHub Pages Template

A clean, fast, and accessible personal homepage template for GitHub Pages. Zero build step required.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Features

- ✅ **Zero Build Step** - Pure HTML, CSS, and JavaScript
- ✅ **Light/Dark Mode** - Respects system preference with manual toggle
- ✅ **Mobile First** - Responsive design for all devices
- ✅ **Accessible** - Semantic HTML with proper ARIA labels
- ✅ **Modular** - Shared header/footer components
- ✅ **Portable** - Works at root or under any subpath
- ✅ **Fast** - No heavy frameworks or external CDN dependencies
- ✅ **SEO Ready** - Proper meta tags and semantic structure

## Quick Start

### As a User Site (username.github.io)

1. **Fork or clone this repository**
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. **Customize your content** (see [Customization](#customization) below)

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Customize site"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
   - Click **Save**

5. **Your site is live!**
   - Visit: `https://yourusername.github.io`

### As a Project Site (username.github.io/repo-name)

1. **Copy this template to your project repository**

2. **The template automatically detects the subpath** - no configuration needed!

3. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**

4. **Your site is live!**
   - Visit: `https://yourusername.github.io/repo-name`

## Local Development

### Using Python (recommended)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: http://localhost:8000

### Using the helper script

```bash
chmod +x scripts/serve-local.sh
./scripts/serve-local.sh 8000
```

### Other options

```bash
# Node.js
npx serve

# PHP
php -S localhost:8000
```

### Opening files directly

You can also open `index.html` directly in your browser. The template is designed to work with the `file://` protocol, though some features (like component loading) work best with a local server.

## File Structure

```
/
├── index.html              # Homepage
├── 404.html                # Custom 404 page (GitHub Pages)
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet with CSS variables
│   ├── js/
│   │   ├── base-path.js    # Automatic base path detection
│   │   ├── components.js   # Component loader (header/footer)
│   │   └── main.js         # Theme toggle, projects loader
│   └── img/
│       └── project-placeholder.svg
├── pages/
│   ├── about.html          # About page
│   ├── projects.html       # Projects portfolio
│   └── contact.html        # Contact form
├── components/
│   ├── header.html         # Shared header/navigation
│   └── footer.html         # Shared footer
├── data/
│   └── projects.json       # Project data (source of truth)
├── scripts/
│   ├── serve-local.sh      # Local development server
│   └── validate-links.sh   # Link validation script
├── .github/
│   └── workflows/
│       └── deploy.yml      # Optional GitHub Actions workflow
├── README.md               # This file
└── LICENSE                 # MIT License
```

## Customization

### 1. Update Site Name and Branding

**components/header.html:**
```html
<a href="{{PATH}}index.html" class="site-logo">Your Name</a>
```

**All HTML files - update `<title>` tags:**
```html
<title>Home | Your Site Name</title>
```

### 2. Update Personal Information

**pages/about.html:**
- Replace the placeholder image with your photo
- Update bio, skills, and experience sections

**pages/contact.html:**
- Update social media links
- Replace `your.email@example.com` with your email
- Connect the form to a service like [Formspree](https://formspree.io) or [Netlify Forms](https://www.netlify.com/products/forms/)

**components/footer.html:**
- Update social media links
- Update copyright information

### 3. Add Your Projects

Edit `data/projects.json`:

```json
{
  "projects": [
    {
      "id": "my-project",
      "title": "My Awesome Project",
      "description": "A brief description of what this project does.",
      "image": "assets/img/my-project.png",
      "tags": ["JavaScript", "React", "Node.js"],
      "demo": "https://myproject.example.com",
      "repo": "https://github.com/username/my-project"
    }
  ]
}
```

**Project fields:**
| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique identifier |
| `title` | Yes | Project name |
| `description` | Yes | Brief description |
| `image` | No | Path to screenshot (relative to root) |
| `tags` | No | Array of technology tags |
| `demo` | No | Live demo URL |
| `repo` | No | Source code URL |

### 4. Customize Theme Colors

Edit `assets/css/style.css`:

```css
:root {
    /* Light mode colors */
    --color-primary: #4361ee;
    --color-primary-hover: #3651d4;
    --color-accent: #f72585;
    /* ... */
}

[data-theme="dark"] {
    /* Dark mode colors */
    --color-primary: #7b8cff;
    --color-primary-hover: #a5b4fc;
    /* ... */
}
```

### 5. Add New Pages

1. Create a new file in `pages/` directory
2. Copy the structure from an existing page
3. Update `components/header.html` and `components/footer.html` with the new navigation link

## How It Works

### Base Path Detection

The template automatically detects whether it's running at:
- **Root** (user site): `https://username.github.io/`
- **Subpath** (project site): `https://username.github.io/repo-name/`

This is handled by `assets/js/base-path.js`. No manual configuration is needed.

### Component Loading

Header and footer are loaded dynamically via JavaScript (`assets/js/components.js`). If JavaScript is disabled:
- A fallback navigation is displayed
- Content remains fully readable
- All links work correctly

### Theme Switching

- Defaults to system preference (light/dark)
- User can toggle manually via the 🌙/☀️ button
- Choice is persisted in `localStorage`

### 404 Page

GitHub Pages automatically serves `404.html` for unknown routes. The 404 page:
- Has inline styles (works without loading CSS)
- Stores the attempted path for potential client-side routing
- Works correctly on page refresh

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

The template uses widely-supported features and includes fallbacks for older browsers.

## Optional: GitHub Actions Deployment

The template includes an optional GitHub Actions workflow (`.github/workflows/deploy.yml`). This is **not required** for GitHub Pages to work, but provides:

- Automated deployment on push
- Build validation
- Custom domain handling

To enable:
1. Go to repository **Settings** → **Pages**
2. Change Source to **GitHub Actions**
3. Push to trigger the workflow

## Troubleshooting

### Links are broken

Make sure you're using relative paths in the HTML files. The component loader handles path resolution automatically.

### Components not loading

- Ensure you're running a local server (not opening files directly)
- Check the browser console for errors
- Verify file paths are correct

### Theme not persisting

Check if `localStorage` is available in your browser. Some privacy settings may block it.

### 404 page not showing

On GitHub Pages, 404.html is automatically served. For local testing, you need to configure your server to handle 404s.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ for the GitHub Pages community
