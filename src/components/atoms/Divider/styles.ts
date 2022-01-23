import styled from "@emotion/styled";
import { Divider } from "@mui/material";

export const StyledDivider = styled(Divider)`
  border: 1px solid ${({ theme }) => theme.palette.divider};
`;
