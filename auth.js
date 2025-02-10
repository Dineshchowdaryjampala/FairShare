import { auth } from "./firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const authMessage = document.getElementById("auth-message");

// ✅ Handle Auth State Only After DOM is Fully Loaded
document.addEventListener("DOMContentLoaded", () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User is already logged in:", user.email);
            // Prevent immediate redirection on auth.html
            if (!window.location.href.includes("auth.html")) {
                window.location.href = "index.html";
            }
        }
    });
});

// ✅ Sign Up Function
signupBtn.addEventListener("click", async () => {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        authMessage.innerText = "Signup Successful! Redirecting...";
        setTimeout(() => window.location.href = "index.html", 2000);
    } catch (error) {
        authMessage.innerText = error.message;
    }
});

// ✅ Login Function
loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        authMessage.innerText = "Login Successful! Redirecting...";
        setTimeout(() => window.location.href = "index.html", 2000);
    } catch (error) {
        authMessage.innerText = error.message;
    }
});
