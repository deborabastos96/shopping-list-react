import { useShoppingList } from '../context/ShoppingListContexts';

function Header() {
  const { userToken, name } = useShoppingList();

  return (
    <header className="flex flex-col items-center justify-center text-center text-purple-50">
      {userToken == null || userToken == `""` ? (
        <span className="mb-2 tracking-widest">Welcome to your</span>
      ) : (
        <span className="mb-2 tracking-widest">
          Welcome back, {name}! Here's your
        </span>
      )}

      <h1 className="mb-8 text-[2.4rem] font-bold uppercase leading-none tracking-widest md:text-[3rem]">
        Shopping List
      </h1>
    </header>
  );
}

export default Header;
