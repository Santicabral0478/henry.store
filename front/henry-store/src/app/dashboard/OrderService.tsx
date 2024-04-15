// http://localhost:3001/users/orders
import { IProduct } from "@/components/Card/types";

type Order = {
    id: 1,
    status: string,
    date: Date,
    products: IProduct[]
}

export const getOrders = async (token: string): Promise<Order[]> => {

  if (!token) {
    throw new Error('API URL or authorization token is not defined');
  }

  try {
    const response = await fetch(`http://localhost:3001/users/orders`, {
      headers: {
        'Authorization': token,
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