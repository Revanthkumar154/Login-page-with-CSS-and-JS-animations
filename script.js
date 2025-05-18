document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  const validUsername = "admin";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    // Clear any error and redirect
    errorMsg.textContent = "";
    window.location.href = "main.html";
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".hero-text");

  // Delay added just to see the effect clearly on load
  setTimeout(() => {
    text.classList.add("visible");
  }, 300);
});
document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".text");

  // Delay added just to see the effect clearly on load
  setTimeout(() => {
    text.classList.add("visible");
  }, 300);
});