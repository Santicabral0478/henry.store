import { IProduct } from "@/components/Card/types";

export interface IOrder{
    id: 1;
    status: string;
    date: Date;
    products: IProduct[];
}