// firebase.js
import {
  initializeApp, getApps, getApp
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNuCWtVCpC2HmkncirONfPEUpICHAFJc0",
  authDomain: "lizaaccounting-d48b7.firebaseapp.com",
  projectId: "lizaaccounting-d48b7",
  storageBucket: "lizaaccounting-d48b7.firebasestorage.app",
  messagingSenderId: "407944794362",
  appId: "1:407944794362:web:c646f7670a8717a3fab943"
};

// Гарантия единственной инициализации
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Экспорт готовых инстансов
export const auth = getAuth(app);
export const db = getFirestore(app);

// 👇 Реэкспорт «боевых» функций, чтобы импортировать их из одного места
export {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

export {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";
