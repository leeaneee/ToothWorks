// PROFILE DROPDOWN
const profileIcon = document.querySelector(".profile-icon");
const profileMenu = document.querySelector(".profile-menu");

// Toggle dropdown on icon click
profileIcon.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent the click from bubbling up
  profileMenu.classList.toggle("show");
});

// Close dropdown if clicked outside
document.addEventListener("click", () => {
  profileMenu.classList.remove("show");
});

// Ensure links inside dropdown work normally
profileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href !== "#") {
      // Navigate to the link normally
      window.location.href = href;
    } else {
      // For links with "#" just prevent default
      e.preventDefault();
    }
  });
});
