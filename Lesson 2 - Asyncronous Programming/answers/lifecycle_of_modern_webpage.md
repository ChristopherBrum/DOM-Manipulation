# The Lifecycle of a Modern Web Page

- Browser receives HTML from the server
- HTML parsed and JS evaluated.
- DOM constructed from parsed HTML.
- `'DOMContentLoaded'` even fires on `document`.
- Page is displayed on screen.
- Embedded assets are loaded.
- `'load'` event fires on `window`.
