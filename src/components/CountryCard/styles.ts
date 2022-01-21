import styled from 'styled-components';

export const CardStyle = styled.div`
    background-color: ${props => props.theme.elements};
    border-radius: 7px;
    height: 320px;
    margin-bottom: 40px;
    margin-right: 45px;
    box-shadow: 0px 0px 3px ${props => props.theme.boxShadow};
    transition: transform 0.2s linear;

    &:hover {
        transform: scale(105%);
    }

    img {
        width: 250px;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
        height: 166px;
    }

    h3 {
        margin-top: 20px;
        overflow-x: auto;
    }

    h3,
    p {
        max-width: 220px;
        margin: 2px auto;
    }

    p {
        font-size: 14px;
        padding: 2px;
        span {
            font-weight: 600;
        }
    }

    p:nth-last-child(1) {
        height: 70px;
    }

    @media (max-width: 480px) {
        margin-right: 0px;
    }
`;
