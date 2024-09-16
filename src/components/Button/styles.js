import styled from "styled-components"

export const Button = styled.button`
    border-radius: 20px;
    border: ${props => props.theme === 'primary'
        ? 'none'
        : '1px solid #fff'};
    background: ${props => props.theme === 'primary'
        ? 'linear-gradient(180deg, #7CFC00 0%, #228B22 100%)'
        : 'transparent'};
    width: fit-content;
    margin-top: 15px;
    padding: 20px 32px;
    color: #fff;
    font-size: 20px;
    font-weight:bold;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }

    &:active{
        opacity:0.5;
    }
`