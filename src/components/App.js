import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Header />
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
