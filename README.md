# Nyuton Enterprises — Static Site Starter (Bluehost + GitHub Actions)

A clean, responsive static site scaffold for **Nyuton Enterprises** with:
- Semantic, accessible HTML
- Mobile-first CSS (no frameworks) with CSS variables
- Minimal JS for nav + form UX
- Ready-to-ship **GitHub Actions** workflow deploying to **Bluehost via FTP**
- Security + hygiene: CodeQL, Dependabot, PR/Issue templates, `.editorconfig`

## Quick Start

1. **Create a new GitHub repo** (public or private), e.g. `nyutonenterprises.com`.
2. **Upload this folder** (or run `git init`, `git add .`, `git commit -m "init"`, `git branch -M main`, `git remote add origin <your repo>`, `git push -u origin main`).
3. **Set repo secrets** (Settings → Secrets and variables → Actions → New repository secret):
   - `FTP_SERVER` → your Bluehost FTP host (e.g. `ftp.yourdomain.com` or server name from cPanel)
   - `FTP_USERNAME` → your FTP user
   - `FTP_PASSWORD` → your FTP password
   - `FTP_PORT` → usually `21`
   - `FTP_DIR` → usually `/public_html/` (or subfolder for addon domains)
4. Push to `main`. GitHub Actions will deploy to Bluehost automatically.

## Local Development

Just open `index.html` in your browser, or serve locally:

```bash
python3 -m http.server 8080
# visit http://localhost:8080
```

## Customize

- **Brand**: Update `assets/img/logo.svg`, colors in `assets/css/style.css` (`--brand-*`).
- **Pages**: Edit `index.html`, `services.html`, `about.html`, `contact.html`.
- **Contact form**: Currently prevents default submission. Replace with a service (Formspree, Getform) or backend. See `contact.html` comments.

## BlueHost Notes

- Default web root is `/public_html/`. Addon domains may use `/public_html/<addon-folder>/`.
- If deploys don't appear, confirm correct `FTP_DIR` and that the domain is pointed to this directory.

## Security & Maintenance

- **CodeQL**: Static analysis on pushes/PRs.
- **Dependabot**: Weekly checks (GitHub Actions dependencies).
- **PR Template & Issue Template**: Enforce clean changes.

---
© 2025 Nyuton Enterprises LLC. MIT licensed.
