fetch("asset/data/video.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("video-container");
    const vid = data.video;

    const video = document.createElement("video");
    video.src = vid.src;
    video.autoplay = vid.autoplay || false;
    video.controls = vid.controls || false;
    video.loop = vid.loop || false;
    video.muted = true; // required for autoplay
    video.classList.add("clinic-video");

    container.appendChild(video);
  })
  .catch(err => console.error("Error loading video JSON:", err));

function shopnowaction() {
    alert("Shop Now clicked!");
}
