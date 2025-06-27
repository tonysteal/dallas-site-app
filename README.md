# Dallas Site App

## [🌐 Live Site](https://dallas-site-app.vercel.app)

## Modern React Landing Page

## About

A modern single-page React application featuring smooth scrolling navigation and responsive design.

**Features:**

- ⚛️ React 18 with modern hooks
- 📱 Fully responsive design
- 📧 Contact form integration
- 🚀 Deployed on Vercel
- 📝 Dynamic content management
- 🎨 Clean, professional styling
- 🔧 ESLint + Prettier for code quality

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) or npm

### Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn start
```

### Content Management

- **Content**: Edit `src/data/data.json` to update site content
- **Images**: Add images to `public/img/`
- **Styling**: Modify CSS files in `public/css/`
- **Contact Form**: Configure EmailJS in `src/components/contact.jsx`

## Deployment

**Production**: Automatically deployed to Vercel on every push to main branch.

**Preview Deployments**: Feature branches are automatically deployed to preview URLs following the format:
`dallas-site-app-[branch]-tony-yorks-projects.vercel.app`

For example:

- `dallas-site-app-dev-tony-yorks-projects.vercel.app`
- `dallas-site-app-feature-contact-tony-yorks-projects.vercel.app`

## Scripts

```bash
yarn lint
yarn lint:fix
yarn format
yarn format:check
yarn spell-check  # Check spelling
yarn start    # Development server
yarn build    # Production build
yarn test     # Run tests
yarn test:coverage
```

## Tech Stack

- React 18
- React DOM 18
- EmailJS Browser
- Bootstrap 3
- Smooth Scroll

## Contributing

Pull requests are welcome! Please use the provided PR template.
