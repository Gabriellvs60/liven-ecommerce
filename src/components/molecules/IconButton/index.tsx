import { Badge, IconButtonProps as MuiIconButtonProps } from "@mui/material";

import React from "react";
import { BsBasket } from "react-icons/bs";
import { StyledIconButton } from "./styles";

type CustomProps = {
  badgeCount?: number | null;
};

type IconButtonProps = CustomProps & MuiIconButtonProps;

const IconButton: React.FC<IconButtonProps> = ({ badgeCount = null }) => {
  return (
    <Badge badgeContent={badgeCount} color="primary">
      <StyledIconButton color="secondary" aria-label="icon-button">
        <BsBasket fontSize="18px" />
      </StyledIconButton>
    </Badge>
  );
};

export default IconButton;
