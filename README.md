# AppStore

Super fast and safe downloading platform. One-click to install thousands of verified apps and games on your device!

## 🚀 Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the main branch.

### Setup Instructions

1. **Enable GitHub Pages in your repository**:
   - Go to Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **GitHub Actions will automatically**:
   - Build your project
   - Deploy to GitHub Pages
   - Your site will be available at: `https://appstotre.github.io`

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server (Full-stack mode)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for deployment
├── client/                      # Frontend application
│   ├── public/                  # Static assets
│   │   └── 404.html            # SPA redirect for GitHub Pages
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── layout/         # Header, Footer
│   │   │   └── ui/             # shadcn/ui components
│   │   ├── pages/              # Page components (Home, Games, Apps, etc.)
│   │   ├── lib/                # Utilities & queryClient
│   │   └── App.tsx             # Main app with routing
│   └── index.html              # Entry HTML file
├── server/                      # Backend (for local dev only)
│   ├── index.ts                # Express server
│   ├── vite.ts                 # Vite dev server integration
│   ├── routes.ts               # API routes
│   └── storage.ts              # In-memory storage
├── shared/                      # Shared types/schema
└── vite.config.ts              # Vite configuration
```

## 🛠️ Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Wouter** - Lightweight client-side routing
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful UI components
- **Express** - Backend server (dev only)
- **TanStack Query** - Data fetching & caching
- **GitHub Pages** - Static hosting

## 🧭 Available Pages

All navigation routes are functional:

- **/** - Home page with featured apps
- **/games** - Browse top games
- **/apps** - Browse top apps
- **/categories** - Browse by category
- **/top-charts** - Top charts page
- **/about** - About page
- **/contact** - Contact page
- **/blog** - Blog page
- **/careers** - Careers page
- **/help-center** - Help center
- **/safety-center** - Safety center
- **/community-guidelines** - Community guidelines
- **/terms-of-service** - Terms of service

## 📝 Notes

- The project uses **wouter** for client-side routing (lighter than react-router)
- GitHub Pages SPA redirect is configured for proper routing on static hosting
- Development server runs on port 5000
- The backend (Express) is only used for local development
- Production build creates static files in `dist/public/`

## 🔧 Build Configuration

The project uses a full-stack architecture for development but builds to static files for GitHub Pages:

- **Development**: Express server with Vite middleware
- **Production**: Static HTML/CSS/JS files served by GitHub Pages
