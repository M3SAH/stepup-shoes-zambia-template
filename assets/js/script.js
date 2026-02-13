/**
 * StepUp Shoe Store - Main JavaScript
 * Product catalog and interactive features
 */

// ========================================
// PRODUCT DATABASE
// ========================================
const products = [
  {
    id: 1,
    name: "Nike Air Force 1 White",
    category: "Men",
    type: "Sneakers",
    price: 350,
    image: "assets/images/nike-air-force.jpg",
    desc: "Classic white Air Force 1s. Durable and stylish for everyday wear.",
    sizes: "40, 41, 42, 43, 44, 45",
    colors: "White",
    featured: true
  },
  {
    id: 2,
    name: "Adidas Samba",
    category: "Unisex",
    type: "Sneakers",
    price: 850,
    image: "assets/images/adidas-samba.jpg",
    desc: "Retro style soccer shoe turned streetwear icon.",
    sizes: "38-45",
    colors: "Black/White, White/Green",
    featured: true
  },
  {
    id: 3,
    name: "Brown Leather Oxfords",
    category: "Men",
    type: "Formal",
    price: 850,
    image: "assets/images/Brown-Leather-Oxfords.jpg",
    desc: "Genuine leather formal shoes perfect for office and weddings.",
    sizes: "40-44",
    colors: "Brown, Black",
    featured: false
  },
  {
    id: 4,
    name: "Ladies High Heel Pumps",
    category: "Women",
    type: "Formal",
    price: 450,
    image: "assets/images/Ladies-High-Heel-Pumps.jpg",
    desc: "Elegant blue heels for special occasions.",
    sizes: "36, 37, 38, 39, 40",
    colors: "Blue, Red, Black",
    featured: true
  },
  {
    id: 5,
    name: "Bata Style School Shoes",
    category: "Kids",
    type: "School",
    price: 700,
    image: "assets/images/Bata-Style-School-Shoes.jpg",
    desc: "Durable black leather school shoes. Toughees style.",
    sizes: "28-35",
    colors: "Black",
    featured: true
  },
  {
    id: 6,
    name: "Running Trainers Grey",
    category: "Men",
    type: "Sneakers",
    price: 600,
    image: "assets/images/Running-Trainers-Grey.jpg",
    desc: "Lightweight running shoes, great for gym and jogging.",
    sizes: "40-45",
    colors: "Grey",
    featured: false
  },
  {
    id: 7,
    name: "Chelsea Boots Tan",
    category: "Men",
    type: "Boots",
    price: 1100,
    image: "assets/images/Chelsea-Boots-Tan.jpg",
    desc: "Stylish suede Chelsea boots.",
    sizes: "41-44",
    colors: "Tan, Black",
    featured: false
  },
  {
    id: 8,
    name: "Kids Velcro Sneakers",
    category: "Kids",
    type: "Sneakers",
    price: 350,
    image: "assets/images/Kids-Velcro-Sneakers.jpg",
    desc: "Easy to wear velcro sneakers for toddlers.",
    sizes: "20-28",
    colors: "Multi",
    featured: false
  },
  {
    id: 9,
    name: "Summer Sandals",
    category: "Women",
    type: "Sandals",
    price: 300,
    image: "assets/images/Summer-Sandals.jpg",
    desc: "Comfortable flat sandals for hot weather.",
    sizes: "36-41",
    colors: "Brown, Gold",
    featured: false
  },
  {
    id: 10,
    name: "High Top Canvas",
    category: "Unisex",
    type: "Sneakers",
    price: 400,
    image: "assets/images/High-Top-Canvas.jpg",
    desc: "Classic canvas high tops. All Star style.",
    sizes: "36-44",
    colors: "Black, Red, White",
    featured: false
  },
  {
    id: 11,
    name: "Hiking Boots",
    category: "Men",
    type: "Boots",
    price: 1500,
    image: "assets/images/Hiking-Boots.jpg",
    desc: "Rugged boots for outdoor work or hiking.",
    sizes: "42-46",
    colors: "Brown",
    featured: false
  },
  {
    id: 12,
    name: "Slip-on Loafers",
    category: "Men",
    type: "Formal",
    price: 700,
    image: "assets/images/Slip-on-Loafers.jpg",
    desc: "Casual yet smart loafers for Friday wear.",
    sizes: "40-44",
    colors: "Navy, Black",
    featured: false
  },
  {
    id: 13,
    name: "Girl's Party Shoes",
    category: "Kids",
    type: "Formal",
    price: 300,
    image: "assets/images/Girl-s-Party-Shoes.jpg",
    desc: "Shiny shoes for church and parties.",
    sizes: "25-32",
    colors: "Silver, Pink",
    featured: false
  },
  {
    id: 14,
    name: "Sport Slides",
    category: "Unisex",
    type: "Sandals",
    price: 150,
    image: "assets/images/Sport-Slides.jpg",
    desc: "Easy slides for home or after sports.",
    sizes: "38-45",
    colors: "Black/White",
    featured: false
  },
  {
    id: 15,
    name: "Wedge Sandals",
    category: "Women",
    type: "Sandals",
    price: 550,
    image: "assets/images/Wedge-Sandals.jpg",
    desc: "Comfortable height for all-day wear.",
    sizes: "37-41",
    colors: "Beige",
    featured: false
  },
  {
    id: 16,
    name: "Yeezy Slides",
    category: "Unisex",
    type: "Footwear",
    price: 250,
    image: "assets/images/Yeezy-Slides.jpg",
    desc: "Comfortable height for all-day wear.",
    sizes: "37-41",
    colors: "yellow",
    featured: false
  },
  {
    id: 17,
    name: "Jordan 4",
    category: "Unisex",
    type: "Footwear",
    price: 450,
    image: "assets/images/Jordan4.jpg",
    desc: "Comfortable height for all-day wear.",
    sizes: "37-41",
    colors: "Black",
    featured: true
  }
];

// ========================================
// CONFIGURATION
// ========================================
const CONFIG = {
  whatsappNumber: "260970000000",
  featuredLimit: 4
};

// ========================================
// DOM ELEMENTS
// ========================================
const DOM = {
  featuredGrid: document.getElementById('featured-grid'),
  shopGrid: document.getElementById('shop-grid'),
  searchInput: document.getElementById('search-input'),
  categoryFilter: document.getElementById('category-filter'),
  typeFilter: document.getElementById('type-filter'),
  priceFilter: document.getElementById('price-filter'),
  resultCount: document.getElementById('result-count'),
  modal: document.getElementById('product-modal'),
  closeModal: document.querySelector('.close-modal'),
  contactForm: document.getElementById('contact-form')
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Escapes HTML to prevent XSS
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Generates WhatsApp link with pre-filled message
 */
function generateWhatsAppLink(product) {
  const message = `Hi, I am interested in ${product.name} (ZMW ${product.price}). Is it available?`;
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Debounce function for search input
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

// ========================================
// RENDERING FUNCTIONS
// ========================================

/**
 * Creates HTML for a single product card
 */
function createProductCard(product) {
  return `
    <div class="product-card" onclick="openModal(${product.id})" role="button" tabindex="0" aria-label="View details for ${escapeHtml(product.name)}">
      <div class="product-img-wrapper">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-category">${escapeHtml(product.category)} • ${escapeHtml(product.type)}</span>
        <h3 class="product-title">${escapeHtml(product.name)}</h3>
        <p class="product-price">ZMW ${product.price}</p>
        <button class="view-btn">View Details</button>
      </div>
    </div>
  `;
}

/**
 * Renders featured products section
 */
function renderFeatured() {
  if (!DOM.featuredGrid) return;
  
  const featured = products
    .filter(p => p.featured)
    .slice(0, CONFIG.featuredLimit);
  
  DOM.featuredGrid.innerHTML = featured.map(createProductCard).join('');
}

/**
 * Renders shop grid with filtered products
 */
function renderShop(items) {
  if (!DOM.shopGrid || !DOM.resultCount) return;
  
  if (items.length === 0) {
    DOM.shopGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-light);">
        <h3 style="margin-bottom: 12px; color: var(--text-body);">No products found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    `;
    DOM.resultCount.textContent = 'No products found';
    return;
  }
  
  DOM.shopGrid.innerHTML = items.map(createProductCard).join('');
  DOM.resultCount.textContent = `Showing ${items.length} product${items.length !== 1 ? 's' : ''}`;
}

// ========================================
// FILTER LOGIC
// ========================================

/**
 * Filters products based on current filter values
 */
function filterProducts() {
  const searchTerm = DOM.searchInput.value.toLowerCase().trim();
  const category = DOM.categoryFilter.value;
  const type = DOM.typeFilter.value;
  const price = DOM.priceFilter.value;

  const filtered = products.filter(product => {
    // Search by name or type
    const matchesSearch = !searchTerm || 
      product.name.toLowerCase().includes(searchTerm) || 
      product.type.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);
    
    // Filter by category
    const matchesCategory = category === 'all' || product.category === category;
    
    // Filter by type
    const matchesType = type === 'all' || product.type === type;
    
    // Filter by price range
    let matchesPrice = true;
    if (price === 'low') matchesPrice = product.price < 500;
    else if (price === 'mid') matchesPrice = product.price >= 500 && product.price <= 1000;
    else if (price === 'high') matchesPrice = product.price > 1000;

    return matchesSearch && matchesCategory && matchesType && matchesPrice;
  });

  renderShop(filtered);
}

// Debounced version for search input
const debouncedFilter = debounce(filterProducts, 300);

// ========================================
// MODAL FUNCTIONS
// ========================================

/**
 * Opens product detail modal
 */
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || !DOM.modal) return;

  // Populate modal with product data
  const modalImg = document.getElementById('modal-img');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalSizes = document.getElementById('modal-sizes');
  const modalColors = document.getElementById('modal-colors');
  const modalWhatsAppBtn = document.getElementById('modal-whatsapp-btn');

  if (modalImg) {
    modalImg.src = product.image;
    modalImg.alt = product.name;
  }
  if (modalCategory) modalCategory.textContent = product.category;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalPrice) modalPrice.textContent = `ZMW ${product.price}`;
  if (modalDesc) modalDesc.textContent = product.desc;
  if (modalSizes) modalSizes.textContent = product.sizes;
  if (modalColors) modalColors.textContent = product.colors;
  if (modalWhatsAppBtn) modalWhatsAppBtn.href = generateWhatsAppLink(product);

  // Show modal
  DOM.modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

/**
 * Closes product detail modal
 */
function closeModalHandler() {
  if (!DOM.modal) return;
  DOM.modal.style.display = "none";
  document.body.style.overflow = ""; // Restore scrolling
}

// ========================================
// EVENT LISTENERS
// ========================================

/**
 * Initialize all event listeners
 */
function initEventListeners() {
  // Filter events
  if (DOM.searchInput) {
    DOM.searchInput.addEventListener('input', debouncedFilter);
  }
  
  if (DOM.categoryFilter) {
    DOM.categoryFilter.addEventListener('change', filterProducts);
  }
  
  if (DOM.typeFilter) {
    DOM.typeFilter.addEventListener('change', filterProducts);
  }
  
  if (DOM.priceFilter) {
    DOM.priceFilter.addEventListener('change', filterProducts);
  }

  // Modal events
  if (DOM.closeModal) {
    DOM.closeModal.addEventListener('click', closeModalHandler);
  }

  // Close modal when clicking outside
  if (DOM.modal) {
    DOM.modal.addEventListener('click', (e) => {
      if (e.target === DOM.modal) {
        closeModalHandler();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && DOM.modal && DOM.modal.style.display === 'flex') {
      closeModalHandler();
    }
  });

  // Contact form submission
  if (DOM.contactForm) {
    DOM.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.\n\n(Note: This is a demo. In production, this would send an actual email or save to a database.)');
      
      // Reset form
      DOM.contactForm.reset();
    });
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Don't prevent default for external links or modal buttons
      if (href === '#' || !href.startsWith('#')) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add keyboard navigation for product cards
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('product-card')) {
      e.target.click();
    }
  });
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize the application
 */
function init() {
  // Render initial content
  renderFeatured();
  renderShop(products);
  
  // Set up event listeners
  initEventListeners();
  
  // Log success message
  console.log('StepUp Shoe Store initialized successfully');
  console.log(`Loaded ${products.length} products`);
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Make openModal globally accessible for inline onclick handlers
window.openModal = openModal;
