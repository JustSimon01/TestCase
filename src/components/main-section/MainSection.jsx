import React from 'react';
import styles from './MainSection.module.css'
import fireSymbol from '../../images/fire.svg'
import picture from '../../images/green_solider.png'
import underline from '../../images/Underline.svg'
import Button from '../button/Button';
import SideMenu from '../side-menu/SideMenu';

function MainSection() {
  return (
    <section className={`${styles.mainSection} min-h-[1069px] w-full`}>
      {/* <div className='flex justify-between mt-72 p-5 max-w-[1440px] m-auto min-h-[528px]'> */}
      <div className='grid grid-cols-2 items-center mt-72 p-5 max-w-[1440px] m-auto min-h-[528px]'>
        <div className='flex'>
          <SideMenu />
          <div className='relative w-full max-w-[656px]'>
            <div className='flex gap-3 h-8 items-center mb-4'>
              <img className='w-8 h-8' src={fireSymbol} alt='Картинка огня' ></img>
              <h3 className='text-[#00c6ff]'>FUTURE OF&nbsp;SPORTS</h3>
            </div>
            <h1 className='text-white text-7xl text-left leading-tight mb-11 drop-shadow-lg'>Unleash the Next Generation of&nbsp;Gaming</h1>
            <img src={underline} className='absolute top-56 right-1' alt='Яркое подчеркивание' />
            <p className=' text-gray-500 text-lg text-left max-w-[615px] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
            <div className='flex'>
              <Button text={'Explore More'} color={'bg-[#00c6ff]'} border={true} size={'big'} />
              <Button text={'View our Team'} />
            </div>
          </div>
        </div>
        <img src={picture} alt='Солдат в зеленой экипировке' className='ml-2 ' />
      </div>
    </section>
  );
}

export default MainSection;
