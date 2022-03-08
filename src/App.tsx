import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './shared/globalStyle';
import Header from './components/Header/Header';

import { AppContainer } from './components/UI/Container.styled';
import Home from './pages/Home';

import useBackground from './hooks/useBackground';

const App = () => {
    const { img } = useBackground();

    return (
        <>
            <GlobalStyle />
            <AppContainer img={img}>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </main>
            </AppContainer>
        </>
    );
};

export default App;
