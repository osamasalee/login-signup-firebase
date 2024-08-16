  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.13/firebase-auth.js'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC0rEFNVNr_coDQHtRFWQYpz8Vob57U1_Y",
    authDomain: "blog-website-1c3e4.firebaseapp.com",
    projectId: "blog-website-1c3e4",
    storageBucket: "blog-website-1c3e4.appspot.com",
    messagingSenderId: "503311543554",
    appId: "1:503311543554:web:2ded95e14cdf8be5c5e61b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  function signUpUser(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });

  }

  const signUp = document.getElementById('signup')
  signUp.addEventListener('click' , signUpUser)