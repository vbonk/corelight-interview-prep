# Corelight Interview Preparation Website

A comprehensive, interactive website containing all the research and preparation materials for a Senior Sales Engineer interview at Corelight. Built with React, Vite, and modern web technologies.

## 🌐 Live Demo

The website is currently deployed at: [https://snywfinq.manus.space](https://snywfinq.manus.space)

## 📋 Overview

This website contains extensive research and preparation materials including:

- **Executive Summary** - Key company highlights, metrics, and interview strategy
- **Company Research** - 25+ year history, leadership, funding, and culture
- **Technical Knowledge Base** - Architecture, components, deployment, and integrations
- **Competitive Analysis** - Detailed comparison with major NDR competitors
- **Case Studies** - 5 detailed customer success stories with quantifiable results
- **Customer Base** - Known customers, market segments, and US Central region focus
- **Strategic Q&A** - Comprehensive answers to strategic interview questions
- **Interview Guide** - Talking points, scenarios, questions, and success tips

## 🎯 Key Features

### 📊 **Enhanced Content Sections (8 Total)**

#### 1. **Executive Summary**
- Updated key metrics and competitive advantages
- Market positioning and growth projections
- Interview success strategy overview
- Customer success highlights

#### 2. **Company Research** 
- 25+ year company timeline and history
- Leadership team profiles and backgrounds
- Funding rounds and valuation details
- Company culture and values

#### 3. **Technical Knowledge Base**
- Core technology foundation (Zeek, Suricata, YARA)
- Four-layer architecture breakdown
- Deployment scenarios and options
- Integration ecosystem (50+ platforms)

#### 4. **Competitive Analysis**
- Detailed comparison with Darktrace, ExtraHop, Vectra AI
- Market positioning strategies
- Competitive advantages and differentiators
- Pricing and value proposition analysis

#### 5. **🆕 Case Studies**
- **Education First**: 95% reduction in incident response time
- **DoD Performance Study**: 30,000 CPS processing capability
- **Energy Company**: Critical incident resolution in minutes
- **Federal Agency**: 80% time reduction in DNS analysis
- **Grand Canyon Education**: Transparency over black-box solutions

#### 6. **🆕 Customer Base**
- **Known Customers**: GM Financial, UT Austin, Boston Children's Hospital, Riot Games
- **Market Segments**: Financial Services, Higher Education, Healthcare, Government, Energy, Technology
- **US Central Focus**: Confirmed customers and target prospects in your territory

#### 7. **🆕 Strategic Q&A**
- **Company Strategy**: Gartner recognition leverage, market expansion, open-source influence
- **Role-Specific**: Technical objections, threat intelligence, customer types
- **Team & Culture**: Collaboration, professional development, success metrics

#### 8. **Interview Guide**
- Technical talking points and value propositions
- Customer success scenarios with quantified results
- Questions to ask interviewers
- Success tips and strategies

### 🎨 **Professional Design Features**
- **Enhanced Navigation**: 8 organized sections with active state indicators
- **Tabbed Interfaces**: Better content organization within sections
- **Color-Coded Sections**: Visual hierarchy and easy navigation
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Professional Metrics Display**: Updated key stats and performance indicators
- **Interactive Elements**: Hover states, transitions, and micro-interactions

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
│   ├── App.jsx            # Main application component with all sections
│   ├── App.css            # Global styles and Tailwind config
│   ├── index.css          # Base styles
│   └── main.jsx           # Application entry point
├── dist/                  # Built files (generated)
├── package.json           # Dependencies and scripts
├── pnpm-lock.yaml        # Lock file
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── deploy.sh             # Automated deployment script
└── README.md             # This file
```

## 🎨 Enhanced Features

### Interactive Navigation
- **8-Section Navigation**: Comprehensive coverage of all interview topics
- **Active State Indicators**: Clear visual feedback for current section
- **Tabbed Content**: Organized sub-sections within each main area
- **Responsive Design**: Optimized for all device sizes

### Content Enhancements
- **Quantifiable Metrics**: Real customer success stories with measurable results
- **Strategic Responses**: Comprehensive answers to complex interview questions
- **Customer Intelligence**: Detailed customer base and market segment analysis
- **Competitive Positioning**: Evidence-based differentiation strategies

### Design Improvements
- **Professional UI**: Modern, clean design with gradient backgrounds
- **Enhanced Typography**: Improved readability and visual hierarchy
- **Color-Coded Sections**: Easy navigation and content organization
- **Interactive Elements**: Smooth transitions and hover effects
- **Mobile Optimization**: Touch-friendly navigation and responsive layouts

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

# Deploy to GitHub (automated script)
./deploy.sh
```

### Component Structure

The main content is structured in the `App.jsx` file with separate components for each section:

- `CompanyResearch()` - Company background and details
- `TechnicalKnowledge()` - Technical architecture and capabilities
- `CompetitiveAnalysis()` - Market analysis and positioning
- `CaseStudies()` - Customer success stories with quantifiable results
- `CustomerBase()` - Known customers and market segments
- `StrategicQA()` - Strategic interview questions and responses
- `InterviewGuide()` - Interview preparation materials

### Styling

The project uses Tailwind CSS with custom CSS variables defined in `App.css`. The design system includes:

- **Custom Color Palette**: Professional color scheme with CSS variables
- **Responsive Breakpoints**: Mobile-first design approach
- **Component-Specific Styling**: Modular and maintainable styles
- **Dark Mode Support**: Automatic theme switching

## 📊 Performance & Metrics

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size:** Optimized with Vite's tree-shaking (~300KB JS, ~98KB CSS)
- **Load Time:** Fast static file serving with CDN optimization
- **Mobile Optimized:** Responsive design with touch-friendly navigation
- **SEO Optimized:** Proper meta tags and semantic HTML structure

## 🎯 Interview Success Metrics

### **Quantifiable Customer Success Stories:**
- **95% improvement** in incident response time (Education First)
- **30,000 CPS** processing capability (DoD validation)
- **80% time reduction** in DNS analysis (Federal Agency)
- **Minutes vs. hours** for critical incident resolution (Energy Company)

### **Market Intelligence:**
- **$900M valuation** with Series E funding
- **98% customer recommendation** rate
- **2025 Gartner Magic Quadrant Leader** recognition
- **16.5% CAGR** market growth projection

### **Competitive Advantages:**
- **Open-source foundation** with 25+ years of development
- **Evidence-based approach** vs. black-box AI competitors
- **Enterprise-grade performance** with proven scalability
- **Comprehensive integration** ecosystem (50+ platforms)

## 🤝 Contributing

This is a personal interview preparation website, but feel free to use it as a template for your own interview prep materials.

## 📄 License

This project is for personal use. The research content is specific to Corelight interview preparation.

## 🎯 Interview Success Strategy

This website contains comprehensive research to help you succeed in your Corelight Senior Sales Engineer interview:

### **Technical Credibility**
- Deep understanding of NDR technology and architecture
- Performance metrics and scalability proof points
- Integration capabilities and deployment scenarios

### **Business Acumen**
- Quantified customer success stories and ROI metrics
- Market dynamics and growth projections
- Strategic positioning and competitive advantages

### **Customer Focus**
- Detailed customer base and market segment analysis
- US Central region territory intelligence
- Real-world use cases and success scenarios

### **Strategic Thinking**
- Comprehensive answers to strategic interview questions
- Company direction and market expansion insights
- Role-specific challenges and opportunities

Good luck with your interview! 🚀

---

**Built with ❤️ for interview success**
**Enhanced with strategic intelligence and customer insights**

