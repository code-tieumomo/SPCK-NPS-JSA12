// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeX1BVGvu6ys7teuPYT6qn4edv0vQ9lcQ",
    authDomain: "hieu-s-lair.firebaseapp.com",
    projectId: "hieu-s-lair",
    storageBucket: "hieu-s-lair.appspot.com",
    messagingSenderId: "70240476202",
    appId: "1:70240476202:web:8e6e2dac47e0cba3e33753",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function account(e) {
    e.preventDefault();
    var _acc = document.querySelector("#acc").value;
    var _pass = document.querySelector("#pass").value;
    signInWithEmailAndPassword(auth, _acc, _pass)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "/";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

document.querySelector("form").onsubmit = account;
