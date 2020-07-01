import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>gitDrafts</h1>
      </Link>
    </header>
  );
};

export default Header;
