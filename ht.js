
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDJt9buBKQQPup0jkflL9if9S9Upchnuh8",
    authDomain: "my-14edd.firebaseapp.com",
    projectId: "my-14edd",
    storageBucket: "my-14edd.appspot.com",
    messagingSenderId: "1094011461214",
    appId: "1:1094011461214:web:e35739144ea95ffbabdecf"
  };
    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
  const auth = firebase.auth();
    
  // Signup function
  function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => alert(e.message));
    alert("SignUp Successfully");
  }
    
  // SignIN function
  function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(
              email.value, password.value);
    promise.catch((e) => alert(e.message));
  }
    
  // SignOut
  function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
  }
    
  // Active user to homepage
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var email = user.email;
      alert("Active user " + email);
    } else {
      alert("No Active user Found");
    }
  });