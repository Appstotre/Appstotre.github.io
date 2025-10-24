# AppStore - App Download Platform

## Overview
AppStore adalah platform download aplikasi dan game yang dibangun dengan React, TypeScript, dan Vite. Project ini telah berhasil dimigrasikan dari Lovable ke Replit environment menggunakan full-stack template.

## Recent Changes (October 24, 2025)
- ✅ Berhasil dimigrasikan dari Lovable ke Replit full-stack template
- ✅ Mengkonversi dari React Router DOM ke Wouter
- ✅ Memperbaiki kompatibilitas Express routing (downgrade dari Express 5 ke Express 4)
- ✅ Menghapus dependency react-router-dom
- ✅ Semua navigasi dan halaman berfungsi dengan sempurna

## Project Architecture

### Frontend (Client-side)
- **Framework**: React 18 dengan TypeScript
- **Routing**: Wouter (lightweight routing library)
- **UI Components**: Shadcn/ui + Radix UI
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **Build Tool**: Vite

### Backend (Server-side)
- **Runtime**: Node.js dengan Express 4
- **Language**: TypeScript
- **Dev Server**: tsx watch
- **Storage**: In-memory storage (MemStorage)

### Directory Structure
```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utilities and helpers
│   │   └── hooks/       # Custom React hooks
│   ├── public/          # Static assets
│   └── index.html       # HTML template
├── server/              # Backend Express server
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # Storage interface
│   └── vite.ts          # Vite integration
└── shared/              # Shared types and schemas
    └── schema.ts        # Data models
```

## Available Pages
1. **Home** (`/`) - Landing page dengan featured apps dan games
2. **Games** (`/games`) - Daftar game populer dengan kategori
3. **Apps** (`/apps`) - Daftar aplikasi dengan kategori
4. **Categories** (`/categories`) - Browse by category
5. **Top Charts** (`/top-charts`) - Chart populer
6. **About** (`/about`) - Tentang platform
7. **Contact** (`/contact`) - Halaman kontak
8. **Blog** (`/blog`) - Blog posts
9. **Careers** (`/careers`) - Lowongan kerja
10. **Help Center** (`/help-center`) - Pusat bantuan
11. **Safety Center** (`/safety-center`) - Informasi keamanan
12. **Community Guidelines** (`/community-guidelines`) - Panduan komunitas
13. **Terms of Service** (`/terms-of-service`) - Syarat dan ketentuan

## Development

### Running the Project
```bash
npm run dev
```
Server akan berjalan di `http://localhost:5000`

### Building for Production
```bash
npm run build
```

### Starting Production Server
```bash
npm start
```

## Key Features
- ✨ Navigasi yang smooth dengan Wouter
- 🎨 Modern UI dengan Shadcn/ui components
- 🚀 Fast download speeds showcase
- 🔒 Security features display
- 📱 Responsive design
- 🎮 Game dan app listings
- 📊 Category browsing

## Technologies
- React 18.3.1
- TypeScript 5.8.3
- Vite 5.4.19
- Express 4.x
- Wouter 3.7.1
- TanStack Query 5.83.0
- Tailwind CSS 3.4.17
- Shadcn/ui components
- Radix UI primitives

## User Preferences
- Template menggunakan full-stack JavaScript/TypeScript
- Routing menggunakan Wouter (bukan React Router)
- Styling dengan Tailwind CSS dan Shadcn/ui
- Data persistence dengan in-memory storage
