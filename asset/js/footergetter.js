async function loadSocialLinks() {
  try {
    const res = await fetch("asset/json/footer.json");
    if (!res.ok) throw new Error("Network response was not ok");

    const links = await res.json();
    console.log("Links loaded:", links); // check if JSON is loaded

    for (const id in links) {
      const el = document.getElementById(id);
      if (el) el.href = links[id];
      else console.warn(`Element with id ${id} not found`);
    }
  } catch (err) {
    console.error("Failed to load social links:", err);
  }
}

window.addEventListener("DOMContentLoaded", loadSocialLinks);
