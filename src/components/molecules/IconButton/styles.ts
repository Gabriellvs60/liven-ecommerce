import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => !["$withBackground"].includes(prop as string),
}) <{ $withBackground?: boolean }>`
  .MuiBadge-root {
    top: 5px;
  }
  :hover {
    background-color:#FFFFFF;
    color: ${({ theme }) => theme.palette.primary.main};
    border: 0.2px solid;
    border-color: ${({ theme }) => theme.palette.divider};
  }

  ${({ theme, $withBackground }) =>
    $withBackground && `background-color: ${theme.palette.divider};`}
`;
