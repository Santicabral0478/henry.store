"use client";
import { Metadata } from 'next';
import React, { useEffect, useState } from 'react';
import { getOrders } from './OrderService'
import { IOrder } from './types';
import Order from '@/components/Order';
import { useAuth } from '@/context/authContext';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import NoLogued from '@/components/NoLogued';

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart of user...",
  robots: {
    index: false,
    follow: true,
  },
};

export const Orders = () => {
  const auth = useAuth(); // Obtener el contexto de autenticación
  const token = auth ? auth.token : null; // Manejar el caso donde auth puede ser null
  const [orders, setOrders] = useState<IOrder[]>([]); // Inicializa products con un array vacío de tipo IProduct
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchOrders = async () => {
      if (token) { // Verificar que token no sea null
        const data = await getOrders(token);
        setOrders(data);
      }
      setIsLoading(false); // Indicar que la carga ha finalizado
    };
    fetchOrders();
  }, [token]);

  console.log(orders);
  console.log(token);
  
  // Renderizado condicional
  return (
    <div className="">
      <NavBar/>
      {!isLoading && !token && <NoLogued/>}
      {isLoading ? <h1>Cargando...</h1> : (token && <Order orders={orders}/>)}
      <Footer/>
    </div>
  );
};

export default Orders;