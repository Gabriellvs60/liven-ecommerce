import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { colors } from '../../../design/colors';

export const StyledContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  :hover{
    background-color: ${colors.concreteWhite.main};
    opacity: 85%;
    transition: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    #actionsContainer{
      visibility: visible;
    }
  }
`;

export const ActionsBoxContainer = styled(Box)`
  position: absolute;
  top: 0px;
  right: ${({ theme }) => theme.spacing(1)};
  visibility: hidden;
`