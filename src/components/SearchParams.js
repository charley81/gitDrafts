import React, { useState, useEffect } from "react";
import axios from "axios";
import { states, types } from "../inputData";

const SearchParams = () => {
  const [data, setData] = useState();
  const [city, setCity] = useState("Atlanta");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.openbrewerydb.org/breweries?by_city=${search}`
      );

      setData(result.data);
    };

    fetchData();
  }, [search]);

  return (
    <div className="search-params">
      <form autoComplete="off">
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
        <button type="button" onClick={() => setSearch(city)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchParams;
