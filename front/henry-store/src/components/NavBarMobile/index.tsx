import React from "react";
import styled from "styled-components"
import { NavBarMobileProps } from "./types";

const StyledContainerAbsolute = styled.div`
    position: fixed;
    width:100% ;
    height: 100%;
    background-color: #7dff52;
    z-index: 9999;
    top: 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    & ul{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    & ul li a{
        color: #000;
        text-decoration: none;
    }

    & button{
        width: 2rem;
    }

    transition: all .2s ease-in;
`;

export const NavBarMobile:React.FunctionComponent<NavBarMobileProps> = ({ onCloseMenu })=>{
    const handleCloseMenu = () => {
        onCloseMenu();
    };

    return(
        <StyledContainerAbsolute className="header-menu-movil">
            <button className="cerrar-menu" onClick={handleCloseMenu}>✖️</button>
            <ul>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Campañas</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </StyledContainerAbsolute>
    )
}