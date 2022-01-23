import styled from '@emotion/styled'
import { Box } from '@mui/material';

export const StyledContainer = styled(Box)`
    border: 1px solid ${({ theme }) => theme.palette.divider};
    border-radius: 4px;
`
