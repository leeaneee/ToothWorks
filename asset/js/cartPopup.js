const cartContainer = document.querySelector('.cart-items');
const subtotalText = document.querySelector('#subtotal-price');
const continueBtn = document.querySelector('.continueShopping');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  cartContainer.innerHTML = '';
  let subtotal = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p>Your cart is empty.</p>`;
    subtotalText.textContent = "PHP 0.00";
    return;
  }

  cart.forEach((item, index) => {
    subtotal += item.price * item.quantity;
    const itemHTML = `
      <div class="iteminfo" data-index="${index}">
        <img src="${item.image}" class="itemimage" alt="${item.name}">
        <p>${item.name}</p>
        <div class="quantity">
          <div class="numItem">
            <button class="minus">-</button>
            <h4>${item.quantity}</h4>
            <button class="plus">+</button>
          </div>
          <a class="remove">remove</a>
        </div>
      </div>
      <hr>
    `;
    cartContainer.innerHTML += itemHTML;
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
    updateCart();
  } else if (e.target.classList.contains('minus')) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      updateCart();
    }
  } else if (e.target.classList.contains('remove')) {
    cart.splice(index, 1);
    updateCart();
  }
});

continueBtn.addEventListener('click', () => {
  window.location.href = 'Shop.html';
});

renderCart();



const provinces = {
  "Metro Manila": {
    "Manila": { "Barangay 1": "1000", "Barangay 2": "1001" },
    "Quezon City": { "Commonwealth": "1121", "Batasan Hills": "1126" }
  }
};

const addressLine = document.querySelector('#address-line');
const provinceSelect = document.createElement('select');
const citySelect = document.createElement('select');
const barangaySelect = document.createElement('select');
const zipInput = document.createElement('input');
zipInput.placeholder = 'ZIP Code';
zipInput.readOnly = true;

provinceSelect.innerHTML = `<option value="">Select Province</option>`;
for (let prov in provinces) {
  provinceSelect.innerHTML += `<option value="${prov}">${prov}</option>`;
}

citySelect.innerHTML = `<option value="">Select City/Municipality</option>`;
barangaySelect.innerHTML = `<option value="">Select Barangay</option>`;

const addressForm = document.querySelector('.rightbody form');
addressForm.insertBefore(provinceSelect, document.querySelector('#pay'));
addressForm.insertBefore(citySelect, document.querySelector('#pay'));
addressForm.insertBefore(barangaySelect, document.querySelector('#pay'));
addressForm.insertBefore(zipInput, document.querySelector('#pay'));

provinceSelect.addEventListener('change', () => {
  citySelect.innerHTML = `<option value="">Select City/Municipality</option>`;
  barangaySelect.innerHTML = `<option value="">Select Barangay</option>`;
  zipInput.value = '';

  if (provinceSelect.value) {
    const cities = provinces[provinceSelect.value];
    for (let city in cities) {
      citySelect.innerHTML += `<option value="${city}">${city}</option>`;
    }
  }
});

citySelect.addEventListener('change', () => {
  barangaySelect.innerHTML = `<option value="">Select Barangay</option>`;
  zipInput.value = '';

  if (citySelect.value) {
    const barangays = provinces[provinceSelect.value][citySelect.value];
    for (let brgy in barangays) {
      barangaySelect.innerHTML += `<option value="${brgy}">${brgy}</option>`;
    }
  }
});

barangaySelect.addEventListener('change', () => {
  const zip = provinces[provinceSelect.value][citySelect.value][barangaySelect.value];
  zipInput.value = zip;
});

const reviewPopup = document.getElementById('review-popup');
const reviewList = document.querySelector('.review-list');
const reviewTotal = document.getElementById('review-total');
const reviewConfirm = document.querySelector('.review-confirm');
const closeReview = document.querySelector('.close-popup');

const confirmPopup = document.getElementById('confirm-popup');
const successPopup = document.getElementById('success-popup');
const confirmBtn = document.querySelector('.popup-btn.confirm');
const cancelBtn = document.querySelector('.popup-btn.cancel');
const doneBtn = document.querySelector('.popup-btn.done');
const viewBtn = document.querySelector('.popup-btn.view');
const placeOrderBtn = document.getElementById('submitbutton');
const agreeCheck = document.querySelector('#checkbox input');
const paymentRadios = document.querySelectorAll('input[name="payment"]');

// Show review popup
placeOrderBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const addressValid = addressLine.value && provinceSelect.value && citySelect.value && barangaySelect.value;
  const paymentSelected = [...paymentRadios].some(r => r.checked);
  const agreed = agreeCheck.checked;

  if (!addressValid || !paymentSelected || !agreed) {
    alert("Please complete the address, select a payment method, and agree to the terms.");
    return;
  }

  // Fill review popup
  reviewList.innerHTML = '';
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    reviewList.innerHTML += `
      <div class="review-item">
        <span>${item.name} × ${item.quantity}</span>
        <span>₱${(item.price * item.quantity).toFixed(2)}</span>
      </div>`;
  });

  reviewTotal.textContent = `PHP ${total.toFixed(2)}`;
  reviewPopup.classList.add('active');
});

// Close review popup
closeReview.addEventListener('click', () => {
  reviewPopup.classList.remove('active');
});

// Confirm → show confirm popup
reviewConfirm.addEventListener('click', () => {
  reviewPopup.classList.remove('active');
  confirmPopup.classList.add('active');
});

// Confirm final order
confirmBtn.addEventListener('click', () => {
  confirmPopup.classList.remove('active');
  successPopup.classList.add('active');
  localStorage.removeItem('cart');
  cart = [];
  renderCart();
});

// Cancel confirmation
cancelBtn.addEventListener('click', () => {
  confirmPopup.classList.remove('active');
});

// Done
doneBtn.addEventListener('click', () => {
  successPopup.classList.remove('active');
  window.location.href = 'home.html';
});

// View order
viewBtn.addEventListener('click', () => {
  window.location.href = 'order.html';
});