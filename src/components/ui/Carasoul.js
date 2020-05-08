import React from "react";

const Carasoul = () => {
  return (
    <React.Fragment>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://demo.oxygentheme.com/minimal/wp-content/uploads/2015/04/image1xxl-420x540.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://demo.oxygentheme.com/minimal/wp-content/uploads/2015/04/image4xxl-420x540.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://demo.oxygentheme.com/minimal/wp-content/uploads/2015/04/image3xxl-420x540.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#demo"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#demo"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Carasoul;
