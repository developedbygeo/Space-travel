import { css } from 'styled-components';
import { maxContainer } from '../mixins';

export const baseSectionStyling = css`
    padding: 4vh;
    ${maxContainer}
    background: ${({ theme }) => theme.colors.mainBg};
`;
