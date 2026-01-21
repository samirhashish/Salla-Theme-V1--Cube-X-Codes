/**
 * ============================================================================
 * Vitrine Furniture Theme - Main JavaScript
 * CRO-Optimized Interactions
 * ============================================================================
 */

// ============================================================================
// 1. Utility Functions
// ============================================================================

/**
 * Show notification toast
 */
function showNotification(message, type = 'info', duration = 3000) {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${getNotificationColor(type)};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    animation: slideInRight 0.3s ease-in-out;
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), duration);
}

function getNotificationColor(type) {
  const colors = {
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
    info: '#2196F3'
  };
  return colors[type] || colors.info;
}

/**
 * Format currency
 */
function formatCurrency(value, currency = 'EGP') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(value);
}

/**
 * Debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ============================================================================
// 2. Cart Management
// ============================================================================

class CartManager {
  constructor() {
    this.cartDrawer = document.getElementById('cartDrawer');
    this.cartOverlay = document.getElementById('cartOverlay');
    this.cartCount = document.querySelector('.cart-count');
    this.init();
  }

  init() {
    // Cart toggle
    document.querySelectorAll('[data-toggle="cart"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleCart();
      });
    });

    // Close cart on overlay click
    if (this.cartOverlay) {
      this.cartOverlay.addEventListener('click', () => this.closeCart());
    }

    // Close cart on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.cartDrawer?.classList.contains('open')) {
        this.closeCart();
      }
    });
  }

  toggleCart() {
    if (this.cartDrawer?.classList.contains('open')) {
      this.closeCart();
    } else {
      this.openCart();
    }
  }

  openCart() {
    this.cartDrawer?.classList.add('open');
    this.cartOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeCart() {
    this.cartDrawer?.classList.remove('open');
    this.cartOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  updateCartCount(count) {
    if (this.cartCount) {
      this.cartCount.textContent = count;
    }
  }

  async addToCart(productId, quantity = 1, options = {}) {
    try {
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: quantity,
          options: options
        })
      });

      const data = await response.json();

      if (data.success) {
        showNotification('Product added to cart!', 'success');
        this.updateCartCount(data.cart.items.length);
        this.openCart();
        return true;
      } else {
        showNotification(data.message || 'Failed to add to cart', 'error');
        return false;
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      showNotification('An error occurred', 'error');
      return false;
    }
  }

  async updateItem(itemId, quantity) {
    try {
      const response = await fetch('/api/cart/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
          quantity: quantity
        })
      });

      const data = await response.json();

      if (data.success) {
        this.updateCartCount(data.cart.items.length);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating cart:', error);
      return false;
    }
  }

  async removeItem(itemId) {
    try {
      const response = await fetch('/api/cart/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId
        })
      });

      const data = await response.json();

      if (data.success) {
        this.updateCartCount(data.cart.items.length);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error removing from cart:', error);
      return false;
    }
  }
}

// ============================================================================
// 3. Search Functionality
// ============================================================================

class SearchManager {
  constructor() {
    this.searchInput = document.querySelector('.search-input');
    this.searchForm = document.querySelector('.search-form');
    this.init();
  }

  init() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', debounce((e) => {
        this.handleSearch(e.target.value);
      }, 300));
    }

    if (this.searchForm) {
      this.searchForm.addEventListener('submit', (e) => {
        // Allow default form submission
      });
    }
  }

  async handleSearch(query) {
    if (query.length < 2) return;

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      this.displaySearchResults(data.products);
    } catch (error) {
      console.error('Search error:', error);
    }
  }

  displaySearchResults(products) {
    // Implementation depends on your search UI
    console.log('Search results:', products);
  }
}

// ============================================================================
// 4. Product Page Interactions
// ============================================================================

class ProductPage {
  constructor() {
    this.init();
  }

  init() {
    this.initImageGallery();
    this.initQuantitySelector();
    this.initAddToCart();
    this.initTabs();
  }

  initImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail-image');
    const mainImage = document.getElementById('mainProductImage');

    if (!thumbnails.length) return;

    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        mainImage.src = thumb.dataset.fullImage;
        thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }

  initQuantitySelector() {
    const quantityInput = document.getElementById('productQuantity');
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');

    if (!quantityInput) return;

    decreaseBtn?.addEventListener('click', () => {
      const current = parseInt(quantityInput.value);
      if (current > 1) quantityInput.value = current - 1;
    });

    increaseBtn?.addEventListener('click', () => {
      const current = parseInt(quantityInput.value);
      const max = parseInt(quantityInput.max);
      if (current < max) quantityInput.value = current + 1;
    });
  }

  initAddToCart() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    const quantityInput = document.getElementById('productQuantity');

    if (!addToCartBtn) return;

    addToCartBtn.addEventListener('click', async () => {
      const productId = addToCartBtn.dataset.productId;
      const quantity = parseInt(quantityInput?.value || 1);
      const options = this.collectOptions();

      const cart = new CartManager();
      await cart.addToCart(productId, quantity, options);
    });
  }

  collectOptions() {
    const options = {};
    document.querySelectorAll('[name^="option_"]').forEach(input => {
      if (input.checked || input.tagName === 'SELECT') {
        options[input.name] = input.value;
      }
    });
    return options;
  }

  initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (!tabButtons.length) return;

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;
        tabButtons.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(tabName)?.classList.add('active');
      });
    });
  }
}

// ============================================================================
// 5. Cart Page Interactions
// ============================================================================

class CartPage {
  constructor() {
    this.cart = new CartManager();
    this.init();
  }

  init() {
    this.initQuantityControls();
    this.initRemoveButtons();
    this.initCouponForm();
    this.initCheckoutButton();
  }

  initQuantityControls() {
    document.querySelectorAll('.qty-decrease').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemId = btn.dataset.itemId;
        const input = document.querySelector(`[data-item-id="${itemId}"].qty-input`);
        const current = parseInt(input.value);
        if (current > 1) {
          input.value = current - 1;
          this.updateItem(itemId, current - 1);
        }
      });
    });

    document.querySelectorAll('.qty-increase').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemId = btn.dataset.itemId;
        const input = document.querySelector(`[data-item-id="${itemId}"].qty-input`);
        const current = parseInt(input.value);
        input.value = current + 1;
        this.updateItem(itemId, current + 1);
      });
    });

    document.querySelectorAll('.qty-input').forEach(input => {
      input.addEventListener('change', () => {
        const itemId = input.dataset.itemId;
        const quantity = parseInt(input.value);
        if (quantity > 0) {
          this.updateItem(itemId, quantity);
        }
      });
    });
  }

  initRemoveButtons() {
    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const itemId = btn.dataset.itemId;
        if (confirm('Are you sure you want to remove this item?')) {
          this.removeItem(itemId);
        }
      });
    });
  }

  initCouponForm() {
    const applyCouponBtn = document.getElementById('applyCouponBtn');
    const couponInput = document.getElementById('couponInput');

    if (applyCouponBtn) {
      applyCouponBtn.addEventListener('click', () => {
        const couponCode = couponInput?.value;
        if (couponCode?.trim()) {
          this.applyCoupon(couponCode);
        }
      });
    }
  }

  initCheckoutButton() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        window.location.href = '/checkout';
      });
    }
  }

  async updateItem(itemId, quantity) {
    const success = await this.cart.updateItem(itemId, quantity);
    if (success) {
      location.reload();
    }
  }

  async removeItem(itemId) {
    const success = await this.cart.removeItem(itemId);
    if (success) {
      location.reload();
    }
  }

  async applyCoupon(couponCode) {
    try {
      const response = await fetch('/api/cart/coupon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: couponCode })
      });

      const data = await response.json();

      if (data.success) {
        showNotification('Coupon applied successfully!', 'success');
        location.reload();
      } else {
        showNotification(data.message || 'Invalid coupon code', 'error');
      }
    } catch (error) {
      console.error('Error applying coupon:', error);
      showNotification('An error occurred', 'error');
    }
  }
}

// ============================================================================
// 6. Initialize on DOM Ready
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize managers
  const cart = new CartManager();
  const search = new SearchManager();

  // Initialize page-specific functionality
  const path = window.location.pathname;

  if (path.includes('/products/') && !path.includes('/cart')) {
    new ProductPage();
  }

  if (path.includes('/cart')) {
    new CartPage();
  }

  // Global keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      document.querySelector('.search-input')?.focus();
    }
  });

  // Smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Lazy load images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Track page view
  if (window.gtag) {
    gtag('event', 'page_view', {
      page_path: window.location.pathname,
      page_title: document.title
    });
  }
});

// ============================================================================
// 7. Export for external use
// ============================================================================

window.CartManager = CartManager;
window.showNotification = showNotification;
window.formatCurrency = formatCurrency;
