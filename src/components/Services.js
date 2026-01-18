import React from "react";
import "../styles/services.css";

const servicesData = [
  {
    title: "Cooling Services",
    icon: "❄️", 
    image:
      "https://aireone.com/wp-content/uploads/2017/11/heating-cooling-services-ontario.jpg",
    text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
  },
  {
    title: "Heating Services",
    icon: "🔥",
    image:
      "https://wattsheating.com/wp-content/uploads/wattspdx/watts-heating-cooling-5-tips-to-find-the-best-area-heating-and-cooling-service-opt.jpg",
    text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
  },
  {
    title: "Other Services",
    icon: "🌀",
    image:
      "https://media.istockphoto.com/id/1391879565/photo/closeup-of-plumber-using-screwdriver-while-fixing-boiler-or-water-heater-working-on-heating.jpg?s=612x612&w=0&k=20&c=YhSh21AjRZsuiO298i69C36AMFryjIlIcd8YHUou7PI=",
    text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="Service-title">Our services</h1>

      {servicesData.map((service, index) => (
        <div key={index} className="service-card">
          <div className="card-img-container">
            <img src={service.image} alt={service.title} className="card-img" />
            <div className="icon-overlay">{service.icon}</div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{service.title}</h5>
            <br />
            <br />

            <p className="card-text">{service.text}</p>
          </div>
          <div className="card-footer">
            <button className="learn-more-btn1">LEARN MORE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
