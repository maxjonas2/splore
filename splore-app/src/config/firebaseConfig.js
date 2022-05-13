import React from "react";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "rebels-splore.firebaseapp.com",
    databaseURL: "https://rebels-splore-default-rtdb.firebaseio.com",
    projectId: "rebels-splore",
    storageBucket: "rebels-splore.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-R38NB9L0FB"
  };
  
  export default firebaseConfig;