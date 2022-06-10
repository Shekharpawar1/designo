import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import ContactForm from "./Form";

function Card({ title, style, description, visible, form }) {
  const navigate = useNavigate();
  return (
    <div className="card" style={style}>
      <div className="card__info">
        <h1 className="card__title">{title}</h1>
        <p className="card__description">{description}</p>
      </div>

      {!visible && (
        <button
          type="submit"
          className="card__button"
          onClick={() => navigate("/contact")}
        >
          GET IN TOUCH
        </button>
      )}
      {!form && <ContactForm />}
    </div>
  );
}

export default Card;
