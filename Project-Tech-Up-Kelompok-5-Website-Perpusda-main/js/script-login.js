// Toggle tampilkan/sembunyikan password
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (togglePassword && passwordInput) {
  togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.getAttribute("type") === "password";
    passwordInput.setAttribute("type", isPassword ? "text" : "password");

    
    togglePassword.classList.toggle("fa-eye-slash");
    togglePassword.classList.toggle("fa-eye");
  });
}

// Validasi sederhana form login
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Username/email dan kata sandi wajib diisi!");
      return;
    }

    // TODO: ganti bagian ini dengan proses autentikasi/API sesungguhnya
    alert("Login berhasil! Selamat datang, " + username);
    // Contoh redirect setelah login:
    // window.location.href = "home.html";
  });
}
