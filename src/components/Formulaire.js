import React from "react";
import "../styles/Formulaire.css";
import map from "../images/map.png";

const Formulaire = () => {
  return (
    <div className="form-section">
      <div className="form-image">
        <img src={map} alt="map" />
      </div>

      <div className="form-container">
        <h4>Get a free quote</h4>
        <p>To request a service call, please fill out the form below</p>

        <form>
          <div className="form-row">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
          </div>
          <input type="tel" placeholder="Phone number" required />
          <select required>
            <option value="">Select a service</option>
            <option value="1">Service 1</option>
            <option value="2">Service 2</option>
            <option value="3">Service 3</option>
            <option value="4">Service 4</option>
          </select>
          <button type="submit">SUBMIT NOW</button>
        </form>
      </div>
    </div>
  );
};

export default Formulaire;
