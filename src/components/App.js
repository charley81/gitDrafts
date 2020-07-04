import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import Header from "./Header";
import SearchParams from "./SearchParams";
import Details from "./Details";
import store from "../store";
import { css } from "@emotion/core";

const App = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <div
          css={css`
            background: teal;
            height: 100vh;
            color: #fff;
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
