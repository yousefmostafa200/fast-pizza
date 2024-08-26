import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className='py-3 md:flex md:items-center md:justify-between'>
      <p className='mb-1 md:mb-0'>
        {quantity}&times; {name}
      </p>
      <div className='flex justify-between items-center md:gap-7'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity pizzaId={pizzaId}>{quantity}</UpdateItemQuantity>

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
