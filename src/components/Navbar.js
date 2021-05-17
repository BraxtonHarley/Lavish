import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

const Navbar = () => {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar">
        <div class="navbar-container container">
          
          <Link to="/" class="navbar-logo">
            <MdFingerprint className="navbar-icon" />
            LAVISH
          </Link>
          
          <div class="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
