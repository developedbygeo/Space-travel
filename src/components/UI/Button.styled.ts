import styled, { css } from 'styled-components';

import { colorInteract, resetDefaults } from '../../shared/mixins';

import { StyledProps } from '../../shared/models/props.model';

export const UnstyledButton = styled.button<StyledProps>`
    height: ${({ height }) => height || '5rem'};
    width: ${({ width }) => width || '5rem'};
    ${colorInteract}
    ${resetDefaults}

    color: ${({ theme }) => theme.colors.text};
    svg {
        height: 100%;
        width: 100%;
    }
`;
