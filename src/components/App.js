import React from "react";
import { render } from "react-dom";
import Brewery from "./Brewery";
import { css } from "@emotion/core";

const App = () => {
  return (
    <div
      css={css`
        background-color: red;
      `}
    >
      <h1>gitDrafts</h1>
      <Brewery name="Jailhouse Brewery" location="Hampton, Ga" type="micro" />
      <Brewery name="Arches Brewing" location="Hapeville, Ga" type="micro" />
      <Brewery name="Sabbath Brewing" location="Atlanta, Ga" type="micro" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
