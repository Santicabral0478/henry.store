"use client";

import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ProductCards } from "@/components/ProductCards";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Banner/>
      <ProductCards />
      <Footer/>
    </div>
  );
}
