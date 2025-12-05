document.addEventListener("DOMContentLoaded", function() {

  const loginForm = document.querySelector(".logForm");
  const inputs = loginForm.querySelectorAll("input");
  const errorMessages = loginForm.querySelectorAll(".error-message");
  const successMessage = loginForm.querySelector(".success-message");

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // nagpprevent sa pag submit matic

    let valid = true;

    // Clear 
    errorMessages.forEach(msg => msg.textContent = "");
    inputs.forEach(input => input.style.border = "2px solid rgba(212, 178, 76, 0.8)");

    // check email
    if (inputs[0].value == "" || !inputs[0].value.includes("@")) {
      errorMessages[0].textContent = "Invalid input";
      inputs[0].style.border = "2px solid red";
      valid = false;
    }

    // check password
    if (inputs[1].value == "" || inputs[1].value.length < 6) {
      errorMessages[1].textContent = "Invalid input";
      inputs[1].style.border = "2px solid red";
      valid = false;
    }

<<<<<<< Updated upstream
    // successful login
=======
    // Success
>>>>>>> Stashed changes
    if (valid) {
      successMessage.textContent = "Login Successful!";
      successMessage.style.display = "block";

<<<<<<< Updated upstream
      // balik homepage
      setTimeout(function() {
        window.location.href = "home.html"; 
      }, 500);
=======
      setTimeout(() => {
        window.location.href = "home.html"; // balik home
      }, 1000);
>>>>>>> Stashed changes
    }

  });

});
