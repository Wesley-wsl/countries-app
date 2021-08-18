import styled from 'styled-components';

export const Back = styled.div`
    background-color: hsl(0, 0%, 100%);
    max-width: 110px;
    text-align: center;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    margin: 50px 0px;
    box-shadow: 0px 0px 10px hsl(0, 0%, 82%);
    cursor: pointer;
    i {
        margin-right: 4px;
    }
`;

export const Details = styled.section`
    display: flex;
    margin-bottom: 50px;
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

        .border {
            background-color: hsl(0, 0%, 100%);
            padding: 10px;
            box-shadow: 0px 0px 10px hsl(0, 0%, 82%);
            border-radius: 8px;
        }
    }
`;
