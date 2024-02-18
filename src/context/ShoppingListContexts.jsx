import { createContext, useContext, useEffect, useState } from 'react';

import getToken from '../services/tokens';
import { db, shoppingListCollection } from '../services/firebase';
import {
  getDocs,
  addDoc,
  collection,
  doc,
  updateDoc,
  query,
  where,
} from '@firebase/firestore';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const ShoppingListContext = createContext();

function ShoppingListProvider({ children }) {
  let userToken = localStorage.getItem('token');
  const [token, setToken] = useLocalStorageState('', 'token');
  const [bought, setBought] = useState([]);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantities, setQuantities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getCreateUser(userTokenExist) {
    const shoppingListSnapshot = await getDocs(shoppingListCollection);
    const shoppingList = shoppingListSnapshot.docs.filter(
      (doc) => `"${doc.data().token}"` == userTokenExist,
    );
    // const shoppingListId = shoppingList[0].id;
    // const userShoppingList = shoppingList[0].data();
    console.log('HELLO');
    if (token == '') {
      setToken(getToken(), 'token');

      try {
        const newShoppingList = await addDoc(shoppingListCollection, {
          bought: categories,
          items,
          name,
          quantities,
          token,
        });

        userToken = localStorage.getItem('token');
        console.log(token);

        // updateShoppingList(newShoppingList.id, {token: userToken})
      } catch (e) {
        console.log(e);
      }
    }

    // return { userShoppingList, shoppingListId };
  }

  async function getShoppingList() {
    try {
      const shoppingList = await getCreateUser(userToken);
      // const { userShoppingList, shoppingListId } = shoppingList;

      // setIsLoading(true);

      // // const data = await getDocs(shoppingListCollection);
      // // const filteredData = data.docs.map((doc) => ({
      // //   ...doc.data(),
      // //   id: doc.id,
      // // }));
      // setToken(userShoppingList.token);
      // setBought(userShoppingList.bought);
      // setCategories(userShoppingList.categories);
      // setItems(userShoppingList.items);
      // setName(userShoppingList.name);
      // setQuantities(userShoppingList.quantities);

      // setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getShoppingList();
  }, []);

  async function updateShoppingList(id, obj) {
    const shoppingListDoc = doc(db, 'shopping_list', id);
    await updateDoc(shoppingListDoc, obj);

    getShoppingList();
  }

  return (
    <ShoppingListContext.Provider
      value={{
        token,
        bought,
        categories,
        items,
        name,
        quantities,
        setToken,
        setBought,
        setCategories,
        setItems,
        setName,
        setQuantities,
        updateShoppingList,
        isLoading,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
}

function useShoppingList() {
  const context = useContext(ShoppingListContext);
  if (context === undefined)
    throw Error('ShoppingListContext was used outside of ShoppingListProvider');
  return context;
}

export { ShoppingListProvider, useShoppingList };
