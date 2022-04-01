import styled from 'styled-components/macro';

import { flexMixin } from '../../shared/mixins';
import { interactAndHover, showActive } from '../../shared/styles/interactive.styles';

import { motion } from 'framer-motion';

const StyledList = styled(motion.ul)`
    ${flexMixin('center', 'center', 'row')};
    gap: 2rem;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.typography.fonts.subheading};
    li {
        cursor: pointer;
        letter-spacing: 0.15rem;
        ${interactAndHover};
        padding: 0.75rem;
        &::after {
            height: 0.25rem;
        }
    }
    .active {
        ${showActive};
    }
`;

export default StyledList;
