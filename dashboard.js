import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
    getAuth,
    signOut,
    deleteUser,
    updatePassword
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

window.logout = async function () {
    try {
        await signOut(auth);
        window.location.href = "login.html";
    } catch (error) {
        alert(error.message);
    }
};

window.changeUser = async function () {
    try {
        await signOut(auth);
        window.location.href = "login.html";
    } catch (error) {
        alert(error.message);
    }
};

window.deleteAccount = async function () {
    const user = auth.currentUser;

    if (!user) {
        alert("You are not logged in.");
        return;
    }

    if (!confirm("Are you sure you want to permanently delete your account?")) {
        return;
    }

    try {
        await deleteUser(user);
        window.location.href = "signup.html";
    } catch (error) {
        if (error.code === "auth/requires-recent-login") {
            alert("Please log in again before deleting your account.");
            window.location.href = "login.html";
        } else {
            alert(error.message);
        }
    }
};

window.changePassword = async function () {
    const user = auth.currentUser;

    if (!user) {
        alert("You are not logged in.");
        return;
    }

    const newPassword = prompt("Enter your new password:");

    if (!newPassword) return;

    if (newPassword.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    try {
        await updatePassword(user, newPassword);
        alert("Your password has been changed!");
    } catch (error) {
        if (error.code === "auth/requires-recent-login") {
            alert("Please log in again before changing your password.");
            window.location.href = "login.html";
        } else {
            alert(error.message);
        }
    }
};