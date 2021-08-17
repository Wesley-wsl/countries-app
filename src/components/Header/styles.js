import styled from 'styled-components';

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 12px;
    background-color: hsl(0, 0%, 100%);
    align-items: center;
    box-shadow: 0px 0px 10px hsl(0, 0%, 85%);

    h1 {
        margin-left: 60px;
        font-size: 25px;
    }

    div {
        margin-right: 60px;
        cursor: pointer;
        font-weight: 600;
        i {
            color: #000;
        }
    }
`;
