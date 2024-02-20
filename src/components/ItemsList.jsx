import { useEffect, useState } from 'react';
import { useShoppingList } from '../context/ShoppingListContexts';
import Category from './Category';
import Button from './Button';
import toast from 'react-hot-toast';
import Modal from './Modal';
import ConfirmDelete from './ConfirmDelete';

function ItemsList() {
  const {
    categories,
    items,
    updateShoppingList,
    setIsLoading,
    bought,
    setOpenName,
  } = useShoppingList();

  let categoriesSet = [];

  if (categories.length > 0) {
    categoriesSet = [...new Set(categories)];
  }

  return (
    <div className="flex flex-col justify-between">
      <div className="grid grid-cols-1 gap-2 px-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {categoriesSet.map((category) => (
          <Category category={category} key={category} />
        ))}
      </div>
    </div>
  );
}

export default ItemsList;
