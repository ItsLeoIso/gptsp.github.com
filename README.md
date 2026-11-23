# BTA Sprite Pickup

This repository is the artwork handoff point for Belt to Ass (BTA).

## Sprite folders

- `Sprites/Striker/` — Striker reference and animation artwork.

## Visual gallery and machine-readable manifest

The root `index.html` is a lightweight, dependency-free gallery with click-to-zoom.

Every GitHub Pages deployment runs `scripts/build-manifest.mjs` before publishing. It scans the repository for PNG, JPG, JPEG, WEBP, GIF and AVIF files and generates `assets.json`. The manifest includes each image's repository path, byte size, SHA-256 checksum, GitHub file URL, raw GitHub URL and jsDelivr CDN URL. This gives tools and scripts a stable index without needing to parse the gallery HTML.

- Gallery: https://itsleoiso.github.io/gptsp.github.com/
- Manifest: https://itsleoiso.github.io/gptsp.github.com/assets.json

To publish it once:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. The workflow in `.github/workflows/pages.yml` deploys the gallery and freshly generated manifest on every push to `main` (or when run manually).

## Handoff rules

- Put generated source artwork under `Sprites/<Character>/`.
- Keep each character's `<Character>.md` art specification beside the images.
- Preserve original source images; do not overwrite a reference sheet with a processed export.
- Use PNG for production sprites with true alpha transparency.
- BTA runtime code stays in the separate BTA game repository.
