import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB6jD1BEvkucdE8ekpdBu_aHnxfL_vB1Ic",
    authDomain: "auth-register-venew.firebaseapp.com",
    projectId: "auth-register-venew",
    storageBucket: "auth-register-venew.appspot.com",
    messagingSenderId: "80372091875",
    appId: "1:80372091875:web:b452f68e666360bb91eed6"
};

const appFirebase = firebase.initializeApp(firebaseConfig);
export default appFirebase;