import React from "react";
import { location } from "./data";
import Maps from "./Map";
import "./Map.css";

function LocationItems() {
  return (
    <>
      {location.map((item) => {
        return (
          <>
            <div className="location__item">
              {/*
      <Maps latitude={item.latitude} longitude={item.longitude} /> */}
              <Maps latitude={item.latitude} longitude={item.longitude} />
              <div>
                <h1>{item.name}</h1>
                <p>{item.address}</p>
                <p>{item.contact.Phone}</p>
                <p>{item.contact.Mail}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default LocationItems;
