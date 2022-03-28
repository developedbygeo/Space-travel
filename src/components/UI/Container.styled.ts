import React from 'react';
import styled from 'styled-components/macro';

import landingStyling from '../../shared/dedicated-styles/landing.styles';
import destinationStyling from '../../shared/dedicated-styles/destination.styles';
import crewStyling from '../../shared/dedicated-styles/crew.styles';
import technologyStyling from '../../shared/dedicated-styles/technology.styles';
import { flexMixin } from '../../shared/mixins';
import { LayoutProps } from '../../shared/models/utils.model';
import { getLayout } from '../../shared/utils';

type AppContainerProps = {
    className: string;
    img?: string;
    children?: React.ReactNode;
};

export const AppContainer = styled.div<AppContainerProps>`
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const StyledSection = styled.section<LayoutProps>`
    ${flexMixin('space-between', 'center', 'column')};
    ${getLayout};
    height: 90%;
    width: 90%;
    margin: auto;

    ${landingStyling};
    ${destinationStyling};
    ${crewStyling};
    ${technologyStyling};
`;
