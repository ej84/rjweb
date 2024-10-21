import React from "react";
import html from "../image/html.png";
import css from "../image/css.png";
import javascript from "../image/javascript.png";
import python from "../image/python.png";
import php from "../image/php.png";
import react from "../image/react.png";
import Image from "next/image";

const IconCarousel = () => {
  const icons = [html, css, javascript, php, python, react];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {icons.map((src, index) => (
          <div className="carousel-item" key={index}>
            <Image src={src} alt={`icon-${index}`} className="icon-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconCarousel;
