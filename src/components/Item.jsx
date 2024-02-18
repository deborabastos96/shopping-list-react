import { HiOutlineXMark } from 'react-icons/hi2';
import { useShoppingList } from '../context/ShoppingListContexts';

function Item({ quantity, description, index: i }) {
  const {
    quantities,
    items,
    categories,
    bought,
    setQuantities,
    setItems,
    setCategories,
    setBought,
    updateShoppingList,
  } = useShoppingList();

  function handleCheckbox() {
    bought[i] = !bought[i];

    updateShoppingList({ bought });
  }

  function spliceArr() {
    const removedQuantities = quantities.splice(i, i + 1);
    const removedItems = items.splice(i, i + 1);
    const removedBought = bought.splice(i, i + 1);
  }

  function handleDelete() {
    const categoryRepeated = categories.reduce((acc) => {
      if (categories[i]) {
        acc += 1;
      }
    }, 0);

    if (categoryRepeated == 1) {
      spliceArr();
    } else {
      const removedCategories = categories.splice(i, i + 1);
      spliceArr();
    }

    setQuantities(quantities);
    setItems(items);
    setCategories(categories);
    setBought(bought);

    updateShoppingList({ quantities, items, categories, bought });
  }

  // console.log(categories);

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
        onClick={handleDelete}
      >
        <HiOutlineXMark className="text-[20px] text-red-800" />
      </button>
    </li>
  );
}

export default Item;
