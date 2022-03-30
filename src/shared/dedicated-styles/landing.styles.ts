import { css } from 'styled-components';

import { devices } from '../breakpoints';
import { flexMixin } from '../mixins';

const landingStyling = css`
    &.landing {
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
    }

    @media ${devices.laptop} {
        &.landing {
            padding-block: 20vh;
            ${flexMixin('space-between', 'flex-end', 'row')};

            .landing-text {
                flex: 0.75;
                justify-content: flex-end;
                align-items: flex-start;
            }
            p {
                text-align: left;
            }
            button {
                height: 20rem;
                width: 20rem;
                &:hover::before {
                    clip-path: circle(35.6% at 50% 50%);
                }
            }
        }
    }
`;

export default landingStyling;
