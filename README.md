# Blue Amazon Database

A static web database of marine natural products from the Blue Amazon (Amazônia Azul), built with HTML, CSS, and JavaScript.

## Features
- **Static Architecture**: No backend, runs entirely in the browser.
- **RDKit Integration**: Renders 2D chemical structures from SMILES using WebAssembly.
- **Search & Filter**: Interactive filtering by metabolic pathway and name.
- **Responsive**: Mobile-first design.

## Deployment to GitHub Pages

This project is ready for GitHub Pages.

1.  Initialize a git repository:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  Create a new repository on GitHub.

3.  Link and push:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
    git branch -M main
    git push -u origin main
    ```

4.  Go to **Settings** > **Pages**.
5.  Under **Source**, select `main` branch and `/ (root)` folder.
6.  Click **Save**.

## Local Development
Run a minimal HTTP server (needed for WASM loading):
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000`.
