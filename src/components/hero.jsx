import slide1 from "../assets/background1.jpg";
import slide2 from "../assets/background2.jpg";

const Hero = () => {
  return (
    <div>
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-background">
              <img src={slide1} alt="Slide 1" className="d-block w-100" />
            </div>
            <div className="carousel-container">
              <div className="carousel-content text-center">
                <h1 className="font text-white display-1 animate__animated animate__fadeInDown">
                  Real Time Location
                </h1>
                <a
                  href="javascript:void(0);"
                  className="btn btn-lg get-started-btn animate__animated animate__fadeInUp"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-background">
              <img src={slide2} alt="Slide 2" className="d-block w-100" />
            </div>
            <div className="carousel-container">
              <div className="carousel-content text-center">
                <h1 className="font text-white display-1 animate__animated animate__fadeInDown">
                  Reliable & Accurate
                </h1>
                <a
                  href="javascript:void(0);"
                  className="btn btn-lg get-started-btn animate__animated animate__fadeInUp"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
