import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import { connect } from "react-redux";
import changeCity from "../actionCreators/changeCity";
import { css } from "@emotion/core";
import { colors } from "../styles";

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
        form {
          margin: 2rem 0;
          @media (min-width: 500px) {
            margin: 6rem 0;
          }

          label {
            display: block;
            font-size: 2rem;
          }

          input {
            display: block;
            width: 100%;
            outline: none;
            border: none;
            background: transparent;
            border-bottom: 1px solid ${colors.primaryColor};
            text-align: center;
            font-size: 1.3rem;
            font-family: "Poppins", sans-serif;
            color: ${colors.medColor};
            ::placeholder {
              /* Chrome, Firefox, Opera, Safari 10.1+ */
              color: ${colors.medColor};
              opacity: 1; /* Firefox */
            }
          }

          button {
            margin-top: 1rem;
            display: block;
            padding: 0.5rem;
            border-radius: 3px;
            width: 100%;
            outline: none;
            border: 1px solid teal;
            font-size: 1.1rem;
            background: transparent;
            border: 1px solid ${colors.primaryColor};
            cursor: pointer;
            color: ${colors.primaryColor};
            &:hover {
              background: ${colors.primaryColor};
              color: ${colors.lightColor};
            }
          }
        }
      `}
    >
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          requestBreweries();
        }}
      >
        <label htmlFor="location">
          <input
            type="text"
            id="location"
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
