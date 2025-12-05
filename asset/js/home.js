// Navbar links handling (your existing code)
async function getLink(key) {
  const res = await fetch("asset/json/navbarlinks.json");
  const data = await res.json();
  return data[key];
}

document.getElementById("home").addEventListener("click", async () => {
  window.location.href = await getLink("home");
});
document.getElementById("daily-care").addEventListener("click", async () => {
  window.location.href = await getLink("daily-care");
});
document.getElementById("fresh-breath").addEventListener("click", async () => {
  window.location.href = await getLink("fresh-breath");
});
document.getElementById("dental-tools").addEventListener("click", async () => {
  window.location.href = await getLink("dental-tools");
});
document.getElementById("about").addEventListener("click", async () => {
  window.location.href = await getLink("about");
});
document.getElementById("reviews").addEventListener("click", async () => {
  window.location.href = await getLink("reviews");
});
document.getElementById("cart").addEventListener("click", async () => {
  window.location.href = await getLink("cart");
});
document.getElementById("user").addEventListener("click", async () => {
  window.location.href = await getLink("user");
});
document.getElementById("logout-link").addEventListener("click", async () => {
  window.location.href = await getLink("logout-link");
});

function shopNowAction() {
  window.location.href = "shop.html";
}

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("video-container");
    const video = document.createElement("video");
    video.src = "asset/video/home.mp4"; // direct path
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.classList.add("clinic-video");
    container.appendChild(video);
});
