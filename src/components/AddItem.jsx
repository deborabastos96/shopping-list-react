import { useState } from 'react';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi2';
import Button from './Button';

function AddItem() {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('default');

  function handleSubmit(e) {
    e.preventDefault();

    if (!item) return;
    if (category == 'default') return;

    setItem('');
    setQuantity(1);
    setCategory('default');

    console.log(item, quantity, category);
  }

  return (
    <form
      className="flex items-center justify-center gap-6 pt-[1rem]"
      onSubmit={handleSubmit}
    >
      <h3>🛒 What do you need to buy?</h3>

      <select
        className="focus:outline-none focus:ring focus:ring-fuchsia-400 focus:ring-offset-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="default" hidden>
          Choose category
        </option>
        <option value="beverages">Beverages</option>
        <option value="food">Food</option>
        <option value="cleaners">Cleaners</option>
        <option value="personalCare">Personal Care</option>
        <option value="other">Other</option>
      </select>

      <div className="flex items-center gap-2 md:gap-3">
        <Button
          type="round"
          onClick={(e) => {
            e.preventDefault();
            if (quantity === 1) return;
            setQuantity(quantity - 1);
          }}
        >
          <HiOutlineMinus />
        </Button>

        <span className="text-sm font-medium">{quantity}</span>

        <Button
          type="round"
          onClick={(e) => {
            e.preventDefault();
            setQuantity(quantity + 1);
          }}
        >
          <HiOutlinePlus />
        </Button>
      </div>

      <input
        className="input"
        type="text"
        placeholder="Item..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default AddItem;
