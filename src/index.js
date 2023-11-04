// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App';
// import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//     apiKey: "AIzaSyAJ3xbwf5MDcZI_rsp-sCqbxCz1tt1rJLc",
//     authDomain: "cart-7be7b.firebaseapp.com",
//     projectId: "cart-7be7b",
//     storageBucket: "cart-7be7b.appspot.com",
//     messagingSenderId: "188835356122",
//     appId: "1:188835356122:web:41ad74fa3bea3bf63df4e3"
//   };
  
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // export const db = getFirestore(app);

// const container = document.getElementById('root');
// const root = createRoot(container); 
// root.render(<App tab="home" />);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import firebase from "firebase/compat/app";

import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0HsRUZHmtGNPsvR0WTMKsY3E37n5AY1g",
  authDomain: "cart-revision.firebaseapp.com",
  projectId: "cart-revision",
  storageBucket: "cart-revision.appspot.com",
  messagingSenderId: "616352517506",
  appId: "1:616352517506:web:7843b1b4ef275a88ef939b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);