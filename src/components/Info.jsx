import toast from 'react-hot-toast';
import { useShoppingList } from '../context/ShoppingListContexts';
import Button from './Button';
import ConfirmDelete from './ConfirmDelete';
import Modal from './Modal';

function Info() {
  const { setOpenName, setIsLoading, updateShoppingList, token } =
    useShoppingList();

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
    <footer className="flex flex-col-reverse items-center justify-between gap-5 rounded-b-md bg-purple-500 p-[20px] text-center text-purple-50 md:flex-row md:text-left">
      <div className="flex flex-col">
        <span>To access your list, save your token:</span>
        <span>
          <strong>{token}</strong>
        </span>
      </div>

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

export default Info;
