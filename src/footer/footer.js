import { FaFacebookSquare } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className='footer-container'>
        <div className='footer-contacts'>
          <div className='footer-contact-item'>
            <a href='https://www.facebook.com/search/top?q=combat%20pressure%20worx'>
              <FaFacebookSquare />
            </a>
          </div>
          <div className='footer-contact-item'>
            <a id='tel-link' href='tel:503-327-1804'>
              503-327-1804
            </a>
          </div>
          <div className='footer-contact-item'>
            <a id='tel-link' href='mailto:Troutbum16@gmail.com'>
              Troutbum16@gmail.com
            </a>
          </div>
        </div>
        <div className='footer-menu'>
          <a href='contact'>
            <div className='footer-menu-item'>Contact</div>
          </a>
          <a href='out-story'>
            <div className='footer-menu-item'>About Us</div>
          </a>
          <div className='footer-menu-item'>Terms & Conditions</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
