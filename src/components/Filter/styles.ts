import styled from 'styled-components';

export const Filter = styled.div`
    position: relative;

    button {
        position: relative;
        width: 130px;
        height: 45px;
        background-color: ${props => props.theme.elements};
        color: ${props => props.theme.color};
        box-shadow: 0px 0px 10px ${props => props.theme.boxShadow};
        padding: 7px;
        cursor: pointer;
        outline: none;
        border-radius: 7px;
        padding-left: 2px;

        i {
            position: absolute;
            top: 17px;
            right: 11px;

            @media (max-width: 423px) {
                top: 35px;
            }
        }
    }

    ul {
        position: absolute;
        right: 0;
        left: 0;
        background-color: ${props => props.theme.elements};
        box-shadow: 0px 0px 10px ${props => props.theme.boxShadow};
        border-radius: 7px;
        margin-top: 3px;
        padding: 15px;
        list-style: none;
        z-index: 5;

        li {
            border-radius: 3px;
            padding: 2px 0px;
            opacity: 0.8;
            cursor: pointer;

            &:hover {
                opacity: 1;
            }
        }
    }

    @media (max-width: 1080px) {
        margin-right: 50px;
        margin-left: 20px;
    }

    @media (max-width: 423px) {
        margin-left: 15px;
        margin-top: 20px;

        button > i {
            top: 17px;
            right: 9px;
        }
    }
`;
