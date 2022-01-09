import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHGdKMFr_C_cq5MYVRIw23eJAb1vuOPLU",
  authDomain: "house-marketplace-app-24098.firebaseapp.com",
  projectId: "house-marketplace-app-24098",
  storageBucket: "house-marketplace-app-24098.appspot.com",
  messagingSenderId: "403632873126",
  appId: "1:403632873126:web:11f6a68234e9cf232d1e67"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
