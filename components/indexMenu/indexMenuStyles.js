import styled from "styled-components";

export const Index = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: rgb(10, 15, 20);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    max-width: 75vw;
`;

export const Carousel = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Item = styled.div`
    background-color:rgb(50, 50, 50, 0.3);
    margin:10px;
    padding:10px;
    width:360px;
    flex: none;
`;

export const Image = styled.img` 
    width: 100%;
    height: 100%;
    object-fit: cover;
`; 

export const Info = styled.div`
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Title = styled.span`
    font-size: 2rem;
`;

export const Memo = styled.span`
    font-size: 1.5rem;
`;