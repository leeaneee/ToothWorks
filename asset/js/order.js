
const currentTab = document.getElementById("currentTab");
const historyTab = document.getElementById("historyTab");
const currentOrderSection = document.getElementById("currentOrder");
const orderHistorySection = document.getElementById("orderHistory");
const currentOrderBox = document.getElementById("currentOrderBox");
const historyBox = document.getElementById("historyBox");

currentTab.addEventListener("click", () => {
  currentTab.classList.add("active");
  historyTab.classList.remove("active");
  currentOrderSection.classList.add("active");
  orderHistorySection.classList.remove("active");
});

historyTab.addEventListener("click", () => {
  historyTab.classList.add("active");
  currentTab.classList.remove("active");
  orderHistorySection.classList.add("active");
  currentOrderSection.classList.remove("active");
});

// Load orders 
let currentOrders = JSON.parse(localStorage.getItem('currentOrder')) || [];
let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

function renderOrders() {
  // Current Orders 
  if (currentOrders.length === 0) {
    currentOrderBox.innerHTML = `
      <p class="no-orders">No current orders.</p>
      <button class="order-now-btn" onclick="window.location.href='Shop.html'">
        Order Now
      </button>
    `;
  } else {
    currentOrderBox.innerHTML = currentOrders.map((order, oIdx) => `
      <div class="current-order-detail">
        <h4>Order ID: ${order.id}</h4>
        <h4>Date: ${order.date}</h4>
        <h4>Address: ${order.address}</h4>
        <h4>Payment: ${order.payment}</h4>
        <h4>Total: PHP ${(parseFloat(order.total) || 0).toFixed(2)}</h4>
        <hr>
        ${order.items.map(item => {
          const itemPrice = parseFloat(item.price) || 0; 
          return `
            <div class="order-item">
              <img src="${item.img}" class="itemimage" alt="${item.name}">
              <span>${item.name} x ${item.quantity}</span>
              <span>PHP ${(itemPrice * item.quantity).toFixed(2)}</span>
            </div>
          `;
        }).join('')}
        <button class="transaction-complete-btn" data-index="${oIdx}">Transaction Complete</button>
      </div>
    `).join('');

    // Transaction Complete buttons
    const transactionBtns = currentOrderBox.querySelectorAll('.transaction-complete-btn');
    transactionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = e.target.dataset.index;

        orderHistory.push(currentOrders[index]);
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

        console.log("current orders "+currentOrders);
        console.log("order history "+orderHistory)

        currentOrders.splice(index, 1);
        localStorage.setItem('currentOrder', JSON.stringify(currentOrders));

        console.log("index "+index)

        renderOrders();
        alert("Transaction Completed! Order moved to history.");
      });
    });
  }

  if (orderHistory.length === 0) {
    historyBox.innerHTML = `<p class="no-orders">No order history.</p>`;
  } else {
    historyBox.innerHTML = orderHistory.map((order, idx) => `
      <div class="history-order-detail">
        <h4>Order ID: ${order.id}</h4>
        <h4>Date: ${order.date}</h4>
        <h4>Address: ${order.address}</h4>
        <h4>Payment: ${order.payment}</h4>
        <h4>Total: PHP ${(parseFloat(order.total) || 0).toFixed(2)}</h4>
        <hr>
        ${order.items.map(item => {
          const itemPrice = parseFloat(item.price) || 0; 
          return `
            <div class="order-item">
              <img src="${item.img}" class="itemimage" alt="${item.name}">
              <span>${item.name} x ${item.quantity}</span>
              <span>PHP ${(itemPrice * item.quantity).toFixed(2)}</span>
            </div>
          `;
        }).join('')}
        <button class="remove-history-btn" data-index="${idx}">Remove from History</button>
      </div>
    `).join('');

    const removeBtns = historyBox.querySelectorAll('.remove-history-btn');
    removeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        if (confirm("Are you sure you want to remove this order from history?")) {
          orderHistory.splice(index, 1);
          localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
          renderOrders();
        }
      });
    });
  }

  console.log("Current Orders:", currentOrders);
  console.log("Order History:", orderHistory);
}

renderOrders();
