import { BrowserRouter } from 'react-router-dom';
import { ChangeTheme, GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { Light, Dark } from './styles/themes/index';
import { Routes } from './routes';
import { useState } from 'react';

function App() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <ThemeProvider theme={theme === 'light' ? Light : Dark}>
            <BrowserRouter>
                <ChangeTheme onClick={() => themeToggler()}>
                    {' '}
                    <span>
                        <i className="far fa-moon"></i>
                    </span>{' '}
                    Dark Mode
                </ChangeTheme>
                <Routes />
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
