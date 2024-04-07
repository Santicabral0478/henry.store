import { IProduct } from "./types";

export const fetchData = async (): Promise<IProduct[]> => {
    try {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };
  