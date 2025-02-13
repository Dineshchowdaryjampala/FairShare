import { auth } from "./firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User is already logged in:", user.email);
            // If the user is on the login or signup page, don't redirect immediately
            if (!window.location.href.includes("auth.html") && !window.location.href.includes("signup.html")) {
                window.location.href = "index.html";
            }
        }
    });

    const signupBtn = document.getElementById("signup-btn");
    const loginBtn = document.getElementById("login-btn");
    const authMessage = document.getElementById("auth-message");

    // ✅ Sign Up Function
    if (signupBtn) {
        signupBtn.addEventListener("click", async () => {
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;

            try {
                await createUserWithEmailAndPassword(auth, email, password);
                authMessage.innerText = "Signup Successful! Redirecting to Login...";
                setTimeout(() => window.location.href = "auth.html", 2000); // Redirect to login page
            } catch (error) {
                authMessage.innerText = error.message;
            }
        });
    }

    // ✅ Login Function
    if (loginBtn) {
        loginBtn.addEventListener("click", async () => {
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            try {
                await signInWithEmailAndPassword(auth, email, password);
                authMessage.innerText = "Login Successful! Redirecting...";
                setTimeout(() => window.location.href = "index.html", 2000); // Redirect to main page
            } catch (error) {
                authMessage.innerText = error.message;
            }
        });
    }
});
