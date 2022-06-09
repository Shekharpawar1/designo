import React from "react";
import { location } from "./data";
import { useNavigate } from "react-router-dom";

function Location() {
  const navigate = useNavigate();
  return (
    <div
      className="location"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "2rem",
      }}
    >
      {location.map((item) => {
        return (
          <div className="location__col">
            <img
              src={item.image}
              alt={item.name}
              style={{
                margin: "2rem 5rem",
                backgroundImage:
                  "url(./assets/images/shared/desktop/bg-pattern-small-circle.svg)",
              }}
            />
            <h3> {item.name}</h3>
            <button
              onClick={() => navigate("/location")}
              style={{
                transform: "translateX(7.2rem)",
                padding: "1rem",
                backgroundColor: "hsl(11,73%,66%)",
                outline: "none",
                border: "none",
                borderRadius: ".7rem",
                color: "white",
              }}
            >
              SEE LOCATION
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Location;
