import { cloneElement, createContext, useContext } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { createPortal } from 'react-dom';
import Button from './Button';
import { useShoppingList } from '../context/ShoppingListContexts';

const ModalContext = createContext();

function Modal({ children }) {
  const { openName, setOpenName } = useShoppingList();

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="z-1000 fixed left-0 top-0 h-screen w-full bg-violet-400/20 backdrop-blur-sm transition-all duration-500">
      <div
        className="fixed left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gray-50 p-[2rem] shadow-lg transition-all duration-500"
        ref={ref}
      >
        <Button type="close" onClick={close}>
          <HiOutlineXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
