import styled from "styled-components";

export const Container = styled.div`
    background:#2F4F4F;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;
`
export const TopBackGround = styled.div`
    background: linear-gradient(to right, #7CFC00, #228B22);
    height: 30vh;
    width: 90vw;
    max-width: 800px;
    border: none;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        max-width: 100%;
        max-height: 100%;

    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;

`
export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;

`
export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
    border-radius: 22px;

`
export const InputLabel = styled.label`
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;

    span{
        color: #DC143C;
        font-weight: bold;
    }

`
export const Input = styled.input`
    border: 1px solid;
    border-radius: 10px;
    border-color: #d2dae2;
    background-color: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`
