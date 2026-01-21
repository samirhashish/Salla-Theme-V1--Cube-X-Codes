# Contributing to Vitrine Furniture Theme

Thank you for your interest in contributing to the Vitrine Furniture Theme! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions. We are committed to providing a welcoming and inspiring community.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:

1. **Clear title** describing the bug
2. **Detailed description** of the issue
3. **Steps to reproduce** the problem
4. **Expected behavior** vs actual behavior
5. **Screenshots or videos** if applicable
6. **Browser and OS** information
7. **Theme version** number

**Example:**
```
Title: Cart drawer closes unexpectedly on mobile

Description: When adding items to cart on mobile devices, the cart drawer 
closes after 2-3 seconds instead of staying open.

Steps to reproduce:
1. Open theme on mobile device
2. Click "Add to Cart" button
3. Cart drawer opens
4. Wait 2-3 seconds
5. Drawer closes automatically

Expected: Drawer should remain open until user closes it
Actual: Drawer closes automatically

Browser: Chrome 120 on iPhone 14
OS: iOS 17.2
Theme version: 1.0.0
```

### Suggesting Features

To suggest a new feature:

1. Check existing issues to avoid duplicates
2. Create an issue with:
   - **Clear title** describing the feature
   - **Detailed description** of what you want
   - **Use cases** and benefits
   - **Mockups or examples** if applicable

**Example:**
```
Title: Add product comparison feature

Description: Allow customers to compare up to 3 products side-by-side.

Use cases:
- Compare furniture dimensions
- Compare prices across variants
- Compare features and specifications

Benefits:
- Improved user experience
- Higher conversion rates
- Reduced cart abandonment
```

### Submitting Code Changes

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/salla-vitrine-theme.git
   cd salla-vitrine-theme
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the code style guidelines
   - Write clear, descriptive commit messages
   - Test your changes thoroughly

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template
   - Submit for review

## Code Style Guidelines

### JavaScript

- Use ES6+ syntax
- Use meaningful variable names
- Add comments for complex logic
- Use semicolons
- Use 2-space indentation

**Example:**
```javascript
// Good
class CartManager {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem(product, quantity) {
    // Add item to cart
    this.items.push({ product, quantity });
    this.calculateTotal();
  }
}

// Avoid
class cart{
  constructor(){
    this.i=[]
  }
  add(p,q){
    this.i.push({p,q})
  }
}
```

### SCSS/CSS

- Use CSS variables for colors and spacing
- Use meaningful class names
- Use BEM naming convention
- Use 2-space indentation
- Group related styles together

**Example:**
```scss
// Good
.product-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);

  &__title {
    font-weight: 600;
    margin-bottom: var(--spacing-md);
  }

  &:hover {
    box-shadow: var(--shadow-lg);
  }
}

// Avoid
.product-card {
  background: white;
  border-radius: 12px;
}
.product-card .title {
  font-weight: 600;
}
.product-card:hover {
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}
```

### Twig Templates

- Use semantic HTML
- Add comments for complex logic
- Use meaningful variable names
- Follow Salla conventions

**Example:**
```twig
{# Good #}
<div class="product-card">
  <img src="{{ product.image.url }}" alt="{{ product.name }}">
  <h3>{{ product.name }}</h3>
  <p class="price">{{ product.price | currency }}</p>
</div>

{# Avoid #}
<div class="pc">
  <img src="{{ p.img }}">
  <h3>{{ p.n }}</h3>
  <p>{{ p.pr }}</p>
</div>
```

## Testing

Before submitting a PR:

1. **Test on multiple browsers**
   - Chrome
   - Firefox
   - Safari
   - Edge

2. **Test on multiple devices**
   - Desktop
   - Tablet
   - Mobile

3. **Test functionality**
   - Product pages
   - Cart operations
   - Checkout flow
   - Search
   - Navigation

4. **Check for console errors**
   - Open browser DevTools (F12)
   - Check Console tab for errors
   - Fix any errors found

5. **Verify responsive design**
   - Use Chrome DevTools device emulation
   - Test at different breakpoints
   - Ensure layout works on all sizes

## Documentation

When adding new features:

1. **Update README.md** with feature description
2. **Add code comments** explaining complex logic
3. **Update CHANGELOG.md** with version info
4. **Create/update relevant documentation files**

**Example:**
```markdown
## New Feature: Product Comparison

Users can now compare up to 3 products side-by-side:

1. Navigate to any product page
2. Click "Compare" button
3. Select products to compare
4. View comparison table

### Implementation Details

- New component: `product-comparison.twig`
- New styles: `assets/css/comparison.scss`
- New script: `assets/js/comparison.js`
```

## Commit Message Guidelines

Write clear, descriptive commit messages:

```
Type: Brief description

Longer explanation of changes if needed.

- Bullet point for each change
- Another change
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Test additions/changes

**Examples:**
```
feat: Add product comparison feature

- Create product comparison component
- Add comparison styles
- Add comparison logic
- Update documentation

fix: Fix cart drawer closing on mobile

- Prevent auto-close on touch devices
- Add proper event handling
- Test on multiple devices

docs: Update installation guide

- Add troubleshooting section
- Update prerequisites
- Add more examples
```

## Pull Request Process

1. **Update your branch** with latest main
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Resolve conflicts** if any
   ```bash
   # Fix conflicts in files
   git add .
   git rebase --continue
   ```

3. **Push your changes**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Fill in PR template**
   - Describe what you changed
   - Explain why you made changes
   - Link related issues
   - Add screenshots if applicable

5. **Address review feedback**
   - Make requested changes
   - Commit with descriptive messages
   - Push changes

6. **Wait for approval**
   - At least one maintainer approval required
   - All checks must pass
   - No conflicts with main branch

## Performance Considerations

When contributing:

1. **Minimize bundle size**
   - Avoid unnecessary dependencies
   - Use tree-shaking where possible
   - Lazy-load heavy components

2. **Optimize images**
   - Use appropriate formats (WebP, JPEG, PNG)
   - Compress images
   - Use responsive images

3. **Optimize CSS**
   - Use CSS variables
   - Avoid unnecessary specificity
   - Remove unused styles

4. **Optimize JavaScript**
   - Use efficient algorithms
   - Avoid memory leaks
   - Use debouncing/throttling where needed

## Accessibility

Ensure contributions are accessible:

1. **Semantic HTML**
   - Use proper heading hierarchy
   - Use semantic elements (nav, main, section, etc.)
   - Use proper form labels

2. **ARIA Labels**
   - Add aria-labels to interactive elements
   - Use aria-hidden for decorative elements
   - Use aria-live for dynamic content

3. **Keyboard Navigation**
   - All interactive elements must be keyboard accessible
   - Use proper tab order
   - Provide keyboard shortcuts

4. **Color Contrast**
   - Ensure text contrast ratio ≥ 4.5:1
   - Don't rely on color alone
   - Test with color blindness simulator

## Review Process

1. **Automated checks**
   - ESLint validation
   - Build verification
   - Test suite execution

2. **Manual review**
   - Code quality assessment
   - Performance impact review
   - UX/Design review

3. **Maintainer approval**
   - At least one approval required
   - Feedback provided if changes needed
   - Merged once approved

## Recognition

Contributors will be recognized in:

- CONTRIBUTORS.md file
- Release notes
- GitHub contributors page

## Questions?

- Check existing issues and discussions
- Review documentation
- Create a new discussion for questions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to make Vitrine Furniture Theme better! 🎉
