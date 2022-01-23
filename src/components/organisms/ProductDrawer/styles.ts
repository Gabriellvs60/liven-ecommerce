import styled from '@emotion/styled'
import { Box } from '@mui/material';


export const StyledDrawerTitle = styled(Box)`
    padding: ${({ theme }) => theme.spacing(1)};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
    flex-shrink: 0;
`;

export const StyledDrawerContent = styled(Box)`
  overflow-y: auto;
  background-color: yellow;
  `

export const StyledDrawerActions = styled(Box)`
    border-top: 1px solid ${({ theme }) => theme.palette.divider};

    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing(2)};
`;

