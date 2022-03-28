import { css } from 'styled-components';

import { flexMixin } from '../mixins';

// TODO could marge all dedicated styles into one with class differentiation

const landingStyling = css`
    padding-block: 3vh;
    .landing-text {
        height: 60%;
        ${flexMixin('center', 'center', 'column')};
        gap: 1.5rem;
        text-align: center;

        h1 {
            font-size: 8rem;
        }
        .landing-intro {
            font-size: 2.2rem;
            letter-spacing: 0.15rem;
            font-family: ${({ theme }) => theme.typography.fonts.subheading};
            color: rgb(${({ theme }) => theme.colors.accent});
        }
        p:not(.landing-intro) {
            line-height: 1.7;
        }
    }
`;

export default landingStyling;
