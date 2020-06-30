import React, { useState, useEffect } from "react";
import axios from "axios";
import { states, types } from "../inputData";

const SearchParams = () => {
  const [data, setData] = useState();
  const [location, setLocation] = useState("atlanta");
  const [type, setType] = useState("micro");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.openbrewerydb.org/breweries");

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="search-params">
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
        <label htmlFor="type">
          Type
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            onBlur={(e) => setType(e.target.value)}
          >
            <option>All</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
