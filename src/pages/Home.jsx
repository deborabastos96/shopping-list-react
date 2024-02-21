import CreateToken from '../components/CreateToken';
import Button from '../components/Button';
import { useShoppingList } from '../context/ShoppingListContexts';

function Home() {
  const { userToken, name } = useShoppingList();

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative flex h-[15rem] w-[15rem] items-center justify-center rounded-full bg-purple-500 p-[4rem] shadow-lg">
        <img
          src="./woman-shopping.svg"
          alt="Woman Shopping"
          className="absolute -left-5 top-4 w-[13rem]"
        />
      </div>

      <div>
        {userToken == null || userToken == `""` ? (
          <CreateToken />
        ) : (
          <Button to="/list">Access your list, {name}</Button>
        )}
      </div>
    </div>
  );
}

export default Home;
