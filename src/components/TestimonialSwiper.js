import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/TestimonialSwiper.css";

const testimonials = [
  {
    name: "Max Dunn",
    role: "Developer",
    text: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lisa Raymond",
    role: "Designer",
    text: "Excellent experience! The support team was super helpful and the quality of the work is great.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ahmed Ali",
    role: "Project Manager",
    text: "They handled everything professionally. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const TestimonialSwiper = () => {
  return (
    <div className="testimonial-section">
      <Swiper
        className="testimonial-swiper"
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-content">
              <div className="testimonial-avatars">
                <img src={item.avatar} alt={item.name} />
              </div>
              <p className="testimonial-text">{item.text}</p>
              <h5 className="testimonial-name">{item.name}</h5>
              <p className="testimonial-role">{item.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
