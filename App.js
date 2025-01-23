import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

// Monitor authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(`User is logged in with UID: ${uid}`);
    } else {
        // Redirect to login page if not authenticated
        window.location = "login.html";
    }
});

// Logout Button Functionality
const logoutBtn = document.querySelector("#logoutbtn");

logoutBtn.addEventListener("click", () => {
    // Display SweetAlert confirmation dialog
    Swal.fire({
        title: "Are you sure you want to log out?",
        text: "You will need to log in again to access your account.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Log Out",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
    }).then((result) => {
        if (result.isConfirmed) {
            // Perform logout
            signOut(auth)
                .then(() => {
                    // Show success message and redirect to login page
                    Swal.fire({
                        title: "Logged Out!",
                        text: "You have been successfully logged out.",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                    }).then(() => {
                        window.location = "login.html";
                    });
                })
                .catch((error) => {
                    // Show error alert
                    Swal.fire({
                        title: "Error",
                        text: `An error occurred while logging out: ${error.message}`,
                        icon: "error",
                        confirmButtonColor: "#d33",
                    });
                });
        }
    });
});
