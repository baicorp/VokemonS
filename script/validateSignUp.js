document.addEventListener("DOMContentLoaded", () => {
  const singUpForm = document.getElementById("signup-form");

  const passwordInput = document.getElementById("password");
  const passwordBtn = document.getElementById("passwordBtn");
  const repeatPasswordInput = document.getElementById("repeatPassword");
  const repeatPasswordInputBtn = document.getElementById("repeatPasswordBtn");

  passwordBtn.addEventListener("click", () => {
    togglePasswordVisibility();
  });

  repeatPasswordInputBtn.addEventListener("click", () => {
    togglePasswordRepeatVisibility();
  });

  singUpForm.addEventListener("submit", (event) => {
    if (!validateSignUpForm()) {
      event.preventDefault();
      return;
    }
    alert("succes");
  });

  //validate password
  function validateSignUpForm() {
    let isValid = true;

    // Validate Name
    const nameInput = document.getElementById("userName");
    if (nameInput.value.trim() === "") {
      isValid = false;
      return alert("Name is required");
    }

    // Validate Email
    const emailInput = document.getElementById("email");
    if (emailInput.value.trim() === "") {
      isValid = false;
      return alert("Invalid email address");
    }

    // Validate Gender
    const genderSelect = document.getElementsByName("gender")[0];
    if (genderSelect.value === "Gender") {
      isValid = false;
      return alert("Please select a gender");
    }

    // Validate Password
    const passwordInput = document.getElementById("password");
    if (passwordInput.value.trim().length < 6) {
      isValid = false;
      return alert("Password must be at least 6 characters long");
    }

    // Validate Repeat Password
    const repeatPasswordInput = document.getElementById("repeatPassword");
    if (repeatPasswordInput.value.trim() !== passwordInput.value.trim()) {
      isValid = false;
      return alert("Passwords do not match");
    }

    // Validate Terms and Conditions checkbox
    const termsCheckbox = document.querySelector('input[type="checkbox"]');
    if (!termsCheckbox.checked) {
      isValid = false;
      return alert("Please agree to the Terms and Conditions");
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

  //show password
  function togglePasswordRepeatVisibility() {
    if (repeatPasswordInput.type === "password") {
      repeatPasswordInput.type = "text";
    } else {
      repeatPasswordInput.type = "password";
    }
  }
});
