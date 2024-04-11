import React, { useState } from "react";
import Link from "next/link";
import { IOrder } from "@/app/orders/types";

interface OrderProps{
    orders: IOrder[]
}


export const Order: React.FunctionComponent<OrderProps> = ({ orders }) => {


    const getTotalPrice = (orders: IOrder[]) => {
        return orders.reduce((total, order) => {
            return total + order.products.reduce((subtotal, product) => {
                return subtotal + product.price;
            }, 0);
        }, 0);
    };

    const getTotalProducts = (orders: IOrder[]) => {
        return orders.reduce((total, order) => {
            return total + order.products.length
        }, 0);
    };
    
    const totalPrice = getTotalPrice(orders);
    const totalProducts = getTotalProducts(orders);
    

    return (
      <div className="">
        <div className="gral-cont-titlecant-product-cards">
            <div className="total-cart-items">
                <h2>Shopping cart: <span>Products: {totalProducts}</span></h2>
            </div>
            <div className="total-cart-products">
                {
                    orders.map((order)=>{
                        return(
                            order.products.map((product)=>{
                     
                                return(
                                    <div className="product-card-cart-info">
                                        <div className="image-product-card-cont">
                                            <img src={product.image} alt="" />
                                        </div>

                                        <div className="info-product-card-cont">
                                            <h3>{product.name}</h3>
                                            <p>{product.price}</p>
                                            {/* ADD MORE info */}
                                        </div>
                                    </div>
                                )
                            })
                        )
                    })
                }
            </div>
        </div>
        <div className="gral-cont-pay">
            <div className="total-price-and-pay">
                <h3>Total: {totalPrice}</h3>
                <div className="pay-card-methods">
                    <p>**PAY METHODS**</p>
                    <p style={{display: "inline"}}>card </p>
                    <p style={{display: "inline"}}>card </p>
                    <p style={{display: "inline"}}>card </p>
                    <p style={{display: "inline"}}>card </p>
                    <p style={{display: "inline"}}>card </p>
                </div>
                <div className="protected-purchase-text">
                    <h4>Protected purchase *icon*</h4>
                    <p>Lorem ipsum dolor sit 
                       amet consectetur, adipisicing 
                       elit. Dolorem, quasi nobis ad 
                       tempora eos ab consequuntur in 
                       soluta, praesentium 
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  };
  

export default Order;