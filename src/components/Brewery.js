import React from "react";

const Brewery = ({
  key,
  name,
  type,
  street,
  location,
  postal_code,
  country,
  longitude,
  latitude,
  phone,
  website_url,
  id,
}) => {
  return (
    <a href={`/details/${id}`} className="brewery">
      <h1>{name}</h1>
      <h2>{type}</h2>
      <h2>{location}</h2>
    </a>
  );
};

export default Brewery;
