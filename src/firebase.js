import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD4bWnybZvefyJeYAaRnAzrXo8owi6QJQs",
    authDomain: "whatsapp-clone-248c8.firebaseapp.com",
    projectId: "whatsapp-clone-248c8",
    storageBucket: "whatsapp-clone-248c8.appspot.com",
    messagingSenderId: "742952072067",
    appId: "1:742952072067:web:a3c48e0495606427377cb6",
    measurementId: "G-B6GH38DBP5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;