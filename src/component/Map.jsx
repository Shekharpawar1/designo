import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import "./Map.css";

function Maps({ latitude, longitude }) {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  return (
    <>
      <div className="map">
        <Map
          className="map"
          height={300}
          // width={100}
          defaultCenter={[latitude, longitude]}
          defaultZoom={11}
        >
          <Marker
            width={50}
            anchor={[latitude, longitude]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
        </Map>
      </div>
    </>
  );
}

export default Maps;
