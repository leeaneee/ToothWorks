document.addEventListener("DOMContentLoaded", function() {

  const signUpForm = document.querySelector(".signForm");
  const inputs = signUpForm.querySelectorAll("input");
  const errorMessages = signUpForm.querySelectorAll(".error-message");
  const successMessage = signUpForm.querySelector(".success-message");

  signUpForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

<<<<<<< Updated upstream
    // Clear previous errors
=======
    // Clear
>>>>>>> Stashed changes
    errorMessages.forEach(msg => msg.textContent = "");
    inputs.forEach(input => input.style.border = "2px solid rgba(212, 178, 76, 0.8)");

    // Check first name
<<<<<<< Updated upstream
    if (inputs[0].value == "") {
=======
    if (!inputs[0].value) {
>>>>>>> Stashed changes
      errorMessages[0].textContent = "Invalid input";
      inputs[0].style.border = "2px solid red";
      valid = false;
    }

    // Check last name
<<<<<<< Updated upstream
    if (inputs[1].value == "") {
=======
    if (!inputs[1].value) {
>>>>>>> Stashed changes
      errorMessages[1].textContent = "Invalid input";
      inputs[1].style.border = "2px solid red";
      valid = false;
    }

    // Check email
<<<<<<< Updated upstream
    if (inputs[2].value == "" || !inputs[2].value.includes("@")) {
=======
    if (!inputs[2].value.includes("@")) {
>>>>>>> Stashed changes
      errorMessages[2].textContent = "Invalid input";
      inputs[2].style.border = "2px solid red";
      valid = false;
    }

<<<<<<< Updated upstream
    // Check password
    if (inputs[3].value == "" || inputs[3].value.length < 6) {
=======
    // Check password 
    if (inputs[3].value.length < 6) {
>>>>>>> Stashed changes
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
