import styled from "styled-components";

export const StyledProductItem = styled.div`
    overflow: hidden;
    background: #fff;
    border:2px solid  rgb(248, 248, 248);
    border-radius: 15px;   
    transition: all .2s ease-in;

    &:hover{
        box-shadow: 0px 8px 24px rgba(220,229,245,63%);
    }
`;

export const StyledPCover = styled.div`
    width: 100%;
    height: 265px;
    position: relative;
    overflow: hidden;
`;

export const StyledImgProduct = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
    border-style: none;
    transition: all .3s ease-in;

    &:hover{
        transform: scale(1.07);
    }
`;

export const StyledPInfo = styled.div`
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 265px);
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%,   rgb(232, 232, 232) 100%);

    .button-stockCont{
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        align-items: center;
        justify-content: space-between;

        span{
            font-size: 10px;
        }
    }
`;

export const StyledTitleProduct = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #0c0c0c;
    line-height: 26px;
    margin-bottom: 16px; 
    font-family: 'Raleway', sans-serif;
`;

export const StyledPrice = styled.div`
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    font-family: 'IBM Plex Serif', serif;
`;

export const StyledPriceContent = styled.span`
    font-size: 1rem;
    font-weight: 700;
    color: #0f0f0f;
`;

export const StyledBtnCard = styled.button`
    display: inline-block;
    position: relative;
    padding: 12px 25px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    outline: 0;
    background: rgb(34,164,195);
    background: rgb(195,166,34);
    background: rgb(83,126,241);
    background: linear-gradient(48deg, rgba(83,126,241,1) 0%, rgba(21,89,255,1) 100%);
    border: 1px solid #7198ff;
    color: #fff;
    border-radius: 25px;
    text-align: center;
`;
