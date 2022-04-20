import React, { useEffect } from "react";
import { BsChatQuote } from "react-icons/bs";
import "./testimonials.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    <div className="app__testimonials" id="testimonials">
      <div className="app__testimonials-container">
        <div data-aos="fade-right" className="app__title">
          <h2 className="title">Testimonials</h2>

          <p className="subtitle">What People Say About Us.</p>
        </div>

        <div className="app__testimonials-grid">
          <div data-aos="flip-left" className="testimonials__content">
            <div className="testimonials__info">
              <BsChatQuote style={{ fontSize: "32px" }} />

              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                voluptates officia eligendi atque expedita molestiae consequatur
                culpa odit temporibus quas!
              </p>

              <p className="right">
                <span>Ama Anokyewaa</span>
                <span>CEO, AA Media</span>
              </p>
            </div>
          </div>
          <div data-aos="flip-left" className="testimonials__content">
            <div className="testimonials__info">
              <BsChatQuote style={{ fontSize: "32px" }} />

              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                voluptates officia eligendi atque expedita molestiae consequatur
                culpa odit temporibus quas!
              </p>

              <p className="right">
                <span>Ama Anokyewaa</span>
                <span>CEO, AA Media</span>
              </p>
            </div>
          </div>
          <div data-aos="flip-left" className="testimonials__content">
            <div className="testimonials__info">
              <BsChatQuote style={{ fontSize: "32px" }} />

              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                voluptates officia eligendi atque expedita molestiae consequatur
                culpa odit temporibus quas!
              </p>

              <p className="right">
                <span>Ama Anokyewaa</span>
                <span>CEO, AA Media</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
