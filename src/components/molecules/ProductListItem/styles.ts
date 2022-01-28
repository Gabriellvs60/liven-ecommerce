import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

