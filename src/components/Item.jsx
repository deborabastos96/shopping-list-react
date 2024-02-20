import { HiOutlineXMark } from 'react-icons/hi2';
import { useShoppingList } from '../context/ShoppingListContexts';
import Button from './Button';
import Modal from './Modal';
import toast from 'react-hot-toast';
import ConfirmDelete from './ConfirmDelete';

function Item({ index: i }) {
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
    setIsLoading,
    setOpenName,
  } = useShoppingList();

  const close = () => setOpenName('');

  function spliceArr() {
    const removedQuantity = quantities.splice(i, 1);
    const removedItem = items.splice(i, 1);
    const boughtItem = bought.splice(i, 1);
    const removedCategory = categories.splice(i, 1);

    return { removedQuantity, removedItem, removedCategory, boughtItem };
  }

  function handleCheckbox() {
    setIsLoading(true);

    if (bought[i] == false) {
      const { removedQuantity, removedItem, removedCategory } = spliceArr();

      updateShoppingList({
        bought: [...bought, true],
        quantities: [...quantities, ...removedQuantity],
        items: [...items, ...removedItem],
        categories: [...categories, ...removedCategory],
      });
    } else {
      const { removedQuantity, removedItem, removedCategory } = spliceArr();

      updateShoppingList({
        bought: [false, ...bought],
        quantities: [...removedQuantity, ...quantities],
        items: [...removedItem, ...items],
        categories: [...removedCategory, ...categories],
      });
    }
  }

  function handleDelete() {
    setIsLoading(true);
    spliceArr();

    setQuantities(quantities);
    setItems(items);
    setCategories(categories);
    setBought(bought);

    updateShoppingList({ quantities, items, categories, bought });

    close();
    toast.success('Item successfully deleted');
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
        {items[i].charAt(0).toUpperCase() + items[i].slice(1).toLowerCase()}
      </span>

      <Modal>
        <Modal.Open opens="delete">
          <Button type="delete">
            <HiOutlineXMark />
          </Button>
        </Modal.Open>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="this item"
            onConfirm={() => handleDelete()}
          />
        </Modal.Window>
      </Modal>
    </li>
  );
}

export default Item;
