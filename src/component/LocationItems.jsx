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
              <div className="location__item--info">
                <h1 className="location__item--title">{item.name}</h1>
                <p className="location__item--address">{item.address}</p>
                <p className="location__item--contact">
                  {item.contact.Phone}
                  {<br></br>}
                  {item.contact.Mail}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default LocationItems;
