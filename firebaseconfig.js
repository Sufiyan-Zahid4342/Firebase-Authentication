// // import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// // import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


// // const firebaseConfig = {
// //     apiKey: "AIzaSyDghImNN_LzyhaqEVZ4UM4GDXr5LOCq6e4",
// //     authDomain: "smit-batch-12-5eb8a.firebaseapp.com",
// //     projectId: "smit-batch-12-5eb8a",
// //     storageBucket: "smit-batch-12-5eb8a.firebasestorage.app",
// //     messagingSenderId: "1056221466683",
// //     appId: "1:1056221466683:web:04f98f00d526549d790c1e",
// //     measurementId: "G-2DK8Q2X3GZ"
// // };

// // export const app = initializeApp(firebaseConfig);
// // export const auth = getAuth(app);

// {/* <script type="module"> */}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAqVhmWuUBcsHjTJ9MAovzfjwaOxsUIm80",
    authDomain: "authentication-c660a.firebaseapp.com",
    projectId: "authentication-c660a",
    storageBucket: "authentication-c660a.firebasestorage.app",
    messagingSenderId: "106542520170",
    appId: "1:106542520170:web:bf4d0b124502ef87d73713",
    measurementId: "G-CDZ8C1805Z"
  };

  
  // Initialize Firebase App
  const app = initializeApp(firebaseConfig);
  
  // Ensure Auth Component is Properly Initialized
  export const auth = getAuth(app);
  
// // </script>