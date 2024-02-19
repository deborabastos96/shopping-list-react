import Button from './Button';
import { useShoppingList } from '../context/ShoppingListContexts';

function CreateToken({ name, setName }) {
  const { tokenInput, setTokenInput, accessList } = useShoppingList();

  return (
    <div className="flex justify-center gap-[5.5rem]">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col items-center">
          <p className="text-sm md:text-base">👋 Hi! Are you new here?</p>
          <p className="mb-4 text-sm md:text-base">
            Please start by telling us your name:
          </p>
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input mb-6 w-72"
          />
          {name !== '' && (
            <div>
              <Button to="/">Create new list</Button>
            </div>
          )}
        </div>
      </form>

      <div className="h-[12rem] border-[1px] border-solid border-purple-200"></div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col items-center">
          <p className="text-sm md:text-base">📜 Welcome back!</p>
          <p className="mb-4 text-sm md:text-base">
            Enter your token to access your list:
          </p>

          <input
            type="text"
            placeholder="Your token"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            className="input mb-6 w-72"
          />

          {tokenInput !== '' && (
            <div>
              <Button onClick={accessList}>Access list</Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateToken;
