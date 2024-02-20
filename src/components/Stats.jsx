import toast from 'react-hot-toast';
import { useShoppingList } from '../context/ShoppingListContexts';
import Button from './Button';
import ConfirmDelete from './ConfirmDelete';
import Modal from './Modal';

function Stats() {
  const { setOpenName, setIsLoading, updateShoppingList } = useShoppingList();

  const close = () => setOpenName('');

  function handleClearList() {
    setIsLoading(true);
    updateShoppingList({
      bought: [],
      categories: [],
      items: [],
      quantities: [],
    });

    close();
    toast.success('All items successfully deleted');
  }

  return (
    <footer className="flex items-center justify-center gap-5 rounded-b-md bg-purple-500 p-[20px] text-purple-50">
      <Modal>
        <Modal.Open opens="delete all">
          <Button type="clear">Clear list</Button>
        </Modal.Open>

        <Modal.Window name="delete all">
          <ConfirmDelete
            resourceName="all items"
            onConfirm={() => handleClearList()}
          />
        </Modal.Window>
      </Modal>
    </footer>
  );
}

export default Stats;
