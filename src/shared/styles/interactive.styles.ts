import { css } from 'styled-components';

export const interactCta = css`
    transition: all 200ms ease;
    &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: 0px;
        width: 0px;
    }
    &:active {
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
    @media (hover: hover) {
        &:hover {
            transform: scale(1.2);
            background: rgba(${({ theme }) => theme.colors.nav}, 0.75);
        }
        &:hover::before {
            height: 100%;
            width: 100%;
            border-radius: 50%;
            clip-path: circle(40.6% at 50% 50%);
            background: rgb(${({ theme }) => theme.colors.text}, 0.9);
            z-index: -1;
        }
    }
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
            background: rgb(${({ theme }) => theme.colors.accent});
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
    color: rgb(${({ theme }) => theme.colors.accent});
    font-weight: 600;
    position: relative;
    &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 0.25rem;
        bottom: -0.5rem;
        background: rgb(${({ theme }) => theme.colors.accent});
    }
`;
