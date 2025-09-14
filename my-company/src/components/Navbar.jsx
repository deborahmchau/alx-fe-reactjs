// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav>
          <ul>
            <li><Link to="/" style={{ margin: "0 10px" }}>Home</Link></li>
            <li><Link to="/about" style={{ margin: "0 10px" }}>About</Link></li>
            <li><Link to="/services" style={{ margin: "0 10px" }}>Services</Link></li>
            <li><Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link></li>
          </ul>
         </nav> 
    );
}

export default Navbar;
