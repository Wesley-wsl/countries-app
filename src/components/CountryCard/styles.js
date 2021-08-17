import styled from 'styled-components';

export const CardStyle = styled.div`
    background-color: #fff;
    border-radius: 10px;
    height: 300px;
    img {
        max-width: 250px;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
    }

    h3 {
        margin: 10px 0px;
    }

    h3,
    p {
        margin-left: 10px;
    }

    p > span {
        font-weight: 600;
    }
`;
