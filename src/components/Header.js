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
      `}
    >
      <Link to="/">
        <h1
          css={css`
            color: teal;
            font-size: 3rem;
          `}
        >
          gitDrafts
        </h1>
      </Link>
    </header>
  );
};

export default Header;
