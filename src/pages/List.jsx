import { useState } from 'react';
import AddItem from '../components/AddItem';
import ItemsList from '../components/ItemsList';
import Stats from '../components/Stats';
import { useShoppingList } from '../context/ShoppingListContexts';

function List() {
  const { token, bought, categories, id, items, name, quantity } =
    useShoppingList();

  const [newItem, setNewItem] = useState([]);
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  function handleAddItems(item) {
    setNewItem((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setNewItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setNewItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?',
    );

    if (confirmed) setNewItem([]);
  }

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] gap-3 rounded-md bg-purple-50 text-black shadow-xl">
      <AddItem />
      <ItemsList />
      <Stats />
    </div>
  );
}

export default List;
