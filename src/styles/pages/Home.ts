import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 54px;
        color: ${props => props.theme.colors.primary};
        margin-top: 40px;
    }

    p{
        margin-top: 24px;
        font-size: 24px;
        line-height: 32px;
    }

    button{
        background: ${props => props.theme.colors.primary};
        border: none;
        border-radius: 8px;
        padding: 15px 40px;
        margin-top: 50px;
        color: ${props => props.theme.colors.text};
        cursor: pointer;
        transition: background-color 0.5s;
    }

    button:hover{
        background: #523b87;
    }
`;