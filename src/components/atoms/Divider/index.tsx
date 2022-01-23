import { DividerProps } from "@mui/material";

import React from "react";
import { StyledDivider } from "./styles";

const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  return <StyledDivider {...props} />;
};

export default Divider;
