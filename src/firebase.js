import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDVJlTaCKZaecaG2Oo0Z-eiW-L_bDAF0-I",
    authDomain: "clone-301c0.firebaseapp.com",
    projectId: "clone-301c0",
    storageBucket: "clone-301c0.appspot.com",
    messagingSenderId: "81861103364",
    appId: "1:81861103364:web:a9d117c6dc51f451c64a51",
    measurementId: "G-KWEW02B7TZ"
  };

  firebase.initializeApp(firebaseConfig)

  export  default firebase.auth()