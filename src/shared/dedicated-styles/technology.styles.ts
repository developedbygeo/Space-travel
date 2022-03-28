import { css } from 'styled-components';

const technologyStyling = css`
    &.technology {
        .img-cont {
            width: 100vw;
            img {
                width: 100%;
                object-fit: cover;
                object-position: center;
            }
        }
        section {
            padding-top: 5vh;
        }
        .text-content {
            text-align: center;
        }
    }
`;

export default technologyStyling;
