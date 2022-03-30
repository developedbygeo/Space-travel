import { css } from 'styled-components';

import { flexMixin } from '../mixins';

const notFoundStyling = css`
    &.not-found {
        ${flexMixin('space-evenly', 'center', 'column')};
        text-align: center;

        button {
            width: 20rem;
            height: 20rem;
        }
    }
`;

export default notFoundStyling;
