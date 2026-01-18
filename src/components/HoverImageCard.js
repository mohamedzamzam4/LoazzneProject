import React from "react";
import "../styles/hover.css";

const HoverImageCard = ({ image, title }) => {
  return (
    <div className="hover-card">
      <img src={image} alt={title} />
      <div className="overlay">
        <div className="overlay-content">
          <h3>{title}</h3>
          <button className="round-button">➜</button>
        </div>
      </div>
    </div>
  );
};

export default HoverImageCard;
