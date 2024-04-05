import styled from "styled-components"
import Card from "../Card/index";
import { products } from "./products";
import React from "react";
import { IProduct } from "../Card/types";

const StyledProductContainer = styled.div`
    display: grid;
    gap: 1rem;
    padding: 1rem;
    max-width: 1122px;
    width: 100%;
    margin: 0 auto; 

    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(4, 1fr); 
    }

    @media screen and (max-width: 1023px) and (min-width: 801px){
        grid-template-columns: repeat(3, 1fr); 
    }

    @media screen and (max-width: 800px){
        grid-template-columns: repeat(2, 1fr); 
    }

    @media screen and (max-width: 400px){
        grid-template-columns: repeat(1, 1fr); 
    }
`;

export const ProductCards:React.FunctionComponent = ()=>{
    return(
        <StyledProductContainer className="Product-Container">
            {
                products.map((product: IProduct): React.ReactNode=>{
                    return(
                        <Card key={product.id} {...product}/>
                    )
                })
            }
        </StyledProductContainer>
    )
}
