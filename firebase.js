<!-- firebase.js -->
<script type="module">
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNuCWtVCpC2HmkncirONfPEUpICHAFJc0",
  authDomain: "lizaaccounting-d48b7.firebaseapp.com",
  projectId: "lizaaccounting-d48b7",
  storageBucket: "lizaaccounting-d48b7.firebasestorage.app",
  messagingSenderId: "407944794362",
  appId: "1:407944794362:web:c646f7670a8717a3fab943"
};

// Если уже инициализирован → берём существующий инстанс
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
</script>
