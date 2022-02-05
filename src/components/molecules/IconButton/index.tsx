import { Badge, IconButtonProps as MuiIconButtonProps } from "@mui/material";

import React from "react";
import { StyledIconButton } from "./styles";

type CustomProps = {
  dataTestId?: string;
  badgeCount?: number | null;
  bgColorHover?: string;
  children?: React.ReactNode;
  withBackground?: boolean;
};

type IconButtonProps = CustomProps & MuiIconButtonProps;

const IconButton: React.FC<IconButtonProps> = ({
  color = "secondary",
  dataTestId = "icon-button",
  badgeCount = null,
  bgColorHover,
  children,
  withBackground,
  onClick,
}: IconButtonProps) => {
  return (
    <Badge badgeContent={badgeCount} color="primary" data-cy="badge">
      <StyledIconButton
        data-cy={dataTestId}
        $bgColorHover={bgColorHover}
        onClick={onClick}
        color={color}
        $withBackground={withBackground}
      >
        {children}
      </StyledIconButton>
    </Badge>
  );
};

export default IconButton;
