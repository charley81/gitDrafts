import React from "react";
import Brewery from "./Brewery";

function Results({ breweries }) {
  return (
    <div className="search">
      {!breweries.length ? (
        <h1>No Breweries Found</h1>
      ) : (
        breweries.map((brewery) => (
          <Brewery
            key={brewery.id}
            name={brewery.name}
            type={brewery.brewery_type}
            street={brewery.street}
            location={`${brewery.city}, ${brewery.state}`}
            postal_code={brewery.postal_code}
            country={brewery.country}
            longitude={brewery.longitude}
            latitude={brewery.latitude}
            phone={brewery.phone}
            website_url={brewery.website_url}
            id={brewery.id}
          />
        ))
      )}
    </div>
  );
}

export default Results;
