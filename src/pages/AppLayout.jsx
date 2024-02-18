import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { useShoppingList } from '../context/ShoppingListContexts';

function AppLayout() {
  const { isLoading } = useShoppingList();

  return (
    <div className="mx-auto grid min-h-screen max-w-[1300px] grid-rows-[auto_1fr] p-[2rem]">
      <Header />
      <main>
        {isLoading && <Loader />}
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
