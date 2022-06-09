import React from "react";
import "./AboutCard.css";

function AboutCard({ title, style, p, src, description, desc }) {
  return (
    <>
      <img src={src} alt={title} />
      <div className="aboutCard" style={style}>
        <h3 className="aboutCard__title" style={style}>
          {title}
        </h3>
        <p className="aboutCard__description" style={p}>
          {description}
        </p>
        <p className="aboutCard__description--span">{desc}</p>
      </div>
    </>
  );
}

export default AboutCard;
