import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: 122px;
`;

