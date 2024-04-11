import styled from "styled-components"
import { NavBarMobile } from "../NavBarMobile/index";
import React, { useState } from "react";
import { StyledHmHeader, StyleHmHeaderContainer, StyledHeaderMenu, StyledLogoCont, StyledHeaderLinks, MobileButton, UlLinksOcult} from "./NavBar.styles";
import { CategoriesList } from "./CategoriesList";
import "./style.css"

const StyledBtnSearck = styled.button`
    border: none;
    width: 19%;
    height: 100%;
    background-color: #d0d0d0;
    margin-left: -1px;
    border-radius: 0 25px 25px 0;
    cursor: pointer;

    img{
        width: 74%;
        min-width: .6rem;
        filter: invert(100%);
        background-color: #d4d4d4;
        padding: 6px 10px;
        border-radius: 15px;
        margin-inline: auto;
    }
`;

const StyledSupGradient = styled.div`
    width: 100%;
    height: .3rem;
    background: rgb(231,245,133);
    background: linear-gradient(90deg, rgba(231,245,133,1) 0%, rgba(255,253,45,1) 26%, rgba(253,205,29,1) 50%, rgba(252,92,92,1) 100%);
`;

export const NavBar:React.FunctionComponent = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = ():void => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <div className="NavBar-gral-cont">
            <StyledHmHeader className="hm-header">
                <StyledSupGradient></StyledSupGradient>
                <StyleHmHeaderContainer className="container">
                    <StyledHeaderMenu className="header-menu">
                        <div className="BurgMenuCart">
                            <StyledLogoCont className="hm-logo">
                                <MobileButton onClick={toggleMenu} type="button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="" /></MobileButton>
                                <img className="logoHenryImg" src="https://henry-social-resources.s3-sa-east-1.amazonaws.com/henry-landing/assets/Henry/logo-white.png" alt="" />
                            </StyledLogoCont>
                            <StyledHeaderLinks className="hm-menu">
                                <UlLinksOcult>
                                    <li><a className="offerLink" href="http://"><img className="offerStar" src="https://cdn-icons-png.flaticon.com/512/275/275812.png" alt=""/><b>Offers</b></a></li>
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
                        <div className="searchCategory">
                            <div className="searchBox">              
                                <input className="searchInput" type="text" name="" placeholder="Search something"/>
                                <button className="searchButton">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                    <g clip-path="url(#clip0_2_17)">
                                        <g filter="url(#filter0_d_2_17)">
                                            <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"></path>
                                        </g>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                            <feOffset dy="4"></feOffset>
                                            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                            <feComposite in2="hardAlpha" operator="out"></feComposite>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
                                        </filter>
                                        <clipPath id="clip0_2_17">
                                            <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                                </button>
                            </div>
                            <CategoriesList/>
                        </div>
                    </StyledHeaderMenu>
                </StyleHmHeaderContainer>
            </StyledHmHeader>
            {isMenuOpen && <NavBarMobile onCloseMenu={toggleMenu} />}
        </div>
    )
} 

