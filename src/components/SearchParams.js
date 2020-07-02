import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import { connect } from "react-redux";
import changeCity from "../actionCreators/changeCity";

const SearchParams = (props) => {
  // const [city, setCity] = useState("Atlanta");
  const [breweries, setBreweries] = useState([]);

  async function requestBreweries() {
    const result = await axios(
      `https://api.openbrewerydb.org/breweries?by_city=${props.city}`
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
            value={props.city}
            placeholder="Enter A City"
            onChange={(e) => props.setCity(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Results breweries={breweries} />
    </div>
  );
};

const mapStateToProps = ({ city }) => ({
  city,
});

const mapDispatchToProps = (dispatch) => ({
  setCity: (city) => dispatch(changeCity(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchParams);
