import styled from 'styled-components';

export const CardStyle = styled.div`
    background-color: #fff;
    border-radius: 10px;
    height: 300px;
    margin-bottom: 40px;
    img {
        width: 250px;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
        height: 166px;
    }

    h3 {
        margin: 10px 0px;
        max-width: 250px;
        overflow-x: auto;
    }

    h3,
    p {
        margin-left: 10px;
    }

    p > span {
        font-weight: 600;
    }
`;
