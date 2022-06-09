import React from "react";
import data from "./data";
import "./HomePage.css";

function Grid() {
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <div className="flex__container" key={item.id}>
            <img className="flex__image" src={item.image} alt={item.name} />
            <h3 className="flex__title">{item.name}</h3>
            <p className="flex__description">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
