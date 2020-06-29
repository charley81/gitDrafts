import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import SearchParams from "./SearchParams";


const App = () => {
  return (
    <div className="app">
      <Header/>
      <SearchParams/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
