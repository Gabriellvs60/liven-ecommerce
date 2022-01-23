import styled from "@emotion/styled";
import { Link } from "@mui/material";

export const StyledLink = styled(Link)`
  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
