import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword
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

const submit = document.getElementById("submit");

submit.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter an email and password.");
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password);

        window.location.href = "dashboard.html";
    } catch (error) {
        console.error("Signup error:", error.code, error.message);

        if (error.code === "auth/email-already-in-use") {
            alert("That email is already registered.");
        } else if (error.code === "auth/invalid-email") {
            alert("Please enter a valid email.");
        } else if (error.code === "auth/weak-password") {
            alert("Password must be at least 6 characters.");
        } else {
            alert(error.message);
        }
    }
});