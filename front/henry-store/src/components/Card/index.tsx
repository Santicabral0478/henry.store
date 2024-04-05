import { IProduct } from "./types";
import React from "react";

import {StyledProductItem, StyledPCover, StyledImgProduct, StyledPInfo, StyledTitleProduct, StyledPrice, StyledPriceContent, StyledBtnCard} from './Card.styles'

export const Card: React.FunctionComponent<IProduct> = ({ ...product })=>{
    
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