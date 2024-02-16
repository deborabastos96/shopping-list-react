import { Link } from 'react-router-dom';

function Button({ children, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-purple-500 font-semibold uppercase tracking-wide text-purple-50 transition-colors duration-300 hover:bg-purple-600 focus:bg-fuchsia-400 focus:outline-none focus:ring focus:ring-fuchsia-400 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 ';

  const styles = {
    round:
      base + 'py-1 md:px-[12px] md:py-[12px] px-[12px] py-[12px] text-[15px]',
  };

  if (to)
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        // disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );

  // return <button className={styles[type]}>{children}</button>;
  return <button className={base}>{children}</button>;
}

export default Button;
