import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEMXVIl1H6zYEMoAzE2LIlx2kzF9EEHmw",
  authDomain: "notes-app-e3995.firebaseapp.com",
  projectId: "notes-app-e3995",
  storageBucket: "notes-app-e3995.appspot.com",
  messagingSenderId: "269234628108",
  appId: "1:269234628108:web:9083eca8b00222be25f029",
  measurementId: "G-L10LZSMZ2S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, db, storage };
