// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBha2mK32Y1uNXNh4x2HLIhgA-NtVbP4Ss',
  authDomain: 'shopping-list-debora.firebaseapp.com',
  projectId: 'shopping-list-debora',
  storageBucket: 'shopping-list-debora.appspot.com',
  messagingSenderId: '667987620804',
  appId: '1:667987620804:web:abca725f14b20f204baa91',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const shoppingListCollection = collection(db, 'shopping_list');

export { shoppingListCollection, db };
