import React from "react";
import "../styles/latestnews.css";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";

const news = [
  {
    author: "admin",
    image: c1,
    comments: 3,
    title: "How does a ductless heat pump work?",
    text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
  },
  {
    author: "admin",
    image: c2,
    comments: 3,
    title: "Simple hack to improve A/C efficiency",
    text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
  },
  {
    author: "admin",
    image: c3,
    comments: 3,
    title: "Preparing your home before vacation",
    text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
  },
];

const Latestnews = () => {
  return (
    <section className="latest-news-section">
      <h1 className="latest-news-title">Our latest news</h1>
      <div className="news-cards">
        {news.map((item, index) => (
          <div className="news-card" key={index}>
            <div className="news-img-container">
              <img src={item.image} className="news-img" alt={item.title} />
              <div className="news-date">
                <div>07</div>
                <div>Nov</div>
              </div>
            </div>
            <div className="news-content">
              <div className="news-meta">
                by {item.author} - {item.comments} Comments
              </div>
              <div className="news-title">{item.title}</div>
              <div className="news-text">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latestnews;
