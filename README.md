# Icon Renovates Website

Standalone website for Icon Renovates, based on the **Option 10 — After Dark** design direction.

## Structure

- `index.html` — complete self-contained website

All fonts, images, SVG artwork, CSS, and JavaScript are embedded in `index.html`; no build step or external assets are required.

## Local preview

```bash
python3 -m http.server 8093
```

Then open <http://localhost:8093>.

## Deployment

This is a static site and can be deployed directly with GitHub Pages, Vercel, Netlify, Cloudflare Pages, or any conventional web server.

## Contact form

The estimate form currently demonstrates the completed interaction in the browser but does not transmit submissions to a backend. Connect it to the chosen form or CRM service before production launch.
