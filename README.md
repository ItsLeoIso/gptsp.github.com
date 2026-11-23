# BTA Sprite Pickup

This repository is the artwork handoff point for Belt to Ass (BTA).

## Sprite folders

- `Sprites/Striker/` — Striker reference and animation artwork.

## Visual gallery

The root `index.html` is a lightweight, dependency-free gallery. It scans the `main` branch for PNG, JPG, JPEG, WEBP, GIF and AVIF files and displays them with click-to-zoom.

To publish it once:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. The workflow in `.github/workflows/pages.yml` will deploy the gallery on the next push (or run it manually from Actions).

The gallery URL will be:

`https://itsleoiso.github.io/gptsp.github.com/`

## Handoff rules

- Put generated source artwork under `Sprites/<Character>/`.
- Keep each character's `<Character>.md` art specification beside the images.
- Preserve original source images; do not overwrite a reference sheet with a processed export.
- Use PNG for production sprites with true alpha transparency.
- BTA runtime code stays in the separate BTA game repository.
