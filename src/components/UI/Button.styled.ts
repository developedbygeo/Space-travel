import styled from 'styled-components/macro';

import { resetDefaults } from '../../shared/mixins';
import { colorInteract, interactCta } from '../../shared/styles/interactive.styles';
import { elevationThree } from '../../shared/styles/shadows.styles';

import { StyledProps } from '../../shared/models/props.model';

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

export const CtaButton = styled.button<StyledProps>`
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
