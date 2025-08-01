# Copilot Instructions for AI Coding Agents

## Project Overview
This codebase is a collection of static web projects using HTML, CSS (including Tailwind CSS), and JavaScript. Each subfolder (e.g., `urban/`, `28-7/`, `23-7/`) represents a separate project or practice exercise. There is no build system or backend; all files are served statically.

## Directory Structure
- Each project folder contains its own `index.html` and related assets (CSS, JS, images).
- Shared or CDN dependencies (e.g., Tailwind, FontAwesome) are included via `<link>` or `<script>` tags in HTML files.
- Example: `urban/index.html` references `styles.css` (should be `style.css` if following the folder's file), FontAwesome, and Tailwind via CDN.

## Conventions & Patterns
- Use Tailwind CSS utility classes for layout and styling. Custom CSS is minimal and placed in local `style.css` or `assets/css/style.css`.
- JavaScript (if present) is in `assets/js/` or directly in the project folder.
- Images and icons are referenced with relative paths (e.g., `./images/logo/logo2.png`).
- HTML structure is semantic, with clear separation of header, main, and footer.
- No frameworks or build tools are used; keep all code compatible with static file hosting.

## Developer Workflows
- **No build step required.**
- To preview, open the relevant `index.html` in a browser.
- For Tailwind CSS, all utility classes must be written directly in HTML or referenced CSS files; dynamic class generation is not supported.
- If adding new dependencies, prefer CDN links in HTML.

## Integration Points
- Tailwind CSS is loaded via CDN (`@tailwindcss/browser`).
- FontAwesome is loaded via CDN.
- No backend or API integration is present.

## Project-Specific Notes
- File naming is important: ensure CSS/JS references in HTML match actual filenames (e.g., `style.css` vs `styles.css`).
- When adding new projects, follow the existing folder structure and naming conventions.
- Keep all assets (images, CSS, JS) within the respective project folder for portability.

## Example: Adding a New Section
To add a new section to `urban/index.html`:
1. Add the HTML markup inside the `<main>` tag.
2. Use Tailwind utility classes for styling.
3. If custom styles are needed, add them to `style.css` in the same folder.

---

For questions about project structure or conventions, review the folder layout and existing HTML files for examples.
