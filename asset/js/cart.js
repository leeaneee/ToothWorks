// ====== CART PAGE ======
const cartContainer = document.querySelector('.cart-items');
const subtotalText = document.querySelector('#subtotal-price');
const continueBtn = document.querySelector('.continueShopping');
const placeOrderBtn = document.querySelector('#submitbutton'); // Place Order button
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Render cart items
function renderCart() {
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="empty-message">Your cart is empty.</p>`;
    subtotalText.textContent = "PHP 0.00";
    return;
  }

  let subtotal = 0;

  cart.forEach((item, index) => {
    subtotal += parseFloat(item.price) * item.quantity; // Ensure price is a number for calculations

    const itemHTML = document.createElement('div');
    itemHTML.classList.add('iteminfo');
    itemHTML.dataset.index = index;

    itemHTML.innerHTML = `
      <img src="${item.img}" class="itemimage" alt="${item.name}">
      <p>${item.name}</p>
      <div class="quantity">
        <div class="numItem">
          <button class="minus">-</button>
          <h4>${item.quantity}</h4>
          <button class="plus">+</button>
        </div>
        <a class="remove">remove</a>
      </div>
      <h3 class="price">PHP ${parseFloat(item.price).toFixed(2)}</h3>
    `;

    cartContainer.appendChild(itemHTML);
    cartContainer.appendChild(document.createElement('hr'));
  });

  subtotalText.textContent = `PHP ${subtotal.toFixed(2)}`;
}

// Update cart in localStorage
function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Cart buttons functionality
cartContainer.addEventListener('click', (e) => {
  const itemEl = e.target.closest('.iteminfo');
  if (!itemEl) return;
  const index = itemEl.dataset.index;

  if (e.target.classList.contains('plus')) {
    cart[index].quantity++;
  } else if (e.target.classList.contains('minus')) {
    if (cart[index].quantity > 1) cart[index].quantity--;
  } else if (e.target.classList.contains('remove')) {
    cart.splice(index, 1);
  }

  updateCart();
});

continueBtn.addEventListener('click', () => {
  window.location.href = 'Shop.html';
});

// ===== PLACE ORDER POPUP =====
placeOrderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (cart.length === 0) return alert("Your cart is empty.");
  showConfirmPopup();
});

// Confirm order popup
function showConfirmPopup() {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-content">
      <h3>Confirm Order?</h3>
      <div class="popup-buttons">
        <button class="cancel-btn">Cancel</button>
        <button class="confirm-btn">Confirm</button>
      </div>
    </div>
  `;
  document.body.appendChild(popup);

  popup.querySelector('.cancel-btn').addEventListener('click', () => popup.remove());

  popup.querySelector('.confirm-btn').addEventListener('click', () => {
    popup.remove();
    placeOrder();
  });
}

// Place order (store only as CURRENT order)
function placeOrder() {
  const address = document.querySelector('#address-line').value.trim();
  const payment = document.querySelector('input[name="payment"]:checked');

  if (!address || !payment) {
    alert("Please enter address and select payment method.");
    return;
  }

  const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
  const order = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    items: cart,
    address: address,
    payment: payment.value,
    total: subtotal
  };

  // Save to CURRENT ORDERS ARRAY
  let currentOrders = JSON.parse(localStorage.getItem('currentOrder')) || [];
  currentOrders.push(order);
  localStorage.setItem('currentOrder', JSON.stringify(currentOrders));

  // Clear cart
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();

  showSuccessPopup();
}

// Success popup after placing order
function showSuccessPopup() {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-content">
      <h3>Order Placed!</h3>
      <p>What would you like to do?</p>
      <div class="popup-buttons">
        <button class="view-order-btn">View Order</button>
        <button class="done-btn">Done</button>
      </div>
    </div>
  `;
  document.body.appendChild(popup);

  popup.querySelector('.view-order-btn').addEventListener('click', () => {
    window.location.href = 'Order.html';
  });
  popup.querySelector('.done-btn').addEventListener('click', () => popup.remove());
}

// Initial render
renderCart();
