import React from "react";

const Carasoul = () => {
  return (
    <React.Fragment>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              className="w-100  "
              src="https://picsum.photos/1700/601"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4>
                <a href="#">Shop Now</a>
              </h4>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              className="w-100 "
              src="https://picsum.photos/1700/600"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="w-100 "
              src="https://picsum.photos/1700/599"
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
