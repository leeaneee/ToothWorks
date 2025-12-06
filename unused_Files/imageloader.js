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
    const link = await getLink(""); 
    document.getElementById("tongue").src = link;
});

window.addEventListener("DOMContentLoaded", async () => {
    const link = await getLink("wax"); 
    document.getElementById("wax").src = link;
});

window.addEventListener("DOMContentLoaded", async () => {
    const link = await getLink("holder"); 
    document.getElementById("holder").src = link;
});

window.addEventListener("DOMContentLoaded", async () => {
    const link = await getLink("waterFlosser"); 
    document.getElementById("waterFlosser").src = link;
});

window.addEventListener("DOMContentLoaded", async () => {
    const link = await getLink("spray"); 
    document.getElementById("spray").src = link;
});

window.addEventListener("DOMContentLoaded", async () => {
    const link = await getLink("strips"); 
    document.getElementById("strips").src = link;
});

window.addEventListener("DOMContentLoaded", async () => {
    const link = await getLink("mint"); 
    document.getElementById("mint").src = link;
});

window.addEventListener("DOMContentLoaded", async () => {
    const link = await getLink("mouthwash"); 
    document.getElementById("mouthwash").src = link;
});

