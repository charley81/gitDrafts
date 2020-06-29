import React from "react";

const Brewery = ({ name, location, type }) => {
  return (
    <div className="brewery">
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h2>Type: {type}</h2>
    </div>
  );
};

export default Brewery;
