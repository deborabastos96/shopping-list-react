// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBk37AIG8Uyw1bDU0AdE_cnBMr-d-XPUbQ',
  authDomain: 'shopping-list-v2-a65a2.firebaseapp.com',
  databaseURL: 'https://shopping-list-v2-a65a2-default-rtdb.firebaseio.com',
  projectId: 'shopping-list-v2-a65a2',
  storageBucket: 'shopping-list-v2-a65a2.appspot.com',
  messagingSenderId: '955042949168',
  appId: '1:955042949168:web:5a784f226c4f48b1bd25f5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const shoppingListCollection = collection(db, 'shopping_list');

export { shoppingListCollection, db };
