import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card({ title, style, description, visible }) {
  const navigate = useNavigate();
  return (
    <div className="card" style={style}>
      <h1 className="card__title">{title}</h1>
      <p className="card__description">{description}</p>

      {/* {visibility && (
        <button
          type="submit"
          className="card__button"
          visibility={visibility}
          onClick={() => navigate("/contact")}
        >
          GET IN TOUCH
        </button>
      )} */}
      {visible ? (
        <button
          type="submit"
          className="card__button"
          onClick={() => navigate("/contact")}
        >
          GET IN TOUCH
        </button>
      ) : null}
    </div>
  );
}

export default Card;
