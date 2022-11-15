import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDOvSJYdtv8gMD71nyH3sA_tBBYRL8Ej7o",
  authDomain: "live-chat-f7589.firebaseapp.com",
  projectId: "live-chat-f7589",
  storageBucket: "live-chat-f7589.appspot.com",
  messagingSenderId: "908316744848",
  appId: "1:908316744848:web:ff42c7206316f6d73ccc15",
  measurementId: "G-8JT96ES3XJ"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, timestamp}