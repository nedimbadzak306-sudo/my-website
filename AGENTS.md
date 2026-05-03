# AGENTS.md

## Cursor Cloud specific instructions

This is a static website (HTML + CSS + JS). No build system, no package manager, no dependencies.

### Running the dev server

```bash
python3 -m http.server 8080
```

This serves the site at http://localhost:8080/. Any static file server works.

### Project structure

- `index.html` — Homepage (transfer news, rumours, trending players)
- `article.html` — Article detail page template
- `css/styles.css` — All styles (responsive, dark theme)
- `js/main.js` — Interactivity (breaking news ticker, animations, mobile menu)
- `images/` — Placeholder for local images (currently using Unsplash URLs)

### Key notes

- No build step or compilation required.
- No linting tools configured (pure vanilla HTML/CSS/JS).
- Images are loaded from Unsplash CDN. Replace with local assets for production.
- The site uses Inter font from Google Fonts (loaded via CDN).
