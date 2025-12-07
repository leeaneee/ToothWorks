
window.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("asset/json/items.json");
  const data = await res.json();

  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const productId = product.id;

    if (data[productId]) {
      const item = data[productId];

      product.dataset.name = item.info;
      product.dataset.price = item.price;
      product.dataset.img = item.img;

      const imgEl = document.getElementById(`${productId}-img`);
      const infoEl = document.getElementById(`${productId}-info`);
      const priceEl = document.getElementById(`${productId}-price`);
      const ratingEl = document.getElementById(`${productId}-rating`);

      // console.log(imgEl);
      // console.log(infoEl);
      // console.log(priceEl);
      // console.log(ratingEl);

      if (imgEl) imgEl.src = item.img;
      if (infoEl) infoEl.textContent = item.info;
      if (priceEl) priceEl.textContent = item.price;
      if (ratingEl) ratingEl.textContent = item.rating;
    }
  });

  const popup = document.getElementById("product-popup");
  const mainContent = document.getElementById("main-content");
  const popupImg = document.getElementById("popup-img");
  const popupName = document.getElementById("popup-name");
  const popupPrice = document.getElementById("popup-price");
  const quantity = document.getElementById("quantity");
  const closePopup = document.getElementById("close-popup");
  const addToBag = document.getElementById("add-to-bag");  

  let selectedProduct = {}; 

  products.forEach((product) => {
  product.addEventListener("click", () => {
    selectedProduct = {
      name: product.dataset.name,
      price: product.dataset.price,  // ✔ treat price as a string
      img: product.dataset.img,
    };

    popupImg.src = selectedProduct.img;
    popupName.textContent = selectedProduct.name;
    popupPrice.textContent = selectedProduct.price; // ✔ show the string directly
    quantity.textContent = 1;

    popup.classList.add("show");
    mainContent.classList.add("blur");
  });
  });

  // close
  closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
    mainContent.classList.remove("blur");
  });

  document.getElementById("increase").addEventListener("click", () => {
    quantity.textContent = parseInt(quantity.textContent) + 1;
  });

  document.getElementById("decrease").addEventListener("click", () => {
    if (parseInt(quantity.textContent) > 1) {
      quantity.textContent = parseInt(quantity.textContent) - 1;
    }
  });

  //add sa cart 
  addToBag.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const qty = parseInt(quantity.textContent);

    const existing = cart.find((item) => item.name === selectedProduct.name);

    // console.log(cart);
    // console.log(qty);
    // console.log(existing);

    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({
        ...selectedProduct,
        quantity: qty,
      });
    }

    //local
    localStorage.setItem("cart", JSON.stringify(cart));

    popup.classList.remove("show");
    mainContent.classList.remove("blur");

    alert(`${selectedProduct.name} added to cart!`);
  });
});