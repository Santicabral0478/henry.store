import styled from "styled-components";

export const StyledHmHeader = styled.div`
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

export const StyleHmHeaderContainer = styled.div`
    height: 100%;
`;

export const StyledHeaderMenu = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin-inline: auto;
    align-items: center;
    max-width: 1122px;
`;

export const StyledLogoCont = styled.div`
margin-left: 3rem;
    width: 9.2rem;

    @media screen and (max-width: 400px){
        width: 2.2rem;
    }
`;

export const StyledHeaderLinks = styled.nav`
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

export const MobileButton = styled.button`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const UlLinksOcult = styled.ul`
  display: flex;

  @media screen and (max-width: 700px) {
    display: none;
  }`;

export const ImgLogoResponsive= styled.img`
    display: none;

    @media screen and (max-width: 400px) {
    display: block;
    width: 100%;
}`;

export const ImgLogo = styled.img`
    display: block;
    width: 100%;

    @media screen and (max-width: 400px) {
    display: none;
}`;
