import React from "react";
import { heroCarouselItems } from "../../utilities/carousel";

const Hero = () => {

  return (
    <section id="hero">
      <div className="hero-container">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval={5000}
        >
          <ol id="hero-carousel-indicators" className="carousel-indicators">
            {heroCarouselItems.map((_, index) => (
              <li
                key={index}
                data-bs-target="#heroCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            ))}
          </ol>

          <div className="carousel-inner" role="listbox">
            {heroCarouselItems.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ backgroundImage: item.backgroundImage }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      {item.heading}
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      {item.paragraph}
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            />
          </a>
          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
