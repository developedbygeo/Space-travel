import styled from 'styled-components/macro';

import { devices } from '../../shared/breakpoints';
import { flexMixin } from '../../shared/mixins';

import { motion } from 'framer-motion';

const StyledContent = styled.article`
    ${flexMixin('space-between', 'center', 'column')};
    height: 100%;
    gap: 2vh;

    .header {
        width: 100%;
        ${flexMixin('center', 'center', 'row')};
        gap: 2rem;
        span {
            opacity: 0.45;
        }
    }
    img {
        width: 100%;
        height: 25vh;
        object-fit: contain;
    }
`;

export const StyledContentHeader = styled(motion.div)`
    width: 100%;
    ${flexMixin('center', 'center', 'row')};
    gap: 2rem;
    span {
        opacity: 0.45;
    }
    @media ${devices.tablet} {
        justify-content: flex-start;
    }
`;
export const StyledContentImage = styled(motion.img)`
    width: 100%;
    height: 25vh;
    object-fit: contain;
`;

export default StyledContent;
