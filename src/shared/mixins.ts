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

export const customContainer = (h: string, w: string) => css`
    height: ${h}%;
    width: ${w}%;
`;

export const resetDefaults = css`
    border: none;
    outline: none;
    background: transparent;
`;

export const opacityMixin = css`
    @supports ((-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))) {
        -webkit-backdrop-filter: blur(15px);
        backdrop-filter: blur(15px) brightness(0.6) contrast(0.9);
        background: rgba(255, 255, 255, 0.03);
    }
`;
