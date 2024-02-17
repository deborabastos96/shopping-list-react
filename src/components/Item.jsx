import { useState } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useShoppingList } from '../context/ShoppingListContexts';

function Item({ quantity, description, index: i }) {
  const { bought, updateShoppingList } = useShoppingList();

  function handleCheckbox() {
    bought[i] = !bought[i];

    updateShoppingList({ bought });
  }

  return (
    <li className="flex items-center gap-3">
      <input
        className="h-5 w-5 accent-purple-500 focus:bg-fuchsia-400 focus:outline-none focus:ring focus:ring-fuchsia-400 focus:ring-offset-2"
        type="checkbox"
        value={bought[i]}
        onChange={handleCheckbox}
      />
      <span className={bought[i] ? 'line-through' : ''}>
        {quantity} {description}
      </span>
      <button
        className="focus:outline-none focus:ring focus:ring-fuchsia-400 focus:ring-offset-2"
        onClick={() => {}}
      >
        <HiOutlineXMark className="text-[20px] text-red-800" />
      </button>
    </li>
  );
}

export default Item;
