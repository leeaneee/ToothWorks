document.getElementById("home").addEventListener("click", function () {
    window.location.href = "home.html"; 
});

document.getElementById("daily-care").addEventListener("click", function () {
    window.location.href = "dailyCare.html"; 
});

document.getElementById("fresh-breath").addEventListener("click", function () {
    window.location.href = "freshbreath.html"; 
});

document.getElementById("dental-tools").addEventListener("click", function () {
    window.location.href = "dentaltools.html"; 
});

document.getElementById("about").addEventListener("click", function () {
    window.location.href = "about.html"; 
});

document.getElementById("reviews").addEventListener("click", function () {
    window.location.href = "reviews.html"; 
});

document.getElementById("cart").addEventListener("click", function () {
    window.location.href = "order.html"; 
});

// Added proper redirect for Shop All
document.getElementById("shop-all").addEventListener("click", function () {
    window.location.href = "shop.html"; 
});

document.getElementById("user").addEventListener("click", function () {
    window.location.href = "profile.html"; 
});

document.getElementById("logout-link").addEventListener("click", function () {
    window.location.href = "signUp.html"; 
});

// Cart icon click
const cartIcon = document.getElementById('cart');
cartIcon.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'cart.html';
});

// Profile page - Order History button
const orderHistoryBtn = document.querySelector('.profile-buttons .profile-button:nth-child(2)');

if(orderHistoryBtn) {
  orderHistoryBtn.addEventListener('click', () => {
      window.location.href = 'order.html';
  });
}
