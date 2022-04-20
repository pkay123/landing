import React, { useEffect } from "react";
import "./blog.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    <div className="app__blog" id="blog">
      <div className="app__blog-container">
        <div data-aos="fade-in" className="app__title">
          <h2 className="title">Blog</h2>

          <p className="subtitle">Insights and advice from our experts.</p>
        </div>

        <div className="app__blog-grid">
          <div data-aos="flip-right" className="app__blog-card">
            <img src="asset/img-1.jpg" alt="" className="blog__img" />

            <div className="app__blog-content">
              <h2 className="title">
                Mistakes to Avoid During MVP Development
              </h2>

              <p className="subtitle">
                When there appears an idea to create a startup, have to take
                into account all the risks you will face and evalute them
                thoughtfullu. Also as a rule...
              </p>
              <button className="btn-secondary">Read More</button>
            </div>
          </div>
          <div data-aos="flip-right" className="app__blog-card">
            <img src="asset/img-2.jpg" alt="" className="blog__img" />

            <div className="app__blog-content">
              <h2 className="title">
                A Day in the life of an Engineering Manager
              </h2>

              <p className="subtitle">
                During the eight years I spent as an engineering manager, I
                regularly tracked how I spent my time. As a startup engineering
                manager, I was ...
              </p>
              <button className="btn-secondary">Read More</button>
            </div>
          </div>
          <div data-aos="flip-right" className="app__blog-card">
            <img src="asset/img-3.jpg" alt="" className="blog__img" />

            <div className="app__blog-content">
              <h2 className="title">
                How to Build a Strong Remote Work Culture
              </h2>

              <p className="subtitle">
                Pat Matt is the company VP of Talent Operations responsible for
                matching some of the world's greatest freelancers with companies
                who...
              </p>
              <button className="btn-secondary">Read More</button>
            </div>
          </div>
        </div>

        <button className="btn-primary primary">Load More</button>
      </div>
    </div>
  );
}

export default Blog;
