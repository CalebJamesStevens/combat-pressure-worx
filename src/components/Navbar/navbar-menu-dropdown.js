import { MdClose } from 'react-icons/md';

function NavbarMenuDropdown({ handleClose }) {
  return (
    <>
      <div className='navbar-menu-dropdown-container'>
        <div className='navbar-menu-dropdown'>
          <div className='dropdown-menu-header'>
            <div className=''>Menu</div>
            <MdClose
              onClick={(e) => {
                handleClose(e);
              }}
              className='clickable react-icon'
              style={{ '--icon-size': '2' }}
            />
          </div>
          <div className='dropdown-menu-items'>
            <a href='#our-story'>
              <div className='clickable dropdown-menu-item'>Our Story</div>
            </a>
            <a href='#our-work'>
              <div className='clickable dropdown-menu-item'>Our Work</div>
            </a>
            <a href='#contact'>
              <div className='clickable dropdown-menu-item'>Contact Us</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMenuDropdown;
