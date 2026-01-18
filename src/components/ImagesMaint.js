import React from "react";
import "../styles/main.css";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.avif";
import photo3 from "../images/photo3.png";
import photo4 from "../images/photo4.jpg";
import photo5 from "../images/photo5.webp";
import photo6 from "../images/photo6.jpg";
import HoverImageCard from "./HoverImageCard";

const images = [
  { src: photo1, title: "Maintenance and Repair", buttonText: "Voir plus" },
  { src: photo2, title: "Maintenance and Repair", buttonText: "Voir plus" },
  { src: photo3, title: "Maintenance and Repair", buttonText: "Voir plus" },
  { src: photo4, title: "Maintenance and Repair", buttonText: "Voir plus" },
  { src: photo5, title: "Maintenance and Repair", buttonText: "Voir plus" },
  { src: photo6, title: "Maintenance and Repair", buttonText: "Voir plus" },
];

export default function ImagesMaint() {
  return (
    <div className="galerie-container">
      {images.map((img, i) => (
        <div key={i} className="galerie-image">
          <HoverImageCard
            image={img.src}
            title={img.title}
            buttonText={img.buttonText}
          />
        </div>
      ))}
    </div>
  );
}
