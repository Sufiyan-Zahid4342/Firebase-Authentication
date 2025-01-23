import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

// Initialize GoogleAuthProvider
const provider = new GoogleAuthProvider();

// Get DOM elements
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signUp = document.querySelector("#signUp");

// Email and Password Login
form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(email.value);
    console.log(password.value);

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            // Show success alert
            Swal.fire({
                title: "Login Successful!",
                text: `Welcome back, ${user.email}`,
                icon: "success",
                confirmButtonText: "OK",
            })
            .then(() => {
                // Redirect after SweetAlert closes
                window.location = "./index.html";
            });
            email.value = "";
            password.value = "";
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage);

            // Show error alert with SweetAlert2
            Swal.fire({
                title: "Login Failed!",
                text: errorMessage,
                icon: "error",
                confirmButtonText: "Retry",
            });
            email.value = "";
            password.value = "";
        });
});

// Google Sign-In
signUp.addEventListener("click", () => {
    console.log("Google sign-in called");

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            console.log(user);

            // Show success alert
            Swal.fire({
                title: "Google Sign-In Successful!",
                text: `Welcome, ${user.displayName || "User"}!`,
                icon: "success",
                confirmButtonText: "OK",
            });
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage);

            // Show error alert with confirmation dialog
            Swal.fire({
                title: "Google Sign-In Failed!",
                text: errorMessage,
                icon: "error",
                confirmButtonText: "Retry",
            });
        });
});
