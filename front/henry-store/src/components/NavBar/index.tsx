import styled from "styled-components"
import { NavBarMobile } from "../NavBarMobile/index";
import React, { useState } from "react";

const StyledHmHeader = styled.div`
    position: relative;
    height: 64px;
    background: #fffae9;
    line-height: 64px;
    -webkit-transition: all .6s ease-in-out;
    -moz-transition: all .6s ease-in-out;
    -ms-transition: all .6s ease-in-out;
    -o-transition: all .6s ease-in-out;
    transition: all .6s ease-in-out;
    margin-bottom: 20px;
    box-sizing: border-box;
`;

const StyleHmHeaderContainer = styled.div`
    height: 100%;
`;

const StyledHeaderMenu = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin-inline: auto;
    align-items: center;
    max-width: 1122px;
`;

const StyledLogoCont = styled.div`
margin-left: 3rem;
    width: 9.2rem;

    @media screen and (max-width: 400px){
        width: 2.2rem;
    }
`;

const StyledHeaderLinks = styled.nav`
    display: flex;
    position: relative;
    padding-inline: 2rem;

    ul li a{
    text-decoration: none;
    color: #000;
    font-size: 15px;
    margin-right: 30px;
    display: inline-block;
    }  
`;

const MobileButton = styled.button`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;

const UlLinksOcult = styled.ul`
  display: flex;

  @media screen and (max-width: 700px) {
    display: none;
  }`;

const ImgLogoResponsive= styled.img`
    display: none;

    @media screen and (max-width: 400px) {
    display: block;
    width: 100%;
}`;

const ImgLogo = styled.img`
    display: block;
    width: 100%;

    @media screen and (max-width: 400px) {
    display: none;
}`;


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

