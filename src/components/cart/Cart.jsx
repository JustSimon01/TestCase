import cart from '../../images/Cart.svg'
import Counter from './counter/Counter';

function Cart() {
  return (
    <div className='w-14 h-10 flex relative'>
      <img src={cart} alt='Корзина' className='h-8 w-8' />
      <Counter quantity={0} />
    </div>

  );
}

export default Cart;
