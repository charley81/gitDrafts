import React from "react";
import { css } from "@emotion/core";
import { colors } from "../styles";

const Brewery = ({
  name,
  type,
  street,
  location,
  postal_code,
  country,
  longitude,
  latitude,
  phone,
  website_url,
  id,
}) => {
  return (
    <a
      href={`/details/${id}`}
      className="brewery"
      css={css`
        display: block;
        margin: 1rem 0;
        color: ${colors.primaryColor};
        border-bottom: 1px dotted ${colors.medColor};
      `}
    >
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{location}</p>
    </a>
  );
};

export default Brewery;
