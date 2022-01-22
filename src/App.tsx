import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import { Router } from './routes';
import { GlobalStyle } from './styles/global';
import { Light, Dark } from './styles/themes/index';

function App() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () =>
        theme === 'light' ? setTheme('dark') : setTheme('light');

    return (
        <ThemeProvider theme={theme === 'light' ? Light : Dark}>
            <BrowserRouter>
                <Header themeToggler={themeToggler} />
                <Router />
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
