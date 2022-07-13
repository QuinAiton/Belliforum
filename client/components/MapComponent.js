import * as React from "react";
import Map, { Marker, Popup } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const MapComponent = () => {
  const [showPopup, setShowPopup] = React.useState(true);
  return (
    <div className="h-[400px] w-screen md:w-full md:h-full">
      <Map
        initialViewState={{
          latitude: 49.28689,
          longitude: -123.11513,
          zoom: 13,
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {showPopup && (
          <Popup
            longitude={-123.11513}
            latitude={49.28689}
            anchor="bottom"
            onClose={() => setShowPopup(false)}
            offset={30}
            focusAfterOpen={false}
          >
            <div className="flex flex-col items-center gap-2">
              800 West Hastings, Vancouver BC
              <br />
              <a
                className="py-1/2 px-2 bg-secondary text-primary border border-primary rounded-full hover:bg-primary hover:text-secondary focus:none"
                // target="_blank"
                // rel="noreferrer"
                href="https://www.google.com/maps/dir/?api=1&destination=800%20West%20Hastings,%20Vancouver%20BC%20%20%E2%80%8B"
              >
                Directions
              </a>
            </div>
          </Popup>
        )}
        <Marker longitude={-123.11513} latitude={49.28689} color="red" />
      </Map>
    </div>
  );
};
export default MapComponent;
