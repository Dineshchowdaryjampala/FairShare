import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("Signup.js loaded!"); // Debugging

    const signupBtn = document.getElementById("signup-btn");
    if (!signupBtn) {
        console.error("Signup button not found!");
        return;
    }

    signupBtn.addEventListener("click", async (event) => {
        event.preventDefault(); // Prevent page refresh
        console.log("Signup button clicked!");

        const emailInput = document.getElementById("signup-email");
        const passwordInput = document.getElementById("signup-password");
        const authMessage = document.getElementById("auth-message"); // ✅ Check this

        if (!emailInput || !passwordInput) {
            console.error("Signup inputs not found!");
            return;
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "" || password === "") {
            if (authMessage) authMessage.innerText = "Please enter an email and password.";
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up:", userCredential.user.email);

            if (authMessage) authMessage.innerText = "Signup Successful! Redirecting to Login...";
            else console.warn("auth-message element not found!");

            setTimeout(() => {
                console.log("Redirecting to auth.html...");
                window.location.replace("auth.html");
            }, 2000);

        } catch (error) {
            console.error("Signup error:", error.message);
            if (authMessage) authMessage.innerText = error.message;
            else console.warn("auth-message element not found!");
        }
    });
});
