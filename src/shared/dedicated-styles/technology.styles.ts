import { css } from 'styled-components';

import { devices } from '../breakpoints';
import { gridMixin, flexMixin } from '../mixins';

const technologyStyling = css`
    &.technology {
        gap: 3vh;
        .img-cont {
            width: 104vw;
            img {
                width: 100%;
                object-fit: cover;
                object-position: center;
            }
        }
        button {
            padding-inline: 1rem;
        }
        section {
            padding-top: 5vh;
        }
        .text-content {
            text-align: center;
        }
    }
    @media ${devices.tablet} {
        &.technology {
            padding-block: 4vh;
            img {
                height: 30vh;
            }
            button {
                width: 6rem;
                height: 6rem;
                font-size: 2.2rem;
            }
            section {
                width: 85%;
            }
        }
    }
    @media ${devices.laptop} {
        &.technology {
            width: 95%;
            ${gridMixin('0.2fr 1fr 1fr', '0.2fr 1fr')};
            margin: 0 0 0 auto;

            .header {
                grid-area: 1/1/1/3;
                align-self: flex-end;
                padding-bottom: 2vh;
                width: 92.5%;
                margin-inline: auto;
            }

            .img-cont {
                ${flexMixin('flex-end', 'center', 'row')};
                width: auto;
                grid-area: 1/3/3/4;
                padding-top: 5vh;
                img {
                    width: 33vw;
                    height: 60vh;
                    object-fit: contain;
                    margin: 0;
                }
            }
            ul {
                margin-left: 1.5vw;
                padding-top: 5vh;
                grid-area: 2/1/2/2;
                flex-direction: column;
                justify-self: flex-start;
                gap: 5vh;
            }
            section {
                height: auto;
                width: 95%;
                grid-area: 2/2/2/3;
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
        &.technology {
            padding-block: 1vh;
            ${gridMixin('repeat(2, 1fr)', '0.2fr 1fr 1fr')};

            .header {
                justify-content: flex-start;
                margin-top: 5vh;
                grid-area: 1/1/1/3;
            }
            .img-cont {
                grid-area: 2/2;
            }
            .text-content {
                margin-block: 0;
            }
            section {
                grid-area: 3/2/3/3;
                padding-block: 2vh;
                width: 80%;
            }
            ul {
                grid-area: 2/1/4/1;
                flex-direction: column;
            }
        }
    }
`;

export default technologyStyling;
