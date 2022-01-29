import styled from "@emotion/styled";
import { AppBar, Box, Toolbar } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.default};
  @media (min-width: 600px) {
    .MuiToolbar-root {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
`;

export const AppBarContainer = styled(Box)`
  width: 70%;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: 122px;
`;
