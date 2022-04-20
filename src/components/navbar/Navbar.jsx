import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  return (
    <div className="app__navbar">
      <div className="app__navbar-container">
        <div className="app__navbar-left">
          <h2 className="logo">
            <a href="#home" className="app__logo">
              Pryo
            </a>
          </h2>
        </div>

        <div className="app__navbar-right">
          <ul className="navlinks">
            <li className="list">
              <a onClick={handleClick} href="#home" className="listItems">
                Home
              </a>
            </li>
            <li className="list">
              <a onClick={handleClick} href="#about" className="listItems">
                About
              </a>
            </li>
            <li className="list">
              <a onClick={handleClick} href="#services" className="listItems">
                Services
              </a>
            </li>
            <li className="list">
              <a
                onClick={handleClick}
                href="#testimonials"
                className="listItems"
              >
                Testimonials
              </a>
            </li>
            <li className="list">
              <a onClick={handleClick} href="#blog" className="listItems">
                Blog
              </a>
            </li>
            <li className="list">
              <a href="/#" className="listItems">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="app__navbar-mobile">
          <HiOutlineMenuAlt3
            style={{ color: "var(--title)", fontSize: "24px" }}
            onClick={() => setClick(true)}
          />

          {click && (
            <div className="app__navbar-mobile-close">
              <MdOutlineClose
                style={{
                  color: "var(--main-color)",
                  fontSize: "24px",
                  margin: "2rem",
                  cursor: "pointer",
                }}
                onClick={() => setClick(false)}
              />
              <ul className="mobile__links">
                <li onClick={handleClick}>
                  <a onClick={() => setClick(false)} href="#home">
                    Home
                  </a>
                </li>
                <li onClick={handleClick}>
                  <a onClick={() => setClick(false)} href="#about">
                    About
                  </a>
                </li>
                <li onClick={handleClick}>
                  <a onClick={() => setClick(false)} href="#services">
                    Services
                  </a>
                </li>
                <li onClick={handleClick}>
                  <a onClick={() => setClick(false)} href="#testimonials">
                    Testimonials
                  </a>
                </li>
                <li onClick={handleClick}>
                  <a onClick={() => setClick(false)} href="#blog">
                    Blog
                  </a>
                </li>
                <li onClick={handleClick}>
                  <a onClick={() => setClick(false)} href="/#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
