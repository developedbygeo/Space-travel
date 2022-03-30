import React, { Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import GlobalStyle from './shared/globalStyle';
import Header from './components/Header/Header';
import Skeleton from './components/UI/Skeleton';

const Home = React.lazy(() => import('./pages/Home'));
const Destination = React.lazy(() => import('./pages/Destination'));
const Crew = React.lazy(() => import('./pages/Crew'));
const Technology = React.lazy(() => import('./pages/Technology'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

import { matchRegex } from './shared/appBackgroundImg';
import { AppContainer } from './components/UI/Container.styled';

const regex = /^\/[a-z]+$/;

const acceptedPaths = ['home', 'destination', 'crew', 'technology'];

const App = () => {
    const { pathname } = useLocation();
    const derivedClassname = matchRegex(pathname, regex, 'home');
    const notFoundBackground = !acceptedPaths.includes(pathname.replace('/', '')) ? 'notFound' : '';

    return (
        <>
            <GlobalStyle />
            <AppContainer className={`appcont ${derivedClassname} ${notFoundBackground}`}>
                <Header />
                <main>
                    <Suspense fallback={<Skeleton />}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/destination" element={<Destination />} />
                            <Route path="/crew" element={<Crew />} />
                            <Route path="/technology" element={<Technology />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </main>
            </AppContainer>
        </>
    );
};

export default App;
