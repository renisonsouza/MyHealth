import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {initializeFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD2OA3bPojLcxhL0_ctiFEBVNp0DLtcH3I",
  authDomain: "myhealth-301cf.firebaseapp.com",
  projectId: "myhealth-301cf",
  storageBucket: "myhealth-301cf.appspot.com",
  messagingSenderId: "278694747879",
  appId: "1:278694747879:web:3de5dec7de2821eb9a0c42"
}; 

// Autenticação
const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);

// Banco de dados vacina

// const db = initializeFirestore(app, {experimentalForceLongPolling: true})

const db = getFirestore(app)


const storage = getStorage(app)



export {app, auth_mod, db, storage}