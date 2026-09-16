# Project Structure Guide

## Overview

Rudyweb is organized into a professional folder hierarchy for scalability and maintainability.

## Folder Organization

```
rudyweb/
├── src/
│   ├── pages/              # HTML pages (all .html files)
│   ├── styles/             # CSS stylesheets (all .css files)
│   ├── scripts/            # JavaScript modules (all .js files)
│   └── assets/
│       └── images/         # Images, icons, and media
├── public/                 # Static files
├── docs/                   # Documentation
├── .gitignore
├── wrangler.toml          # Cloudflare configuration
├── package.json           # Dependencies
└── README.md              # Project README
```

## File Organization Rules

### Pages (`/src/pages`)
- All HTML files including:
  - index.html
  - dashboard.html
  - games.html
  - news.html
  - snake.html
  - lmu.html (login)
  - smu.html (signup)
  - contact.html

### Styles (`/src/styles`)
- All CSS files including:
  - global.css (shared styles)
  - dashboard.css (dashboard specific)
  - games.css (games page)
  - news.css (news feed)
  - snake.css (snake game)
  - contact.css (contact page)
  - login.css (authentication pages)

### Scripts (`/src/scripts`)
- All JavaScript files including:
  - main.js (entry point)
  - login.js (authentication)
  - sign.js (signup)
  - dashboard.js (dashboard logic)
  - news.js (news loading)
  - snake.js (game logic)

### Assets (`/src/assets/images`)
- All image files:
  - snake.png
  - Other game assets

## Cross-File References

When referencing files between directories, use relative paths:

```html
<!-- From /src/pages/index.html to /src/styles/global.css -->
<link rel="stylesheet" href="../styles/global.css">

<!-- From /src/pages/games.html to /src/assets/images/snake.png -->
<img src="../assets/images/snake.png" alt="snake game">

<!-- From /src/pages/index.html to /src/scripts/main.js -->
<script src="../scripts/main.js"></script>
```
