import styled from "styled-components"
import { NavBarMobile } from "../NavBarMobile/index";
import React, { useState } from "react";
import { StyledHmHeader, StyleHmHeaderContainer, StyledHeaderMenu, StyledLogoCont, StyledHeaderLinks, MobileButton, UlLinksOcult, ImgLogoResponsive, ImgLogo 
} from "./NavBar.styles";

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
                        <StyledLogoCont className="hm-logo">
                            <a href="#">
                                {/* <ImgLogoResponsive src={logoPTMobile}/> */}
                                {/* <ImgLogo src={logoPT}/> */}
                            </a> 
                        </StyledLogoCont>
                        <StyledHeaderLinks className="hm-menu">
                            <UlLinksOcult>
                                <li><a href="http://">Productos</a></li>
                                <li><a href="http://">Campañas</a></li>
                                <li><a href="http://">Nosotros</a></li>
                                <li><a href="http://">Contacto</a></li>
                            </UlLinksOcult>
                            <div className="hm-icon-cart">
                                <a href="#">
                                    <i className="las la-shopping-cart"></i>
                                    <span>0</span>
                                </a>
                            </div>
                            <div className="icon-menu">
                                <MobileButton onClick={toggleMenu} type="button">🟰</MobileButton>
                            </div>
                        </StyledHeaderLinks>
                    </StyledHeaderMenu>
                </StyleHmHeaderContainer>
            </StyledHmHeader>
            {isMenuOpen && <NavBarMobile onCloseMenu={toggleMenu} />}
        </div>
    )
} 

