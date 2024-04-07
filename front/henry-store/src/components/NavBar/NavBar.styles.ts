import styled from "styled-components";

export const StyledHmHeader = styled.div`
    /* height: 190px; */
    background: red;
    line-height: 64px;
    transition: all .6s ease-in-out;
    /* margin-bottom: 20px; */
    box-sizing: border-box;
    background: rgb(237, 237, 237);
    background: linear-gradient(0deg, rgb(237 237 237 / 0%) 0%, rgb(145 145 145 / 37%) 100%);
    background: red;  
    border-radius: 0 0 26px 26px ;
`;

export const StyleHmHeaderContainer = styled.div`
    height: 100%;
`;

export const StyledHeaderMenu = styled.div`
width: 100%;
    padding: 1rem;
    height: 100%;
    max-width: 1122px;
    display: flex;
    flex-direction: column;

    .BurgMenuCart{
      display: flex;
      flex-direction: row;
      padding: 1rem;
      justify-content: space-between;
    }
`;

export const StyledLogoCont = styled.div`
margin-left: 1rem;
    width: 9.2rem;


    button{
      width: 2rem;
      background: none;
      border: none;
    }

    button img{
      width: 100%;
    }

    @media screen and (max-width: 400px){
        width: 2.2rem;
    }
`;

export const StyledHeaderLinks = styled.nav`
    display: flex;
    position: relative;
    /* padding-inline: 2rem; */

    ul li a{
    text-decoration: none;
    color: #000;
    font-size: 15px;
    margin-right: 30px;
    display: inline-block;
    }  

    .icon-cart{
      display: flex ;
      align-items:center;
      justify-content: center;
      gap: 1.2rem;
    }

    .icon-cart button{
      background: none;
      border: none;
      width: 2.4rem;
      display: flex;
      flex-direction: row;
      padding: 8px;
      gap: 3px;
    }

    /* @media screen and(max-width: 400px){
      grid-area: 1 / 2 / 2 / 3;
    } */
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
