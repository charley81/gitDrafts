import React from "react";

const Brewery = ({ name, location, type }) => {
  return (
    <div className="brewery">
      <p>{name}</p>
      <p>{location}</p>
      <p>{type}</p>
    </div>
  );
};

export default Brewery;
