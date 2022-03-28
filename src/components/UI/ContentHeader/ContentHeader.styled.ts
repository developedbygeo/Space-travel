import styled from 'styled-components/macro';

import { flexMixin } from '../../../shared/mixins';

const StyledContent = styled.article`
    height: 40vh;
    ${flexMixin('space-between', 'center', 'column')};

    .header {
        width: 100%;
        ${flexMixin('center', 'center', 'row')};
        gap: 2rem;
        h2,
        span {
            font-size: 2.2rem;
            font-family: ${({ theme }) => theme.typography.fonts.subheading};
            text-transform: uppercase;
        }
        span {
            opacity: 0.25;
        }
    }

    .img-cont {
        height: 25vh;
        width: 25vh;
        img {
            width: 100%;
        }
    }
`;
export default StyledContent;
