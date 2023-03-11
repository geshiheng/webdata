// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_2j1xzwZcIGCwWGZtxCRBumBU4-_cDxk",
  authDomain: "datavase-f584b.firebaseapp.com",
  databaseURL: "https://datavase-f584b-default-rtdb.firebaseio.com",
  projectId: "datavase-f584b",
  storageBucket: "datavase-f584b.appspot.com",
  messagingSenderId: "410682209545",
  appId: "1:410682209545:web:2916391a085a687348cfd8",
  measurementId: "G-ZMNBH195MB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
