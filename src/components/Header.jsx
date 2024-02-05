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
    </header>
  );
}

export default Header;
