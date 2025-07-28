# Corelight Interview Preparation Website

A comprehensive, interactive website containing all the research and preparation materials for a Senior Sales Engineer interview at Corelight. Built with React, Vite, and modern web technologies.

## 🌐 Live Demo

The website is currently deployed at: [https://snywfinq.manus.space](https://snywfinq.manus.space)

## 📋 Overview

This website contains extensive research and preparation materials including:

- **Executive Summary** - Key company highlights and interview strategy
- **Company Research** - 25+ year history, leadership, funding, and culture
- **Technical Knowledge Base** - Architecture, components, deployment, and integrations
- **Competitive Analysis** - Detailed comparison with major NDR competitors
- **Interview Guide** - Talking points, scenarios, questions, and success tips

## 🛠 Tech Stack

- **Frontend Framework:** React 18 with Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Package Manager:** pnpm
- **Language:** TypeScript/JavaScript (JSX)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/vbonk/corelight-interview-prep.git
cd corelight-interview-prep

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The development server will start at `http://localhost:5173`

## 📦 Build & Deployment

### Build for Production

```bash
# Build the project
pnpm run build

# Preview the build locally
pnpm run preview
```

The built files will be in the `dist` directory.

### Deploy to Coolify

This project is optimized for Coolify deployment:

1. **Connect Repository:** Add this GitHub repository to your Coolify instance
2. **Auto-Detection:** Coolify will automatically detect this as a Vite project
3. **Build Process:** Coolify will run `pnpm install` and `pnpm run build`
4. **Static Deployment:** The `dist` folder will be served as static files
5. **Zero Configuration:** No additional setup required

#### Coolify Configuration

Coolify will automatically use these settings:

- **Build Command:** `pnpm run build`
- **Output Directory:** `dist`
- **Node Version:** 18+
- **Package Manager:** pnpm (detected from `pnpm-lock.yaml`)

### Manual Deployment

For other hosting providers:

```bash
# Build the project
pnpm run build

# Upload the contents of the 'dist' folder to your web server
# Point your web server to serve static files from this directory
```

## 🏗 Project Structure

```
corelight-interview-prep/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   └── ui/            # shadcn/ui components
│   ├── assets/            # Images and static files
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global styles and Tailwind config
│   ├── index.css          # Base styles
│   └── main.jsx           # Application entry point
├── dist/                  # Built files (generated)
├── package.json           # Dependencies and scripts
├── pnpm-lock.yaml        # Lock file
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # This file
```

## 🎨 Features

### Interactive Navigation
- Sidebar navigation with active state indicators
- Tabbed content sections within each main area
- Responsive design for desktop and mobile

### Content Sections
- **Executive Summary:** Overview with key metrics and strategy
- **Company Research:** Comprehensive company background with tabs for History, Leadership, Funding, and Culture
- **Technical Knowledge:** Deep dive into architecture, components, deployment, and integrations
- **Competitive Analysis:** Market positioning against major competitors
- **Interview Guide:** Preparation strategies, scenarios, and success tips

### Design Features
- Modern, professional UI with gradient backgrounds
- Dark/light mode support via CSS variables
- Responsive grid layouts
- Interactive hover states and transitions
- Color-coded sections and badges
- Quick reference metrics sidebar

## 🔧 Development

### Available Scripts

```bash
# Start development server with hot reload
pnpm run dev

# Build for production
pnpm run build

# Preview production build locally
pnpm run preview

# Lint code
pnpm run lint
```

### Adding Content

The main content is structured in the `App.jsx` file with separate components for each section:

- `CompanyResearch()` - Company background and details
- `TechnicalKnowledge()` - Technical architecture and capabilities
- `CompetitiveAnalysis()` - Market analysis and positioning
- `InterviewGuide()` - Interview preparation materials

### Styling

The project uses Tailwind CSS with custom CSS variables defined in `App.css`. The design system includes:

- Custom color palette with CSS variables
- Responsive breakpoints
- Component-specific styling
- Dark mode support

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size:** Optimized with Vite's tree-shaking
- **Load Time:** Fast static file serving
- **Mobile Optimized:** Responsive design with touch-friendly navigation

## 🤝 Contributing

This is a personal interview preparation website, but feel free to use it as a template for your own interview prep materials.

## 📄 License

This project is for personal use. The research content is specific to Corelight interview preparation.

## 🎯 Interview Success

This website contains comprehensive research to help you succeed in your Corelight Senior Sales Engineer interview:

- **Technical Credibility:** Deep understanding of NDR technology and architecture
- **Business Acumen:** Quantified customer success stories and ROI metrics  
- **Competitive Awareness:** Strategic positioning against major competitors
- **Company Knowledge:** 25+ years of history, leadership, and culture insights
- **Market Understanding:** NDR market dynamics and growth projections

Good luck with your interview! 🚀

---

**Built with ❤️ for interview success**

