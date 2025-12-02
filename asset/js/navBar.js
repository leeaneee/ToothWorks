// Note:
// ang js file nato ay nag handle ng mga function ng lahat ng page 


document.getElementById("home").addEventListener("click", function () {
    window.location.href = "home.html"; 
});

document.getElementById("daily-care").addEventListener("click", function () {
    window.location.href = "dailyCare.html"; 
});

document.getElementById("fresh-breath").addEventListener("click", function () {
    window.location.href = "freshbreath.html"; 
});

document.getElementById("dental-tools").addEventListener("click", function () {
    window.location.href = "dentaltools.html"; 
});

document.getElementById("about").addEventListener("click", function () {
    window.location.href = "about.html"; 
});

document.getElementById("reviews").addEventListener("click", function () {
    window.location.href = "reviews.html"; 
});

document.getElementById("cart").addEventListener("click", function () {
    window.location.href = "order.html"; 
});

document.getElementById("shop-all").addEventListener("click", function () {
    window.location.href = window.location.href; 
});

document.getElementById("user").addEventListener("click", function () {
    window.location.href = "profile.html"; 
});

document.getElementById("logout-link").addEventListener("click", function () {
    window.location.href = "signUp.html"; 
});


