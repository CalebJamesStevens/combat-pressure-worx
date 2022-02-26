import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import NavbarMenuDropdown from './navbar-menu-dropdown';

function MobileMenu() {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuClick = (e) => {
    setMenuToggle((current) => !current);
    console.log(menuToggle);
  };

  return (
    <>
      <FaBars
        onClick={(e) => {
          handleMenuClick(e);
        }}
        className='react-icon clickable'
        style={{ '--icon-size': '2' }}
      />
      {menuToggle && <NavbarMenuDropdown handleClose={handleMenuClick} />}
    </>
  );
}

export default MobileMenu;
