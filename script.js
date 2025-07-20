document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const inputPassword = document.getElementById('password').value.trim();

  // Set your secret code here
  const SECRET_CODE = "armie";

  if (inputPassword === SECRET_CODE) {
    // Redirect to your main page (e.g., welcome.html)
    window.location.href = "welcome.html";
  } else {
    alert("Oops! The secret code is incorrect. Try again, my love! 💖");
  }
});
