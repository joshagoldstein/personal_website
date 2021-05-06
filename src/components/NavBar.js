import React, { useState, useEffect } from "react";
import { Button } from './Button';
import { Link } from "react-router-dom";
import './NavBar.css';



function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960){
          setButton(false)
      } else {
          setButton(true)
      }
  };

  useEffect(() => {
      showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick ={closeMobileMenu}>
            JOSH GOLDSTEIN
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li classname="nav-item">
              <Link 
                to="/" 
                className="nav-links" 
                onClick={closeMobileMenu}
              >
                welcome!
              </Link>
            </li>
            <li classname="nav-item">
              <Link 
                to="/about" 
                className="nav-links" 
                onClick={closeMobileMenu}
               >
                about me
              </Link>
            </li>
            <li classname="nav-item">
              <Link
                to="/exp"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                experiences & projects
              </Link>
            </li>
            <li>
              <Link
                to='/reach-out'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Reach Out
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Reach Out</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
