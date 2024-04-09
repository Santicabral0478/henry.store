import React from "react";
import {styled, keyframes} from "styled-components"
import { NavBarMobileProps } from "./types";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledContainerAbsolute = styled.div`
    animation: ${fadeInAnimation} 0.5s ease-out forwards;
    position: fixed;
    width:100% ;
    height: 100%;
    top: 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 99999;

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

const StyledBtnClose = styled.button`
    background: none;
    border: none;

    img{
        max-width: 3rem;
    }
`;


export const NavBarMobile:React.FunctionComponent<NavBarMobileProps> = ({ onCloseMenu })=>{
    const handleCloseMenu = () => {
        onCloseMenu();
    };

    return(
        <StyledContainerAbsolute className="header-menu-movil">
            <StyledBtnClose className="cerrar-menu" onClick={handleCloseMenu}>
                <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="" />
            </StyledBtnClose>
            <ul>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Campañas</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </StyledContainerAbsolute>
    )
}