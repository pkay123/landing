import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { BsFillCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import "./about.scss";

function About() {
  return (
    <div className="app__about" id="about">
      <div className="app__about-container">
        <div className="app__about-grid">
          <div data-aos="fade-right" className="about__info">
            <h2 className="title">About Us</h2>

            <p className="subtitle">
              We Believe that everyone deserves to have a website or online
              store. Innovation and simplicity make us happy. Our mission is to
              help people achieve what they have passionate about it.
              <br />
              <br />
              We are excited to simplify SEO for everyone through software,
              education, or cimmunity.
            </p>

            <button className="btn-primary">Read More</button>
          </div>

          <div className="about__card-grid">
            <div data-aos="flip-left" className="about__card">
              <div className="card__info">
                <div className="iconContainer">
                  <HiLightBulb className="icon" />
                </div>

                <div className="about__text">
                  <p className="subtitle">Innovative Ideas</p>
                </div>
              </div>
            </div>
            <div data-aos="flip-left" className="about__card">
              <div className="card__info">
                <div className="iconContainer">
                  <BsFillCalendarFill className="icon" />
                </div>

                <div className="about__text">
                  <p className="subtitle">Planning</p>
                </div>
              </div>
            </div>
            <div data-aos="flip-left" className="about__card">
              <div className="card__info">
                <div className="iconContainer">
                  <BiSupport className="icon" />
                </div>

                <div className="about__text">
                  <p className="subtitle">Communication</p>
                </div>
              </div>
            </div>
            <div data-aos="flip-left" className="about__card">
              <div className="card__info">
                <div className="iconContainer">
                  <SiGooglemessages className="icon" />
                </div>

                <div className="about__text">
                  <p className="subtitle">24 * 7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
