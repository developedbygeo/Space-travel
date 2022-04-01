import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

import { subheadingTypography } from '../../shared/styles/typography.styles';

export const Description = styled(motion.p)`
    color: rgb(${({ theme }) => theme.colors.accent});
    text-align: center;
    line-height: 1.4;
    letter-spacing: 0.2rem;
    font-weight: 300;
`;

export const BigHeading = styled(motion.h1)`
    font-size: 4.5rem;
    padding-block: 1rem;
    text-transform: uppercase;
    text-align: center;
    margin: 0rem 0rem 1rem 0rem;
`;

export const MediumHeading = styled(motion.h4)`
    font-size: 3rem;
    text-transform: uppercase;
    margin-block: 1rem;
`;

export const SmallSubheading = styled(motion.p)`
    ${subheadingTypography};
    text-transform: uppercase;
    color: rgb(${({ theme }) => theme.colors.accent});
    letter-spacing: 0.15rem;
`;

export const IntroSpan = styled.span`
    font-size: 2.5rem;
    font-family: ${({ theme }) => theme.typography.fonts.subheading};
    text-transform: uppercase;
`;
