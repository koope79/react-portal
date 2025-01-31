import React, { memo } from "react";
import { ButtonComp } from "./types";

const Button: ButtonComp = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>{children}</button>
  );
};

export default memo(Button);
