
document.addEventListener("DOMContentLoaded", function() {

  const signupForm = document.querySelector(".signForm");
  const inputs = signupForm.querySelectorAll("input");
  const errorMessages = signupForm.querySelectorAll(".error-message");
  const successMessage = signupForm.querySelector(".success-message");

  signupForm.addEventListener("submit", function(e) {
    e.preventDefault(); // para di matic submit

    let valid = true;

    // Clear previous errors
    errorMessages.forEach(msg => {
      msg.textContent = "";
      msg.style.display = "none";
    });
    inputs.forEach(input => input.style.border = "2px solid rgba(212, 178, 76, 0.8)");
    successMessage.style.display = "none";

    // First Name
    if (inputs[0].value === "") {
      errorMessages[0].textContent = "Invalid input";
      errorMessages[0].style.display = "block";
      inputs[0].style.border = "2px solid red";
      valid = false;
    }

    // Last Name
    if (inputs[1].value === "") {
      errorMessages[1].textContent = "Invalid input";
      errorMessages[1].style.display = "block";
      inputs[1].style.border = "2px solid red";
      valid = false;
    }

    // Email
    const email = inputs[2].value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
      errorMessages[2].textContent = "Invalid input";
      errorMessages[2].style.display = "block";
      inputs[2].style.border = "2px solid red";
      valid = false;
    }

    // Password
    if (inputs[3].value === "" || inputs[3].value.length < 6) {
      errorMessages[3].textContent = "Invalid input";
      errorMessages[3].style.display = "block";
      inputs[3].style.border = "2px solid red";
      valid = false;
    }

    // Show success message 
    if (valid) {
      successMessage.textContent = "Sign Up Successful!";
      successMessage.style.display = "block";

      // Clear input after mag sign up
      inputs.forEach(input => input.value = "");

      // back 2 home
      setTimeout(function() {
        window.location.href = "home.html";
      }, 500);
    }
  });

});