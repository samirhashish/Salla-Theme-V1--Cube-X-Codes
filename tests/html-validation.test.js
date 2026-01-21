/**
 * ============================================================================
 * HTML & Template Validation Tests
 * ============================================================================
 * 
 * Tests cover:
 * - Twig template syntax
 * - HTML structure
 * - Semantic HTML
 * - Meta tags
 */

const fs = require('fs');
const path = require('path');

class HTMLValidator {
  constructor() {
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
  }

  test(name, fn) {
    this.tests.push({ name, fn });
  }

  assert(condition, message) {
    if (!condition) {
      throw new Error(`❌ ${message}`);
    }
  }

  async run() {
    console.log('\n🧪 Running HTML Validation Tests...\n');
    
    for (const test of this.tests) {
      try {
        await test.fn();
        this.passed++;
        console.log(`✅ ${test.name}`);
      } catch (error) {
        this.failed++;
        console.log(`❌ ${test.name}`);
        console.log(`   ${error.message}`);
      }
    }

    this.printSummary();
  }

  printSummary() {
    const total = this.passed + this.failed;
    const percentage = total > 0 ? ((this.passed / total) * 100).toFixed(2) : 0;
    
    console.log('\n' + '='.repeat(50));
    console.log('📊 HTML Validation Results');
    console.log('='.repeat(50));
    console.log(`✅ Passed:  ${this.passed}`);
    console.log(`❌ Failed:  ${this.failed}`);
    console.log(`⏭️  Total:   ${total}`);
    console.log(`📈 Success Rate: ${percentage}%`);
    console.log('='.repeat(50) + '\n');

    return this.failed === 0;
  }

  readFile(filePath) {
    try {
      return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
      throw new Error(`Could not read file: ${filePath}`);
    }
  }

  fileExists(filePath) {
    return fs.existsSync(filePath);
  }
}

const validator = new HTMLValidator();
const baseDir = path.join(__dirname, '..');

// ============================================================================
// Template File Existence Tests
// ============================================================================

validator.test('Main layout template should exist', () => {
  const filePath = path.join(baseDir, 'views/layouts/app.twig');
  validator.assert(validator.fileExists(filePath), 'app.twig should exist');
});

validator.test('Product page template should exist', () => {
  const filePath = path.join(baseDir, 'views/pages/product.twig');
  validator.assert(validator.fileExists(filePath), 'product.twig should exist');
});

validator.test('Cart page template should exist', () => {
  const filePath = path.join(baseDir, 'views/pages/cart.twig');
  validator.assert(validator.fileExists(filePath), 'cart.twig should exist');
});

validator.test('Header component should exist', () => {
  const filePath = path.join(baseDir, 'views/components/header.twig');
  validator.assert(validator.fileExists(filePath), 'header.twig should exist');
});

validator.test('Footer component should exist', () => {
  const filePath = path.join(baseDir, 'views/components/footer.twig');
  validator.assert(validator.fileExists(filePath), 'footer.twig should exist');
});

// ============================================================================
// Template Content Tests
// ============================================================================

validator.test('Product template should have product image', () => {
  const content = validator.readFile(path.join(baseDir, 'views/pages/product.twig'));
  validator.assert(content.includes('product.image'), 'Should reference product image');
});

validator.test('Product template should have price display', () => {
  const content = validator.readFile(path.join(baseDir, 'views/pages/product.twig'));
  validator.assert(content.includes('price'), 'Should display price');
});

validator.test('Product template should have add to cart button', () => {
  const content = validator.readFile(path.join(baseDir, 'views/pages/product.twig'));
  validator.assert(content.includes('addToCart') || content.includes('Add to Cart'), 'Should have add to cart');
});

validator.test('Cart template should display items', () => {
  const content = validator.readFile(path.join(baseDir, 'views/pages/cart.twig'));
  validator.assert(content.includes('cart.items'), 'Should display cart items');
});

validator.test('Cart template should have checkout button', () => {
  const content = validator.readFile(path.join(baseDir, 'views/pages/cart.twig'));
  validator.assert(content.includes('checkout') || content.includes('Checkout'), 'Should have checkout button');
});

validator.test('Header should have logo', () => {
  const content = validator.readFile(path.join(baseDir, 'views/components/header.twig'));
  validator.assert(content.includes('logo') || content.includes('store.name'), 'Should have logo');
});

validator.test('Header should have search', () => {
  const content = validator.readFile(path.join(baseDir, 'views/components/header.twig'));
  validator.assert(content.includes('search'), 'Should have search functionality');
});

validator.test('Header should have cart icon', () => {
  const content = validator.readFile(path.join(baseDir, 'views/components/header.twig'));
  validator.assert(content.includes('cart'), 'Should have cart icon');
});

validator.test('Footer should have social links', () => {
  const content = validator.readFile(path.join(baseDir, 'views/components/footer.twig'));
  validator.assert(content.includes('social'), 'Should have social links');
});

validator.test('Footer should have newsletter', () => {
  const content = validator.readFile(path.join(baseDir, 'views/components/footer.twig'));
  validator.assert(content.includes('newsletter'), 'Should have newsletter');
});

// ============================================================================
// Twig Syntax Tests
// ============================================================================

validator.test('Templates should use proper Twig syntax', () => {
  const content = validator.readFile(path.join(baseDir, 'views/pages/product.twig'));
  validator.assert(content.includes('{%') || content.includes('{{'), 'Should use Twig syntax');
});

validator.test('Templates should have proper extends', () => {
  const content = validator.readFile(path.join(baseDir, 'views/pages/product.twig'));
  validator.assert(content.includes('extends'), 'Should extend layout');
});

validator.test('Templates should have proper blocks', () => {
  const content = validator.readFile(path.join(baseDir, 'views/pages/product.twig'));
  validator.assert(content.includes('block'), 'Should use blocks');
});

validator.test('Templates should have proper includes', () => {
  const content = validator.readFile(path.join(baseDir, 'views/layouts/app.twig'));
  validator.assert(content.includes('include'), 'Should include components');
});

// ============================================================================
// CSS Tests
// ============================================================================

validator.test('Main stylesheet should exist', () => {
  const filePath = path.join(baseDir, 'assets/css/main.scss');
  validator.assert(validator.fileExists(filePath), 'main.scss should exist');
});

validator.test('Stylesheet should have CSS variables', () => {
  const content = validator.readFile(path.join(baseDir, 'assets/css/main.scss'));
  validator.assert(content.includes('--color') || content.includes('$color'), 'Should have color variables');
});

validator.test('Stylesheet should have responsive breakpoints', () => {
  const content = validator.readFile(path.join(baseDir, 'assets/css/main.scss'));
  validator.assert(content.includes('@media'), 'Should have media queries');
});

validator.test('Stylesheet should have button styles', () => {
  const content = validator.readFile(path.join(baseDir, 'assets/css/main.scss'));
  validator.assert(content.includes('.btn'), 'Should have button styles');
});

// ============================================================================
// JavaScript Tests
// ============================================================================

validator.test('Main JavaScript file should exist', () => {
  const filePath = path.join(baseDir, 'assets/js/main.js');
  validator.assert(validator.fileExists(filePath), 'main.js should exist');
});

validator.test('JavaScript should have CartManager class', () => {
  const content = validator.readFile(path.join(baseDir, 'assets/js/main.js'));
  validator.assert(content.includes('CartManager'), 'Should have CartManager class');
});

validator.test('JavaScript should have event listeners', () => {
  const content = validator.readFile(path.join(baseDir, 'assets/js/main.js'));
  validator.assert(content.includes('addEventListener'), 'Should have event listeners');
});

validator.test('JavaScript should have API calls', () => {
  const content = validator.readFile(path.join(baseDir, 'assets/js/main.js'));
  validator.assert(content.includes('fetch'), 'Should have API calls');
});

// ============================================================================
// Configuration Tests
// ============================================================================

validator.test('twilight.json should exist', () => {
  const filePath = path.join(baseDir, 'twilight.json');
  validator.assert(validator.fileExists(filePath), 'twilight.json should exist');
});

validator.test('package.json should exist', () => {
  const filePath = path.join(baseDir, 'package.json');
  validator.assert(validator.fileExists(filePath), 'package.json should exist');
});

validator.test('twilight.json should have valid structure', () => {
  const content = validator.readFile(path.join(baseDir, 'twilight.json'));
  try {
    JSON.parse(content);
  } catch (e) {
    throw new Error('twilight.json is not valid JSON');
  }
});

validator.test('package.json should have valid structure', () => {
  const content = validator.readFile(path.join(baseDir, 'package.json'));
  try {
    JSON.parse(content);
  } catch (e) {
    throw new Error('package.json is not valid JSON');
  }
});

// ============================================================================
// Documentation Tests
// ============================================================================

validator.test('README.md should exist', () => {
  const filePath = path.join(baseDir, 'README.md');
  validator.assert(validator.fileExists(filePath), 'README.md should exist');
});

validator.test('INSTALLATION.md should exist', () => {
  const filePath = path.join(baseDir, 'INSTALLATION.md');
  validator.assert(validator.fileExists(filePath), 'INSTALLATION.md should exist');
});

validator.test('CONTRIBUTING.md should exist', () => {
  const filePath = path.join(baseDir, 'CONTRIBUTING.md');
  validator.assert(validator.fileExists(filePath), 'CONTRIBUTING.md should exist');
});

validator.test('LICENSE should exist', () => {
  const filePath = path.join(baseDir, 'LICENSE');
  validator.assert(validator.fileExists(filePath), 'LICENSE should exist');
});

validator.test('README should have installation instructions', () => {
  const content = validator.readFile(path.join(baseDir, 'README.md'));
  validator.assert(content.includes('install') || content.includes('Installation'), 'Should have installation instructions');
});

// ============================================================================
// Component Tests
// ============================================================================

validator.test('Product card component should exist', () => {
  const filePath = path.join(baseDir, 'views/components/product-card.twig');
  validator.assert(validator.fileExists(filePath), 'product-card.twig should exist');
});

validator.test('Cart drawer component should exist', () => {
  const filePath = path.join(baseDir, 'views/components/cart-drawer.twig');
  validator.assert(validator.fileExists(filePath), 'cart-drawer.twig should exist');
});

validator.test('Newsletter component should exist', () => {
  const filePath = path.join(baseDir, 'views/components/newsletter.twig');
  validator.assert(validator.fileExists(filePath), 'newsletter.twig should exist');
});

validator.test('Promo banner component should exist', () => {
  const filePath = path.join(baseDir, 'views/components/promo-banner.twig');
  validator.assert(validator.fileExists(filePath), 'promo-banner.twig should exist');
});

// ============================================================================
// Run Tests
// ============================================================================

(async () => {
  const success = await validator.run();
  process.exit(success ? 0 : 1);
})();
