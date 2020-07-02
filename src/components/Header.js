import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const Header = () => {
  return (
    <header
      css={css`
        background-color: #333;
        text-align: center;
        padding: 1rem;
      `}
    >
      <Link to="/">
        <h1
          css={css`
            color: #fff;
          `}
        >
          gitDrafts
        </h1>
      </Link>
    </header>
  );
};

export default Header;
