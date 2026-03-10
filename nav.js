import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBNuCWtVCpC2HmkncirONfPEUpICHAFJc0",
  authDomain: "lizaaccounting-d48b7.firebaseapp.com",
  projectId: "lizaaccounting-d48b7",
  storageBucket: "lizaaccounting-d48b7.firebasestorage.app",
  messagingSenderId: "407944794362",
  appId: "1:407944794362:web:c646f7670a8717a3fab943"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  
  const authOnly = document.querySelectorAll(".auth-only");
  const guestOnly = document.querySelectorAll(".guest-only");
  const logoutBtn = document.getElementById("logoutBtn");

  // defaultně schovat auth-only
  authOnly.forEach(el => el.style.display = "none");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Uživatel je přihlášen
      authOnly.forEach(el => el.style.display = "inline-block");
      guestOnly.forEach(el => el.style.display = "none");
    } else {
      // Uživatel není přihlášen
      authOnly.forEach(el => el.style.display = "none");
      guestOnly.forEach(el => el.style.display = "inline-block");
    }
  });

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth);
      window.location.href = "login.html";
    });
  }
});


