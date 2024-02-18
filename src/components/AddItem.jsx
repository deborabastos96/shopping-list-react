import { useState } from 'react';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi2';
import Button from './Button';
import { useShoppingList } from '../context/ShoppingListContexts';

function AddItem() {
  const {
    quantities,
    items,
    categories,
    bought,
    setIsLoading,
    setQuantities,
    setItems,
    setCategories,
    setBought,
    updateShoppingList,
  } = useShoppingList();

  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('default');

  function handleSubmit(e) {
    e.preventDefault();

    if (!item) return;
    if (category == 'default') return;

    setIsLoading(true);
    setQuantities(quantities.push(quantity));
    setItems(items.push(item));
    setCategories(categories.push(category));
    setBought(bought.push(false));

    updateShoppingList({ quantities, items, categories, bought });

    setItem('');
    setQuantity(1);
    setCategory('default');
  }

  return (
    <form
      className="items-center justify-center gap-6 pt-[1rem] lg:flex "
      onSubmit={handleSubmit}
    >
      <div className="mb-3 text-center">
        <span>🛒 What do you need to buy?</span>
      </div>

      <div className="mb-3 flex items-center justify-center gap-6">
        <select
          className="select"
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
      </div>

      <div className="mb-3 flex items-center justify-center gap-6">
        <input
          className="input"
          type="text"
          placeholder="Item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <Button>Add</Button>
      </div>
    </form>
  );
}

export default AddItem;
