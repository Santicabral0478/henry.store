// components/ProductCards/index.tsx
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../ProductCards/ProductCardsServer';
import { Card } from '../Card';
import { IProduct } from './types';

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

export const ProductCards = () => {
  const [products, setProducts] = useState<IProduct[]>([]); // Inicializa products con un array vacío de tipo IProduct

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <StyledProductContainer className="product-cards">
      {products.map((product: IProduct) => (
        <Card key={product.id} {...product} />
      ))}
    </StyledProductContainer>
  );
};


 