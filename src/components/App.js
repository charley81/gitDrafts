import React from "react";
import { render } from "react-dom";
import Brewery from "./Brewery";

const App = () => {
  return (
    <div>
      <h1>gitDrafts</h1>
      <Brewery name="Jailhouse Brewery" location="Hampton, Ga" type="micro" />
      <Brewery name="Arches Brewing" location="Hapeville, Ga" type="micro" />
      <Brewery name="Sabbath Brewing" location="Atlanta, Ga" type="micro" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
