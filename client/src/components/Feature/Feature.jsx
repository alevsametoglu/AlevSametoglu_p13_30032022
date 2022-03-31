import React from "react";

const Feature = ({ image, title, description }) => {
  return (
    <div className="feature">
      <img src={image} alt="Icon" className="feature-icon" />
      <h3 className="feature__title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default Feature;
