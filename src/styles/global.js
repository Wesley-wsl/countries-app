import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: Nunito Sans, arial, sans-serif, serif;
}

body {
    background-color: hsl(0, 0%, 95%);
}

a {
    text-decoration: none;
    color: #000;
}

main {
    max-width: 1200px;
    margin: 0 auto;
}
`;
