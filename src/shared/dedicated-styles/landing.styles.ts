import { css } from 'styled-components';

import { textTypography, subheadingTypography } from '../styles/typography.styles';
import { flexMixin } from '../mixins';

const landingStyling = css`
    padding-block: 3vh;
    .landing-text {
        height: 60%;
        ${flexMixin('center', 'center', 'column')};
        gap: 1.5rem;
        & > article {
            width: 90%;
            margin: auto;
        }
        & > .landing-header-wrapper {
            text-align: center;
            ${flexMixin('center', 'center', 'column')};
            gap: 4rem;
            width: auto;
            h1 {
                ${subheadingTypography};
                letter-spacing: 0.3rem;
            }
            h2 {
                font-size: 8rem;
                letter-spacing: 0.75rem;
            }
            h1,
            h2 {
                width: 100%;
            }
        }

        .landing-desc {
            ${textTypography};
            text-align: center;
        }
    }
`;

export default landingStyling;
