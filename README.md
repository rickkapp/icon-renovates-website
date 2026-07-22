# Icon Renovates Website

Production-ready static website for Icon Renovates, based on the **Option 10 — After Dark** design direction.

## Project structure

```text
.
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── js/main.js
├── README.md
└── .gitignore
```

The project intentionally uses plain HTML, CSS, and JavaScript. There is no framework, package installation, or build step.

## Local preview

```bash
python3 -m http.server 8093
```

Then open <http://localhost:8093>.

## Deployment

Deploy the repository root as a static site using GitHub Pages, Vercel, Netlify, Cloudflare Pages, or a conventional web server.

## Contact form

The estimate form currently demonstrates its completed interaction in the browser but does not transmit submissions to a backend. Connect it to the chosen form or CRM service before production launch.
