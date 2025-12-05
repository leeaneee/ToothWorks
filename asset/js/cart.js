const cartContainer = document.querySelector('.cart-items');
const subtotalText = document.querySelector('#subtotal-price');
const continueBtn = document.querySelector('.continueShopping');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="empty-message">Your cart is empty.</p>`;
    subtotalText.textContent = "PHP 0.00";
    return;
  }

  let subtotal = 0;

  cart.forEach((item, index) => {
    subtotal += item.price * item.quantity;

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
      <h3 class="price">PHP ${item.price.toFixed(2)}</h3>
    `;

    cartContainer.appendChild(itemHTML);
    cartContainer.appendChild(document.createElement('hr'));
  });

  subtotalText.textContent = `PHP ${subtotal.toFixed(2)}`;
}

function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

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

renderCart();
