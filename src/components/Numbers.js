import React from "react";
import CountUp from "react-countup";
import "../styles/numbers.css";
import iconImage from "../images/shape.png";

const stats = [
  { number: 8870, label: "Air Conditioning Repairs and Install" },
  { number: 4760, label: "Air Conditioning Repairs and Install" },
  { number: 9032, label: "Air Conditioning Repairs and Install" },
];

function Numbers() {
  return (
    <section className="statistics-section">
      <h2 className="section-title">Numbers Speakers.</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div
            className={`stat-card ${
              index !== stats.length - 1 ? "with-border" : ""
            }`}
            key={index}
          >
            <div className="icon-background">
              <img src={iconImage} alt="icon" />
            </div>
            <CountUp
              end={stat.number}
              separator=""
              duration={2.5}
              className="stat-number"
            />
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Numbers;
