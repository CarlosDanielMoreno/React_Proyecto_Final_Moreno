
import { initializeApp } from "firebase/app";

import {getFirestore} from  'firebase/firestore'

// No pude poner el archivo .env, cuando lo intento me sale un error de Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyCqRVKbBmIy4yVKal42B0hlsHD4oqFO5_g",
  authDomain: "proyecto-46516.firebaseapp.com",
  projectId: "proyecto-46516",
  storageBucket: "proyecto-46516.appspot.com",
  messagingSenderId: "725247373919",
  appId: "1:725247373919:web:17ec8a960efbc3fc2a21ea",
  measurementId: "G-HPEJ7K6ES0"
};


const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)