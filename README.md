# Rudyweb

A modern web application featuring news, games, and user dashboard management.

## Project Structure

```
rudyweb/
├── src/
│   ├── pages/          # HTML pages
│   ├── styles/         # CSS stylesheets
│   ├── scripts/        # JavaScript modules
│   └── index.js        # Entry point
├── wrangler.toml       # Cloudflare Pages config
└── README.md           # This file
```

## Pages

- **index.html** - Home page
- **dashboard.html** - User dashboard
- **news.html** - News feed
- **snake.html** - Snake game
- **lmu.html** - Login page
- **signup.html** - Sign up page
- **passwordupdate.html** - Password reset confirmation

## Features

- User authentication with Firebase
- News feed integration
- Snake game
- Responsive navigation menu
- Password management

## Development

To develop locally:

```bash
npm install -g wrangler
wrangler pages dev
```

## Deployment

Deploy to Cloudflare Pages:

```bash
wrangler pages deploy src/
```

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Firebase Authentication
- Cloudflare Pages
