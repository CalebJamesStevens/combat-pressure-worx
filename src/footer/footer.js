import { FaFacebookSquare } from 'react-icons/fa'

function Footer() {
    return (
        <>
        <div className="footer-container">
            <div className="footer-contacts">
                <div className="footer-contact-item"><a id="tel-link" href="tel:503-327-1804">503-327-1804</a></div>
                <div className="footer-contact-item"><FaFacebookSquare/></div>
                <div className="footer-contact-item"><a id="tel-link" href="mailto:Troutbum16@gmail.com">Troutbum16@gmail.com</a></div>
            </div>
            <div className="footer-menu">
                <div className="footer-menu-item">Contact</div>
                <div className="footer-menu-item">About Us</div>
                <div className="footer-menu-item">Terms & Conditions</div>
            </div>
        </div>
        </>
    )

}

export default Footer;