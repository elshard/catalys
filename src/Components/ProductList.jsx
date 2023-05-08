import React, { Children } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ productData, color, material, setCart, cart }) => {
  return (
    <div className="w-5/6 bg-white h-screen py-16 px-8 flex flex-wrap justify-around overflow-scroll pb-40">
      {Children.toArray(
        productData?.map((product) => {
          return (
            <ProductCard
              setCart={setCart}
              cart={cart}
              product={product}
              color={color}
              material={material}
            />
          );
        })
      )}
    </div>
  );
};

export default ProductList;
