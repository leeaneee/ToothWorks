window.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch JSON data
    const res = await fetch("asset/json/items.json");
    const data = await res.json();

    // Select all products
    const products = document.querySelectorAll(".product");
    const popup = document.getElementById("product-popup");
    const popupImg = document.getElementById("popup-img");
    const popupName = document.getElementById("popup-name");
    const popupPrice = document.getElementById("popup-price");
    const quantityEl = document.getElementById("quantity");
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const addToBagBtn = document.getElementById("add-to-bag");
    const closePopupBtn = document.getElementById("close-popup");

    // Populate products dynamically
    products.forEach(productEl => {
      const productKey = productEl.dataset.nameKey; 
      const item = data[productKey];
      if (!item) return;

      // Update product info
      productEl.querySelector("img").src = item.img;
      productEl.querySelector(".product-info p").textContent = item.info;
      productEl.querySelector(".product-info span").textContent = item.price;
      productEl.querySelector(".product-info .rating").textContent = item.rating;

      // Open popup on click
      productEl.addEventListener("click", () => {
        popupImg.src = item.img;
        popupName.textContent = productKey; 
        popupPrice.textContent = item.price;
        quantityEl.textContent = "1";
        popup.style.display = "flex";

        let quantity = 1;

        decreaseBtn.onclick = () => {
          if (quantity > 1) {
            quantity--;
            quantityEl.textContent = quantity;
          }
        };

        increaseBtn.onclick = () => {
          quantity++;
          quantityEl.textContent = quantity;
        };

        addToBagBtn.onclick = () => {
          alert(`${quantity} x ${productKey} added to your bag!`);
        };
      });
    });

    // Close popup
    closePopupBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

    // Close popup when clicking outside content
    popup.addEventListener("click", e => {
      if (e.target === popup) popup.style.display = "none";
    });

  } catch (err) {
    console.error("Failed to load products:", err);
  }
});
