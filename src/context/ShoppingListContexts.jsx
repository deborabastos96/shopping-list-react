import { createContext, useContext, useEffect, useState } from 'react';
import { db, shoppingListCollection } from '../services/firebase';
import { getDocs, addDoc, doc, updateDoc } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useLocalStorageState } from '../hooks/useLocalStorageState';
import getToken from '../services/tokens';

const ShoppingListContext = createContext();

function ShoppingListProvider({ children }) {
  const [token, setToken] = useLocalStorageState('', 'token');
  const [id, setId] = useState('');
  const [bought, setBought] = useState([]);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantities, setQuantities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenInput, setTokenInput] = useState('');
  const [openName, setOpenName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    if (userToken == null || userToken == '""') return navigate('/');

    setToken(userToken);
    getShoppingList(userToken);
  }, []);

  async function accessList(e) {
    e.preventDefault();
    setToken(tokenInput);
    getShoppingList(tokenInput);
  }

  async function createToken(e) {
    e.preventDefault();
    const newToken = getToken();
    setToken(newToken);

    await addDoc(shoppingListCollection, {
      bought,
      categories,
      items,
      name,
      quantities,
      token: newToken,
    });

    location.reload();
  }

  async function getShoppingList(userToken) {
    if (!userToken) return navigate('/');

    setIsLoading(true);

    const shoppingListSnapshot = await getDocs(shoppingListCollection);
    const shoppingListFull = shoppingListSnapshot.docs.find(
      (doc) => doc.data().token === userToken,
    );

    if (!shoppingListFull) {
      setToken('');
      setIsLoading(false);
      navigate(-1);
      toast.error(
        'Unable to locate a list containing that token. Please try again with a different one!',
      );
      throw new Error('List containing that token does not exist in database.');
    }

    const { bought, categories, items, name, quantities } =
      shoppingListFull.data();
    setId(shoppingListFull.id);
    setBought(bought);
    setCategories(categories);
    setItems(items);
    setName(name);
    setQuantities(quantities);

    navigate('/list');
    setIsLoading(false);
  }

  async function updateShoppingList(obj) {
    const shoppingListDoc = doc(db, 'shopping_list', id);
    await updateDoc(shoppingListDoc, obj);
    getShoppingList(token);
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
        getShoppingList,
        tokenInput,
        setTokenInput,
        accessList,
        openName,
        setOpenName,
        createToken,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
}

function useShoppingList() {
  const context = useContext(ShoppingListContext);
  if (!context)
    throw new Error(
      'ShoppingListContext was used outside of ShoppingListProvider',
    );
  return context;
}

export { ShoppingListProvider, useShoppingList };
