import styled from "styled-components";

export const Mundus = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: rgb(10,10, 10);
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    /* grid-gap: 1rem;
    padding: 1rem; */
    font-size: 5rem;
    color:white;
    /* background-image: url('dummyMountain.jpg'); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Dummy = styled.div`
    width:100%;
    height: 100%;
    background-color: white;
    /* border: 1px solid black; */
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    /* grid-row: 1;
    grid-column: 1; */
`;

export const Center = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    grid-row: 2;
    grid-column: 1 / 4;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Logo = styled.div`
    width:100px;
    height: 100px;
    background-image: url('moth.png');
    background-size:contain;
    background-position: center;
    background-repeat: no-repeat;
    /* background-color: #887a7a; */
`;

export const Universe = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Bidu = styled.div`
    width: 100px;
    height: 100px;
    background-image: url('bidu.png');
    background-size: cover;
`;