import styled from "styled-components"
import logoPT from "../../assets/logoPT.png"

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
    align-items: center;
`;

const StyledLogoCont = styled.div`
margin-left: 3rem;
    width: 9.2rem;

    a img{
        width: 100%;
    }
`;

const StyledHeaderLinks = styled.nav`
    display: flex;
    position: relative;
    padding-inline: 2rem;

    ul{
        display: flex;
    }

    ul li a{
    text-decoration: none;
    color: #000;
    font-size: 15px;
    margin-right: 30px;
    display: inline-block;
}
`;

export const NavBar = ()=>{
    return(
       <div className="NavBar-gral-cont">
            <StyledHmHeader class="hm-header">
                <StyleHmHeaderContainer class="container">
                    <StyledHeaderMenu class="header-menu">
                        <StyledLogoCont class="hm-logo">
                            <a href="#">
                                <img src={logoPT} alt="" />
                            </a> 
                        </StyledLogoCont>
                        <StyledHeaderLinks class="hm-menu">
                            <ul>
                                <li><a href="http://">Productos</a></li>
                                <li><a href="http://">Campañas</a></li>
                                <li><a href="http://">Nosotros</a></li>
                                <li><a href="http://">Contacto</a></li>
                            </ul>
                            <div class="hm-icon-cart">
                                <a href="#">
                                    <i class="las la-shopping-cart"></i>
                                    <span>0</span>
                                </a>
                            </div>
                            <div class="icon-menu">
                                <button type="button"><i class="fas fa-bars"></i></button>
                            </div>
                        </StyledHeaderLinks>
                    </StyledHeaderMenu>
                </StyleHmHeaderContainer>
            </StyledHmHeader>
       </div>
    )
} 