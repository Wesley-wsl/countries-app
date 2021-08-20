import styled from 'styled-components';

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
