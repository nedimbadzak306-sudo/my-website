# AGENTS.md

## Cursor Cloud specific instructions

This is a minimal static website — a single `index.html` page with inline CSS, no JavaScript, no build tools, and no dependencies.

### Running the site

Serve locally with any static file server:

```bash
python3 -m http.server 8000 --directory /workspace
```

The site is then available at `http://localhost:8000/`.

### Notes

- No package manager, linter, test framework, or build step exists — the project is a single HTML file.
- Deployed to Vercel as a static site (no serverless functions or API routes).
- No environment variables or secrets are required.
