// import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJ3xbwf5MDcZI_rsp-sCqbxCz1tt1rJLc",
    authDomain: "cart-7be7b.firebaseapp.com",
    projectId: "cart-7be7b",
    storageBucket: "cart-7be7b.appspot.com",
    messagingSenderId: "188835356122",
    appId: "1:188835356122:web:41ad74fa3bea3bf63df4e3"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);