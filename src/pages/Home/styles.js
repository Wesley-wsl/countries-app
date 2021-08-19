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
        padding: 5px;
        outline: 0;
        border: none;
        background-color: ${props => props.theme.elements};
        color: ${props => props.theme.color};
    }
`;

export const Countries = styled.section`
    max-width: 1200px;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
