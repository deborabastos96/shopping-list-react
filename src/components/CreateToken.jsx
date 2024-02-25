import Button from './Button';
import { useShoppingList } from '../context/ShoppingListContexts';

function CreateToken() {
  const { tokenInput, setTokenInput, accessList, createToken, name, setName } =
    useShoppingList();

  return (
    <div className="flex justify-center gap-[5.5rem]">
      <form className="flex flex-col items-center" onSubmit={createToken}>
        <p className="text-sm md:text-base">👋 Hi! Are you new here?</p>
        <p className="mb-4 text-sm md:text-base">
          Please start by telling us your name:
        </p>
        <input
          type="text"
          placeholder="Your first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input mb-6 w-72"
        />
        {name !== '' && <Button>Create new list</Button>}
      </form>

      <div className="h-[12rem] border-[1px] border-solid border-purple-200"></div>

      <form className="flex flex-col items-center" onSubmit={accessList}>
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

        {tokenInput !== '' && <Button>Access list</Button>}
      </form>
    </div>
  );
}

export default CreateToken;
