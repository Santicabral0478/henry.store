import { IProduct } from "./types";
import { backurl } from "@/app/BACK_URL";

export const fetchData = async (): Promise<IProduct[]> => {
    try {
      const response = await fetch(`${backurl.apiurl}/products`, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        }
      });

      console.log(`CONSOLE.LOG DE LA URL:...    ${backurl.apiurl}/products`);
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
};
