import styled from 'styled-components';

export const SearchCountry = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 40px auto;
    align-items: center;

    @media (max-width: 423px) {
        justify-content: flex-start;
        flex-wrap: wrap;
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

export const Search = styled.form`
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
        cursor: pointer;

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

    @media (max-width: 423px) {
        margin-left: 15px;
        width: 280px;
    }
`;
