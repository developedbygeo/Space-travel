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

export const maxContainer = () => css`
    height: 100%;
    width: 100%;
`;

export const colorInteract = () => css`
    transition: color 100ms linear;
    position: relative;
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.accent};
        }
        &:hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 0.15rem;
        bottom: -0.5rem;
        left: 0;
        background: ${({ theme }) => theme.colors.accent};
        transform-origin: bottom right;
        transition: transform 250ms linear;
    }
`;
export const colorPress = () => css`
    &:active {
        transform: scale(1.1);
        box-shadow: 0px 0px 20px 1px rgba(${({ theme }) => theme.colors.accent}, 0.35);
    }
`;

export const showActive = () => css`
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
