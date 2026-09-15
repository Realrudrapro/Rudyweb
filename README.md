# RUDYweb

**Bringing the web closer together with games, news, and content from across the internet.**

## Overview

RUDYweb is a dynamic web platform featuring:
- 🎮 Interactive games (Snake, Rock-Paper-Scissors, Tic-Tac-Toe)
- 📰 News aggregation and updates
- 👥 User profiles and dashboards
- 📱 Responsive design for all devices

## Project Structure

```
Rudyweb/
├── public/              # Static assets served directly
│   ├── index.html       # Homepage
│   ├── games.html       # Games hub
│   ├── news.html        # News page
│   ├── contact.html     # Contact/Report page
│   ├── dashboard.html   # User profile/dashboard
│   ├── snake.html       # Snake game
│   ├── rps.html         # Rock-Paper-Scissors game
│   ├── ttt.html         # Tic-Tac-Toe game
│   ├── smu.html         # Sign-up/Login page
│   ├── lmu.html         # Login utility
│   ├── passwordupdate.html
│   ├── ad-demo.html
│   └── snake.png        # Assets
├── src/
│   ├── css/             # Stylesheets
│   │   ├── style.css    # Global styles
│   │   ├── games.css    # Games styling
│   │   ├── news.css     # News styling
│   │   ├── contact.css  # Contact styling
│   │   ├── dashboard.css # Dashboard styling
│   │   └── snake.css    # Snake game styling
│   ├── js/              # JavaScript files
│   │   ├── script.js    # Main script
│   │   ├── news.js      # News functionality
│   │   ├── dashboard.js # Dashboard logic
│   │   ├── snake.js     # Snake game logic
│   │   ├── login.js     # Login handling
│   │   └── sign.js      # Sign-up handling
│   └── index.js         # Cloudflare Workers entry (if needed)
├── functions/           # Cloudflare Functions (if needed)
├── package.json         # Dependencies and scripts
├── wrangler.toml        # Cloudflare Pages configuration
├── _redirects           # URL redirects and routing
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Setup & Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:8788` to preview your site locally.

### Deployment

#### Option 1: Automatic Deployment (Recommended)
Connect your GitHub repository to Cloudflare Pages:
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select **Pages** → **Create a project**
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set build output directory: `public`
6. Deploy!

#### Option 2: Manual Deployment with Wrangler

```bash
# Deploy using Wrangler CLI
npm run deploy
```

## Configuration

### Cloudflare Pages Settings
- **Build command:** `npm run build`
- **Build output directory:** `public`
- **Node.js version:** 18.x

### Environment Variables
Add environment variables in Cloudflare Pages dashboard:
1. Go to your Pages project
2. Settings → Environment variables
3. Add any needed variables

## Features

### Static Site Hosting
- Automatic HTTPS
- Global CDN distribution
- Zero-downtime deployments
- Custom domain support

### Performance
- Optimized for fast loading
- Responsive design
- Efficient CSS and JavaScript

## Contributing

See [CONTRIBUTING.md](./contribute.md) for guidelines.

## Code of Conduct

Please review our [Code of Conduct](./contributeconduct.md).

## Security

For security concerns, see [SECURITY.md](./SECURITY.md).

## License

MIT License - See LICENSE file for details.

## Support

For issues or questions:
1. Check existing [GitHub Issues](https://github.com/rudyweb-team/Rudyweb/issues)
2. Create a new issue with detailed information
3. Use the [Contact/Report](./public/contact.html) page

---

**Built with ❤️ by RUDYweb Team**
