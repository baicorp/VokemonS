document.addEventListener("DOMContentLoaded", () => {
  const signInForm = document.getElementById("signin-form");
  const passwordInput = document.getElementById("password");
  const passwordBtn = document.getElementById("passwordBtn");

  passwordBtn.addEventListener("click", () => {
    togglePasswordVisibility();
  });

  signInForm.addEventListener("submit", (event) => {
    if (!validateSignInForm()) {
      event.preventDefault();
      return;
    }
    alert("succes");
  });

  //form validation
  function validateSignInForm() {
    let isValid = true;

    //validate username
    const nameInput = document.getElementById("userName");
    if (nameInput.value.trim() === "") {
      isValid = false;
      return alert("Name is required");
    }

    //validate password
    const passwordInput = document.getElementById("password");
    if (passwordInput.value.trim().length < 6) {
      isValid = false;
      return alert("Password must be at least 6 characters long");
    }
    return isValid;
  }

  //show password
  function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }
});
