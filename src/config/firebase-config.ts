import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDCPRoE8OTjByaTgi3UTr5LMTcjziuwKhg",
    authDomain: "auth-venew.firebaseapp.com",
    projectId: "auth-venew",
    storageBucket: "auth-venew.appspot.com",
    messagingSenderId: "202350002520",
    appId: "1:202350002520:web:df7a9d18882f00db23e52d"
};

const appFirebase = firebase.initializeApp(firebaseConfig);
export default appFirebase;