import { BiSupport } from "react-icons/bi";
import { BsFillCalendarFill } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import "./choose.scss";

function Choose() {
  return (
    <div className="app__choose" id="services">
      <div className="app__choose-container">
        <div data-aos="fade-in" className="app__title">
          <h2 className="title">Why Pryo?</h2>

          <p className="subtitle">
            Always stay updated with the technologies thus we help our clients
            by giving the best solutions for thier needs.
          </p>
        </div>

        <div className="app__choose-grid">
          <div data-aos="flip-right" className="choose__card">
            <div className="choose__card-info">
              <div className="iconContainer">
                <span>
                  {" "}
                  <HiLightBulb className="icon" />
                </span>
                <p className="subtitle">Innovative Ideas</p>
              </div>

              <div className="choose__text">
                <p className="subtitle">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam, eveniet incidunt dolorum beatae exercitationem nihil
                  dolore nobis velit excepturi laborum.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="flip-right" className="choose__card">
            <div className="choose__card-info">
              <div className="iconContainer">
                <span>
                  <BsFillCalendarFill className="icon" />
                </span>
                <p className="subtitle">Planning</p>
              </div>

              <div className="choose__text">
                <p className="subtitle">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  corrupti cumque quis maiores nemo fuga provident dolores ipsum
                  natus. Doloribus.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="flip-right" className="choose__card">
            <div className="choose__card-info">
              <div className="iconContainer">
                <span>
                  <BiSupport className="icon" />
                </span>
                <p className="subtitle">Communication</p>
              </div>

              <div className="choose__text">
                <p className="subtitle">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                  rerum fugiat voluptatibus veritatis ipsa est facilis qui vel
                  commodi molestias?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
