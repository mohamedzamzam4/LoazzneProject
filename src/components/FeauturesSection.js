import React from "react";
import "../styles/feature.css";

const features = [
  { icon: "fa-solid fa-credit-card", text: "No Upfront Payments" },
  { icon: "fa-solid fa-stamp", text: "Satisfaction guarantee" },
  { icon: "fa-solid fa-clock-rotate-left", text: "Emergency Service" },
  { icon: "fa-solid fa-thumbs-up", text: "Fixed Right Promise" },
  { icon: "fa-solid fa-person", text: "8 years Experience" },
];

const FeauturesSection = () => {
  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <i className={feature.icon}></i>
          <strong>{feature.text}</strong>
        </div>
      ))}
    </div>
  );
};

export default FeauturesSection;
