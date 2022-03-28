import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';
import { myTheme } from './shared/theme';
import App from './App';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <ThemeProvider theme={myTheme}>
                <App />
            </ThemeProvider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
