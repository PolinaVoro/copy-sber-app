import { getFirestore } from '@firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBnl9qQ8fG0YGCCOQYnVyGyKnNtCfiyLiA",
  authDomain: "sber-73b99.firebaseapp.com",
  projectId: "sber-73b99",
  storageBucket: "sber-73b99.appspot.com",
  messagingSenderId: "400631003226",
  appId: "1:400631003226:web:fe4490816a1a94fea54063"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()

export const login = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
	return signOut(auth)
}

export const db = getFirestore()