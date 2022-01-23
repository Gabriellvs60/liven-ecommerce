import styled from '@emotion/styled'
import { Toolbar } from '@mui/material';

export const StyledToolbar = styled(Toolbar)`
    background-color: ${({ theme }) => theme.palette.background.default};
    display: flex;
    justify-content: space-between;
    height: 122px;
`
