import styled from "styled-components";

export const StyledHmHeader = styled.div`
    transition: all .4s ease-in;
    background: red;
    line-height: 64px;
    transition: all .6s ease-in-out;
    box-sizing: border-box;
    background: rgb(20,20,20);
    background: linear-gradient(135deg, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 100%); 
    border-radius: 0 0 26px 26px ;
    box-shadow: 0px 0px 26px -8px rgba(0,0,0,0.75);

    @media screen and (min-width: 500px){
      border-radius: 0px;
    }
`;

export const StyleHmHeaderContainer = styled.div`
    height: 100%;
    max-width: 1200px;
    margin-inline: auto;
`;

export const StyledHeaderMenu = styled.div`
    width: 100%;
    padding: 1rem;
    height: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    margin-inline: auto;

    .BurgMenuCart{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
`;

export const StyledLogoCont = styled.div`
    width: 13.5rem;
    height: 2rem;
    display: flex;
    flex-direction: row;
    gap: 2rem; 

    button{
      width: 2rem;
      background: none;
      border: none;
    }

    button img{
      width: 100%;
      filter: invert(100%);
    }

    .logoHenryImg{
        width: 9.4rem;
        height: 1.8rem;
    }

    @media screen and (max-width: 500px){
      width: 10.5rem;
      gap: 1rem;
      align-items: center;

      .logoHenryImg{
        width: 7.4rem;
        height: 1.1rem;
      }

    @media screen and (max-width: 500px){
      width: 10.5rem;
      gap: 1rem;
      align-items: center;

      .logoHenryImg{
        width: 5.4rem;
      }
    }
  }
`;

export const StyledHeaderLinks = styled.nav`
    display: flex;
    position: relative;
    align-items: center;
    /* padding-inline: 2rem; */

    ul li a{
    text-decoration: none;
    color: #fff;
    font-size: 15px;
    margin-right: 30px;
    display: inline-block;
    }  

    .icon-cart{
      display: flex ;
      align-items:center;
      justify-content: center;
      gap: 2%;
    }

    .icon-cart button{
      background: none;
      border: none;
      width: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      padding: 8px;
      gap: 3px;
    }

    .icon-cart button img{
      filter: invert(100%);
      height: 23px;
    }

    .icon-cart button span{
      color: #fff;
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

  .offerLink{
    display: flex;
    gap: .4rem;
    flex-direction: row;
    color: #f63120;
    align-items: center;
  }

  .offerStar{
    width: .9rem;
    height: .9rem;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }`;