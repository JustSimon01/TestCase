import React from 'react';
import Logo from '../logo/Logo';
import Cart from '../cart/Cart';
import Button from '../button/Button';
import Navigation from '../navigation/Navigation';

function Header() {
  return (
    <header className='flex absolute top-0 justify-between items-center h-16 pt-5 max-w-[1320px] w-full box-content'>
      <div className='flex items-start w-64'>
        <Logo />
      </div>
      <Navigation />
      <div className='flex gap-5 items-center w-64'>
        <Cart />
        <Button text={'Contact Us'} border={true} />
      </div>
    </header>
  );
}

export default Header;
