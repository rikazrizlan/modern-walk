"use client";

import ProductList from "@/components/ProductList";

export default function MensClothing() {
  return (
    <div>
      <h2 className='font-bold mb-8'>Men's Clothing</h2>
      <ProductList category="men's clothing" />
    </div>
  );
}