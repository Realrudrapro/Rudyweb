# Rudyweb

A modern web application featuring news, games, and user dashboard management.

## Project Structure

```
rudyweb/
├── src/
│   ├── pages/              # HTML pages
│   ├── styles/             # CSS stylesheets
│   ├── scripts/            # JavaScript modules
│   └── assets/
│       └── images/         # Images and media
├── docs/                   # Documentation
├── public/                 # Static files
├── wrangler.toml           # Cloudflare Pages config
└── README.md               # This file
```

## Pages

- **index.html** - Home page
- **dashboard.html** - User dashboard
- **news.html** - News feed
- **snake.html** - Snake game
- **lmu.html** - Login page
- **smu.html** - Sign up page
- **contact.html** - Contact/Report page

## Features

- User authentication with Firebase
- News feed integration
- Snake game
- Responsive navigation menu
- Password management
- Professional folder organization

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

## Documentation

See the `/docs` folder for detailed documentation:
- `ARCHITECTURE.md` - System architecture overview
- `PROJECT_STRUCTURE.md` - Folder organization guide
