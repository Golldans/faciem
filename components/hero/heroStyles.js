import styled from "styled-components";

export const HeroMain = styled.section`
    display:grid;
    grid-template-columns: 50% 25% 25%;
    background-color: rgb(20, 20, 20);
    justify-items: center;
`;

export const Me = styled.div`
    width:95%;
    height:95vh; 
    margin: 2.5vh 0%;
    background-color: rgb(5, 10, 15);
`;

export const Nomen = styled.div`
    width:100%;
    height:100%;
    display: flex; 
    align-items: flex-end;
    font-size: 4rem;
    color:white;
    padding: 1rem;
`;

export const Faciem = styled.div`
    width:95%;
    height:95vh;
    margin: 2.5vh 0%;
    background-color:lightskyblue;
    background-image: url("greek.jpg");
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Fabula = styled.div`
    width: 95%;
    height:95vh;
    margin: 2.5vh 0%;
    background-color: black;
    color:white;
    display: flex;
    align-items: center;
    padding: 1rem;
`;
