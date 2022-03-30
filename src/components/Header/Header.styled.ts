import styled from 'styled-components/macro';

import { devices } from '../../shared/breakpoints';
import { flexMixin, opacityMixin } from '../../shared/mixins';
import { interactAndHover, showActive } from '../../shared/styles/interactive.styles';

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

    .mobile-nav {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 9;
        height: 100vh;
        width: 60vw;
        padding: 25% 8vw;
        ${flexMixin('flex-start', 'flex-start', 'column')};
        background: rgba(${({ theme }) => theme.colors.mainBg}, 0.965);

        ${opacityMixin};
        .link-wrapper {
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
                text-shadow: rgba(0, 0, 0, 0.25) 0px 3px 8px;
                @media (hover: hover) {
                    &::after,
                    &::before {
                        bottom: -5px;
                    }
                }
            }
            span,
            p {
                font-size: 2.5rem;
            }
        }
    }
    .tablet-nav,
    .desktop-nav {
        width: 70%;
        height: 70%;
        background: rgba(${({ theme }) => theme.colors.mainBg}, 0.9);
        ${opacityMixin};
        .link-wrapper {
            ${flexMixin('space-around', 'center', 'row')};
            background: rgba(${({ theme }) => theme.colors.text}, 0.04);
            height: 100%;
        }
        a {
            height: 100%;
            padding: 1rem;
            ${flexMixin('center', 'center', 'row')};
            gap: 0.5rem;
            ${interactAndHover};
            font-family: 'Barlow Condensed', sans-serif;
            p {
                font-weight: 400;
                opacity: 0.85;
            }
            span {
                font-weight: 500;
            }
        }
    }
    .active {
        ${showActive}
        span, p {
            color: rgb(${({ theme }) => theme.colors.text});
        }
        &::before {
            bottom: 0;
        }
    }
    .tablet-nav {
        .link-wrapper {
            a {
                &::after {
                    bottom: 0.2rem;
                }
            }
        }
    }

    .desktop-nav {
        height: 85%;
        .link-wrapper {
            position: relative;
            &::before {
                content: '';
                position: absolute;
                height: 0.15rem;
                width: calc(28.5rem + 2.5vh);
                background: rgba(${({ theme }) => theme.colors.text}, 0.125);
                top: 50%;
                left: -35vh;
            }
            a {
                &::after {
                    bottom: 0.2rem;
                }
            }
        }
    }
    @media ${devices.mobileSS} {
        .logo {
            transform: scale(0.5);
        }
    }
    @media ${devices.mobileS} {
        .logo {
            transform: scale(0.75);
        }
    }
    @media ${devices.laptop} {
        padding: 0;
        padding-left: 5%;
    }
    @media ${devices.laptopXL} {
        .logo {
            transform: scale(1);
        }
    }
    @media ${devices.desktop} {
        .logo {
            transform: scale(1.65);
        }
    }
    @media ${devices.desktop4K} {
        .logo {
            transform: scale(2.5);
        }
    }

    @media ${devices.landscapeMobileSS} {
        .logo {
            transform: scale(0.4);
        }
        .mobile-nav {
            width: 40vw;
            .link-wrapper {
                height: 70%;
                gap: 5vh;
            }
            .active::before {
                bottom: -1.5rem;
            }
        }
    }
`;

export default StyledHeader;
