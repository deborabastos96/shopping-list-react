import { useState } from 'react';

function Header() {
  const [token, setToken] = useState(true);

  return (
    <header className="flex flex-col items-center justify-center text-purple-50">
      {!token ? (
        <span className="tracking-widest">Welcome to your</span>
      ) : (
        <span className="tracking-widest">
          Welcome back, Débora! Here's your
        </span>
      )}

      <h1 className="mb-4 text-[3rem] font-bold uppercase tracking-widest">
        Shopping List
      </h1>

      <div className="relative flex h-[17rem] w-[17rem] items-center justify-center rounded-full bg-purple-500 p-[4rem] shadow-lg">
        <img
          src="./woman-shopping.svg"
          alt="Woman Shopping"
          className="absolute -left-5 top-4 w-[15rem]"
        />
      </div>
    </header>
  );
}

export default Header;
