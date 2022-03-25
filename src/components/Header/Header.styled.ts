import styled from 'styled-components/macro';

import { devices } from '../../shared/breakpoints';
import { flexMixin } from '../../shared/mixins';
import { interactAndHover } from '../../shared/styles/interactive.styles';

const StyledHeader = styled.header`
    padding-inline: 5%;
    ${flexMixin('space-between', 'center', 'row')};
    background: transparent;

    & > .menu {
        z-index: 10;
        color: rgb(${({ theme }) => theme.colors.accent});
        @media ${devices.tablet} {
            display: none;
        }
    }
    .logo {
        transform: scale(0.75);
    }
    .num {
        font-weight: 800;
    }

    /* mobile-specific */
    .mobile-nav {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 9;
        height: 100vh;
        width: 60vw;
        padding: 25% 8vw;
        ${flexMixin('flex-start', 'flex-start', 'column')};
        background-color: rgba(${({ theme }) => theme.colors.nav}, 0.95);

        @supports ((-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))) {
            background-color: rgba(151, 151, 151, 0.25);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
        }
        & > .link-wrapper {
            height: 40%;
            width: 100%;
            ${flexMixin('space-around', 'flex-start', 'column')};
            gap: 3vh;
            a {
                display: flex;
                gap: 2vw;
                letter-spacing: 2.7px;
                ${interactAndHover};
                font-family: 'Barlow Condensed', sans-serif;
                text-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
            }
            span,
            p {
                font-size: 2.5rem;
            }
        }
    }
    .tablet-nav {
        width: 50%;
        height: 100%;

        .link-wrapper {
            ${flexMixin('space-between', 'center', 'row')};
            background: ${({ theme }) => theme.colors.nav};
            height: 100%;
        }
        a {
            ${interactAndHover};
            font-family: 'Barlow Condensed', sans-serif;
        }
    }
`;

export default StyledHeader;
