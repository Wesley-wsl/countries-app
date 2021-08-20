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
        button {
            padding: 12px;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            background-color: ${props => props.theme.elements};
            i {
                color: ${props => props.theme.color};
            }
        }
        input {
            padding: 12px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            background-color: ${props => props.theme.elements};
            width: 100%;
            outline: 0;
            color: ${props => props.theme.color};
            &::placeholder {
                color: ${props => props.theme.color};
            }
        }
    }

    select {
        border-radius: 8px;
        height: 42px;
        margin-right: 52px;
        padding: 5px;
        outline: 0;
        border: none;
        margin-left: 20px;
        background-color: ${props => props.theme.elements};
        color: ${props => props.theme.color};
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
