import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./Navbar.scss";

const Navbar = () => {
  const [btnBurger, setBtnBurger] = useState(false);
  const [navLinksOpen, setNavLinksOpen] = useState(false);
  return (
    <nav className="navbar-container">
      <div className="logo">
        <Link to="/">Uniformes Karina</Link>
      </div>
      <div className={navLinksOpen ? "nav-links open" : "nav-links"}>
        <ul>
          <a href="#gallery">
            <li className="nav-item-link">Galer&iacute;a</li>
          </a>
          <a href="#contact-form">
            <li className="nav-item-link">Contacto</li>
          </a>
        </ul>
      </div>
      <div
        className={btnBurger ? "menu-btn open" : "menu-btn"}
        onClick={() => {
          setBtnBurger(!btnBurger);
          setNavLinksOpen(!navLinksOpen);
        }}
      >
        <div className="menu-btn-burger"></div>
      </div>
    </nav>
  );
};

export default Navbar;
