import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import GlobalStyle from './shared/globalStyle';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

import { matchRegex } from './shared/appBackgroundImg';
import { AppContainer } from './components/UI/Container.styled';

const regex = /^\/[a-z]+/;

const App = () => {
    const { pathname } = useLocation();
    const derivedClassname = matchRegex(pathname, regex, 'home');

    return (
        <>
            <GlobalStyle />
            <AppContainer className={`appcont ${derivedClassname}`}>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/destination" element={<Destination />} />
                        <Route path="/crew" element={<Crew />} />
                        <Route path="/technology" element={<Technology />} />
                    </Routes>
                </main>
            </AppContainer>
        </>
    );
};

export default App;
