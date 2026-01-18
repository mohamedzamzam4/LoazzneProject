import React from "react";
import logo from "../images/envato.png";
import "../styles/envato.css";

const logos = [1, 2, 3, 4, 5]; 

const Envato = () => {
  return (
    <div className="divimg">
      {logos.map((_, index) => (
        <a key={index}>
          <img src={logo} className="img" alt={`envato-${index + 1}`} />
        </a>
      ))}
    </div>
  );
};

export default Envato;
