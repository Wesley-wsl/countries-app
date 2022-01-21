import styled from 'styled-components';

export const SearchCountry = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 40px auto;
    align-items: center;
    form {
        width: 400px;
        position: relative;
        display: flex;
        margin-left: 10px;
        box-shadow: 0px 0px 10px ${props => props.theme.boxShadow};
        button {
            padding: 12px;
            border-top-left-radius: 7px;
            border-bottom-left-radius: 7px;
            background-color: ${props => props.theme.elements};
            i {
                color: ${props => props.theme.color};
            }
        }
        input {
            padding: 12px;
            border-top-right-radius: 7px;
            border-bottom-right-radius: 7px;
            height: 45px;
            background-color: ${props => props.theme.elements};
            width: 100%;
            outline: 0;
            color: ${props => props.theme.color};
            &::placeholder {
                color: ${props => props.theme.color};
            }
        }
    }

    div {
        position: relative;
        select {
            border-radius: 7px;
            height: 45px;
            margin-right: 52px;
            padding: 7px;
            outline: none;
            border: none;
            margin-left: 20px;
            background-color: ${props => props.theme.elements};
            color: ${props => props.theme.color};
            cursor: pointer;
            box-shadow: 0px 0px 10px ${props => props.theme.boxShadow};
            appearance: none;
            padding-right: 25px;
        }
        i {
            position: absolute;
            top: 15px;
            right: 60px;

            @media (max-width: 423px) {
                top: 35px;
            }
        }
    }

    @media (max-width: 423px) {
        justify-content: flex-start;
        flex-wrap: wrap;
        form {
            margin-left: 15px;
            width: 280px;
        }

        select {
            margin-left: 15px;
            margin-top: 20px;
        }
    }

    @media (max-width: 1180px) {
        max-width: 900px;
    }
`;

export const Countries = styled.section`
    max-width: 1200px;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 423px) {
        justify-content: center;
    }
`;
