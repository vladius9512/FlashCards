// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCzXi_JcH7zqlI316ESAWn6bGSt5ZwHc6c",
    authDomain: "flashrezi.firebaseapp.com",
    projectId: "flashrezi",
    storageBucket: "flashrezi.appspot.com",
    messagingSenderId: "72623402189",
    appId: "1:72623402189:web:2a2d288a5b95e016b8cd84",
    measurementId: "G-03ZTZ5HGDC",
    databaseURL:
        "https://flashrezi-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let database = getDatabase();

export default database;
