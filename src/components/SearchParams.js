import React, { useState, useEffect } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Atlanta, GA");
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=dog`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/vnd.github.cloak-preview",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setBreweries(response);
      });
  });

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
