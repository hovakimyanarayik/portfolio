import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "portfolio-admin-abce4.firebaseapp.com",
  projectId: "portfolio-admin-abce4",
  storageBucket: "portfolio-admin-abce4.appspot.com",
  messagingSenderId: "143810263136",
  appId: "1:143810263136:web:636c09279492b9deacab05"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
