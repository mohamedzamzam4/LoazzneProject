import React from "react";
import "../styles/navbar.css";
import logo from "../images/image.png";
import TopBar from "./TopBar";

const defaultNavItems = [
  { label: "Home", href: "#Home", icon: false },
  { label: "About", href: "#About", icon: false },
  {
    label: "Services",
    href: "#Services",
    icon: true,
    dropdown: true,
    items: [
      { label: "Services", href: "#services-page" },
      { label: "Services Details", href: "#services-details" },
    ],
  },
  {
    label: "Blog",
    href: "#Blog",
    icon: true,
    dropdown: true,
    items: [
      { label: "Blog Page", href: "#page" },
      { label: "Blog Details", href: "#details" },
    ],
  },
  { label: "Contact", href: "#Contact", icon: false },
  { label: "Book Today", isButton: true },
];

const NavBar = ({ navItems = defaultNavItems, logoSrc = logo }) => {
  if (!navItems || !Array.isArray(navItems)) {
    console.warn("NavBar: navItems doit être un tableau");
    return null;
  }

  const handleScroll = (e, href) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className="topbar-wrapper">
        <TopBar />
      </div>

      <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-lg bg-light shadow">
          <div className="container">
            <a className="navbar-brand fw-bold" href="#">
              <img src={logoSrc} alt="Logo" height="50" />
            </a>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav d-flex align-items-center gap-lg-5 gap-3">
                {navItems.map((item, index) => (
                  <li
                    className={`nav-item ${item.dropdown ? "dropdown" : ""}`}
                    key={index}
                  >
                    {item.dropdown ? (
                      <>
                        <a
                          className="nav-link dropdown-toggle"
                          href={item.href}
                          id={`navbarDropdown${item.label}`}
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {item.label}
                        </a>
                        <ul
                          className="dropdown-menu custom-dropdown"
                          aria-labelledby={`navbarDropdown${item.label}`}
                        >
                          {item.items?.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={subItem.href}
                                className="dropdown-item"
                                onClick={(e) => handleScroll(e, subItem.href)}
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : item.isButton ? (
                      <button
                        className="quote-btn2"
                        type="button"
                        onClick={() => console.log(`${item.label} clicked`)}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a
                        className="nav-link"
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.href)}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
