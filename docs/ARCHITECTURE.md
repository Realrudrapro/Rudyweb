# Rudyweb Architecture

## Directory Structure

### `/src`
Main application source code

#### `/src/pages`
HTML page templates for all routes
- index.html - Home page
- dashboard.html - User dashboard
- news.html - News feed
- snake.html - Snake game
- lmu.html - Login page
- smu.html - Sign up page
- contact.html - Contact/Report page

#### `/src/styles`
CSS stylesheets organized by feature
- global.css - Global styles
- dashboard.css - Dashboard page styles
- games.css - Games page styles
- news.css - News page styles
- snake.css - Snake game styles
- contact.css - Contact page styles

#### `/src/scripts`
JavaScript modules organized by feature
- main.js - Global utilities
- login.js - Authentication logic
- sign.js - Sign up logic
- dashboard.js - Dashboard functionality
- news.js - News feed loading
- snake.js - Snake game implementation

#### `/src/assets`
Static assets
- `/images` - Images, icons, game assets

### `/docs`
Project documentation

### `/public`
Static files served directly

## Build & Deployment

The project uses Cloudflare Pages for deployment via `wrangler.toml` configuration.
