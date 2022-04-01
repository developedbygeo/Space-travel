import { css } from 'styled-components';

import { devices } from '../breakpoints';
import { gridMixin } from '../mixins';

const crewStyling = css`
    &.crew {
        .header {
            span {
                color: rgba(${({ theme }) => theme.colors.text}, 0.65);
            }
        }
        section {
            padding-top: 2.5vh;
        }
        h1 {
            font-size: 4rem;
        }
        span {
            color: rgba(${({ theme }) => theme.colors.text}, 0.45);
            font-size: 2.5rem;
        }

        .img-cont {
            width: 100%;
            height: 34.9vh;
            overflow: hidden;
            border-bottom: 0.25rem solid rgba(${({ theme }) => theme.colors.nav}, 0.5);
            img {
                height: 35vh;
            }
        }

        @media ${devices.tablet} {
            height: 90vh;
            padding: 2vh 0 0 0;
            .header {
                align-self: center;
            }
            .img-cont {
                height: 100%;
                display: flex;
                align-items: flex-end;
                grid-area: 4/1/5/1;
                overflow: initial;
                border: none;
                img {
                    height: 45vh;
                }
            }
            ul {
                grid-area: 3;
            }
        }
    }
    @media ${devices.laptop}, ${devices.landscapeMobileSS} {
        &.crew {
            ${gridMixin('repeat(2, 1fr)', '0.4fr 1fr 0.3fr')};
            .header {
                align-self: center;
                width: 80%;
                margin-inline: auto;
            }
            .img-cont {
                grid-area: 1/2/5/3;
                img {
                    height: 70vh;
                }
            }

            ul {
                grid-area: 3/1/4/2;
                margin-bottom: 10vh;
                justify-content: flex-start;
                width: 78%;
                margin-inline: auto;
            }

            section {
                grid-area: 2/1/3/2;
                padding-bottom: 7.5vh;
            }

            .text-content {
                text-align: left;
            }
            h1,
            p,
            h4 {
                text-align: left;
            }
        }
    }
    @media ${devices.landscapeMobileSS} {
        &.crew {
            .header {
                width: 100%;
                justify-content: flex-start;
                padding: 0 0 6vh 3vh;
            }
            .img-cont {
                height: 49.9vh;
                img {
                    height: 51vh;
                }
            }
            section {
                grid-area: 2/1/4/2;
            }
            ul {
                grid-area: 3/2/3/2;
                justify-content: center;
            }
        }
    }
`;

export default crewStyling;
