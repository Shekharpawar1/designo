import React from "react";
import "./HomePage.css";

function HomePageCard({ className, title, onClick, style }) {
  return (
    <div className={className} onClick={onClick} style={style}>
      <h2>{title}</h2>

      <p className="homepage__card--link">
        VIEW PROJECTS
        <i
          class="fa fa-chevron-right"
          style={{ color: "red", margin: "0 .5rem" }}
        ></i>
      </p>
    </div>
  );
}

export default HomePageCard;
