
window.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("asset/json/items.json");
  const data = await res.json();

  for (const [key, item] of Object.entries(data)) {
    const imgEl = document.getElementById(key);
    if (!imgEl) continue;

    imgEl.src = item.img;

    const infoEl = document.getElementById(`${key}-info`);
    const priceEl = document.getElementById(`${key}-price`);
    const ratingEl = document.getElementById(`${key}-rating`);

    if (infoEl) infoEl.textContent = item.info;
    if (priceEl) priceEl.textContent = item.price;
    if (ratingEl) ratingEl.textContent = item.rating;
  }
});

async function getImage()
{

}

async function getPrice()
{

}

async function getName()
{

}
