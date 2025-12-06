// const products = document.querySelectorAll(".product");
// const popup = document.getElementById("product-popup");
// const mainContent = document.getElementById("main-content");
// const popupImg = document.getElementById("popup-img");
// const popupName = document.getElementById("popup-name");
// const popupPrice = document.getElementById("popup-price");
// const quantity = document.getElementById("quantity");
// const addToBag = document.getElementById("add-to-bag");
// const closePopup = document.getElementById("close-popup");

// let selectedProduct = {};

// products.forEach((product) => {
//   product.addEventListener("click", () => {
//     selectedProduct = {
//       name: product.dataset.name,
//       price: parseFloat(product.dataset.price),
//       img: product.dataset.img,
//     };

//     popupImg.src = selectedProduct.img;
//     popupName.textContent = selectedProduct.name;
//     popupPrice.textContent = "PHP " + selectedProduct.price.toFixed(2);
//     quantity.textContent = 1;

//     popup.classList.add("show");
//     mainContent.classList.add("blur");
//   });
// });

// document.getElementById("increase").addEventListener("click", () => {
//   quantity.textContent = parseInt(quantity.textContent) + 1;
// });

// document.getElementById("decrease").addEventListener("click", () => {
//   if (parseInt(quantity.textContent) > 1)
//     quantity.textContent = parseInt(quantity.textContent) - 1;
// });

// closePopup.addEventListener("click", () => {
//   popup.classList.remove("show");
//   mainContent.classList.remove("blur");
// });

// addToBag.addEventListener("click", () => {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const qty = parseInt(quantity.textContent);

//   const existing = cart.find((item) => item.name === selectedProduct.name);

//   if (existing) {
//     existing.quantity += qty;
//   } else {
//     cart.push({
//       ...selectedProduct,
//       quantity: qty,
//     });
//   }
  

//   localStorage.setItem("cart", JSON.stringify(cart));

//   popup.classList.remove("show");
//   mainContent.classList.remove("blur");
//   alert(" Added to bag! Quantity: " + qty);

//   function addToCart(product) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const existingItem = cart.find(item => item.id === product.id);
//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     cart.push(product);
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));

//   alert(`${product.name} added to cart!`);
// }

// });

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

  //pag pinindot yung product
  products.forEach((product) => {
    product.addEventListener("click", () => {
      selectedProduct = {
        name: product.dataset.name,   
        price: parseFloat(product.dataset.price),  
        img: product.dataset.img,     
      };

      //thank you wilrow sa code
      popupImg.src = selectedProduct.img;
      popupName.textContent = selectedProduct.name;
      popupPrice.textContent = "PHP " + selectedProduct.price.toFixed(2);
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

