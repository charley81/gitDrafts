import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const Header = () => {
  return (
    <header
      css={css`
        padding: 2rem;
        color: #fff;
        text-align: center;
        @media (min-width: 768px) {
          text-align: left;
        }

        h1 {
          color: #fff;
          font-size: 3rem;
        }
      `}
    >
      <Link to="/">
        <h1>gitDrafts</h1>
      </Link>
    </header>
  );
};

export default Header;
