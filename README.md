# CozCastle - Handicraft Trading Website

A modern, professional trading website for handcrafted products built with React, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Brand Colors**: Uses the specified brand colors (F37E3A, 288EC2, 6EBD49, and black)
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Modern scroll animations and hover effects using Framer Motion
- **Multiple Pages**: Home, Products, About, and Contact sections
- **Interactive Components**: Product filters, contact forms, and navigation

## Brand Colors

- **Orange**: #F37E3A (Primary CTA buttons, accents)
- **Blue**: #288EC2 (Secondary buttons, icons)
- **Green**: #6EBD49 (Success states, nature-related content)
- **Black**: #000000 (Text, outlines)

## Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast development and build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Modern icon library

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Home page with hero section
│   ├── Products.jsx    # Products catalog page
│   ├── About.jsx       # About us page
│   └── Contact.jsx     # Contact page
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.js
├── utils/              # Utility functions
│   └── scrollAnimations.js
└── index.css          # Global styles and Tailwind imports
```

## Pages Overview

### Home Page
- Hero section with call-to-action
- Featured products showcase
- Company values and statistics
- Modern animations and parallax effects

### Products Page
- Product catalog with filtering
- Category-based navigation
- Grid and list view options
- Product cards with ratings and prices

### About Page
- Company story and mission
- Team member profiles
- Company timeline
- Core values presentation

### Contact Page
- Contact information
- Interactive contact form
- FAQ section
- Location map placeholder

## Customization

### Adding New Products
Edit the products array in `src/pages/Products.jsx` to add new products with images, prices, and details.

### Modifying Brand Colors
Update the brand colors in `tailwind.config.js` under the `extend.colors` section.

### Adding New Sections
Create new page components in the `pages/` directory and import them in `App.jsx`.

## Animation Features

- Smooth scroll animations on content reveal
- Hover effects on interactive elements
- Parallax effects on hero sections
- Page transition animations
- Loading and success state animations

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## License

This project is created for trading handicastle products and follows modern web development best practices.
