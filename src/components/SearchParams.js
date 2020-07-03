import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import { connect } from "react-redux";
import changeCity from "../actionCreators/changeCity";
import { css } from "@emotion/core";

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
    <div
      className="search-params"
      css={css`
        max-width: 700px;
        margin: auto;
        padding: 1rem;
      `}
    >
      <form
        css={css`
          margin: 2rem 0;
        `}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          requestBreweries();
        }}
      >
        <label
          css={css`
            display: block;
            color: #ccc;
          `}
          htmlFor="location"
        >
          location
          <input
            css={css`
              display: block;
              width: 100%;
              outline: none;
              border: none;
              border-bottom: 1px solid teal;
              margin-top: 1rem;
              text-align: center;
              font-size: 1.3rem;
              font-family: "Poppins", sans-serif;
            `}
            value={props.city}
            type="text"
            id="location"
            placeholder="Enter A City"
            onChange={(e) => props.setCity(e.target.value)}
          />
        </label>
        <button
          css={css`
            margin-top: 1rem;
            display: block;
            padding: 0.5rem;
            border-radius: 3px;
            width: 100%;
            outline: none;
            border: 1px solid teal;
            font-size: 1.1rem;
            background-color: #fff;
            cursor: pointer;
            &:hover {
              background: teal;
              color: #fff;
            }
          `}
          type="submit"
        >
          Submit
        </button>
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
