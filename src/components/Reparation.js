import React from "react";
import rep from "../images/reparation.png";
import "../styles/reparation.css";

const Reparation = () => {
  return (
    <div className="about_wrapper">
      <img src={rep} className="about_image" alt="Reparation" />
      <div className="about_details">
        <div className="hero-title-with-shape">
          <h4>Welcome to loazzne</h4>
          <h1>Heating and air conditioning repair and installation company</h1>
          <p>
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <a className="btn-yellow" href="/about">
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reparation;
