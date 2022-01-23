import { BoxProps } from "@mui/system";

import React from "react";
import { StyledCard } from "./styles";

const Card: React.FC<BoxProps> = (props: BoxProps) => {
  return <StyledCard {...props} />;
};

export default Card;
