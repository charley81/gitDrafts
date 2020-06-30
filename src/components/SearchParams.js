import React, { useState, useEffect } from "react";
import axios from "axios";
import { states, types } from "../inputData";

const SearchParams = () => {
  const [data, setData] = useState();
  const [location, setLocation] = useState("Atlanta");
  const [type, setType] = useState("micro");
  const [brewState, setBrewState] = useState("Georgia");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.openbrewerydb.org/breweries");

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="search-params">
      <form autoComplete="off">
        <label htmlFor="location">
          location
          <input
            type="text"
            id="location"
            value="Enter A City..."
            placeholder="Enter A City"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
