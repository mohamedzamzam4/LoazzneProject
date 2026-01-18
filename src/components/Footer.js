import React from "react";
import "../styles/footer.css";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const footerItems = [
  {
    iconClass: "fa-solid fa-location-dot",
    title: "Address",
    text: "66 Broklyn Street, New York",
  },
  {
    iconClass: "fa-solid fa-envelope",
    title: "Email",
    text: "help@loazzne.com",
  },
  {
    iconClass: "fa-regular fa-clock",
    title: "Open Hours",
    text: "Mon-Sat, 9am - 6pm",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="adrcss">
        {footerItems.map((item, index) => (
          <React.Fragment key={index}>
            <h3>
              <i className={item.iconClass}></i>
              <strong> {item.title}</strong> {item.text}
            </h3>
            {index !== footerItems.length - 1 && (
              <div className="vertical-line"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <hr className="horizontal-line" />

      <div className="footer-container">
        <div className="footer-about">
          <h2>About Loazzne</h2>
          <p>
            At Lennom, we don’t just provide resi-<br></br>dential and
            commercial heating and air<br></br> conditioning services; we make
            people’s<br></br> lives easier. Better.
          </p>
          <p className="quote-title">Get a Quote</p>
          <h3 className="quote-number">666 888 000</h3>
        </div>

        <div className="footer-section footer-links">
          <h2>Quick Links</h2>
          <ul className="footer-links-list">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Request Appointment</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Change Location</a>
            </li>
            <li>
              <a href="#">Expert Tips</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter ">
          <h2>Newsletter</h2>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© copyright 2025 by Layerdrops.com</p>
        <div className="footer-socials">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
