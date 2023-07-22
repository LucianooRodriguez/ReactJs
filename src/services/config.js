import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAOznOSClV8rsb0ernX2Bkrae69WhsntYo",
  authDomain: "vixiontienda-5fd4c.firebaseapp.com",
  projectId: "vixiontienda-5fd4c",
  storageBucket: "vixiontienda-5fd4c.appspot.com",
  messagingSenderId: "562902819784",
  appId: "1:562902819784:web:92a07e408161b57bea56fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);
