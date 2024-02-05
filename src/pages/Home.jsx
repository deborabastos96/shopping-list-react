import CreateToken from '../components/CreateToken';
import Button from '../components/Button';
import { useState } from 'react';

function Home() {
  const token = false;
  const [name, setName] = useState('');

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
        {!token ? (
          <CreateToken name={name} setName={setName} />
        ) : (
          <Button to="/list">Access your list, {name}</Button>
        )}
      </div>
    </div>
  );
}

export default Home;
