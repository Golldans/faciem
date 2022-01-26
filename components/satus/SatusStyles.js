import styled from "styled-components";

export const Mundus = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: rgb(5, 5, 5);
    display: flex;
    align-items: center; 
    justify-content: center;
    color:white; 
    font-size:3rem; 
`;

export const Urbs = styled.div`
    width: 100%;
    height: 85%;
    border: 1px solid rgb(255, 255, 255);
    border-right: none;
    border-left: none;
    display: flex;
    align-items: center;
    justify-content: center; 
`;
 
export const Persona = styled.div`
    width: calc(100% - 120px);
    height: calc(100% - 120px);  
    border: 1px solid rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center; 
`;