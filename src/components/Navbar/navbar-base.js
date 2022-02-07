import { useWindowSize } from "../../custom_hooks/useWinowSize";

function NavbarBase() {
    const [height, width] = useWindowSize();

    return (
        <>
        <div className="navbar-container">
            <div className="navbar-call-to-action">
                Call us at <a href="tel:503-327-1804">503-327-1804</a>
            </div>

            <div className="navbar-menu-container">
            </div>
        </div>
        </>
    )
}

export default NavbarBase;