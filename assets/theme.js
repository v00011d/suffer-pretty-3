/**
 * Suffer Pretty Theme - Main JavaScript
 * Dark Angel Aesthetic by Void
 * Version: 1.0.0
 */

// ===========================
// UTILITY FUNCTIONS
// ===========================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait = 300) {
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

/**
 * Format money
 */
function formatMoney(cents) {
  return '$' + (cents / 100).toFixed(2);
}

// ===========================
// CART FUNCTIONALITY
// ===========================

class Cart {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Quick add to cart buttons
    document.addEventListener('click', (e) => {
      if (e.target.matches('.quick-add-button')) {
        e.preventDefault();
        const productId = e.target.dataset.productId;
        this.addToCart(productId, 1);
      }
    });

    // Cart drawer toggle
    const cartIcons = document.querySelectorAll('.cart-icon, .header-icon.cart-icon');
    cartIcons.forEach(icon => {
      icon.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleDrawer();
      });
    });

    // Cart drawer close
    const closeButtons = document.querySelectorAll('.cart-drawer-close, .cart-drawer-overlay');
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.closeDrawer();
      });
    });

    // Quantity updates in drawer
    document.addEventListener('change', (e) => {
      if (e.target.matches('.quantity-update')) {
        const line = e.target.dataset.line;
        const quantity = parseInt(e.target.value);
        this.updateCart(line, quantity);
      }
    });
  }

  async addToCart(variantId, quantity = 1) {
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              id: variantId,
              quantity: quantity
            }
          ]
        })
      });

      if (response.ok) {
        const data = await response.json();
        this.updateCartCount();
        this.showNotification('Item added to cart!');
        this.toggleDrawer();
      } else {
        throw new Error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      this.showNotification('Error adding item to cart', 'error');
    }
  }

  async updateCart(line, quantity) {
    try {
      const response = await fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          line: line,
          quantity: quantity
        })
      });

      if (response.ok) {
        const data = await response.json();
        this.updateCartCount();
        this.refreshCartDrawer();
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      const countElements = document.querySelectorAll('.cart-count');
      countElements.forEach(el => {
        el.textContent = cart.item_count;
        el.style.display = cart.item_count > 0 ? 'flex' : 'none';
      });
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  toggleDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) {
      drawer.classList.toggle('active');
      document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
    }
  }

  closeDrawer() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) {
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  async refreshCartDrawer() {
    try {
      const response = await fetch('/cart?view=drawer');
      const html = await response.text();
      const itemsContainer = document.getElementById('cart-drawer-items');
      if (itemsContainer) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newItems = doc.getElementById('cart-drawer-items');
        if (newItems) {
          itemsContainer.innerHTML = newItems.innerHTML;
        }
      }
    } catch (error) {
      console.error('Error refreshing cart drawer:', error);
    }
  }

  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 2rem;
      background-color: ${type === 'success' ? 'var(--color-accent)' : '#c41e3a'};
      color: white;
      border-radius: 4px;
      z-index: 10000;
      animation: slideInRight 0.3s ease;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
}

// ===========================
// PRODUCT PAGE FUNCTIONALITY
// ===========================

class ProductPage {
  constructor() {
    this.init();
  }

  init() {
    this.setupVariantSelection();
    this.setupImageGallery();
  }

  setupVariantSelection() {
    const form = document.querySelector('.product-form');
    if (!form) return;

    const variantInputs = form.querySelectorAll('input[name^="options"]');
    variantInputs.forEach(input => {
      input.addEventListener('change', () => {
        this.updateVariant();
      });
    });
  }

  updateVariant() {
    // Basic variant update logic
    // In production, this would be more sophisticated
    console.log('Variant updated');
  }

  setupImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail-button');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        const img = thumbnail.querySelector('img');
        if (img && mainImage) {
          mainImage.src = img.src.replace('_200x', '_800x');
        }
      });
    });
  }
}

// ===========================
// SEARCH FUNCTIONALITY
// ===========================

class SearchModal {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    const searchTriggers = document.querySelectorAll('a[href*="/search"]');
    searchTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        // Can be expanded for modal search
        console.log('Search triggered');
      });
    });
  }
}

// ===========================
// LAZY LOADING
// ===========================

function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

// ===========================
// SMOOTH SCROLL
// ===========================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// ===========================
// INITIALIZE ON DOM READY
// ===========================

function init() {
  // Initialize cart functionality
  new Cart();

  // Initialize product page if on product page
  if (document.querySelector('.product-section')) {
    new ProductPage();
  }

  // Initialize search
  new SearchModal();

  // Initialize lazy loading
  initLazyLoading();

  // Initialize smooth scroll
  initSmoothScroll();

  // Log theme loaded
  console.log('🎨 Suffer Pretty Theme Loaded');
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
