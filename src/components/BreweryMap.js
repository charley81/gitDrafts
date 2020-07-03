import React from "react";
import mapStyles from "../mapStyles";
import { css } from "@emotion/core";
import {
  GoogleMap,
  useLoadScript,
  // Marker,
  // InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "500px",
  height: "500px",
};
const center = {
  lat: 33.748997,
  lng: -84.387985,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function BreweryMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";
  return (
    <div>
      <h1
        css={css`
          position: absolute;
          top: 5rem;
          left: 0.5rem;
          z-index: 999;
        `}
      >
        gitDrafts{" "}
        <span role="img" aria-label="beer">
          🍺
        </span>{" "}
      </h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
      ></GoogleMap>
    </div>
  );
}

export default BreweryMap;
