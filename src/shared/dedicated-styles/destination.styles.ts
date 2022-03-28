import { css } from 'styled-components';

import { gridMixin } from '../mixins';

// TODO could consolidate all extra page styles here

const destinationStyling = css`
    &.destination,
    &.crew {
        height: 100%;
        ${gridMixin('1fr', 'auto')};
        padding-block: 0;
        .text-content {
            text-align: center;
        }
    }
`;

export default destinationStyling;
