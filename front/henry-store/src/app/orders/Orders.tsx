"use client";
// COMPLETAR LA RENDERIZACION DE LAS ORDENER CORRESPONDIENTE USANDO LA FUNCION ""./GETORDERS"
import React, { useEffect, useState } from 'react';
import { getOrders } from './OrderService'
import { IOrder } from './types';
import Order from '@/components/Order';


export const Orders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]); // Inicializa products con un array vacío de tipo IProduct

  useEffect(() => {
    const fetchOrders = async ()=> {
      const data = await getOrders();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  console.log(orders);

  return (
    <Order orders={orders}/>
  );
};

export default Orders;