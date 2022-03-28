import { css } from 'styled-components';

import { flexMixin, gridMixin } from '../mixins';
import { interactAndHover, showActive } from '../styles/interactive.styles';

const destinationStyling = css`
    &.destination {
        height: 100%;
        ${gridMixin('1fr', '0.8fr 0.43fr 0.5fr')};
        gap: 2vh;
        padding-block: 0;
    }
    ul {
        ${flexMixin('center', 'center', 'row')};
        gap: 2rem;
        text-transform: uppercase;
        font-family: ${({ theme }) => theme.typography.fonts.subheading};
        li {
            cursor: pointer;
            letter-spacing: 0.15rem;
            ${interactAndHover};
            &::after {
                height: 0.25rem;
            }
        }
        .active {
            ${showActive};
        }
    }
`;

export default destinationStyling;
