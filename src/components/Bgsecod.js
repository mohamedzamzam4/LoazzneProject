// Bgsecod.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/bgsecod.css";
import photo1 from "../images/xl.jpeg";
import photo2 from "../images/xl1.jpg";
import photo3 from "../images/xl2.jpg";


import { Autoplay, Pagination } from "swiper/modules";

const slides = [
  {
    number: "01",
    image:photo1,
    text: "Choose the Best Company",
  },
  {
    number: "02",
    image: photo2,
    text: "Choose the Best Company",
  },
  {
    number: "03",
    image: photo3,
    text: "Choose the Best Company",
  },
];

const Bgsecod = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop={true}
      speed={1200}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <img
            className="d-block w-100 carousel-img"
            src={slide.image}
            alt={`Slide ${slide.number}`}
          />
          <div className="custom-caption">
            <div className="section-line-title">
              <span className="section-number">{slide.number}</span>
              <span className="section-line"></span>
              <span className="section-text">{slide.text}</span>
            </div>
            <h1 className="subtitle">
              Heating and Air
              <br /> Conditioning <br />
              Specialist
            </h1>
            <button className="quote-btn">GET A FREE QUOTE</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Bgsecod;
