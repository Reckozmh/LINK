# LINK project website

Static project page for **LINK: Learning to Localize from Known to Unknown Scenes**.

The page uses the supplied research figures, Oxford demonstration, and manuscript PDF. Its quantitative claims are taken from the supplied manuscript's Tables 1–3. The supplied PDF is anonymous and bears a “Do not distribute” footer; the project owner explicitly approved publishing this copy. No code or dataset download is advertised.

The original `FIG/`, `Paper/`, and `Video/` source folders remain local and are excluded from Git. Public assets are copied into `assets/`.

## Preview

From this directory, run `python -m http.server 8000` and open `http://localhost:8000/`.

## GitHub Pages

The page uses relative asset paths and is intended for `https://reckozmh.github.io/LINK/`. Create a public repository named `LINK` under `Reckozmh`, push these files to its `main` branch, and select **Deploy from a branch → main → /(root)** under **Settings → Pages**. The included `.nojekyll` file ensures GitHub Pages serves these static files directly.

The canonical URL and permission to publish the supplied manuscript have been confirmed. Public author names have not yet been supplied, so the page does not name authors or claim conference acceptance. If the repository path changes, update `og:url`, `og:image`, the QR image and its label, and the copy-link URL.
