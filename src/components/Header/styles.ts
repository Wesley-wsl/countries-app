import styled from 'styled-components';

import { ITheme } from '../../@types';

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 12px;
    background-color: ${props => props.theme.elements};
    align-items: center;
    box-shadow: 0px 0px 10px ${props => props.theme.boxShadow};

    h1 {
        margin-left: 60px;
        font-size: 25px;
        color: ${props => props.theme.color};
        cursor: pointer;
    }

    @media (max-width: 530px) {
        h1 {
            font-size: 15px;
            margin-left: 10px;
        }
    }
`;

export const ChangeTheme = styled.div`
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
