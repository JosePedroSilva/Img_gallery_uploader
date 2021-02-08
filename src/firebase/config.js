import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firebase";

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
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
