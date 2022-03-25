import { css } from 'styled-components';

import { flexMixin } from '../mixins';
import { interactAndHover, showActive } from '../styles/interactive.styles';

const destinationStyling = css`
    &.destination {
        height: 100%;
        ${flexMixin('space-evenly', 'center', 'column')};
    }
    .destination-header {
        width: 100%;
        ${flexMixin('center', 'center', 'row')};
        gap: 2rem;
        h2,
        span {
            font-size: 2rem;
            font-family: ${({ theme }) => theme.typography.fonts.subheading};
        }
        span {
            opacity: 0.25;
        }
    }
    ul {
        ${flexMixin('center', 'center', 'row')};
        gap: 2rem;
        text-transform: uppercase;
        font-family: ${({ theme }) => theme.typography.fonts.subheading};
        li {
            cursor: pointer;
            ${interactAndHover};
            &::after {
                height: 0.25rem;
            }
        }
        .active {
            ${showActive};
        }
    }

    .destination-img-cont {
        height: 30vh;
        width: 30vh;
        img {
            width: 100%;
        }
    }

    .destination-text-content {
        h1 {
            font-size: 8rem;
            text-transform: uppercase;
        }
    }
`;

export default destinationStyling;
