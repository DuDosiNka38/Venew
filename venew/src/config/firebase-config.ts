import firebase from 'firebase'


//PUT HERE YOUR KEY!!!!!!!


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAqTqAao_69rgy2aM9MRZ4YBpjO1QaViDc",
    authDomain: "venew-71941.firebaseapp.com",
    projectId: "venew-71941",
    storageBucket: "venew-71941.appspot.com",
    messagingSenderId: "873981068403",
    appId: "1:873981068403:web:eb61fb35d87328bd0f1606"
  };

// Initialize Firebase
const appFirebase = firebase.initializeApp(firebaseConfig);
export default appFirebase;