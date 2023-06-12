//import { doc, getDoc } from "firebase/firestore";
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
let email="";

const scanner = new Html5QrcodeScanner('reader', { 
    // Scanner will be initialized in DOM inside element with id of 'reader'
    qrbox: {
        width: 500,
        height: 500,
    },  // Sets dimensions of scanning box (set relative to reader element width)
    fps: 20, // Frames per second to attempt a scan
});


// function timeNow(i) {
//   var d = new Date(),
//     h = (d.getHours()<10?'0':'') + d.getHours(),
//     m = (d.getMinutes()<10?'0':'') + d.getMinutes();
//   i.value = h + ':' + m;
// }

scanner.render(success);

// Starts scanner

function success(result) {


    document.getElementById('result').innerHTML = `
    <h2>QR Code Scanned Successfully! </h2>
    <p> Result= <a href="${result}">${result}</a></p>
    `;
    
    // Prints result as a link inside result element

    //Prints time when we scan qr code
    let timein=new Date().toLocaleTimeString();
    console.log(timein);
    document.getElementById('time').innerHTML=`
    <p>Time in = ${timein}</p>`;

    console.log("getting value of email id from users collection")
    
    // const colRef = collection(db, "users");
    // const docsSnap =  getDoc(colRef);
    // console.log("58 line");
    // if (docSnap.exists()) {
    //   docsSnap.forEach(doc => {
    //       console.log(doc.data());
    //       console.log(doc.id);
    //   })
    // }
    // else {
    //   // docSnap.data() will be undefined in this case
    //   console.log("No such document!");
    // }


     //var email="";
     var email1;
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          email1=doc.data().email;
          console.log(doc.data().email);
          console.log(email1);
          //email1=email
      });
  });
  console.log("email id fetched");
 

  

    console.log("Adding value to database");
    
    db.collection('rides').add({
      email:email1,
      timein:timein,
      timeout:"",
      price:0,
      status:false
      
    })  
    console.log("Value added to database");




    scanner.clear();
    // Clears scanning instance

    document.getElementById('reader').remove();
    // Removes reader element from DOM since no longer needed

}

// function error(err) {
//     console.log(err);
//     // Prints any errors to the console
// }




firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      //const useremail=db.collection('users').doc(users.email)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

