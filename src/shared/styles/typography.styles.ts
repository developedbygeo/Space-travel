import { css } from 'styled-components';

export const subheadingTypography = css`
    font-family: ${({ theme }) => theme.typography.fonts.subheading};
    font-weight: 300;
    font-size: 2rem;
    letter-spacing: 0.125rem;
    color: ${({ theme }) => theme.colors.accent};
`;

export const textTypography = css`
    font-family: ${({ theme }) => theme.typography.fonts.body};
    font-weight: 400;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.accent};
    letter-spacing: 0.15rem;
`;
