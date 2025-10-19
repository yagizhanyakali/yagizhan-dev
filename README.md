# Portfolio Website

A modern, responsive portfolio website built with Vue.js 3, TypeScript, and Vite. Features a clean dark theme design with smooth animations and scroll effects.

## Features

- **Modern Design**: Clean, minimalist dark theme with professional aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle animations and scroll-triggered effects
- **TypeScript**: Full TypeScript support for better development experience
- **Vue 3 Composition API**: Modern Vue.js with Composition API
- **Intersection Observer**: Scroll-based animations using Intersection Observer API
- **Accessibility**: Semantic HTML and proper ARIA attributes

## Sections

- **Hero Section**: Profile picture, name, and title with animated entrance
- **About Section**: Personal description and professional summary
- **Experience Section**: Work history with detailed responsibilities
- **Projects Section**: Portfolio projects with hover effects and links

## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Vue Router** - Client-side routing
- **Pinia** - State management
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Vue components
│   ├── AppHeader.vue   # Navigation header
│   ├── HeroSection.vue # Hero/intro section
│   ├── AboutSection.vue # About section
│   ├── ExperienceSection.vue # Work experience
│   └── ProjectsSection.vue # Portfolio projects
├── composables/         # Vue composables
│   └── useIntersectionObserver.ts # Scroll animations
├── views/              # Page views
│   └── HomeView.vue    # Main page
├── assets/             # Static assets
│   ├── main.css        # Main styles
│   └── base.css        # Base styles and CSS variables
└── router/             # Vue Router configuration
    └── index.ts        # Router setup
```

## Customization

### Colors

The color scheme is defined in `src/assets/base.css` using CSS custom properties:

```css
:root {
  --color-background: #1A1D21;
  --color-background-soft: #22252A;
  --color-accent: #00D4FF;
  --color-heading: #ffffff;
  --color-text: #e0e0e0;
  /* ... more colors */
}
```

### Content

Update the content in each component:

- **Personal Info**: Edit `HeroSection.vue` for name and title
- **About Text**: Modify `AboutSection.vue`
- **Experience**: Update the `experiences` array in `ExperienceSection.vue`
- **Projects**: Modify the `projects` array in `ProjectsSection.vue`

### Profile Picture

Replace the profile picture URL in `HeroSection.vue`:

```vue
<img 
  src="your-image-url-here" 
  alt="Your Name"
  class="profile-img"
/>
```

## Performance Features

- **Code Splitting**: Automatic code splitting with Vue Router
- **Lazy Loading**: Components are lazy-loaded when needed
- **Optimized Images**: Responsive images with proper sizing
- **CSS Variables**: Efficient theming with CSS custom properties
- **Intersection Observer**: Efficient scroll-based animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Contact

For questions or suggestions, please open an issue on GitHub.