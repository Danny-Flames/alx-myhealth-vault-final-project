import React from "react";

function Testimonials() {
  return (
    <section id="testimonials" className="section-bg">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>Testimonials</h3>
        </header>
        <div
          className="testimonials-slider swiper-container"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img
                  src="assets/img/testimonial-1.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <img
                    src="assets/img/quote-sign-left.png"
                    className="quote-sign-left"
                    alt=""
                  />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <img
                    src="assets/img/quote-sign-right.png"
                    className="quote-sign-right"
                    alt=""
                  />
                </p>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img
                  src="assets/img/testimonial-2.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <img
                    src="assets/img/quote-sign-left.png"
                    className="quote-sign-left"
                    alt=""
                  />
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <img
                    src="assets/img/quote-sign-right.png"
                    className="quote-sign-right"
                    alt=""
                  />
                </p>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img
                  src="assets/img/testimonial-3.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <img
                    src="assets/img/quote-sign-left.png"
                    className="quote-sign-left"
                    alt=""
                  />
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <img
                    src="assets/img/quote-sign-right.png"
                    className="quote-sign-right"
                    alt=""
                  />
                </p>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img
                  src="assets/img/testimonial-4.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <img
                    src="assets/img/quote-sign-left.png"
                    className="quote-sign-left"
                    alt=""
                  />
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <img
                    src="assets/img/quote-sign-right.png"
                    className="quote-sign-right"
                    alt=""
                  />
                </p>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img
                  src="assets/img/testimonial-5.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <img
                    src="assets/img/quote-sign-left.png"
                    className="quote-sign-left"
                    alt=""
                  />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <img
                    src="assets/img/quote-sign-right.png"
                    className="quote-sign-right"
                    alt=""
                  />
                </p>
              </div>
            </div>
            {/* End testimonial item */}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
