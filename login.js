import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCHfAiOKJeSPLw62qoUEJLKrWlDjKRRSWQ",
    authDomain: "rudyweb-8079d.firebaseapp.com",
    projectId: "rudyweb-8079d",
    storageBucket: "rudyweb-8079d.firebasestorage.app",
    messagingSenderId: "642631169163",
    appId: "1:642631169163:web:24530cb6e74f7505c9508e",
    measurementId: "G-P56E5ND7TL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginButton = document.getElementById("login");

loginButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);


        window.location.href = "dashboard.html";
    } catch (error) {
        console.error("Login error:", error.code, error.message);

        if (
            error.code === "auth/invalid-credential" ||
            error.code === "auth/user-not-found" ||
            error.code === "auth/wrong-password"
        ) {
            alert("Incorrect email or password.");
        } else if (error.code === "auth/invalid-email") {
            alert("Please enter a valid email.");
        } else {
            alert(error.message);
        }
    }
});
const reset = document.getElementById("reset");
reset.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            window.location.href = "passwordupdate.html";
        })
        .catch((error) => {
            console.error("Password reset error:", error.code, error.message);

            if (error.code === "auth/invalid-email") {
                alert("Please enter a valid email.");
            } else {
                alert(error.message);
            }
        });
});
    