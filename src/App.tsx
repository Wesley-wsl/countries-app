import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import { Router } from './routes';
import { GlobalStyle } from './styles/global';
import { Light, Dark } from './styles/themes/index';

function App() {
    const [theme, setTheme] = useState('');
    const themeToggler = () => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
        if (theme === 'dark') {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

    useEffect(() => {
        const themeValue = localStorage.getItem('theme');
        if (themeValue === 'light') return setTheme('light');
        if (themeValue === 'dark') return setTheme('dark');
    }, []);

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
