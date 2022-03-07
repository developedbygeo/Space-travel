import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './shared/globalStyle';
import Header from './components/Header/Header';

import { AppContainer } from './components/UI/Container';

import useBackground from './hooks/useBackground';

const App = () => {
    const img = useBackground();

    return (
        <>
            <GlobalStyle />
            <AppContainer img={img}>
                <Header />
            </AppContainer>
        </>
    );
};

export default App;
