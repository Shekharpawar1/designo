import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import LocationItems from "./LocationItems";

function LocationMap() {
  return (
    <div>
      <LocationItems />
      <Card
        style={{ transform: "translateY(10rem)" }}
        title="Let's talk about your project"
        description=" Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow."
        form
      />
      <Footer />
    </div>
  );
}

export default LocationMap;
