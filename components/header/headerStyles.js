import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    grid-template-rows: 1fr;
    background-color: rgb(15, 20, 25);
    padding: 1rem;
    padding-top: 1rem;
`;

export const Logo = styled.div`
    display: flex;  
    flex-direction: row; 
    align-content: center;
    justify-content: center;
    font-size:2rem;
    color: rgba(255 , 255, 255, 0.75);
`;

export const NavBlock = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
`;

export const NavLink = styled.a`
    font-size: 1.5rem;
    line-height: 32px;
    color: rgba(255 , 255, 255, 0.75);
    transition: 0.4s ease;
    &:hover{
        color: #fff;
        opacity: 1;
        cursor:pointer;
    }
`;