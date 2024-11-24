// const signUpButton = document.getElementById("toSignUp");
// const signInButton = document.getElementById("toSignIn");
// const signInForm = document.getElementById("signInForm");
// const signUpForm = document.getElementById("signUpForm");

// // Show Signup Form
// signUpButton.addEventListener("click", () => {
//   signInForm.classList.remove("active-form");
//   signInForm.classList.add("inactive-form");
//   signUpForm.classList.remove("inactive-form");
//   signUpForm.classList.add("active-form");
// });

// // Show Login Form
// signInButton.addEventListener("click", () => {
//   signUpForm.classList.remove("active-form");
//   signUpForm.classList.add("inactive-form");
//   signInForm.classList.remove("inactive-form");
//   signInForm.classList.add("active-form");
// });

// // Signup Logic
// signUpForm.addEventListener("submit", (e) => {
//   e.preventDefault(); // Prevents form from submitting
//   const email = signUpForm.querySelector("input[type='email']").value;
//   const password = signUpForm.querySelector("input[type='password']").value;

//   if (email && password) {
//     // Store user data in local storage
//     localStorage.setItem("userEmail", email);
//     localStorage.setItem("userPassword", password);
//     alert("Signup successful! You can now log in.");
//     window.location.href = "home.html";
//     // Switch to login form after successful signup
//     signUpForm.classList.add("inactive-form");
//     signInForm.classList.remove("inactive-form");
//   } else {
//     alert("Please fill in all fields to sign up.");
//   }
// });

// // Login Logic
// signInForm.addEventListener("submit", (e) => {
//   e.preventDefault(); // Prevents form from submitting
//   const email = signInForm.querySelector("input[type='email']").value;
//   const password = signInForm.querySelector("input[type='password']").value;

//   // Retrieve user data from local storage
//   const storedEmail = localStorage.getItem("userEmail");
//   const storedPassword = localStorage.getItem("userPassword");

//   if (email === storedEmail && password === storedPassword) {
//     localStorage.setItem("isLoggedIn", "true");
//     alert("Login successful! Welcome back.");
//     window.location.href = "home.html";
//   } else {
//     alert("Invalid email or password.");
//   }
// });

// document.getElementById("logoutButton").addEventListener("click", () => {
//   // Clear the login status
//   localStorage.removeItem("isLoggedIn");
//   alert("You have been logged out.");

//   // Redirect to the login page
//   window.location.href = "login.html"; // Make sure this points to your login page
// });

// document.addEventListener("DOMContentLoaded", () => {
//   if (localStorage.getItem("isLoggedIn") === "true") {
//     window.location.href = "home.html"; // Redirect if already logged in
//   }
// });

const signUpButton = document.getElementById("toSignUp");
const signInButton = document.getElementById("toSignIn");
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");

// Show Signup Form
signUpButton.addEventListener("click", () => {
  signInForm.classList.remove("active-form");
  signInForm.classList.add("inactive-form");
  signUpForm.classList.remove("inactive-form");
  signUpForm.classList.add("active-form");
});

// Show Login Form
signInButton.addEventListener("click", () => {
  signUpForm.classList.remove("active-form");
  signUpForm.classList.add("inactive-form");
  signInForm.classList.remove("inactive-form");
  signInForm.classList.add("active-form");
});

// Signup Logic
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents form from submitting
  const email = signUpForm.querySelector("input[type='email']").value;
  const password = signUpForm.querySelector("input[type='password']").value;

  if (email && password) {
    // Store user data in local storage permanently
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("isLoggedIn", "true"); // Set login status
    alert("Signup successful! You are now logged in.");
    window.location.href = "home.html"; // Redirect to home page after signup
  } else {
    alert("Please fill in all fields to sign up.");
  }
});

// Login Logic
signInForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents form from submitting
  const email = signInForm.querySelector("input[type='email']").value;
  const password = signInForm.querySelector("input[type='password']").value;

  // Retrieve user data from local storage
  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    localStorage.setItem("isLoggedIn", "true"); // Update login status
    alert("Login successful! Welcome back.");
    window.location.href = "home.html";
  } else {
    alert("Invalid email or password.");
  }
});


// Logout Logic
document.getElementById("logoutButton").addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn"); // Clear only the login status
  alert("You have been logged out.");
  window.location.href = "login.html"; // Redirect to the login page
});

// Auto-login if already logged in
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "home.html"; // Redirect if already logged in
  }
});
