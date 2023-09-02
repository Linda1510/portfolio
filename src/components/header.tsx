import { useState } from "react";



const Header = () => {
 
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };


  const closeHamburger = () => {
    setIsHamburgerOpen(false);
  };

  return (
    <div className="header">
      <div className="header__logo">Nikolina</div>
      <div className={`header__link ${isHamburgerOpen ? "open" : ""}`}>
        <a href="home" onClick={closeHamburger}>
          Home
        </a>
        <a href="me" onClick={closeHamburger}>
          Me
        </a>
        <a href="projects" onClick={closeHamburger}>
          Projects
        </a>
        <a href="contact" onClick={closeHamburger}>
          Contact
        </a>
        <a href="login" onClick={closeHamburger}>
          Login
        </a>
        <a href="register" onClick={closeHamburger}>
          Register
        </a>
      </div>
      <div className="header__hamburger">
        <div className="header__logo">Nikolina</div>
        <div className="header__hamburger__menu" onClick={toggleHamburger}>
          <div className={`header__hamburger--icon ${isHamburgerOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="header__hamburger--links">
            <a href="home" onClick={closeHamburger}>
              Home
            </a>
            <a href="me" onClick={closeHamburger}>
              Me
            </a>
            <a href="projects" onClick={closeHamburger}>
              Projects
            </a>
            <a href="contact" onClick={closeHamburger}>
              Contact
            </a>
            <a href="login" onClick={closeHamburger}>
              Login
            </a>
            <a href="register" onClick={closeHamburger}>
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
