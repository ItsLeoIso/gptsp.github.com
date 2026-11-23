# STRIKER — Character & Sprite Asset Specification

**Project:** BTA (Belt to Ass)  
**Character ID:** `striker`  
**Role:** Player character / all-rounder  
**Asset status:** Awaiting original sprite artwork  
**Source of truth:** BTA character data in `ItsLeoIso/bta.github.com`

This document defines Striker's visual identity and the sprite assets to create for the game. Keep this file alongside the generated PNGs. The game-side integration will be handled separately; do not modify game code from this asset pickup repository.

## 1. Character identity

Striker is BTA's straightforward all-rounder: readable, confident, aggressive without looking bulky. His silhouette should be instantly recognizable at small gameplay scale.

### Proposed visual direction

- Lean, athletic young adult male fighter.
- Tousled, spiky silver-white hair.
- Charcoal / near-black sleeveless combat jacket with restrained violet trim.
- Dark fitted combat trousers.
- Purple sash or short waist accent that moves clearly during attacks.
- Fingerless gloves and practical combat boots.
- Small magenta/violet energy accents reserved for special moves.
- Confident, focused expression; slightly aggressive fighting posture.

**Palette guide (approximate, not strict):**
- Hair: silver, cool white and light grey shadows.
- Main clothing: charcoal, near-black and slate.
- Accent: violet / deep purple.
- Energy: vivid magenta-violet with a restrained pale highlight.
- Skin: natural mid-range tone with readable pixel shading.

Do not add weapons, oversized armour, capes, wings, or large accessories that obscure the body or hurtbox silhouette. No logos, text, UI, scenery, floor, or drop shadow baked into the sprites.

## 2. Gameplay profile (reference)

These values describe the current BTA prototype and are not visual instructions:

| Property | Current value |
|---|---:|
| Display name | PLAYER 01 |
| Archetype | All-rounder |
| Move speed | 300 |
| Damage multiplier | 1.00× |
| Default sprite frame | 48 × 80 px |
| Atlas columns | 8 |
| Render scale | 3× |
| Pivot | X 0.5, Y 1.0 (bottom-centre) |

Current character description: “A straightforward all-rounder built around clean confirms and reliable pressure.”

## 3. Camera, pose and consistency rules

- Produce a **side-view fighting-game sprite**, not a front-facing RPG character.
- Default facing direction is **RIGHT**. Keep the complete design readable from this side.
- Keep the character's feet on one consistent baseline in every grounded frame.
- Keep head height, body proportions, costume details and palette consistent across all sheets.
- Keep the whole character inside each frame with generous transparent padding; never crop hair, hands, sash or feet.
- Use crisp pixel clusters and deliberate pixel edges. Avoid blur, anti-aliasing, painterly gradients, vector-like outlines or photorealism.
- Maintain a clear silhouette at the game's intended small display size.
- Transparent PNG background. No checkerboard pattern embedded in the image.
- Do not combine multiple animation poses into a single illustration or presentation board.

## 4. Animation inventory

Create each animation as its own PNG sprite sheet. Use equal-sized frames within each sheet. A single row is preferred for easy inspection; if a sheet needs multiple rows, document the row/column order explicitly.

| Animation key | Required motion |
|---|---|
| `idle` | Subtle breathing / ready stance loop |
| `walk` | Complete forward walking loop |
| `crouch` | Enter, hold and return from crouch |
| `jump` | Takeoff, airborne pose and landing transition |
| `fall` | Stable falling loop |
| `dash-forward` | Forward burst with clear lean |
| `dash-backdash` | Backdash with readable retreat |
| `air-dash` | Airborne forward dash |
| `guard-high` | Standing high guard loop |
| `guard-low` | Crouching low guard loop |
| `attack-light` | Fast, compact punch |
| `attack-medium` | Stronger, longer-reaching strike |
| `attack-heavy` | Committed heavy strike with clear follow-through |
| `special-energy-shot` | Grounded forward energy-shot casting motion |
| `special-arc-lance` | Distinct Arc Lance casting / release motion |
| `reaction-hitstun` | Brief recoil loop |
| `reaction-blockstun` | Guard impact recoil |
| `reaction-guard-break` | Strong stagger / loss-of-balance loop |
| `reaction-knockdown` | Downed pose |
| `reaction-wakeup` | Return from knockdown to standing |

The projectile visuals themselves are separate effects/assets; do not bake a projectile into every character frame. For Energy Shot, show Striker's firing pose and any small hand charge only. Arc Lance may have a brighter hand/arm charge, but keep the projectile separate.

## 5. Technical delivery format

- Format: PNG with true alpha transparency.
- Frame dimensions: **48 × 80 pixels** is the current engine placeholder atlas cell size. If the final art needs a different cell size, do not silently resize or crop it; document the proposed dimensions first.
- Keep every frame in a sheet on the same grid.
- Prefer one animation per file, with frames ordered left-to-right.
- No labels, frame numbers, borders, separators, or metadata text inside the artwork.
- Use nearest-neighbour scaling for previews; never blur pixel art.
- Include a small preview/contact sheet only as an additional file, not instead of the individual PNG sheets.

### File naming

Use these exact lowercase names:

```
Sprites/Striker/
  Striker.md
  striker-reference.png
  striker-idle.png
  striker-walk.png
  striker-crouch.png
  striker-jump.png
  striker-fall.png
  striker-dash-forward.png
  striker-dash-backdash.png
  striker-air-dash.png
  striker-guard-high.png
  striker-guard-low.png
  striker-attack-light.png
  striker-attack-medium.png
  striker-attack-heavy.png
  striker-special-energy-shot.png
  striker-special-arc-lance.png
  striker-reaction-hitstun.png
  striker-reaction-blockstun.png
  striker-reaction-guard-break.png
  striker-reaction-knockdown.png
  striker-reaction-wakeup.png
```

## 6. First delivery — do this before the full set

1. Create `striker-reference.png`: one clean character reference showing front, side and back views plus the canonical right-facing fighting stance. This is a design reference, not an in-game sprite sheet.
2. Create `striker-idle.png`: at least 4 evenly sized frames, right-facing, transparent background, grounded baseline consistent.
3. Create `striker-walk.png`: at least 6 evenly sized frames, right-facing, complete seamless loop.
4. Add a short note below describing exact frame width/height, frame count, sheet layout and any deviations from this specification.

Wait for these first assets to be reviewed for consistency before generating the entire animation set. Do not invent a new costume or change Striker's proportions between files.

## 7. Asset manifest (update as files are added)

| File | Status | Notes |
|---|---|---|
| `striker-reference.png` | Pending | Canonical design reference |
| `striker-idle.png` | Pending | First in-game animation |
| `striker-walk.png` | Pending | First in-game animation |
| Remaining animation sheets | Pending | Generate after reference approval |

## 8. Handoff checklist

Before considering an asset ready:

- [ ] PNG opens and has real transparent pixels around the character.
- [ ] Frame dimensions and count are documented.
- [ ] Every frame uses the same character design and scale.
- [ ] Grounded frames share a consistent foot baseline.
- [ ] No frame is cropped or clipped.
- [ ] Motion reads clearly at native size.
- [ ] No background, text, watermark, UI, or baked-in shadow.
- [ ] File name matches the required naming convention.

**Important:** This repository is the sprite handoff location. Keep source artwork here; BTA's main repository will consume reviewed assets in a separate integration change.
