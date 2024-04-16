import { IProduct } from "./types";

export const fetchData = async (): Promise<IProduct[]> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
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
