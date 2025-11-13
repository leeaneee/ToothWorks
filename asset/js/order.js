// Tab switching
const currentTab = document.getElementById("currentTab");
const historyTab = document.getElementById("historyTab");
const currentOrder = document.getElementById("currentOrder");
const orderHistory = document.getElementById("orderHistory");

currentTab.addEventListener("click", () => {
  currentTab.classList.add("active");
  historyTab.classList.remove("active");
  currentOrder.classList.add("active");
  orderHistory.classList.remove("active");
});

historyTab.addEventListener("click", () => {
  historyTab.classList.add("active");
  currentTab.classList.remove("active");
  orderHistory.classList.add("active");
  currentOrder.classList.remove("active");
});

// Dummy data (change these arrays later when integrated with cart)
const currentOrderItems = []; // Empty = no current orders
const orderHistoryItems = []; // Empty = no history

const currentOrderBox = document.getElementById("currentOrderBox");
const historyBox = document.getElementById("historyBox");

function renderOrders() {
  // ===== Current Order =====
  if (currentOrderItems.length === 0) {
    currentOrderBox.innerHTML = `
      <p class="no-orders">No orders yet.</p>
      <button class="order-now-btn" onclick="window.location.href='shop.html'">
        Order Now
      </button>
    `;
  } else {
    // Show items and hide button
    currentOrderBox.innerHTML = currentOrderItems
      .map(item => `
        <div class="order-item">
          <span>${item.name}</span>
          <span>$${item.price.toFixed(2)}</span>
        </div>
      `)
      .join("");
  }

  // ===== Order History =====
  if (orderHistoryItems.length === 0) {
    historyBox.innerHTML = `<p class="no-orders">No order history.</p>`;
  } else {
    historyBox.innerHTML = orderHistoryItems
      .map(order => `
        <div class="order-item">
          <span>${order.name}</span>
          <span>$${order.price.toFixed(2)}</span>
        </div>
      `)
      .join("");
  }
}

// Initial render
renderOrders();