import CreateToken from '../components/CreateToken';
import Button from '../components/Button';
import { useState } from 'react';

function Home() {
  const token = false;
  const [name, setName] = useState('');

  return (
    <div>
      {!token ? (
        <CreateToken name={name} setName={setName} />
      ) : (
        <Button to="/list">Access your list, {name}</Button>
      )}
    </div>
  );
}

export default Home;
