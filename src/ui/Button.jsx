import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-sm bg-yellow-400 uppercase font-semibold text-stone-800  rounded-full tracking-normal   hover:bg-yellow-300 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2  disabled:cursor-not-allowed inline-block';

  const styles = {
    primary: base + ' py-3 px-4 md:px-6 md:py-4',
    small: base + ' py-2 px-2 md:px-5 md:py-2.5 text-sm',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm ',
    secondary:
      ' bg-transparent text-sm uppercase border-[1px] border-stone-800 font-semibold text-stone-700  rounded-full tracking-normal   hover:bg-stone-300 transition-all duration-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2  disabled:cursor-not-allowed inline-block py-2.5 px-4 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
