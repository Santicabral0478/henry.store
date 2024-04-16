import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots{
    return{
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/dashboard']
            },
        ],
        sitemap: `${process.env.API_URL}/sitemap.xml`,
    }
}