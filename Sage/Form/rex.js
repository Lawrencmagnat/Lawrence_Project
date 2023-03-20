const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

function ValidateEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate email
  const emailValue = email.value;
  const isValidEmail = ValidateEmail(emailValue);

  // Validate password
  const passwordValue = password.value;
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(passwordValue);

  if (isValidEmail && isValidPassword) {
    alert("Form submitted successfully!");
  } else {
    alert("Please enter a valid email and password!");
  }
});

// how to validate a password and gmail?
// how to validate an email?



