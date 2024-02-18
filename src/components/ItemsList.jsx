import { useEffect } from 'react';
import { useShoppingList } from '../context/ShoppingListContexts';
import Category from './Category';

function ItemsList() {
  const { categories } = useShoppingList();

  let categoriesSet = [];

  if (categories.length > 0) {
    categoriesSet = [...new Set(categories)];
  }

  return (
    <div className="grid grid-cols-1 gap-2 px-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {categoriesSet.map((category) => (
        <Category category={category} key={category} />
      ))}
    </div>
  );
}

export default ItemsList;
