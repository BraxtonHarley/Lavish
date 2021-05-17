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
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
                <Link className="nav-links" path="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-links" path="/services">
                    Services
                </Link>
            </li>
             <li className="nav-item">
                <Link className="nav-links" path="/products">
                    Products
                </Link>
            </li>
           
            <li className="nav-btn">
                {button ? (
                    <Link to='/sign-up' className="btn-link" >
                        <Button buttonStyle='btn--outline'>
                            Sign Up
                        </Button>
                    </Link>
                ): (
                
                    <Link to='/sign-up' className="btn-link" >
                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                         Sign Up
                        </Button>
                    </Link>)}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
