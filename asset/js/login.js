document.addEventListener("DOMContentLoaded", function() {

  const loginForm = document.querySelector(".loginForm");
  const inputs = loginForm.querySelectorAll("input");
  const errorMessages = loginForm.querySelectorAll(".error-message");
  const successMessage = loginForm.querySelector(".success-message");

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); 

    let valid = true;

    // Clear 
    errorMessages.forEach(msg => {
      msg.textContent = "";
      msg.style.display = "none";
    });
    inputs.forEach(input => input.style.border = "2px solid rgba(212, 178, 76, 0.8)");
    successMessage.style.display = "none";

    // EMAIL VALIDATION
    const email = inputs[0].value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !emailRegex.test(email)) {
      errorMessages[0].textContent = "Invalid input";
      errorMessages[0].style.display = "block";
      inputs[0].style.border = "2px solid red";
      valid = false;
    }

    // PASSWORD VALIDATION 
    const password = inputs[1].value.trim();

    if (password === "" || password.length < 6) {
      errorMessages[1].textContent = "Invalid input";
      errorMessages[1].style.display = "block";
      inputs[1].style.border = "2px solid red";
      valid = false;
    }

    // pag successful
    if (valid) {
      successMessage.textContent = "Log in Successfully!";
      successMessage.style.display = "block";

    

      // back 2 homepage
      setTimeout(function() {
        window.location.href = "home.html"; 
      }, 500);
    }

  });

});


