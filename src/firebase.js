import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAoiS7U9SedpRaCwdGn2W0aeEdeRtSS2ko",
    authDomain: "messenger-clone-a68b5.firebaseapp.com",
    databaseURL: "https://messenger-clone-a68b5.firebaseio.com",
    projectId: "messenger-clone-a68b5",
    storageBucket: "messenger-clone-a68b5.appspot.com",
    messagingSenderId: "1022367783631",
    appId: "1:1022367783631:web:c9234d20fc744d8437f5ba",
    measurementId: "G-0PTN7CKE4V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
