// Note:
// ang js file nato ay nag handle ng mga function ng lahat ng page 

async function getLink(key) 
{
  const res = await fetch("asset/json/navbarlinks.json");
  const data = await res.json();

  return data[key]; // returns the value of that key
}

document.getElementById("home").addEventListener("click", async function () {
    const link = await getLink("home");
    window.location.href = link; 
});

document.getElementById("daily-care").addEventListener("click", async function () {
    const link = await getLink("daily-care");
    window.location.href = link; 
});

document.getElementById("fresh-breath").addEventListener("click", async function () {
    const link = await getLink("fresh-breath");
    window.location.href = link; 
});

document.getElementById("dental-tools").addEventListener("click", async function () {
    const link = await getLink("dental-tools");
    window.location.href = link; 
});

document.getElementById("about").addEventListener("click", async function () {
    const link = await getLink("about");
    window.location.href = link; 
});

document.getElementById("reviews").addEventListener("click", async function () {
    const link = await getLink("reviews");
    window.location.href = link; 
});

document.getElementById("cart").addEventListener("click", async function () {
    const link = await getLink("cart");
    window.location.href = link; 
});

document.getElementById("shop-all").addEventListener("click", async function () {
    window.location.href = window.location.href; // this does'nt not need it
});

document.getElementById("user").addEventListener("click", async function () {
    const link = await getLink("user");
    window.location.href = link; 
});

document.getElementById("logout-link").addEventListener("click", async function () {
    const link = await getLink("logout-link");
    window.location.href = link; 
});


// Redirect "Order History" button to order page
const orderHistoryBtn = document.querySelector('.profile-buttons .profile-button:nth-child(2)');

orderHistoryBtn.addEventListener("click", async function() {
    const link = await getLink("order"); // fetch the order page link
    window.location.href = link;
});
