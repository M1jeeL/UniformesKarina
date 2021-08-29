import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="logo">Uniformes Karina</div>
      <div className="nav-links">
        <ul>
          <li>Galer&iacute;a</li>
          <li>Contacto</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
