// ================================
// TOGGLE PASSWORD
// ================================

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPasswordInput = document.getElementById("confirm-password");

// Password utama
if (togglePassword && passwordInput) {
  togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";

    togglePassword.classList.toggle("fa-eye-slash");
    togglePassword.classList.toggle("fa-eye");
  });
}

// Konfirmasi password
if (toggleConfirmPassword && confirmPasswordInput) {
  toggleConfirmPassword.addEventListener("click", () => {
    const isPassword = confirmPasswordInput.type === "password";

    confirmPasswordInput.type = isPassword ? "text" : "password";

    toggleConfirmPassword.classList.toggle("fa-eye-slash");
    toggleConfirmPassword.classList.toggle("fa-eye");
  });
}

// ================================
// VALIDASI FORM REGISTER
// ================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Validasi field kosong
    if (
      fullname === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      username === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Semua field wajib diisi!");
      return;
    }

    // Validasi password minimal
    if (password.length < 6) {
      alert("Kata sandi minimal 6 karakter!");
      return;
    }

    // Validasi password cocok
    if (password !== confirmPassword) {
      alert("Konfirmasi kata sandi tidak cocok!");
      return;
    }

    // Validasi email sederhana
    if (!email.includes("@") || !email.includes(".")) {
      alert("Format email tidak valid!");
      return;
    }

    // Validasi nomor HP hanya angka
    if (!/^[0-9]+$/.test(phone)) {
      alert("Nomor HP hanya boleh angka!");
      return;
    }

    // Simulasi berhasil
    alert("Pendaftaran berhasil! Selamat datang, " + fullname);

    // Redirect contoh
    // window.location.href = "login.html";
  });
}
