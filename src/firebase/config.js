import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCY904A5Hph76RXpWhgTe0cMGgGa0SwxBM",
  authDomain: "firegram-74544.firebaseapp.com",
  projectId: "firegram-74544",
  storageBucket: "firegram-74544.appspot.com",
  messagingSenderId: "476483217835",
  appId: "1:476483217835:web:123626c9f8a1a65f928aee",
  measurementId: "G-93LMF4MB5F",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
