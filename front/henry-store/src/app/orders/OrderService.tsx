// http://localhost:3001/users/orders
import { IProduct } from "@/components/Card/types";
import { headers } from "next/headers";

type Order = {
    id: 1,
    status: string,
    date: Date,
    products: IProduct[]
}

export const getOrders = async (): Promise<Order[]> => {
  try {
    const response = await fetch("http://localhost:3001/users/orders", {
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMjc5OTM5Mn0.5huMdo4KaXsqturcNkKHz1zcG45hwh-mpwce8tnFhPs',
      },  
    });
    
    const data = await response.json();
    return data;
  } 
  
  catch (error) {
    console.error("Error fetching orders:", error);
    throw error; 
  }
};