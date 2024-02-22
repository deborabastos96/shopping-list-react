import { createContext, useContext, useEffect, useState } from 'react';
import { db, shoppingListCollection } from '../services/firebase';
import { getDocs, addDoc, doc, updateDoc } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useLocalStorageState } from '../hooks/useLocalStorageState';
import getToken from '../services/tokens';

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
  const [openName, setOpenName] = useState('');

  const navigate = useNavigate();

  function accessList(e) {
    e.preventDefault();
    setToken(tokenInput);
    userToken = `"${tokenInput}"`;
    getShoppingList();
  }

  async function createToken(e) {
    e.preventDefault();

    const newToken = getToken();
    setToken(newToken);
    userToken = newToken;

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

  async function getCreateUser() {
    const shoppingListSnapshot = await getDocs(shoppingListCollection);

    const shoppingListFull = shoppingListSnapshot.docs.filter(
      (doc) => `"${doc.data().token}"` == userToken,
    )[0];

    if (shoppingListFull == undefined) {
      setToken('');
      userToken = '';
      setIsLoading(false);
      navigate(-1);
      toast.error(
        'Unable to locate a list containing that token. Please try again with a different one!',
      );
      throw 'List containing that token does not exist in database.';
    }

    const shoppingList = shoppingListFull?.data();
    const shoppingListId = shoppingListFull?.id;

    return { shoppingList, shoppingListId };
  }

  async function getShoppingList() {
    if (userToken == null || userToken == `""`) return navigate('/');

    setIsLoading(true);

    const shoppingListPromise = await getCreateUser();

    if (shoppingListPromise == undefined) return navigate('/');

    const { shoppingList, shoppingListId } = shoppingListPromise;

    setId(shoppingListId);
    setBought(shoppingList.bought);
    setCategories(shoppingList.categories);
    setItems(shoppingList.items);
    setName(shoppingList.name);
    setQuantities(shoppingList.quantities);

    navigate('/list');

    setIsLoading(false);
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
  if (context === undefined)
    throw Error('ShoppingListContext was used outside of ShoppingListProvider');
  return context;
}

export { ShoppingListProvider, useShoppingList };
