import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import { Router } from './routes';
import { GlobalStyle } from './styles/global';
import { Light, Dark } from './styles/themes/index';

function App() {
    const [isLight, setIsLight] = useState(Boolean);
    const themeToggler = () => {
        if (isLight) {
            localStorage.removeItem('theme');
            setIsLight(false);
        }
        if (!isLight) {
            localStorage.setItem('theme', 'light');
            setIsLight(true);
        }
    };

    useEffect(() => {
        const themeValue = localStorage.getItem('theme');
        if (themeValue) return setIsLight(true);
        if (!themeValue) return setIsLight(false);
    }, []);

    return (
        <ThemeProvider theme={isLight ? Light : Dark}>
            <BrowserRouter>
                <Header themeToggler={themeToggler} isLight={isLight} />
                <Router />
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
