import styled from "@emotion/styled";
import { Box, Fab } from "@mui/material";
import { colors } from '../../../design/colors';

export const StyledContainer = styled(Box)`
  flex-grow: 1;
  background-color: ${colors.concreteWhite.light};
`;

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

export const ChildrenContainer = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing(3)};
`