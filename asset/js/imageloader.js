async function getLink(name) {
  const res = await fetch("asset/json/images.json");
  const link = await res.json();
  return link[name]; 
}

window.addEventListener("DOMContentLoaded", async () => {
    const link = await getLink("toothbrush"); 
    document.getElementById("toothbrush").src = link;
});

window.addEventListener("DOMContentLoaded", async () => {
    const link = await getLink("toothpaste"); 
    document.getElementById("toothpaste").src = link;
});

window.addEventListener("DOMContentLoaded", async () => {
    const link = await getLink("floss"); 
    document.getElementById("floss").src = link;
});

window.addEventListener("DOMContentLoaded", async () => {
    const link = await getLink("tongue"); 
    document.getElementById("tongue").src = link;
});
