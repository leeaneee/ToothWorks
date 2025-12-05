document.addEventListener("DOMContentLoaded", function() {

  const loginForm = document.querySelector(".signForm");
  const inputs = loginForm.querySelectorAll("input");
  const errorMessages = loginForm.querySelectorAll(".error-message");
  const successMessage = loginForm.querySelector(".success-message");

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

    // nag cclear ng error
    errorMessages.forEach(msg => msg.textContent = "");
    inputs.forEach(input => input.style.border = "2px solid rgba(212, 178, 76, 0.8)");

    // pag invalid input may error message
    if (!inputs[0].value.trim() || !inputs[0].value.includes("@")) {
      errorMessages[0].textContent = "Invalid input";
      inputs[0].style.border = "2px solid red";
      valid = false;
    }

    // pag invalid input may error message
    if (!inputs[1].value.trim() || inputs[1].value.length < 6) {
      errorMessages[1].textContent = "Invalid input";
      inputs[1].style.border = "2px solid red";
      valid = false;
    }

    // kapag valid lahat mag ssuccess
    if (valid) {
      successMessage.textContent = "Login Successful!";
      successMessage.style.display = "block";

      // Balik sa homepage 
      setTimeout(() => {
        window.location.href = "home.html"; // replace with your homepage
      }, 1000);
    }
  });

});
