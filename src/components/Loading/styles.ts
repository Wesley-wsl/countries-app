import styled from 'styled-components';

import { ITheme } from '../../@types';

export const Container = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }: ITheme) => theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;
