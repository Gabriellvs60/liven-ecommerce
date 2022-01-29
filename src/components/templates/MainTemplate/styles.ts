import styled from "@emotion/styled";
import { Fab } from "@mui/material";

export const StyledFab = styled(Fab)`
  margin: 0px;
  top: auto;
  right: ${({ theme }) => theme.spacing(2.5)};
  bottom: ${({ theme }) => theme.spacing(2.5)};
  left: auto;
  position: fixed;
  :hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
