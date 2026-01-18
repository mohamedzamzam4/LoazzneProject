import React, { useState, useEffect } from "react";
import "../styles/agents.css";
import user1 from "../images/a1.webp";
import user2 from "../images/a2.jpg";
import user3 from "../images/a2.jpg";

const testimonials = [
  {
    name: "Max Dunn",
    role: "Developer",
    text: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.",
    image: user1,
  },
  {
    name: "Della Barnett",
    role: "CEO",
    text: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.",
    image: user2,
  },
  {
    name: "Alberta Potter",
    role: "Director",
    text: "This is due to their excellent service, competitive pricing and customer support. It's thoroughly refreshing to get such a personal touch.",
    image: user3,
  },
];

const Agents = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right");
  const [reset, setReset] = useState(false);

  const goToNext = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setReset(true);
  };

  const goToPrev = () => {
    setDirection("left");
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setReset(true);
  };

  useEffect(() => {
    if (reset) {
      const timeout = setTimeout(() => {
        setReset(false);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [reset]);

  return (
    <div className="testimonial-section">
      <div
        className="testimonial-nav left"
        onClick={goToPrev}
        aria-label="Previous testimonial"
      >
        {"<"}
      </div>

      <div className="testimonial-content">
        <div className="testimonial-avatars">
          {testimonials.map((user, index) => (
            <img
              key={index}
              src={user.image}
              alt={user.name}
              className={`avatar-img ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

        <p
          className={`testimonial-text ${
            direction === "left" ? "slide-from-right" : "slide-from-left"
          } ${reset ? "reset" : ""}`}
        >
          {testimonials[current].text}
        </p>

        <div
          className={`testimonial-author ${
            direction === "left" ? "slide-from-right" : "slide-from-left"
          } ${reset ? "reset" : ""}`}
        >
          <h5>{testimonials[current].name}</h5>
          <p>{testimonials[current].role}</p>
        </div>
      </div>

      <div
        className="testimonial-nav right"
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        {">"}
      </div>
      <section>
        <h2 className="test-h2">testimonials</h2>
      </section>
    </div>
  );
};

export default Agents;
