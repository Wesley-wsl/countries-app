import styled from 'styled-components';

export const SearchCountry = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 40px auto;
    align-items: center;
    div {
        width: 400px;
        position: relative;
        display: flex;
        button {
            padding: 12px;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            background-color: hsl(0, 0%, 100%);
        }
        input {
            padding: 12px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            width: 100%;
            outline: 0;
        }
    }

    select {
        border-radius: 8px;
        height: 42px;
        padding: 5px;
        outline: 0;
    }
`;

export const Countries = styled.section`
    max-width: 1200px;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
