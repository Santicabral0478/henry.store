import { IProduct } from "./types";
import React from "react";

import {StyledProductItem, StyledPCover, StyledImgProduct, StyledPInfo, StyledTitleProduct, StyledPrice, StyledPriceContent, StyledBtnCard} from './Card.styles'

export const Card: React.FunctionComponent<IProduct> = ({ ...product }) => {
    // Objeto que contiene las URLs de las imágenes de reemplazo para cada producto
    const imagesRep: { [key: string]: string } = {
      "iPhone 11": "https://static-jaymart.com/ecom/public/1mNO8ihVNEBs7fmhrbkWpuTQy6Z.jpg",
      "MacBook Air": "https://www.ultigiz.cl/wp-content/uploads/2022/11/Apple_MacBook_Air_13_M2_MLY43CIA_3.png",
      "iPad Pro": "https://www.sagitariodigital.com.ar/wp-content/uploads/2022/11/IPAD-PRO-M2-8.jpg",
      "Apple Watch Series 6": "https://d3ddx6b2p2pevg.cloudfront.net/Custom/Content/Products/10/80/1080469_smartwatch-apple-watch-series-6-40mm-gps-caixa-prateada-e-pulseira-branca-esportiva-mydm2be-a_m3_637457015399009208.jpg",
      "AirPods Pro": "https://maximstore.com/wp-content/uploads/2023/05/AIRPODS-PRO-2-1.jpeg",
      "HomePod mini": "https://acdn.mitiendanube.com/stores/002/092/809/products/homepoddd-071-98044bdea46ba3b7c916626491351449-240-0.jpg",
    };
  
    // Función para comprobar si la imagen está rota o no existe
    const isImageBroken = (url: string) => {
      const img = new Image();
      img.src = url;
      return !img.complete || img.naturalWidth === 0;
    };
  
    // Ruta de la imagen de reemplazo para el producto actual
    const brokenImageSrc = imagesRep[product.name];
  
    return (
      <StyledProductItem className="product-item">
        <StyledPCover className="p-portada">
          {/* Lógica condicional para mostrar la imagen del producto o la imagen de reemplazo */}
          {isImageBroken(product.image) ? (
            <StyledImgProduct src={brokenImageSrc} alt="" />
          ) : (
            <StyledImgProduct src={product.image} alt="" />
          )}
        </StyledPCover>
  
        <StyledPInfo className="p-info">
          <StyledTitleProduct>{product.name}</StyledTitleProduct>
          <StyledPrice className="precio">
            <StyledPriceContent>USD/~ ${product.price}</StyledPriceContent>
          </StyledPrice>
          <div className="button-stockCont">
            <span>stock: {product.stock}</span>
            <StyledBtnCard className="hm-btn btn-primary uppercase">
              Buy
            </StyledBtnCard>
          </div>
        </StyledPInfo>
      </StyledProductItem>
    );
  };
  

export default Card;