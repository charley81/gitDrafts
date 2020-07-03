import React, { useState, useEffect } from "react";
import Axios from "axios";
import BreweryMap from "./BreweryMap";
import { css } from "@emotion/core";

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
    <div
      className="details"
      css={css`
        max-width: 700px;
        margin: auto;
      `}
    >
      {isLoading ? (
        <div className="loading">Loading ...</div>
      ) : (
        <div>
          <BreweryMap />
          <div
            className="details-info"
            css={css`
              margin: 2rem 0;

              h3 {
                padding: 0.5rem;
              }

              button {
                width: 100%;
                padding: 0.5rem;
                border-radius: 3px;
                outline: none;
                cursor: pointer;
                background-color: #fff;
                border: 1px solid teal;
                margin-top: 1rem;
                &:hover {
                  background: teal;
                  color: #fff;
                  font-size: 1.1.rem;
                }
              }
            `}
          >
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
        </div>
      )}
    </div>
  );
}

export default Details;
