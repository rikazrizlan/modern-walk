"use client";

import { useEffect, useState } from "react";
import FlashSale from "@/components/FlashSale";
import Categories from "@/components/Categories";
import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const { products, setProducts } = useAppContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <div className="mt-100 p-10">
        <FlashSale products={products} />
      </div>
      <div className="mt-100 p-10">
        <Categories />
      </div>
    </div>
  );
}
