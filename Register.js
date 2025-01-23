import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    console.log(email.value);
    console.log(password.value);

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            // Display success SweetAlert
            Swal.fire({
                icon: "success",
                title: "Registration Successful!",
                text: `Welcome, ${email.value}! Your account has been created.`,
                confirmButtonText: "OK",
                confirmButtonColor: "#4caf50",
            })
            .then(() => {
                // Redirect after SweetAlert closes
                window.location = "login.html";
            });

            // Optionally reset the form fields
            email.value = "";
            password.value = "";
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);

            // Display error SweetAlert
            Swal.fire({
                icon: "error",
                title: "Registration Failed!",
                text: errorMessage,
                confirmButtonText: "Try Again",
                confirmButtonColor: "#db4437",
            });
            email.value = "";
            password.value = "";
        });
});
