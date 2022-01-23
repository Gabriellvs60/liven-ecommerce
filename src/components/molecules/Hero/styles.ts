import styled from '@emotion/styled'
import { Box } from '@mui/material';
import HeroImage from '../../../assets/hero.jpg';

export const StyledHero = styled(Box)`
    width: 100%;
    height: 286px;
    background-image: url(${HeroImage});
    background-position-y: center;
    background-size: cover;
    box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
