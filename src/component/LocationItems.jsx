import React from "react";
import { location } from "./data";

function LocationItems() {
  return (
    <div>
      {location.map((item) => {
        return (
          <>
            <h1>{item.name}</h1>
            <p>{item.address}</p>
            <p>{item.contact.Phone}</p>
            <p>{item.contact.Mail}</p>
          </>
        );
      })}
    </div>
  );
}

export default LocationItems;
