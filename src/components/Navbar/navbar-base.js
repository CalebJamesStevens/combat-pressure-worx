import { useWindowSize } from "../../custom_hooks/useWinowSize";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

function NavbarBase() {
    const [height, width] = useWindowSize();

    return (
        <>
        <div className="navbar-container">
            <div className="navbar-call-to-action">
                Call us at <a id="tel-link" href="tel:503-327-1804">503-327-1804</a>
            </div>

            <div className="navbar-menu-container">
                {width >= 950 && <DesktopMenu/>}
                {width < 950 && <MobileMenu/>}
            </div>
        </div>
        </>
    )
}

export default NavbarBase;