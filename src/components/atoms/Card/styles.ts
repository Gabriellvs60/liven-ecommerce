import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledCard = styled(Box)`
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 4px;
  :hover {
    -webkit-box-shadow: 0 0 5px 3px ${({ theme }) => theme.palette.divider};
    -moz-box-shadow: 0 0 5px 3px ${({ theme }) => theme.palette.divider};
    box-shadow: 0 0 5px 3px ${({ theme }) => theme.palette.divider};
  }
`;
