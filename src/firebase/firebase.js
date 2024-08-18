import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getFirestore } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAaXyiJbsRDUS1i_cZCEjae57bwxg-BfY0",
  authDomain: "portofolio-b6914.firebaseapp.com",
  projectId: "portofolio-b6914",
  storageBucket: "portofolio-b6914.appspot.com",
  messagingSenderId: "488595670528",
  appId: "1:488595670528:web:5da1dde426b5be173abae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const db=getFirestore(app)

export { storage};