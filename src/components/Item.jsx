import { HiOutlineXMark } from 'react-icons/hi2';
import { useShoppingList } from '../context/ShoppingListContexts';

function Item({ index: i, sortedItems }) {
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

  function spliceArr() {
    quantities.splice(i, 1);
    sortedItems.splice(i, 1);
    bought.splice(i, 1);
  }

  function handleCheckbox() {
    bought[i] = !bought[i];

    updateShoppingList({ bought });
  }

  function handleDelete() {
    const categoryRepeated = categories.reduce((acc) => {
      if (categories[i]) acc += 1;
    }, 0);

    if (categoryRepeated == 1) {
      spliceArr();
    } else {
      categories.splice(i, i + 1);
      spliceArr();
    }

    setQuantities(quantities);
    setItems(sortedItems);
    setCategories(categories);
    setBought(bought);

    updateShoppingList({ quantities, items, categories, bought });
  }

  return (
    <li className="flex items-center gap-3">
      <input
        className="h-5 w-5 accent-purple-500 focus:bg-fuchsia-400 focus:outline-none focus:ring focus:ring-fuchsia-400 focus:ring-offset-2"
        type="checkbox"
        value={bought[i]}
        onChange={handleCheckbox}
        checked={bought[i]}
      />
      <span className={bought[i] ? 'line-through' : ''}>
        {quantities[i]}{' '}
        {sortedItems[i].charAt(0).toUpperCase() +
          sortedItems[i].slice(1).toLowerCase()}
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
