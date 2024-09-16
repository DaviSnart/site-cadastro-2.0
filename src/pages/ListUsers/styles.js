import styled from "styled-components";

export const Container = styled.div`
    background:#2F4F4F;
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    
`
export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
`
export const ContainerItens = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 30px 0px;

    @media (max-width: 790px){
        grid-template-columns: 1fr;
    }
`
export const CardUsers = styled.div`
    background-color: #21781f;
    padding: 20px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;

    h3 {
        color: #fff;
        font-size: 25px;
        font-weight: 200px;
        text-transform: capitalize;
    }

    p {
        color: #fff;
        font-size: 15px;
        font-weight: 200px;
    }
`
export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 35px;

    &:hover{
        opacity: 0.7;
        background-color: gold;
        border-radius:5px;
    }

    &:active{
        opacity: 0.5;
    }
`
export const AvatarUser = styled.img`
    height:80px;
`