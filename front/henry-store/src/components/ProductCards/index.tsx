// components/ProductCards/index.tsx
import styled from 'styled-components';
import React, { Suspense, useEffect, useState } from 'react';
import { fetchData } from '../ProductCards/ProductCardsServer';
import { Card } from '../Card';
import { IProduct } from './types';
import "./style.css"

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
    <div className="product-cards">
      {products.map((product: IProduct) => (  
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};


 