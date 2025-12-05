document.addEventListener("DOMContentLoaded", () => {

  const mainContent = document.getElementById("main-content");
  const popup = document.getElementById("product-popup");
  const popupImg = document.getElementById("popup-img");
  const popupName = document.getElementById("popup-name");
  const popupPrice = document.getElementById("popup-price");
  const popupDescription = document.getElementById("popup-desc");
  const quantity = document.getElementById("quantity");
  const addToBag = document.getElementById("add-to-bag");
  const closePopup = document.getElementById("close-popup");

  let selectedProduct = {};

  // Use the existing sections in HTML
  const sections = {
    "dailycare": document.querySelector("#dailycare .products"),
    "freshbreath": document.querySelector("#freshbreath .products"),
    "dentaltools": document.querySelector("#dentaltools .products")
  };

  // Fetch products JSON
  fetch("asset/data/products.json")
    .then(res => res.json())
    .then(products => renderProducts(products))
    .catch(err => console.error("Error loading JSON:", err));

  // Function to render all products
  function renderProducts(products) {
    products.forEach(product => {

      const div = document.createElement("div");
      div.classList.add("product");

      div.dataset.id = product.id;
      div.dataset.name = product.name;
      div.dataset.img = product.image;
      div.dataset.price = product.price;
      div.dataset.description = product.description;

      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <p>${product.name}</p>
          <span>PHP ${product.price.toFixed(2)}</span>
          <div class="rating"><i class="bi bi-star-fill"></i> 5.0</div>
        </div>
      `;

      // Append to correct category
      if(product.category && sections[product.category]) {
        sections[product.category].appendChild(div);
      }

      // Click event for popup
      div.addEventListener("click", () => {
        selectedProduct = product;
        popupImg.src = product.image;
        popupName.textContent = product.name;
        popupPrice.textContent = "PHP " + product.price.toFixed(2);
        popupDescription.textContent = product.description;
        quantity.textContent = 1;

        popup.classList.add("show");
        mainContent.classList.add("blur");
      });
    });
  }

  // Quantity buttons
  document.getElementById("increase").addEventListener("click", () => {
    quantity.textContent = parseInt(quantity.textContent) + 1;
  });

  document.getElementById("decrease").addEventListener("click", () => {
    if (parseInt(quantity.textContent) > 1) {
      quantity.textContent = parseInt(quantity.textContent) - 1;
    }
  });

  // Close popup
  closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
    mainContent.classList.remove("blur");
  });

  // Add to cart
  addToBag.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const qty = parseInt(quantity.textContent);

    const existing = cart.find(item => item.id === selectedProduct.id);

    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({ ...selectedProduct, quantity: qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    popup.classList.remove("show");
    mainContent.classList.remove("blur");

    alert(`Added to bag! Quantity: ${qty}`);
  });

});
