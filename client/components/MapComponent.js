import {useState} from "react";
import Map, { Marker, Popup } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const MapComponent = ({contactProps}) => { 
  const [showPopup, setShowPopup] = useState(true);
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
            longitude={ -123.12985194037113}
            latitude={ 49.291538946913384}
            anchor="bottom"
            onClose={() => setShowPopup(false)}
            offset={30}
            focusAfterOpen={false}
          >
            <div className="flex flex-col items-center gap-2 py-5 px-10">
              {contactProps.location.map(item => <span key={item}>{item}</span> 
              )}
              <br />
              <a
                className="py-1/2 px-2 bg-secondary text-primary border border-primary rounded-full hover:bg-primary hover:text-secondary focus:none"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/dir/?api=1&destination=1616%20bayshore%20drive,%20Vancouver%20BC%20%20%E2%80%8B"
              >
                Directions
              </a>
            </div>
          </Popup>
        )}
        <Marker longitude={-123.12985194037113} latitude={ 49.291538946913384} color="red" />
      </Map>
    </div>
  );
};
export default MapComponent;
