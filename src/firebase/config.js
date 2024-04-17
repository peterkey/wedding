import * as firebase from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAF8oTEe6sSZVFRiGcLCIP9TGaLmyU8BF0",
  authDomain: "wedding-b8dd8.firebaseapp.com",
  projectId: "wedding-b8dd8",
  storageBucket: "wedding-b8dd8.appspot.com",
  messagingSenderId: "823293354551",
  appId: "1:823293354551:web:f41ed606e3cde6572355b2",
  measurementId: "G-NM6CXQBTYL",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore(app);

export { projectStorage, projectFirestore };
