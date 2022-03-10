import React from 'react';
import styled from 'styled-components';

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
