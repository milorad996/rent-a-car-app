import { Link } from "react-router-dom";
import { useState } from "react";
import "./../css/navbar.css";

function NavbarComponent() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <nav className="header-nav">
                <div className="nav-logo">
                    Rent<span className="highlighted">A</span>Car
                </div>

                <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/cars" onClick={closeMenu}>Cars</Link>
                    <Link to="/rental" onClick={closeMenu}>Rental Terms</Link>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </div>
            </nav>
        </header>
    );
}

export default NavbarComponent;
