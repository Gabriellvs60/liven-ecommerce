import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => !["$withBackground", "$bgColorHover"].includes(prop as string),
}) <{ $withBackground?: boolean; $bgColorHover?: string; }>`
  .MuiBadge-root {
    top: 5px;
  }
  :hover {
    background-color:${({ theme, $bgColorHover }) => $bgColorHover || theme.palette.common.white};
    color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ theme, $withBackground }) =>
    $withBackground && `background-color: ${theme.palette.divider};`}
`;
