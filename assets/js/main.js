document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  updateBadge();

  const page = document.body.dataset.page;
  if (page === 'home') initHomePage();
  if (page === 'shop') initShopPage();
  if (page === 'product') initProductPage();
  if (page === 'cart') initCartPage();
  if (page === 'checkout') initCheckoutPage();
});

// ── Navbar ──────────────────────────────────────────────────────────────────

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navbar.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── Mobile Menu ──────────────────────────────────────────────────────────────

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.querySelector('i').className = 'fas fa-bars';
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  document.addEventListener('click', e => {
    if (!navbar.contains(e.target) && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.querySelector('i').className = 'fas fa-bars';
    }
  });
}

// ── Home Page ────────────────────────────────────────────────────────────────

function initHomePage() {
  const grid = document.getElementById('home-products');
  if (!grid) return;
  const featured = PRODUCTS.slice(0, 8);
  grid.innerHTML = featured.map((p, i) => renderProductCard(p, i)).join('');
}

// ── Shop Page ────────────────────────────────────────────────────────────────

function initShopPage() {
  const grid = document.getElementById('shop-grid');
  const filters = document.querySelectorAll('.filter-btn');
  const countEl = document.getElementById('product-count');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get('category') || 'all';

  function render(category) {
    activeCategory = category;
    const products = getProductsByCategory(category);
    grid.innerHTML = products.map((p, i) => renderProductCard(p, i)).join('');
    if (countEl) countEl.textContent = products.length + ' products';

    filters.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
    });

    grid.classList.add('fade-in');
    setTimeout(() => grid.classList.remove('fade-in'), 400);
  }

  filters.forEach(btn => {
    btn.addEventListener('click', () => render(btn.dataset.category));
  });

  render(activeCategory);
}

// ── Product Detail Page ──────────────────────────────────────────────────────

function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = getProductById(id);

  if (!product) {
    document.getElementById('product-content').innerHTML =
      '<p class="error-msg">Product not found. <a href="shop.html">Back to Shop</a></p>';
    return;
  }

  document.title = product.name + ' — Snack \'N\' Style';

  const accentColors = ['var(--yellow)', 'var(--pink)', 'var(--teal)', 'var(--purple)'];
  const accent = accentColors[product.id % 4];

  document.getElementById('product-content').innerHTML = buildProductDetailHTML(product, accent);

  initSizeSelector(product);
  initQtySpinner();

  document.getElementById('add-to-cart-btn').addEventListener('click', () => {
    const selectedSize = document.querySelector('.size-btn.selected');
    const qty = parseInt(document.getElementById('qty-input').value) || 1;

    if (product.sizes.length > 0 && !selectedSize) {
      showSizeError();
      return;
    }

    const size = selectedSize ? selectedSize.dataset.size : '';
    const added = addToCart(product.id, size, qty);
    if (added) {
      showToast(product.name + ' added to cart!');
      const btn = document.getElementById('add-to-cart-btn');
      btn.innerHTML = '<i class="fas fa-check"></i> Added to Cart!';
      btn.classList.add('success');
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-bag-shopping"></i> Add to Cart';
        btn.classList.remove('success');
      }, 2000);
    }
  });

  const relatedGrid = document.getElementById('related-products');
  if (relatedGrid) {
    const related = getRelatedProducts(product, 4);
    relatedGrid.innerHTML = related.map((p, i) => renderProductCard(p, i)).join('');
  }
}

function buildProductDetailHTML(product, accent) {
  const badgeHtml = product.badge
    ? `<span class="product-badge detail-badge" style="background:${accent}">${product.badge}</span>`
    : '';

  const sizesHtml = product.sizes.length > 0 ? `
    <div class="size-section">
      <p class="size-label">Select Size <span class="size-error hidden" id="size-error">Please select a size</span></p>
      <div class="size-grid" id="size-grid">
        ${product.sizes.map(s => `<button class="size-btn" data-size="${s}">${s}</button>`).join('')}
      </div>
    </div>` : '';

  return `
    <div class="product-detail-grid">
      <div class="product-detail-img">
        ${badgeHtml}
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-detail-info" style="--accent: ${accent}">
        <span class="product-cat-tag">${product.category}</span>
        <h1 class="product-detail-name">${product.name}</h1>
        <p class="product-detail-price">$${product.price.toFixed(2)}</p>
        ${sizesHtml}
        <div class="qty-row">
          <label class="qty-label">Quantity</label>
          <div class="qty-spinner">
            <button class="qty-btn" id="qty-minus" aria-label="Decrease quantity">−</button>
            <input type="number" id="qty-input" value="1" min="1" max="99" readonly>
            <button class="qty-btn" id="qty-plus" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="btn btn-primary btn-full" id="add-to-cart-btn">
          <i class="fas fa-bag-shopping"></i> Add to Cart
        </button>
        <div class="product-perks">
          <span><i class="fas fa-truck"></i> Free delivery over $50</span>
          <span><i class="fas fa-rotate-left"></i> Easy returns</span>
          <span><i class="fas fa-shield-halved"></i> Secure checkout</span>
        </div>
      </div>
    </div>`;
}

function initSizeSelector(product) {
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const err = document.getElementById('size-error');
      if (err) err.classList.add('hidden');
    });
  });
}

function initQtySpinner() {
  const input = document.getElementById('qty-input');
  document.getElementById('qty-minus')?.addEventListener('click', () => {
    const val = parseInt(input.value) || 1;
    if (val > 1) input.value = val - 1;
  });
  document.getElementById('qty-plus')?.addEventListener('click', () => {
    const val = parseInt(input.value) || 1;
    input.value = val + 1;
  });
}

function showSizeError() {
  const err = document.getElementById('size-error');
  const grid = document.getElementById('size-grid');
  if (err) err.classList.remove('hidden');
  grid?.classList.add('shake');
  setTimeout(() => grid?.classList.remove('shake'), 500);
}

// ── Cart Page ────────────────────────────────────────────────────────────────

function initCartPage() {
  renderCartPage();
}

function renderCartPage() {
  const container = document.getElementById('cart-items');
  const emptyState = document.getElementById('cart-empty');
  const cartSummary = document.getElementById('cart-summary');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  const countEl = document.getElementById('cart-count');
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = '';
    emptyState?.classList.remove('hidden');
    cartSummary?.classList.add('hidden');
    return;
  }

  emptyState?.classList.add('hidden');
  cartSummary?.classList.remove('hidden');

  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-key="${item.key}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h3 class="cart-item-name">${item.name}</h3>
        <p class="cart-item-meta">${item.category}${item.size ? ' · Size ' + item.size : ''}</p>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
      </div>
      <div class="cart-item-controls">
        <div class="qty-spinner small">
          <button class="qty-btn" onclick="changeCartQty('${item.key}', -1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeCartQty('${item.key}', 1)">+</button>
        </div>
        <p class="cart-item-subtotal">$${(item.price * item.qty).toFixed(2)}</p>
        <button class="cart-remove-btn" onclick="removeCartItem('${item.key}')" aria-label="Remove">
          <i class="fas fa-trash-can"></i>
        </button>
      </div>
    </div>`).join('');

  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
  if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
  if (countEl) countEl.textContent = getCartCount() + ' item' + (getCartCount() !== 1 ? 's' : '');

  const shippingEl = document.getElementById('cart-shipping');
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2);
}

function changeCartQty(key, delta) {
  updateQty(key, delta);
  renderCartPage();
}

function removeCartItem(key) {
  removeFromCart(key);
  renderCartPage();
}

// ── Checkout Page ────────────────────────────────────────────────────────────

function initCheckoutPage() {
  populateCheckoutSummary();
  initCheckoutSteps();
}

function populateCheckoutSummary() {
  const cart = getCart();
  const listEl = document.getElementById('checkout-items');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const shippingEl = document.getElementById('checkout-shipping');
  const totalEl = document.getElementById('checkout-total');

  if (listEl) {
    listEl.innerHTML = cart.map(item => `
      <div class="checkout-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <p>${item.name}${item.size ? ' (${item.size})' : ''}</p>
          <p class="checkout-item-qty">x${item.qty}</p>
        </div>
        <p>$${(item.price * item.qty).toFixed(2)}</p>
      </div>`).join('');
  }

  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2);
  if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
}

function initCheckoutSteps() {
  const step1 = document.getElementById('step-info');
  const step2 = document.getElementById('step-payment');
  const continueBtn = document.getElementById('continue-btn');
  const podBtn = document.getElementById('pod-btn');
  const payNowForm = document.getElementById('pay-now-form');
  const payNowConfirmBtn = document.getElementById('pay-now-confirm');
  const successScreen = document.getElementById('checkout-success');

  continueBtn?.addEventListener('click', () => {
    const form = document.getElementById('customer-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
    step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('pod-card')?.addEventListener('click', () => {
    document.getElementById('pod-card').classList.add('selected');
    document.getElementById('pay-now-card').classList.remove('selected');
    payNowForm?.classList.add('hidden');
    podBtn?.classList.remove('hidden');
  });

  document.getElementById('pay-now-card')?.addEventListener('click', () => {
    document.getElementById('pay-now-card').classList.add('selected');
    document.getElementById('pod-card').classList.remove('selected');
    payNowForm?.classList.remove('hidden');
    podBtn?.classList.add('hidden');
  });

  podBtn?.addEventListener('click', () => {
    submitOrder('delivery', successScreen);
  });

  payNowConfirmBtn?.addEventListener('click', () => {
    const cardForm = document.getElementById('card-details-form');
    if (!cardForm.checkValidity()) {
      cardForm.reportValidity();
      return;
    }
    submitOrder('card', successScreen);
  });
}

function submitOrder(method, successScreen) {
  const name = document.getElementById('field-name')?.value || '';
  const cart = getCart();
  const total = getCartTotal();
  const shipping = total >= 50 ? 0 : 5.99;

  if (successScreen) {
    successScreen.querySelector('#success-name').textContent = name.split(' ')[0] || 'there';
    successScreen.querySelector('#success-total').textContent = '$' + (total + shipping).toFixed(2);
    successScreen.querySelector('#success-method').textContent =
      method === 'delivery' ? 'Pay on Delivery' : 'Card Payment';

    document.getElementById('step-payment').classList.add('hidden');
    successScreen.classList.remove('hidden');
    successScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
    clearCart();
    updateBadge();
  }

  if (method === 'delivery') {
    const formEl = document.getElementById('formspree-form');
    if (formEl) {
      const cartSummaryInput = document.getElementById('cart-summary-input');
      if (cartSummaryInput) {
        cartSummaryInput.value = cart.map(i => `${i.name} x${i.qty} ($${(i.price * i.qty).toFixed(2)})`).join(', ');
      }
      formEl.submit();
    }
  }
}
