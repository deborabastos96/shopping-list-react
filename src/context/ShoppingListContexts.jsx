import { createContext, useContext, useEffect, useState } from 'react';

import getToken from '../services/tokens';
import { db, shoppingListCollection } from '../services/firebase';
import { getDocs, addDoc, doc, updateDoc } from '@firebase/firestore';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { useNavigate } from 'react-router-dom';

const ShoppingListContext = createContext();

function ShoppingListProvider({ children }) {
  let userToken = localStorage.getItem('token');
  const [token, setToken] = useLocalStorageState('', 'token');
  const [id, setId] = useState([]);
  const [bought, setBought] = useState([]);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantities, setQuantities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenInput, setTokenInput] = useState('');

  const navigate = useNavigate();

  function error(err) {
    console.error(`${err} 💣💣💣`);
    throw err;
  }

  async function getCreateUser(userTokenExist) {
    if (userTokenExist == null) {
      try {
        const newShoppingList = await addDoc(shoppingListCollection, {
          bought,
          categories,
          items,
          name,
          quantities,
          token,
        });

        userToken = localStorage.getItem('token');
        getShoppingList();

        return newShoppingList;
      } catch (err) {
        error(err);
      }
    }

    const shoppingListSnapshot = await getDocs(shoppingListCollection);

    const shoppingListFull = shoppingListSnapshot.docs.filter(
      (doc) => `"${doc.data().token}"` == userToken,
    )[0];

    if (shoppingListFull == undefined) {
      setToken('');
      userToken = '';
      console.log('Did not found token');
      setIsLoading(false);
      return;
    }

    const shoppingList = shoppingListFull?.data();
    const shoppingListId = shoppingListFull?.id;

    return { shoppingList, shoppingListId };
  }

  async function accessList() {
    setToken(tokenInput);
    userToken = `"${tokenInput}"`;
    await getShoppingList(userToken);

    navigate('/list');
  }

  async function createToken() {
    setToken(getToken());
    await getCreateUser(userToken);
  }

  async function getShoppingList() {
    try {
      if (userToken == null || userToken == `""`) return navigate('/');

      setIsLoading(true);

      const shoppingListPromise = await getCreateUser(userToken);

      if (shoppingListPromise == undefined) return navigate('/');

      const { shoppingList, shoppingListId } = shoppingListPromise;

      setId(shoppingListId);
      setBought(shoppingList.bought);
      setCategories(shoppingList.categories);
      setItems(shoppingList.items);
      setName(shoppingList.name);
      setQuantities(shoppingList.quantities);

      setIsLoading(false);
    } catch (err) {
      error(err);
    }
  }

  useEffect(() => {
    getShoppingList();
  }, []);

  async function updateShoppingList(obj) {
    const shoppingListDoc = doc(db, 'shopping_list', id);
    await updateDoc(shoppingListDoc, obj);

    getShoppingList();
  }

  return (
    <ShoppingListContext.Provider
      value={{
        token,
        userToken,
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
        setIsLoading,
        isLoading,
        getShoppingList,
        tokenInput,
        setTokenInput,
        accessList,
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
