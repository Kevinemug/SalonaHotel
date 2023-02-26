import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import herro from "./herro.jpeg";
import landing from "./landing.jpeg";
import first from "./first.jpeg";
import second from "./second.jpeg";
import third from "./third.jpeg";
import welcome from "./welcome.jpg";
function ImageSlider() {
  const images = [first, second, third, herro, landing];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <div className="overall">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="sliderContainer">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{ width: "900px", height: "500px" }}
              />
            </div>
          ))}
        </Slider>
        <img
          src={welcome}
          className="slider"
          style={{
            width: "700px",
            height: "500px",
            position: "absolute",
            left: "900px",
            top: "120px",
          }}
        />
      </div>
    </div>
  );
}

export default ImageSlider;
