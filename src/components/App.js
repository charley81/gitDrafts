import React from "react";
import { render } from "react-dom";

const Brewery = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Jailhouse Brewery"),
    React.createElement("h2", {}, "Micro"),
    React.createElement("h2", {}, "Hampton, GA"),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    { id: "something-important" },
    React.createElement("h1", {}, "Drink Me!"),
    [
      React.createElement(Brewery),
      React.createElement(Brewery),
      React.createElement(Brewery),
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
