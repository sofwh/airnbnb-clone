import { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Map = ({ searchResult }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <ReactMapGl
      mapStyle="mapbox://styles/sirjan/ckz3uihad003v15p3djqlyo6g"
      mapboxApiAccessToken="pk.eyJ1Ijoic2lyamFuIiwiYSI6ImNrejNzb2Y5djA4N3MydWsydXA5cXQ5bGUifQ.6PlSOFw_SCQ1L9EDjVB5Hw"
      {...viewport}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              aria-label="push-pin"
              onClick={() => {
                setSelectedLocation(result);
              }}
              className="cursor-pointer text-2xl animate-bounce"
            >
              🖍️
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
              closeOnClick={true}
            >
              {result.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGl>
  );
};

export default Map;
