import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

const SearchParams = () => {
  const [city, setCity] = useState("Atlanta");
  const [breweries, setBreweries] = useState([]);

  async function requestBreweries() {
    const result = await axios(
      `https://api.openbrewerydb.org/breweries?by_city=${city}`
    );

    setBreweries(result.data || []);
  }

  return (
    <div className="search-params">
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          requestBreweries();
        }}
      >
        <label htmlFor="location">
          location
          <input
            type="text"
            id="location"
            value={city}
            placeholder="Enter A City"
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Results breweries={breweries} />
    </div>
  );
};

export default SearchParams;
