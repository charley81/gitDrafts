import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import { colors } from "../styles";

const Header = () => {
  return (
    <header
      css={css`
        padding: 2rem;
        text-align: center;
        @media (min-width: 768px) {
          text-align: left;
        }

        h1 {
          font-size: 3rem;
          color: ${colors.primaryColor};
          @media (min-width: 500px) {
            font-size: 4rem;
          }
          @media (min-width: 768px) {
            font-size: 5rem;
          }

          span {
            color: ${colors.darkColor};
          }
      `}
    >
      <Link to="/">
        <h1>
          <span>git</span>Drafts
        </h1>
      </Link>
    </header>
  );
};

export default Header;
