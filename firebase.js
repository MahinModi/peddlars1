//   // Import the functions you need from the SDKs you need
//   // import  initializeApp  from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
//   // import  getAnalytics  from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
//   import { initializeApp } from "firebase/app";
// import { getAuth} from "firebase/auth";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   console.log('login js')
//   const firebaseConfig = {
//     apiKey: "AIzaSyA7FPSRHpygQfzpmbT2voSfS4A9pw1Dy8k",
//     authDomain: "paddlers902.firebaseapp.com",
//     projectId: "paddlers902",
//     storageBucket: "paddlers902.appspot.com",
//     messagingSenderId: "1052749026788",
//     appId: "1:1052749026788:web:da607a31a036c9badd23f1",
//     measurementId: "G-T7QRJZ64ZM"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const auth=getAuth(app);



// Setting Up Firebase with website 

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyA7FPSRHpygQfzpmbT2voSfS4A9pw1Dy8k",
  authDomain: "paddlers902.firebaseapp.com",
  projectId: "paddlers902",
  storageBucket: "paddlers902.appspot.com",
  messagingSenderId: "1052749026788",
  appId: "1:1052749026788:web:da607a31a036c9badd23f1",
  measurementId: "G-T7QRJZ64ZM"

});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//  Sign Up Function for new user



const signUp = () => {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  console.log(username, email, password)
  console.log("Form submiteed");
  //firebase function (v8)
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      document.write("You are signed up as new user")
      console.log(result)
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);

    })

    console.log("Collection creating");

    db.collection('users').add({
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password:document.getElementById("password").value
    })  

    console.log("Collection created");
    
};

//Sign In Function for existing user

const signIn = () => {
  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  console.log(email, password);
  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in 
      document.write("You are Signed In as existing user")
      console.log(result)
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message)
    });
};

//saving data to firebase from sign up page

// let signupButton = document.querySelector('#signup');

// signupButton.addEventListener("click", (e) => {
  
//   console.log("Form submiteed");
//   e.preventDefault();
//   db.collection('users').add({
//     username: document.getElementById("username").value,
//     email: document.getElementById("email").value,
//     password: document.getElementById("password").value
//   })

//   console.log("Collection created");
  // signupButton.username.value = '';
  // signupButton.email.value = '';
  // signupButton.password.value = '';
  // signupButton.status.value = 'active';




