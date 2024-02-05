import { useState } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';

function Item() {
  const [item, setItem] = useState({
    quantity: 2,
    description: 'Toothbrush',
    packed: false,
  });

  return (
    <li className="flex items-center gap-3">
      <input
        className="h-6 w-6 accent-purple-500 focus:bg-fuchsia-400 focus:outline-none focus:ring focus:ring-fuchsia-400 focus:ring-offset-2"
        type="checkbox"
        value={item.packed}
        onChange={() => {}}
      />
      <span className={item.packed ? 'line-through' : ''}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => {}}>
        <HiOutlineXMark className="text-[20px] text-red-800 focus:bg-fuchsia-400 focus:outline-none focus:ring focus:ring-fuchsia-400 focus:ring-offset-2" />
      </button>
    </li>
  );
}

export default Item;
