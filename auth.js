import { 
    signInWithPopup, 
    GoogleAuthProvider, 
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { auth, app } from "./firebase.js";

const googleProvider = new GoogleAuthProvider();
let isLoginMode = true; 

// --- MODE TOGGLE ---
window.toggleMode = function() {
    isLoginMode = !isLoginMode;
    const title = document.getElementById("auth-title");
    const btn = document.getElementById("auth-btn");
    const toggleText = document.getElementById("toggle-text");
    const toggleLink = document.getElementById("toggle-link");

    if (isLoginMode) {
        title.innerText = "Login to Quiz";
        btn.innerText = "Login";
        toggleText.innerText = "Don't have an account?";
        toggleLink.innerText = "Sign Up";
    } else {
        title.innerText = "Create Account";
        btn.innerText = "Sign Up";
        toggleText.innerText = "Already have an account?";
        toggleLink.innerText = "Login";
    }
}

// --- MAIN AUTH FUNCTION (English Messages) ---
window.handleAuth = async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        return alert("Please fill in all fields.");
    }

    try {
        if (isLoginMode) {
            // LOGIN LOGIC
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            
            if(!localStorage.getItem("currentUser")) {
                localStorage.setItem("currentUser", userCredential.user.email.split('@')[0]);
            }
            
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            // SIGNUP LOGIC
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account created successfully!");
            window.location.href = "setup-profile.html";
        }
    } catch (error) {
        console.error("Auth Error Code:", error.code);
        
        // Handling errors in English
        if (error.code === 'auth/email-already-in-use') {
            alert("This email is already registered. Switching to Login page...");
            if (!isLoginMode) toggleMode(); 
        } 
        else if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password') {
            alert("Invalid email or password! Please try again or use Forgot Password.");
        } 
        else if (error.code === 'auth/user-not-found') {
            alert("No account found with this email. Please Sign Up first.");
            if (isLoginMode) toggleMode(); 
        }
        else if (error.code === 'auth/weak-password') {
            alert("Password is too weak. Please use at least 6 characters.");
        }
        else {
            alert("Error: " + error.message);
        }
    }
}

// --- GOOGLE LOGIN (English Error Guidance) ---
window.handleGoogleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        if (!localStorage.getItem("currentUser")) {
            window.location.href = "setup-profile.html";
        } else {
            alert("Google Login Successful!");
            window.location.href = "dashboard.html";
        }
    } catch (error) {
        console.error("Google Error:", error.code);
        
        if (error.code === 'auth/unauthorized-domain') {
            alert("Domain Error: Please add '127.0.0.1' to Authorized Domains in Firebase Console Settings.");
        } 
        else if (error.code === 'auth/operation-not-allowed') {
            alert("Configuration Error: Please enable Google Sign-in provider in Firebase Console.");
        }
        else {
            alert("Google Login Failed: " + error.message);
        }
    }
};

// --- FORGOT PASSWORD ---
window.handleForgotPassword = async () => {
    const email = document.getElementById("email").value.trim();
    if (!email) return alert("Please enter your email address to receive a reset link.");
    
    try {
        await sendPasswordResetEmail(auth, email);
        alert("A password reset link has been sent to your email address!");
    } catch (error) {
        alert("Reset Error: " + error.message);
    }
};
