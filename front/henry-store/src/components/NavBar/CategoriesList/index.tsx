import React, { ReactNode } from "react";
import styled from "styled-components"
import { categories } from "./categories";
import { ICategory } from "./types";

const StyledCategoryListUl = styled.div`
   display: flex;
   flex-direction:row;
   flex-wrap: wrap;
   gap: .3rem;
   align-items: center;
   justify-content: start;
    
   @media screen and (max-width: 500px){
      display: none;
    }
`;

const StyledCategoryItem = styled.button`
    height: 1rem;
    font-size: 60%;
    background-color: #f7f961;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 23px;
`;

export const CategoriesList:React.FunctionComponent = ()=>{
    return(
        <StyledCategoryListUl>
            {
                categories.map((category: ICategory)=>{
                    return(
                        <StyledCategoryItem>
                            {category.name}
                        </StyledCategoryItem>
                    )
                })
            }
        </StyledCategoryListUl>
    )
}