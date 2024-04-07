import styled from "styled-components"
import { NavBarMobile } from "../NavBarMobile/index";
import React, { useState } from "react";
import { StyledHmHeader, StyleHmHeaderContainer, StyledHeaderMenu, StyledLogoCont, StyledHeaderLinks, MobileButton, UlLinksOcult, ImgLogoResponsive, ImgLogo 
} from "./NavBar.styles";

const StyledSearchCont = styled.div`
    display: flex;
    flex-direction: row;
    height: 3rem;
    gap: 4rem;

    .search-element{
        width: 25%;
        display: flex;
        flex-direction: row;
        height: 3rem;
        padding-block: .4rem;
        align-items: center;
    }

    .categories-cont{
        width: 75%;
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: 1rem;
        align-items: center;

        @media screen and (max-width: 500px){
            display: none;
        }
    }

    input{
        border: none;
        width: 81%;
        height: 100%;
        background-color: #d0d0d0;
        border-radius: 25px 0 0 25px;
    }

    button{
        border: none;
        padding: 10px;
        width: 19%;
        height: 100%;
        background-color: #d0d0d0;
        margin-left: -1px;
        border-radius: 0 25px 25px 0;
    }

    button img{
        width: 40%;
        margin-inline: auto;
        margin-block: auto;
    }

`;

export const NavBar:React.FunctionComponent = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = ():void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div className="NavBar-gral-cont">
            <StyledHmHeader className="hm-header">
                <StyleHmHeaderContainer className="container">
                    <StyledHeaderMenu className="header-menu">
                        <div className="BurgMenuCart">
                            <StyledLogoCont className="hm-logo">
                                <MobileButton onClick={toggleMenu} type="button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="" /></MobileButton>
                            </StyledLogoCont>
                            <StyledHeaderLinks className="hm-menu">
                                <UlLinksOcult>
                                    <li><a href="http://">Productos</a></li>
                                    <li><a href="http://">Campañas</a></li>
                                    <li><a href="http://">Nosotros</a></li>
                                    <li><a href="http://">Contacto</a></li>
                                </UlLinksOcult>
                                <div className="icon-cart">
                                    <button>
                                        <img src="https://static-00.iconduck.com/assets.00/profile-icon-512x512-w0uaq4yr.png" alt="" />
                                    </button>

                                    <button>
                                        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                                        <span>0</span>
                                    </button>
                                </div>
                            </StyledHeaderLinks>
                        </div>
                        <StyledSearchCont>
                            <div className="search-element">
                                <input type="text" />
                                <button><img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="" /></button>
                            </div>
                            <ul className="categories-cont">
                                <li className="category">Moda</li>
                                <li className="category">Electronica</li>
                                <li className="category">Musica</li>
                                <li className="category">Juegos</li>
                                <li className="category">Comida</li>
                            </ul>
                        </StyledSearchCont>
                    </StyledHeaderMenu>
                </StyleHmHeaderContainer>
            </StyledHmHeader>
            {isMenuOpen && <NavBarMobile onCloseMenu={toggleMenu} />}
        </div>
    )
} 

