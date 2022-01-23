import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledContainer = styled(Box)`
display: flex;
  padding-right: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 4px;
  width: fit-content;
`;
