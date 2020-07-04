import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import Header from "./Header";
import SearchParams from "./SearchParams";
import Details from "./Details";
import store from "../store";
import { css } from "@emotion/core";
import { colors } from "../styles";

const App = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <div
          css={css`
            height: 100vh;
            color: ${colors.primaryColor};
            max-width: 800px;
            margin: auto;
            padding: 1rem;
          `}
        >
          <Header />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </React.StrictMode>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
