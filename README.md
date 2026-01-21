# Vitrine Furniture Theme for Salla

A premium, CRO-optimized e-commerce theme for Salla platform, inspired by the design and user experience of Vitrine Furniture. This theme focuses on conversion rate optimization, intuitive UI/UX, and modern web standards.

## Overview

The Vitrine Furniture Theme is built using Salla's Twilight engine, featuring a comprehensive set of components and pages designed to maximize conversion rates while maintaining an elegant, professional aesthetic. The theme is particularly optimized for furniture and home decor e-commerce stores.

### Key Features

**Conversion Rate Optimization (CRO)**
- Sticky promotional banner with email capture for lead generation
- Prominent, high-contrast call-to-action buttons
- Trust badges and security indicators on product and cart pages
- Free shipping threshold indicator to encourage higher order values
- Exit-intent discount offers
- Simplified checkout flow

**Product Page**
- High-quality image gallery with zoom functionality
- Clear pricing display with discount calculations
- Product options (size, color, variants) with intuitive selectors
- Quantity selector with increment/decrement buttons
- Customer reviews and ratings section
- Related products carousel for cross-selling
- Trust badges (secure checkout, returns policy, free shipping)

**Shopping Cart**
- Full cart page with detailed item information
- Sticky order summary sidebar
- Coupon code input field
- Free shipping threshold indicator
- Cart item management (update quantity, remove items)
- Recommended products for empty cart state

**Cart Drawer (Mini Cart)**
- Quick access to cart without page navigation
- Real-time quantity updates
- Quick checkout button
- Overlay backdrop for focus
- Keyboard shortcuts (ESC to close)

**Header & Navigation**
- Sticky header with logo and branding
- Search functionality with autocomplete
- Mega menu with category navigation
- Quick access to account and wishlist
- Cart icon with item count badge

**Footer**
- Multiple sections (About, Quick Links, Customer Service, Legal)
- Social media links
- Newsletter subscription form
- Payment method icons
- Copyright information

## Project Structure

```
salla-vitrine-theme/
├── views/
│   ├── layouts/
│   │   └── app.twig              # Main layout template
│   ├── pages/
│   │   ├── product.twig          # Product detail page
│   │   ├── cart.twig             # Shopping cart page
│   │   └── checkout.twig         # Checkout page (template)
│   └── components/
│       ├── header.twig           # Header component
│       ├── footer.twig           # Footer component
│       ├── product-card.twig     # Product card component
│       ├── cart-drawer.twig      # Mini cart drawer
│       ├── promo-banner.twig     # Promotional banner
│       └── newsletter.twig       # Newsletter signup
├── assets/
│   ├── css/
│   │   └── main.scss             # Main stylesheet with CRO design system
│   ├── js/
│   │   └── main.js               # Main JavaScript with cart management
│   └── images/
│       └── (placeholder for images)
├── config/
│   └── (configuration files)
├── twilight.json                 # Theme configuration
├── package.json                  # Dependencies
├── webpack.config.js             # Webpack configuration (template)
├── README.md                      # This file
├── DESIGN_ANALYSIS.md            # Design analysis and CRO techniques
├── INSTALLATION.md               # Installation guide
└── CONTRIBUTING.md               # Contribution guidelines
```

## Installation

### Prerequisites

- Node.js 14+ and npm/yarn
- Salla CLI installed globally
- Salla Partner Account
- GitHub account

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/salla-vitrine-theme.git
   cd salla-vitrine-theme
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Salla CLI**
   ```bash
   salla login
   ```

4. **Preview the theme**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Development

### Local Development Workflow

The theme uses Webpack with Salla's Twilight Watcher plugin for hot module reloading during development.

```bash
# Start development server with live reload
npm run dev

# Watch files for changes
npm run watch

# Build production assets
npm run build

# Lint JavaScript
npm run lint
```

### File Organization

- **Twig Templates** (`views/`): All HTML templates using Twig template engine
- **Stylesheets** (`assets/css/`): SCSS files compiled to CSS
- **JavaScript** (`assets/js/`): ES6+ JavaScript with modular architecture
- **Configuration** (`twilight.json`): Theme metadata and settings

### CSS Architecture

The main stylesheet (`assets/css/main.scss`) is organized into logical sections:

1. **CSS Variables & Color System**: Design tokens for colors, spacing, typography
2. **Reset & Base Styles**: Normalize browser defaults
3. **Typography**: Heading and text styles
4. **Buttons**: CRO-optimized button components
5. **Container & Layout**: Grid system and layout utilities
6. **Product Card**: Reusable product display component
7. **Product Page**: Product detail page styles
8. **Cart Page**: Shopping cart styles
9. **Cart Drawer**: Mini cart styles
10. **Responsive Design**: Mobile-first breakpoints
11. **Utility Classes**: Helper classes
12. **Animations**: Keyframe animations

### JavaScript Architecture

The main JavaScript file (`assets/js/main.js`) includes:

- **Utility Functions**: Notifications, currency formatting, debouncing
- **CartManager**: Handles all cart operations (add, update, remove)
- **SearchManager**: Search functionality and autocomplete
- **ProductPage**: Product detail page interactions
- **CartPage**: Shopping cart page interactions

## CRO Techniques Implemented

### 1. Visual Hierarchy
- Large, prominent primary buttons (yellow) for main CTAs
- Clear price display with discount emphasis
- Trust badges positioned strategically

### 2. Urgency & Scarcity
- Discount percentages displayed prominently
- "Save X%" badges on products
- Limited-time offer indicators

### 3. Social Proof
- Customer reviews and ratings section
- Review count and average rating display
- Customer testimonials on homepage

### 4. Reduced Friction
- Quick add-to-cart from product cards
- One-click checkout option
- Simplified form fields
- Auto-focus on search input

### 5. Trust Building
- Security badges (Secure Checkout, 14-Day Returns, Free Shipping)
- Multiple payment method icons
- Clear return policy information
- SSL/HTTPS indicators

### 6. Incentivization
- Free shipping threshold indicator
- Coupon code input on cart page
- Newsletter subscription with discount offer
- Related products for upselling

### 7. Mobile Optimization
- Responsive design for all screen sizes
- Touch-friendly button sizes (minimum 44x44px)
- Optimized navigation for mobile
- Fast-loading images with lazy loading

### 8. Exit Intent
- Promotional banner with discount offer
- Newsletter signup modal
- Related products on empty cart state

## Customization

### Colors

Edit the CSS variables in `assets/css/main.scss`:

```scss
:root {
  --color-primary: #FFC107;        // Yellow
  --color-secondary: #1A237E;      // Navy Blue
  --color-accent: #FF5722;         // Orange
  // ... more colors
}
```

### Typography

Modify font families and sizes:

```scss
--font-primary: 'Poppins', sans-serif;
--font-secondary: 'Inter', sans-serif;
```

### Spacing

Adjust the spacing scale:

```scss
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
// ... more sizes
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

### Optimization Techniques

- **CSS**: SCSS compilation with minification
- **JavaScript**: ES6+ with tree-shaking
- **Images**: Lazy loading with IntersectionObserver
- **Fonts**: Google Fonts with preconnect
- **Caching**: Browser caching headers

### Performance Targets

- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Lighthouse Score: > 90

## Accessibility

The theme follows WCAG 2.1 guidelines:

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Skip-to-content link
- Alt text for images

## SEO

Built-in SEO features:

- Meta tags and structured data
- Open Graph tags for social sharing
- Sitemap generation
- Mobile-friendly design
- Fast page load times
- Clean URL structure

## API Integration

The theme integrates with Salla's Storefront APIs:

- Product catalog
- Cart management
- Order processing
- Customer accounts
- Search functionality
- Reviews and ratings

## Deployment

### Publishing to Salla Marketplace

1. Ensure all files are committed to GitHub
2. Update version in `package.json` and `twilight.json`
3. Create a release on GitHub
4. Submit theme to Salla Partners Portal
5. Follow review process guidelines

### GitHub Setup

1. Create a new GitHub repository
2. Push theme code:
   ```bash
   git remote add origin https://github.com/yourusername/salla-vitrine-theme.git
   git branch -M main
   git push -u origin main
   ```

## Testing

### Manual Testing Checklist

- [ ] Product page loads correctly
- [ ] Product images zoom properly
- [ ] Add to cart functionality works
- [ ] Cart drawer opens/closes smoothly
- [ ] Quantity updates work correctly
- [ ] Coupon code application works
- [ ] Checkout process completes
- [ ] Mobile responsive design works
- [ ] Search functionality works
- [ ] Newsletter signup works
- [ ] All links are functional
- [ ] Forms validate correctly

### Browser Testing

Test on multiple browsers and devices:
- Desktop (Chrome, Firefox, Safari, Edge)
- Tablet (iPad, Android tablets)
- Mobile (iPhone, Android phones)

## Troubleshooting

### Common Issues

**Cart not updating**
- Clear browser cache
- Check API endpoints are correct
- Verify CORS headers are set

**Images not loading**
- Check image URLs are correct
- Verify image paths in Twig templates
- Check lazy loading is working

**Styles not applying**
- Rebuild CSS: `npm run build`
- Clear browser cache
- Check CSS specificity

**JavaScript errors**
- Check browser console for errors
- Verify all dependencies are installed
- Check for conflicting scripts

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, issues, or questions:

- Create an issue on GitHub
- Email: support@example.com
- Visit: https://example.com/support

## Changelog

### Version 1.0.0 (Initial Release)

- Initial theme release
- Product page with image gallery
- Shopping cart with drawer
- CRO-optimized design
- Mobile responsive layout
- Trust badges and security indicators
- Newsletter signup
- Social media integration

## Credits

- **Design Inspiration**: Vitrine Furniture (https://vitrine-furniture.com/)
- **Platform**: Salla (https://salla.dev/)
- **Built with**: Twig, SCSS, JavaScript, Webpack

## Roadmap

Future enhancements:

- [ ] Product comparison feature
- [ ] Advanced filtering and sorting
- [ ] Wishlist functionality
- [ ] Product reviews submission
- [ ] Live chat support
- [ ] Abandoned cart recovery
- [ ] Personalized recommendations
- [ ] A/B testing framework

---

**Last Updated**: January 2026

For the latest updates and documentation, visit the [GitHub repository](https://github.com/yourusername/salla-vitrine-theme).
