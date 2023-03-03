
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
    import { getAuth,createUserWithEmailAnsPassword, } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optiona
  const firebaseConfig = {
    apiKey: "AIzaSyABhxdqVpXAqxFhdGEvzWRv-P314LE08wA",
    authDomain: "myapp-6f254.firebaseapp.com",
    projectId: "myapp-6f254",
    storageBucket: "myapp-6f254.appspot.com",
    messagingSenderId: "454928541895",
    appId: "1:454928541895:web:c6b8e4ce61e337c1d0f6e2",
    measurementId: "G-NXZLD22RTV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  const auth=getAuth();
  //getting all the objects of html
  var username=getElementById("username")
  var username=getElementById("Email")
  var username=getElementById("Password")
//making on function for storing data
window.signup=function(e){
  e.preventDefault();
  var obj={
    username:username.value,
    email:Email.value,
    password:password.value

  }
  createUserWithEmailAnsPassword(auth,obj.email,obj.password)
  .then(function(sucess){
alert("SignUp sucessfully")
  })
  .catch(function(err){
    alert("error"+err)
  })
  console.log(obj)
};