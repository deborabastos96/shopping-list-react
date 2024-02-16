import { createContext, useContext, useEffect, useState } from 'react';

import { shoppingListCollection } from '../services/firebase';
import { getDocs, addDoc, collection } from '@firebase/firestore';

const ShoppingListContext = createContext();

function ShoppingListProvider({ children }) {
  const [shoppingList, setShoppingList] = useState([]);
  const token = 'hello world';

  useEffect(() => {
    async function getShoppingList() {
      try {
        const data = await getDocs(shoppingListCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setShoppingList(filteredData);
      } catch (err) {
        console.error(err);
      }
    }

    getShoppingList();
  }, []);

  /* 
async function onSubmit(e) {
  e.preventDefault();

  let data = {
    message: messageRef.current.value,
  };

  try {
    addDoc(ref, data);
  } catch (e) {
    console.log(e);
  }
} */

  return (
    <ShoppingListContext.Provider value={{}}>
      {children}
    </ShoppingListContext.Provider>
  );
}

function useShoppingList() {
  const context = useContext(ShoppingListContext);
  if (context === undefined)
    throw new Error(
      'ShoppingListContext was used outside of ShoppingListProvider',
    );
  return context;
}

export { ShoppingListProvider, useShoppingList };
