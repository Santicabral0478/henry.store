import { IProduct } from "./types";

export const fetchData = async (): Promise<IProduct[]> => {
    try {
      const response = await fetch(`${process.env.BACKEND_API_URLL}/products`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
};
