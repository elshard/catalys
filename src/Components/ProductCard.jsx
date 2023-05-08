import React from "react";

const ProductCard = ({ product, material, color, setCart, cart }) => {
  return (
    <div className="flex flex-col w-[300px]  h-[500px]  mb-12 hover:scale-105 ease-in-out transition-all duration-300 cursor-pointer">
      <div className="flex-1">
        <a className="relative">
          <div
            className=" absolute opacity-0 inset-0 text-white hover:bg-[#454545] hover:opacity-80 flex items-center justify-center ease-in-out transition-all duration-300 cursor-pointer"
            onClick={() => {
              setCart([...cart, product]);
              localStorage.setItem('cart', JSON.stringify(cart));
            }}
          >
            {" "}
            ADD TO CART{" "}
          </div>
          <img className="w-full object-cover " src={product.image} alt="" />
        </a>
      </div>
      <div className="px-3 py-4">
        <div className="text-xl font-bold">{product.name}</div>
        <div className="flex mb-2 text-sm">
          <span className="font-bold">{color[product.colorId - 1]?.name}</span>{" "}
          &nbsp; {material[product.materialId - 1]?.name}
        </div>
        <p className="text-sm">
          INR <span> {product.price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
