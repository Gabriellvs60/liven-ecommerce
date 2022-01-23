import { Badge, IconButtonProps as MuiIconButtonProps } from "@mui/material";

import React from "react";
import { StyledIconButton } from "./styles";

type CustomProps = {
  badgeCount?: number | null;
  children?: React.ReactNode;
  withBackground?: boolean;
};

type IconButtonProps = CustomProps & MuiIconButtonProps;

const IconButton: React.FC<IconButtonProps> = ({
  badgeCount = null,
  children,
  withBackground,
}: IconButtonProps) => {
  return (
    <Badge badgeContent={badgeCount} color="primary">
      <StyledIconButton
        color="secondary"
        aria-label="icon-button"
        $withBackground={withBackground}
      >
        {children}
      </StyledIconButton>
    </Badge>
  );
};

export default IconButton;
