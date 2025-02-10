import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA5GLeXWKujFXmJ4wc3z71_AQgpTNSEHO0",
    authDomain: "expense-split-management.firebaseapp.com",
    projectId: "expense-split-management",
    storageBucket: "expense-split-management.firebasestorage.app",
    messagingSenderId: "222676378533",
    appId: "1:222676378533:web:581f514c604e0ec6b0fe4c",
    measurementId: "G-XSKBJL32H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
