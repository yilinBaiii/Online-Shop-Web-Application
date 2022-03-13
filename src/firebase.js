// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


// import { initializeApp }  from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth} from "firebase/auth";
// // import { getAuth } from 'firebase/auth';


// const firebaseConfig = {
//     apiKey: "AIzaSyAvTcAuN5XP1G23aZkyPST3Ur_5V0u4aho",
//     authDomain: "clone-d7527.firebaseapp.com",
//     projectId: "clone-d7527",
//     storageBucket: "clone-d7527.appspot.com",
//     messagingSenderId: "1071016147838",
//     appId: "1:1071016147838:web:85f652acbc3667947a912f",
//     measurementId: "G-ZL1CE8MJV4"
//   };
//   const firebaseApp = initializeApp(firebaseConfig);

//   const db = getFirestore(firebaseApp);
//   // const auth = getAuth(db);
//   const auth = getAuth();
  
//   export { db, auth };



  import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyAvTcAuN5XP1G23aZkyPST3Ur_5V0u4aho",
    authDomain: "clone-d7527.firebaseapp.com",
    projectId: "clone-d7527",
    storageBucket: "clone-d7527.appspot.com",
    messagingSenderId: "1071016147838",
    appId: "1:1071016147838:web:85f652acbc3667947a912f",
    measurementId: "G-ZL1CE8MJV4"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };





  // "name": "amazon-clone",
  // "version": "0.1.0",
  // "private": true,
  // "dependencies": {
  //   "@material-ui/core": "^4.12.3",
  //   "@material-ui/icons": "^4.11.2",
  //   "@stripe/react-stripe-js": "^1.7.0",
  //   "@stripe/stripe-js": "^1.24.0",
  //   "@testing-library/jest-dom": "^5.16.2",
  //   "@testing-library/react": "^12.1.4",
  //   "@testing-library/user-event": "^13.5.0",
  //   "again": "^0.0.1",
  //   "axios": "^0.26.1",
  //   "firebase": "^9.6.8",
  //   "moment": "^2.29.1",
  //   "react": "^17.0.2",
  //   "react-currency-format": "^1.1.0",
  //   "react-dom": "^17.0.2",
  //   "react-router-dom": "^5.2.0",
  //   "react-router-native": "^6.2.2",
  //   "react-scripts": "5.0.0",
  //   "web-vitals": "^2.1.4"