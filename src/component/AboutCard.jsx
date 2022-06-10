import React from "react";
import "./AboutCard.css";

function AboutCard({ title, style, p, src, description, desc }) {
  return (
    <>
      <div className="abt">
        <img src={src} alt={title} className="abt--image" />
        <div className="aboutCard" style={style}>
          <h3 className="aboutCard__title" style={style}>
            {title}
          </h3>
          <p className="aboutCard__description" style={p}>
            {description}
          </p>
          <p className="aboutCard__description--span">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default AboutCard;
