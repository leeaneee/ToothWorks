document.addEventListener("DOMContentLoaded", function() {

  const signUpForm = document.querySelector(".signForm");
  const inputs = signUpForm.querySelectorAll("input");
  const errorMessages = signUpForm.querySelectorAll(".error-message");
  const successMessage = signUpForm.querySelector(".success-message");

  signUpForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    errorMessages.forEach(msg => msg.textContent = "");
    inputs.forEach(input => input.style.border = "2px solid rgba(212, 178, 76, 0.8)");

    // Check first name
    if (inputs[0].value == "") {
    errorMessages.forEach(msg => msg.textContent = "");
    inputs.forEach(input => input.style.border = "2px solid rgba(212, 178, 76, 0.8)");

    // Validate first name
    if (!inputs[0].value.trim()) {
      errorMessages[0].textContent = "Invalid input";
      inputs[0].style.border = "2px solid red";
      valid = false;
    }

    // Check last name
    if (inputs[1].value == "") {

    // Validate last name
    if (!inputs[1].value.trim()) {
      errorMessages[1].textContent = "Invalid input";
      inputs[1].style.border = "2px solid red";
      valid = false;
    }

    // Check email
    if (inputs[2].value == "" || !inputs[2].value.includes("@")) {
    // Validate email
    if (!inputs[2].value.includes("@")) {
      errorMessages[2].textContent = "Invalid input";
      inputs[2].style.border = "2px solid red";
      valid = false;
    }

    // Check password
    if (inputs[3].value == "" || inputs[3].value.length < 6) {
    // Validate password 
    if (inputs[3].value.length < 6) {
      errorMessages[3].textContent = "Invalid input";
      inputs[3].style.border = "2px solid red";
      valid = false;
    }

    // If all valid
    if (valid) {
      successMessage.textContent = "Sign Up Successful!";
      successMessage.style.display = "block";

      // Redirect to homepage
      setTimeout(() => {
        window.location.href = "home.html"; 
      }, 500);
    }
  });

});
