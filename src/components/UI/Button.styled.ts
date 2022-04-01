import styled from 'styled-components/macro';

import { resetDefaults } from '../../shared/mixins';
import { colorInteract, interactCta } from '../../shared/styles/interactive.styles';
import { elevationThree } from '../../shared/styles/shadows.styles';

import { StyledProps } from '../../shared/models/props.model';

import { motion } from 'framer-motion';

export const UnstyledButton = styled.button<StyledProps>`
    height: ${({ height }) => height || '5rem'};
    width: ${({ width }) => width || '5rem'};
    ${colorInteract}
    ${resetDefaults}

    color: rgb(${({ theme }) => theme.colors.text});
    svg {
        height: 100%;
        width: 100%;
    }
`;

export const CtaButton = styled(motion.button)<StyledProps>`
    ${resetDefaults}
    width: 30rem;
    height: 30rem;
    max-width: 30vw;
    max-height: 30vw;
    border-radius: 50%;
    color: rgb(${({ theme }) => theme.colors.mainBg});
    background: rgb(${({ theme }) => theme.colors.text});
    font-family: ${({ theme }) => theme.typography.fonts.heading};
    letter-spacing: 0.125rem;
    ${interactCta}
    ${elevationThree}
`;

export const DotToggle = styled.button<StyledProps>`
    ${resetDefaults};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgb(${({ theme }) => theme.colors.nav});
    ${elevationThree};

    @media (hover: hover) {
        &:hover {
            background: rgb(${({ theme }) => theme.colors.accent});
        }
    }
    &.btn-active {
        background: rgb(${({ theme }) => theme.colors.text});
    }
`;

export const TechButton = styled(DotToggle)`
    width: 4rem;
    height: 4rem;
    font-family: ${({ theme }) => theme.typography.fonts.heading};
    background: transparent;
    border: 0.5px solid rgba(${({ theme }) => theme.colors.accent}, 0.5);
    color: rgb(${({ theme }) => theme.colors.text});
    &.btn-active {
        color: rgb(${({ theme }) => theme.colors.mainBg});
    }
    @media (hover: hover) {
        &:hover,
        &.btn-active {
            color: rgb(${({ theme }) => theme.colors.mainBg});
        }
    }
`;
