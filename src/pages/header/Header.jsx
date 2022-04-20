import React from "react";
import "./header.scss";

function Header() {
  return (
    <div className="app__header" id="home">
      <div className="app__header-container">
        <div className="app__header-grid">
          <div className="header__info">
            <h2 className="title">
              We Provide Solutions to Help You to Build or Grow Your Business!
            </h2>

            <p className="subtitle">
              A professional web and mobile app development agency with over
              100+ web and app developed. We provide a high- quality service in
              web and mobile app development as well as in design.
            </p>

            <div className="btns">
              <button className="btn-primary">Contact Us</button>
              <button className="btn-secondary">Sign Up</button>
            </div>
          </div>

          <div className="header__imgContainer">
            <img src="asset/img.svg" alt="" className="header__img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
