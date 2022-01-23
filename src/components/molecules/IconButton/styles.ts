import styled from "@emotion/styled";
import { css, IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => !["$withBackground"].includes(prop as string),
}) <{ $withBackground?: boolean }>`
  .MuiBadge-root {
    top: 5px;
  }
  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ theme, $withBackground }) =>
    $withBackground && `background-color: ${theme.palette.divider};`}
`;
