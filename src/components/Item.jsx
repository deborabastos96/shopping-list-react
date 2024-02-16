import { useState } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

function Item() {
  const [item, setItem] = useState({
    quantity: 2,
    description: 'Toothbrush',
    bought: false,
    caregory: 'food',
  });

  return (
    <li className="flex items-center gap-3">
      <input
        className="h-5 w-5 accent-purple-500 focus:bg-fuchsia-400 focus:outline-none focus:ring focus:ring-fuchsia-400 focus:ring-offset-2"
        type="checkbox"
        value={item.packed}
        onChange={() => {}}
      />
      <span className={item.packed ? 'line-through' : ''}>
        {item.quantity} {item.description}
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
