import { Link } from 'react-router-dom';

function Button({ children, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-purple-500 font-semibold uppercase tracking-wide text-purple-50 transition-colors duration-300 hover:bg-purple-600 focus:bg-purple-600 focus:outline-none focus:ring focus:ring-fuchsia-400 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 ';

  const styles = {
    round:
      base + 'py-1 md:px-[12px] md:py-[12px] px-[12px] py-[12px] text-[17px]',
    delete:
      'text-[20px] text-red-800 focus:outline-none focus:ring focus:ring-fuchsia-400 focus:ring-offset-2',
    close:
      'text-[30px] text-purple-500 focus:outline-none focus:ring focus:ring-fuchsia-400 focus:ring-offset-2 absolute translate-x-[0.8rem] top-[1.2rem] right-[1.9rem]',
    clear:
      'inline-block text-sm rounded-full border-2 border-purple-100 font-semibold uppercase tracking-wide text-purple-50 transition-colors duration-300 hover:bg-purple-100 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none focus:ring focus:ring-purple-100 focus:ring-offset-2 ring-offset-purple-500 disabled:cursor-not-allowed px-4 py-3 md:px-6',
    confirm: base + 'bg-red-800 hover:bg-red-900 focus:bg-red-900',
  };

  if (to)
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );

  if (type)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}

export default Button;
