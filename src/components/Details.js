import React, { useState, useEffect } from "react";
import Axios from "axios";
import Map from "./Map";

function Details({ id }) {
  const [brewery, setBrewery] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBrewery = async () => {
      setIsLoading(true);
      const result = await Axios(
        `https://api.openbrewerydb.org/breweries/${id}`
      );
      setBrewery(result.data);
      setIsLoading(false);
    };
    fetchBrewery();
  }, [id]);

  const { name, street, city, state, phone, website_url } = brewery;

  return (
    <div className="details">
      {isLoading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <div className="details-info">
          <div className="map">
            <Map />
          </div>
          <h1>{name}</h1>
          {street ? <h3>{street}</h3> : <h3>No Street Listed</h3>}
          {city ? <h3>{`${city}, ${state}`}</h3> : <h3>No City Listed</h3>}
          {phone ? <h3>{phone}</h3> : <h3>No Phone Listed</h3>}
          {website_url ? (
            <button type="button" value={website_url}>
              View Website
            </button>
          ) : (
            <h3>No website listed</h3>
          )}
        </div>
      )}
    </div>
  );
}

export default Details;
