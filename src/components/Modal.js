import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modal = ({ children }) => {
  // using elRef so that we use the same div each time we open and close the modal. If not a div would be created each time and if not destroyed will leak memory. You would basically keep creating markup and not deleting it and useRef will stop that from happening.
  const elRef = useRef(null);
  // elRef is a object and its current property is set to the div
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // run this function will modal gets closed
    return () => modalRoot.removeChild(elRef.current);
  });

  return createPortal(<div>{children}</div>, elRef.current);
};

export default modal;
