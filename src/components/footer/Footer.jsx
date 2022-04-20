import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="app__footer">
      <div className="app__footer-container">
        <div className="app__footer-grid">
          <div className="app__footer-content">
            <h2 className="title">Pryo</h2>

            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              nisi quisquam cum, eveniet nostrum minus sunt reprehenderit
              distinctio placeat?
            </p>
          </div>
          <div className="app__footer-content">
            <h2 className="title">Useful Links</h2>

            <ul className="app__footer-list">
              <li className="app__footer-listItems">Our Story</li>
              <li className="app__footer-listItems">Pryo</li>
              <li className="app__footer-listItems">Design House</li>
              <li className="app__footer-listItems">Materials</li>
              <li className="app__footer-listItems">Lookbook</li>
            </ul>
          </div>
          <div className="app__footer-content">
            <h2 className="title">Services</h2>

            <ul className="app__footer-list">
              <li className="app__footer-listItems">Our Story</li>
              <li className="app__footer-listItems">Pryo</li>
              <li className="app__footer-listItems">Design House</li>
              <li className="app__footer-listItems">Materials</li>
              <li className="app__footer-listItems">Lookbook</li>
            </ul>
          </div>
          <div className="app__footer-content">
            <h2 className="title">Contact</h2>

            <ul className="app__footer-list">
              <li className="app__footer-listItems">pryo@email.com</li>
              <li className="app__footer-listItems">+233 233 233 455</li>
              <li className="app__footer-listItems">www.pryo.example.com</li>
              <li className="app__footer-listItems">C0-1234 1234</li>
              <li className="app__footer-listItems">Agona Swedru</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="copy">
          <p className="subtitle">All Rights Reserved.</p>

          <ul className="social__icons">
            <li className="icons">
              <Facebook className="s__icons" />
            </li>
            <li className="icons">
              <Instagram className="s__icons" />
            </li>
            <li className="icons">
              <Twitter className="s__icons" />
            </li>
            <li className="icons">
              <Pinterest className="s__icons" />
            </li>
            <li className="icons">
              <YouTube className="s__icons" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
