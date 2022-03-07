import styled from 'styled-components';
import { flexMixin } from '../../shared/mixins';

const StyledHeader = styled.header`
    padding-inline: 5%;
    ${flexMixin('space-between', 'center', 'row')};
    background: transparent;

    & > svg {
        transform: scale(0.75);
    }
    .menu {
        width: 5.5rem;
        height: 5.5rem;
        color: ${({ theme }) => theme.colors.text};
        border: none;
        outline: none;
        background: transparent;
        svg {
            height: 100%;
            width: 100%;
        }
    }
`;

export default StyledHeader;
