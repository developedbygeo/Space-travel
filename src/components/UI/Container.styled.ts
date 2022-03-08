import React from 'react';
import styled from 'styled-components';

type AppContainerProps = {
    img?: string;
    children?: React.ReactNode;
};

export const AppContainer = styled.div<AppContainerProps>`
    height: 100vh;
    width: 100vw;
    background: url(${(props) => props.img}) center no-repeat;
    background-size: cover;
`;
