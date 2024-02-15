// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAahCzk1JKdg0TzDwnlmOHwHZEaK0Z3xDI",
    authDomain: "prueba-firebase-8dc0a.firebaseapp.com",
    projectId: "prueba-firebase-8dc0a",
    storageBucket: "prueba-firebase-8dc0a.appspot.com",
    messagingSenderId: "540101010883",
    appId: "1:540101010883:web:13bcdab8133a244be14976",
    measurementId: "G-FWYDG6V41H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

 //Funciones de CRUD  
  export const createTask = (title, description) => addDoc(collection(db, "tasks"), {title, description});