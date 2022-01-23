import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton)`
  .MuiBadge-root {
    top: 5px;
  }
  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const TitleContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 30%;
  position: relative;
  :hover{
    #actionsBox{
      visibility: visible;
    }
    #infoBox{
      visibility: hidden;
      opacity: 50%;
      transition: 0.2s;
    }
  }
`;

export const InfoContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledActions = styled(Box)`
  visibility: hidden;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: ${({ theme }) => theme.spacing(0.5)};
`;
