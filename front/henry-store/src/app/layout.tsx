import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '../context/authContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henry Store",
  description: "description - description - description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
         {children}
        </AuthProvider>
      </body>
    </html>
  );
}

// 

// import React from 'react';
// import Head from 'next/head';
// import { AuthProvider } from './AuthContext';

// const RootLayout: React.FC<{ title: string; description: string; [key: string]: any }> = ({
//   title,
//   description,
//   children,
// }) => {
//   return (
//     <div>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//       </Head>
//       <AuthProvider>
//         {children}
//       </AuthProvider>
//     </div>
//   );
// };

// export default RootLayout;

