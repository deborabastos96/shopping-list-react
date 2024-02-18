import { useEffect, useState } from 'react';
import { useShoppingList } from '../context/ShoppingListContexts';
import Category from './Category';
import Button from './Button';

function ItemsList() {
  const { categories, items, updateShoppingList, setIsLoading, bought } =
    useShoppingList();

  const [sortBy, setSortBy] = useState('input');

  let sortedItems;
  let categoriesSet = [];

  if (categories.length > 0) {
    categoriesSet = [...new Set(categories)];
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?',
    );
    if (confirmed) {
      setIsLoading(true);
      updateShoppingList({
        bought: [],
        categories: [],
        items: [],
        quantities: [],
      });
    }
  }

  if (sortBy === 'input') sortedItems = items;

  // if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));;

  return (
    <div className="flex flex-col justify-between">
      <div className="grid grid-cols-1 gap-2 px-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {categoriesSet.map((category) => (
          <Category
            category={category}
            sortedItems={sortedItems}
            key={category}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-5">
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="bought">Sort by bought status</option>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
        </select>

        <Button onClick={handleClearList}>Clear list</Button>
      </div>
    </div>
  );
}

export default ItemsList;
