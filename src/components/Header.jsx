import { useShoppingList } from '../context/ShoppingListContexts';

function Header() {
  const { userToken, name } = useShoppingList();

  return (
    <header className="flex flex-col items-center justify-center text-purple-50">
      {userToken == null || userToken == `""` ? (
        <span className="tracking-widest">Welcome to your</span>
      ) : (
        <span className="tracking-widest">
          Welcome back, {name}! Here's your
        </span>
      )}

      <h1 className="mb-4 text-[3rem] font-bold uppercase tracking-widest">
        Shopping List
      </h1>
    </header>
  );
}

export default Header;
