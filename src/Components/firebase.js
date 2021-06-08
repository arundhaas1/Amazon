// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDQvsPwL21dgZ55jIzWpc_RvpU1HygwH2U",
    authDomain: "clone-4bbc9.firebaseapp.com",
    projectId: "clone-4bbc9",
    storageBucket: "clone-4bbc9.appspot.com",
    messagingSenderId: "740902589955",
    appId: "1:740902589955:web:9f612f7a889db858306036",
    measurementId: "G-ZC9KV7F0MN"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db =firebaseApp.firestore()

  const auth=firebase.auth()


  export{db,auth}

