import { Products } from "@/constans";
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="mx-6 px-5 py-9">
      <h1 className="text-3xl mt-8 mb-8 text-center">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {Products.map((product) => (
            <div key={product.id} className="transition-transform duration-300 ease-in-out hover:scale-105">
          <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
