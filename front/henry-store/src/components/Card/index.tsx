import styled from "styled-components";
import { IProduct } from "./types";
import React from "react";

const StyledProductItem = styled.div`
    overflow: hidden;
    background: #fff;
    border:1px solid #EEF5F9;
    border-radius: 5px;   
    transition: all .2s ease-in;

    &:hover{
        box-shadow: 0px 8px 24px rgba(220,229,245,63%);
    }
`;

const StyledPCover = styled.div`
    width: 100%;
    height: 265px;
    position: relative;
    overflow: hidden;
`;

const StyledImgProduct = styled.img`
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

const StyledPInfo = styled.div`
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 265px);
`;

const StyledTitleProduct = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #0c0c0c;
    line-height: 26px;
    margin-bottom: 16px; 
    font-family: 'Raleway', sans-serif;
`;

const StyledPrice = styled.div`
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    font-family: 'IBM Plex Serif', serif;
`;

const StyledPriceContent = styled.span`
    font-size: 1rem;
    font-weight: 700;
    color: #0f0f0f;
`;

const StyledBtnCard = styled.button`
    display: inline-block;
    position: relative;
    padding: 12px 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
    outline: 0;

    background: #cf7500;
    color: #fff;
    border-radius: 25px;
    text-align: center;
`;

export const Card: React.FunctionComponent<IProduct> = ({ ...product })=>{
console.log(product);
    
    return(
        <StyledProductItem className="product-item">
            <StyledPCover className="p-portada">
                    <StyledImgProduct src={product.image} alt="" />
            </StyledPCover>

            <StyledPInfo className="p-info">
                <StyledTitleProduct>{product.name}</StyledTitleProduct>
                <StyledPrice className="precio">
                    <StyledPriceContent>USD/~ ${product.name}</StyledPriceContent>
                </StyledPrice>
                <StyledBtnCard className="hm-btn btn-primary uppercase">Add To Cart</StyledBtnCard>
            </StyledPInfo>
        </StyledProductItem>
    )
}

export default Card;