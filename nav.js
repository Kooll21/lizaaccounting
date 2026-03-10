// nav.js
import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

function setDisplay(el, value) {
  if (el) el.style.display = value;
}

function updateMenu(user) {
  const authOnly = document.querySelectorAll(".auth-only");
  const guestOnly = document.querySelectorAll(".guest-only");

  if (user) {
    authOnly.forEach(el => setDisplay(el, "inline-flex"));
    guestOnly.forEach(el => setDisplay(el, "none"));
  } else {
    authOnly.forEach(el => setDisplay(el, "none"));
    guestOnly.forEach(el => setDisplay(el, "inline-flex"));
  }
}

function wireLogout() {
  const logoutBtn = document.getElementById("logoutBtn");
  if (!logoutBtn) return;
  logoutBtn.addEventListener("click", async () => {
    try {
      await signOut(auth);
      // Дополнительно: почистить UI сразу
      updateMenu(null);
      window.location.href = "login.html";
    } catch (e) {
      console.error("Logout failed:", e);
      alert("Nepodařilo se odhlásit. Zkuste to prosím znovu.");
    }
  });
}

export function initNavAuth() {
  // Ждём восстановления сессии и меняем видимость
  onAuthStateChanged(auth, (user) => {
    updateMenu(user);
  });
  // Навешиваем обработчик кнопки
  wireLogout();
}
