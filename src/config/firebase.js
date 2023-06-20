import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDKlx6QUDAJwzXxXWx0AsMA30Wj3pykux0",
  authDomain: "tiktok---jornada-bb3f4.firebaseapp.com",
  projectId: "tiktok---jornada-bb3f4",
  storageBucket: "tiktok---jornada-bb3f4.appspot.com",
  messagingSenderId: "438022469558",
  appId: "1:438022469558:web:5b6415867bcc2b31d3b317",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
