import Logo from '../logo/Logo';

function Footer() {
  return (
    <footer className="bg-[#222730] pt-32 pb-14 w-full">
      <div className="flex gap-36 px-14 max-w-[1440px] m-auto">
        <div>
          <Logo />
          <p className='text-[#999999] max-w-[289px] text-left text-[15px] leading-6 mt-9'>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non.</p>
        </div>
        <div>
          <h4 className='text-white text-left text-lg mb-6'>Menu Items</h4>
          <ul className='text-[#999999] text-left text-sm leading-9'>
            <li>About</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h4 className='text-white text-left text-lg mb-6'>Other Pages</h4>
          <ul className='text-[#999999] text-left text-sm leading-9'>
            <li>Styleguide</li>
            <li>Changelog</li>
            <li>licenses</li>
            <li>Team</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
