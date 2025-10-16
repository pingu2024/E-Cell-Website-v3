# E-Cell Website

🚀 **E-Cell Website** - A modern, responsive website for the Entrepreneurship Cell built with the latest cutting-edge technologies.

## 🎯 Tech Stack

This project showcases a comprehensive modern web development setup:

### Core Framework
- ⚡ **Next.js 15** - App Router with Turbopack for lightning-fast development
- 🔷 **TypeScript** - Full type safety throughout the application
- 🎨 **Tailwind CSS v4** - Latest version with enhanced performance and features

### UI & Styling
- 🎭 **Radix UI** - Unstyled, accessible components
- 🎨 **shadcn/ui** - Beautiful components built on Radix UI
- 🌙 **next-themes** - Perfect dark/light mode implementation
- 🎬 **Framer Motion** - Smooth animations and interactions
- ✨ **Lucide React** - Beautiful icons

### Form & Validation
- 📝 **React Hook Form** - Performant forms with easy validation
- ✅ **Zod** - TypeScript-first schema validation

### State Management & Data
- 🐻 **Zustand** - Small, fast, and scalable state management
- ⚡ **TanStack Query** - Powerful data synchronization for React
- 🔧 **React Query Devtools** - Enhanced debugging experience

### Development Tools
- 🔍 **ESLint** - Code linting and quality
- 💅 **Prettier** - Code formatting with import sorting
- 🐕 **Husky** - Git hooks for quality assurance
- 📦 **lint-staged** - Run linters on staged files

### Utility Libraries
- 🎯 **clsx** - Conditional className utility
- 🔄 **tailwind-merge** - Merge Tailwind classes intelligently
- 🎨 **class-variance-authority** - Component variants utility
- 🍞 **Sonner** - Beautiful toast notifications
- 📱 **Vaul** - Drawer component for mobile

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ecell-website

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint issues
npm run format     # Format code with Prettier
npm run type-check # TypeScript type checking
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js 13+ App Router
│   ├── globals.css     # Global styles with Tailwind
│   ├── layout.tsx      # Root layout with providers
│   └── page.tsx        # Homepage
├── components/         # Reusable components
│   ├── ui/            # shadcn/ui components
│   ├── layout/        # Layout components
│   ├── forms/         # Form components
│   └── animations/    # Animation components
├── lib/               # Utility functions
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── config/            # Configuration files
├── store/             # State management
└── constants/         # Application constants
```

## 🎨 Features

- ✅ **Fully Responsive** - Mobile-first design approach
- 🌙 **Dark/Light Mode** - System preference detection
- ⚡ **Performance Optimized** - Turbopack, image optimization
- 🔒 **Type Safe** - End-to-end TypeScript coverage
- 📱 **Progressive Web App** ready
- 🎯 **SEO Optimized** - Meta tags, structured data
- ♿ **Accessible** - WCAG compliant components
- 🔧 **Developer Experience** - Hot reload, error overlay, debugging tools

## 🚦 Code Quality

This project maintains high code quality standards:

- **ESLint** - Catches bugs and enforces code standards
- **Prettier** - Consistent code formatting
- **TypeScript** - Static type checking
- **Git Hooks** - Pre-commit quality checks
- **Import Sorting** - Organized import statements

## 📦 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ecell-website)

### Other Platforms

This project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Docker
- AWS
- Google Cloud Platform

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [shadcn](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

**Built with ❤️ by the E-Cell Team**
