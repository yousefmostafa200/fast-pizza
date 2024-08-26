import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalPrice } from './cartSlice';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartPrice);
  const totalPrice = useSelector(getTotalPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className='flex items-center justify-between bg-stone-800 text-stone-300 uppercase px-4 py-4 sm:px-6 text-sm md:text-base'>
      <p className='font-semibold text-stone-300 space-x-4 sm:space-x-6'>
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to='cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
