# Unified site structure

This repository keeps the two feature areas separate instead of mixing their HTML/JS in the root:

- `src/components/partials/` — shared header partials used across pages
- `src/features/lost-animals/` — full PetConnect / lost-animals experience
- `src/features/bundles/` — bundles page UI + bundles-specific JS/data
- root HTML files — thin entry pages that redirect to the modular feature folders

Notes:
- The original KBWG homepage was preserved as `kbwg-home.html`.
- Shared KBWG assets and non-bundle pages remain in place so older pages keep working.
- Because the original codebase is static HTML/JS (not React), routing is implemented with lightweight HTML entry pages plus `src/router.js` rather than a React `App.js`.
