import styled from "styled-components"
import { NavBarMobile } from "../NavBarMobile/index";
import React, { useState } from "react";
import { StyledHmHeader, StyleHmHeaderContainer, StyledHeaderMenu, StyledLogoCont, StyledHeaderLinks, MobileButton, UlLinksOcult
} from "./NavBar.styles";
import { CategoriesList } from "./CategoriesList";

const StyledSearchCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media screen and (max-width: 500px){
      display: block;
      width: 100%;
    }

    .search-element{
        width: 40%;
        display: flex;
        flex-direction: row;
        height: 3rem;
        padding-block: .4rem;
        align-items: center;
        max-width:15rem;

        @media screen and (max-width: 500px){
            width: 100%;
        }
    }

    .categories-cont{
        width: 60%;
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
        padding-left: 1rem;
    }

    input:focus{
        outline: none;
        background: linear-gradient(275deg, rgba(208,208,208,1) 0%, rgba(241,219,108,1) 100%);
    }

`;

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
                        <StyledSearchCont>
                            <div className="search-element">
                                <input type="text" placeholder="Search..."/>
                                <StyledBtnSearck><img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="" /></StyledBtnSearck>
                            </div>
                            <CategoriesList/>
                        </StyledSearchCont>
                    </StyledHeaderMenu>
                </StyleHmHeaderContainer>
            </StyledHmHeader>
            {isMenuOpen && <NavBarMobile onCloseMenu={toggleMenu} />}
        </div>
    )
} 

