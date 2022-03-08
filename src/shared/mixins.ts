import { css } from 'styled-components';

export const gridMixin = (columns: string, rows: string, gap?: string) => css`
    display: grid;
    grid-template-columns: ${columns};
    grid-template-rows: ${rows};
    gap: ${gap};
`;

export const flexMixin = (justify: string, align: string, direction: string) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
`;

export const maxContainer = css`
    height: 100%;
    width: 100%;
`;

export const colorInteract = css`
    transition: all 100ms ease-in-out;
    position: relative;
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.highlight};
        }
    }
    &:active {
        transform: scale(1.1);
    }
`;

export const interactAndHover = css`
    ${colorInteract};
    @media (hover: hover) {
        &::after {
            position: absolute;
            content: '';
            left: 0%;
            bottom: -3px;
            width: 100%;
            height: 0.75px;
            transform-origin: right;
            transform: scaleX(0);
            background: ${({ theme }) => theme.colors.accent};
            transition: transform 350ms ease;
        }
        &:hover {
            &::after {
                transform-origin: left;
                transform: scaleX(1);
            }
        }
    }
`;

export const showActive = css`
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
    position: relative;
    &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 0.25rem;
        bottom: -0.5rem;
        background: ${({ theme }) => theme.colors.accent};
    }
`;

export const customContainer = (h: string, w: string) => css`
    height: ${h}%;
    width: ${w}%;
`;

export const resetDefaults = css`
    border: none;
    outline: none;
    background: transparent;
`;
