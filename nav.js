import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

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

// Po načtení nav HTML počkej, až existují tlačítka
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  const loginLink = document.getElementById("loginLink");
  const registerLink = document.getElementById("registerLink");
  const authOnlyElements = document.querySelectorAll(".auth-only");

  // Výchozí nastavení
  authOnlyElements.forEach(el => el.style.display = "none");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Uživatel je přihlášen
      loginLink.style.display = "none";
      registerLink.style.display = "none";

      authOnlyElements.forEach(el => el.style.display = "inline-block");
    } else {
      // Uživatel není přihlášen
      loginLink.style.display = "inline-block";
      registerLink.style.display = "inline-block";

      authOnlyElements.forEach(el => el.style.display = "none");
    }
  });

  // Odhlášení
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth);
      window.location.href = "login.html";
    });
  }
});
