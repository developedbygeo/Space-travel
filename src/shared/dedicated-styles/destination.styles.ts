import { css } from 'styled-components';

import { devices } from '../breakpoints';
import { gridMixin, flexMixin } from '../mixins';

// TODO consolidate media queries into one snippet

const destinationStyling = css`
    &.destination,
    &.crew {
        height: 100%;
        width: 95%;
        ${gridMixin('1fr', '0.2fr 0.8fr 0.1fr 1.5fr')};
        gap: 1.5vh;
        padding-block: 0;
        .text-content {
            text-align: center;
        }
        ul {
            align-items: center;
            margin-bottom: 1vh;
        }
        button,
        li {
            padding: 1rem;
        }
    }

    @media ${devices.tablet} {
        &.destination,
        &.crew {
            padding-block: 2vh;
            .header {
                justify-content: flex-start;
            }
            h1 {
                font-size: 6rem;
            }
            .text-content {
                width: 80%;
                margin-inline: auto;
            }
            .additional-info {
                width: 80%;
                margin-inline: auto;
                padding-top: 5vh;
                ${flexMixin('space-around', 'center', 'row')};
            }
        }
    }
    @media ${devices.laptop}, ${devices.landscapeMobileSS} {
        &.destination {
            ${gridMixin('repeat(2, 1fr)', '0.1fr 0.1fr 1fr')}

            .img-cont {
                grid-area: 2/1/4/2;
                img {
                    height: 50vh;
                }
            }
            .header {
                grid-area: 1/1/3/2;
                width: 80%;
                margin-inline: auto;
                align-self: flex-end;
                padding-bottom: 3.25vh;
            }
            ul {
                width: 75%;
                justify-content: space-between;
                align-items: flex-start;
                margin-inline: auto;
                grid-area: 2/2/3/4;
            }
            section {
                height: auto;
                width: 95%;
                margin: auto;
                grid-area: 2/2/4/2;
            }
            .text-content {
                margin-block: 10vh;
            }
            .additional-info {
                justify-content: space-between;
            }
            h1,
            p,
            h4 {
                text-align: left;
            }
        }
    }
    @media ${devices.landscapeMobileSS} {
        &.destination {
            .header {
                width: 100%;
                justify-content: flex-start;
                padding: 0 0 6vh 3vh;
            }
            .text-content {
                margin-block: 5vh;
            }
            .additional-info {
                flex-direction: row;
            }
        }
    }
`;

export default destinationStyling;
