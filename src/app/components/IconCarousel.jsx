import React from "react";

const IconCarousel = () => {
  const icons = ["🌐", "📜", "🐍", "🐘", "💻"];

  return (
    <div className="carousel">
      <div className="carousel-track">
        {icons.map((icon, index) => (
          <div className="carousel-item" key={index}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconCarousel;
