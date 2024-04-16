import { fetchData } from "@/components/ProductCards/ProductCardsServer";
import { MetadataRoute } from "next";
import { IProduct } from "@/components/Card/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const products: IProduct[] = await fetchData();
    const apiUrl = `${process.env.API_URL}/`;

    const productRoutes = products.map((product)=>({
        url: `${apiUrl}/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return[
        ...productRoutes,
        {
            url: `${apiUrl}/products`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        }
    ]
}