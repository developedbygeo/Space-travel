import styled from 'styled-components/macro';

import { flexMixin } from '../../shared/mixins';

const StyledTextDisplay = styled.section`
    height: 100%;
    min-height: 20vh;
    .text-content {
        margin-block: 2vh;
        min-height: 22vh;
    }

    /* reserved for the destination page (avg distance/travel time) */
    .additional-info {
        padding-top: 3vh;
        width: 100%;
        align-self: flex-start;
        justify-self: center;
        text-align: center;
        border-top: 0.5px solid rgb(${({ theme }) => theme.colors.darkAccent});
        ${flexMixin('center', 'center', 'column')};
        gap: 1vh;
    }
`;

export default StyledTextDisplay;
