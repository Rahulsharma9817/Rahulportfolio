# Rahul Sharma — 3D Portfolio

A responsive, dark 3D-style personal portfolio built with plain HTML, CSS and JavaScript. No build tools or package installation required.

## Files
- `index.html` — page structure and content
- `styles.css` — responsive styling, glassmorphism and CSS 3D artwork
- `script.js` — mobile navigation, theme toggle, reveal animations, role rotator, card tilt and contact mailto
- `assets/Rahul_Sharma_Resume.pdf` — resume download
- `assets/favicon.svg` — site icon

## Run locally
1. Extract the ZIP.
2. Open `index.html` in Chrome, Edge or Firefox.
3. For a local development server, open a terminal in this folder and run:
   - `python -m http.server 8000`
   - Visit `http://localhost:8000`

## Publish free with GitHub Pages
1. Create or open your GitHub repository.
2. Upload all files and folders from this ZIP to the repository root.
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to publish the site.

## Personalize before publishing
- Verify the phone number, email, job dates and education details in `index.html`.
- Replace the resume PDF in `assets/` when you update your resume.
- Add real project repository links as projects are published.
- Add only skills and certifications you have actually completed.

## Functionality notes
- Contact form uses a `mailto:` link and opens the visitor's configured email app; it does not send/store messages on a server.
- Theme toggle changes the page theme for the current visit; it does not persist after refresh.
- 3D visuals are CSS-based, so no 3D library or API key is needed.
- Google Fonts requires an internet connection; the site falls back to system fonts if unavailable.
