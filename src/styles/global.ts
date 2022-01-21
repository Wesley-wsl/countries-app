import styled, { createGlobalStyle } from 'styled-components';

import { ITheme } from '../@types';

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: Nunito Sans, arial, sans-serif, serif;
}

body {
    background-color: ${({ theme }: ITheme) => theme.body};
    color: ${({ theme }: ITheme) => theme.color};
}

a {
    text-decoration: none;
    color: ${({ theme }: ITheme) => theme.color};
}

main {
    max-width: 1200px;
    margin: 0 auto;
}
`;

export const ChangeTheme = styled.div`
    position: absolute;
    right: 0px;
    top: 18px;
    margin-right: 60px;
    cursor: pointer;
    font-weight: 600;
    i {
        color: ${({ theme }: ITheme) => theme.color};
    }

    @media (max-width: 530px) {
        font-size: 13px;
        top: 14px;
        margin-right: 10px;
    }
`;
