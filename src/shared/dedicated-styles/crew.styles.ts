import { css } from 'styled-components';

const crewStyling = css`
    &.crew {
        grid-template-rows: repeat(2, 1fr);

        section {
            padding-top: 5vh;
        }
        h1 {
            font-size: 4rem;
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
    }
`;

export default crewStyling;
