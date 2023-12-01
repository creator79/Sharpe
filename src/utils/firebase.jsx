import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0FWpZGz-nlsnJj6VvH5sfiC6N70OYfb8",
    authDomain: "assignment-10ed0.firebaseapp.com",
    projectId: "assignment-10ed0",
    storageBucket: "assignment-10ed0.appspot.com",
    messagingSenderId: "176983098158",
    appId: "1:176983098158:web:9dd5714911a5a180e3f0bf",
    measurementId: "G-P9G5N25YHM"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore(app);