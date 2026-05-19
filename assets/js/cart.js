const CART_KEY = 'sns_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateBadge();
}

function addToCart(productId, size, qty) {
  qty = qty || 1;
  const product = getProductById(productId);
  if (!product) return false;

  const cart = getCart();
  const key = productId + '|' + (size || '');
  const existing = cart.find(item => item.key === key);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      key,
      productId,
      size: size || '',
      qty,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
  }

  saveCart(cart);
  return true;
}

function removeFromCart(key) {
  const cart = getCart().filter(item => item.key !== key);
  saveCart(cart);
}

function updateQty(key, delta) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateBadge();
}

function updateBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const count = getCartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function showToast(message) {
  const existing = document.getElementById('sns-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'sns-toast';
  toast.className = 'sns-toast';
  toast.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function renderProductCard(product, index) {
  const accentColors = ['var(--yellow)', 'var(--pink)', 'var(--teal)', 'var(--purple)'];
  const accent = accentColors[index % 4];
  const badgeHtml = product.badge
    ? `<span class="product-badge" style="background:${accent}">${product.badge}</span>`
    : '';

  const sizeAttr = product.sizes.length > 0
    ? `data-sizes='${JSON.stringify(product.sizes)}'`
    : '';

  return `
    <div class="product-card" style="--card-accent: ${accent}" ${sizeAttr} data-id="${product.id}">
      <a href="product.html?id=${product.id}" class="product-card-img-wrap">
        ${badgeHtml}
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </a>
      <div class="product-card-body">
        <span class="product-cat-tag">${product.category}</span>
        <h3 class="product-name">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="product-card-footer">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <button class="btn-add-cart" onclick="handleAddToCart(${product.id}, this)">
            <i class="fas fa-bag-shopping"></i> Add
          </button>
        </div>
      </div>
    </div>`;
}

function handleAddToCart(productId, btn) {
  const product = getProductById(productId);
  if (!product) return;

  if (product.sizes.length > 0) {
    window.location.href = 'product.html?id=' + productId;
    return;
  }

  const added = addToCart(productId, '', 1);
  if (added) {
    btn.classList.add('added');
    btn.innerHTML = '<i class="fas fa-check"></i> Added';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<i class="fas fa-bag-shopping"></i> Add';
    }, 1500);
    showToast(product.name + ' added to cart!');
  }
}
