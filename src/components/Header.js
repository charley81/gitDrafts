import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const Header = () => {
  return (
    <header
      css={css`
        background-color: red;
      `}
    >
      <Link to="/">
        <h1>gitDrafts</h1>
      </Link>
    </header>
  );
};

export default Header;
