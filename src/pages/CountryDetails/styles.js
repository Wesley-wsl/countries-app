import styled from 'styled-components';

export const Back = styled.div`
    background-color: ${props => props.theme.elements};
    max-width: 110px;
    text-align: center;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    margin: 50px 0px;
    box-shadow: 0px 0px 10px ${props => props.theme.boxShadow};
    cursor: pointer;
    i {
        margin-right: 4px;
    }

    @media (max-width: 1143px) {
        margin-left: 10px;
    }
`;

export const Details = styled.section`
    display: flex;
    margin-bottom: 50px;
    margin: 0 auto;
    img {
        max-width: 570px;
        margin-right: 50px;
    }

    #details {
        h2 {
            margin: 30px 0px;
        }

        span {
            font-weight: 600;
        }

        p {
            padding: 5px;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            .left {
                margin-right: 50px;
            }
        }
    }

    .BorderCountries {
        margin-top: 40px;

        p {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }
        .border {
            background-color: ${props => props.theme.elements};
            padding: 7px;
            box-shadow: 0px 0px 10px ${props => props.theme.boxShadow};
            border-radius: 4px;
            margin-left: 4px;
            margin-bottom: 3px;
        }
    }

    @media (max-width: 1143px) {
        flex-direction: column;
        max-width: 80%;
        margin: 0 auto;
    }
`;

export const Container = styled.div`
    max-width: 110px;
`;
