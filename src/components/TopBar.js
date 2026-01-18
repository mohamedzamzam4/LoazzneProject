import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Topbar.css";

const socialLinks = [
  { href: "#", icon: "fab fa-twitter" },
  { href: "#", icon: "fab fa-facebook-f" },
  { href: "#", icon: "fab fa-linkedin-in" },
  { href: "#", icon: "fab fa-youtube" },
];

const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Address",
    content: "66 Broklyn Street, New York",
  },
  { icon: "fas fa-phone-volume", title: "Call Now", content: "666 888 000" },
  { icon: "far fa-clock", title: "Open Hours", content: "Mon-Sat: 9am - 6pm" },
];

const TopBar = () => {
  return (
    <div className="bg-light py-3 border-bottom topbar-container">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <div className="d-flex gap-3 justify-content-center">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} className="social-icon">
              <i className={link.icon}></i>
            </a>
          ))}
        </div>

        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 text-center text-md-start">
          {contactInfo.map((info, index) => (
            <span key={index} className="social-text">
              <i className={info.icon}></i>
              <strong className="ms-1">{info.title}: </strong>
              {info.content}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
