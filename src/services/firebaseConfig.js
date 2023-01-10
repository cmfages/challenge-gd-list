import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyCN9BYsFersE-Jr6a55JtA4-ONRJWe74s0",
  
    authDomain: "challenge-db-102b4.firebaseapp.com",
  
    projectId: "challenge-db-102b4",
  
    storageBucket: "challenge-db-102b4.appspot.com",
  
    messagingSenderId: "72729377471",
  
    appId: "1:72729377471:web:3bbfbc820d205983d6240a"
  
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


