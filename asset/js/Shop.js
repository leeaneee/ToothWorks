const products = document.querySelectorAll(".product");
const popup = document.getElementById("product-popup");
const mainContent = document.getElementById("main-content");
const popupImg = document.getElementById("popup-img");
const popupName = document.getElementById("popup-name");
const popupPrice = document.getElementById("popup-price");
const quantity = document.getElementById("quantity");
const addToBag = document.getElementById("add-to-bag");
const closePopup = document.getElementById("close-popup");

let selectedProduct = {};

products.forEach((product) => {
  product.addEventListener("click", () => {
    selectedProduct = {
      name: product.dataset.name,
      price: parseFloat(product.dataset.price),
      img: product.dataset.img,
    };

    popupImg.src = selectedProduct.img;
    popupName.textContent = selectedProduct.name;
    popupPrice.textContent = "PHP " + selectedProduct.price.toFixed(2);
    quantity.textContent = 1;

    popup.classList.add("show");
    mainContent.classList.add("blur");
  });
});

document.getElementById("increase").addEventListener("click", () => {
  quantity.textContent = parseInt(quantity.textContent) + 1;
});

document.getElementById("decrease").addEventListener("click", () => {
  if (parseInt(quantity.textContent) > 1)
    quantity.textContent = parseInt(quantity.textContent) - 1;
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
  mainContent.classList.remove("blur");
});

addToBag.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const qty = parseInt(quantity.textContent);

  const existing = cart.find((item) => item.name === selectedProduct.name);

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      ...selectedProduct,
      quantity: qty,
    });
  }
  

  localStorage.setItem("cart", JSON.stringify(cart));

  popup.classList.remove("show");
  mainContent.classList.remove("blur");
  alert(" Added to bag! Quantity: " + qty);

  function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.name} added to cart!`);
}

});
