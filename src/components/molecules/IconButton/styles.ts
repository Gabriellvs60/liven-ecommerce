import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton)`
	.MuiBadge-root{
        top: 5px;
    }
  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
