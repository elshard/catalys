import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import TagList from "./TagList";
import { FaShoppingCart } from "react-icons/fa";

import axios from "axios";

const ProductPage = ({
  allProducts,
  productData,
  setviewProducts,
  featureData,
  setCart,
  cart,
}) => {
  const [color, setColor] = useState([]);
  const [material, setMaterial] = useState([]);

  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material",
        headers: { Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo" },
      })
      .then((response) => {
        setMaterial(response.data.material);
      })
      .catch(function (error) {
        console.error(error);
      });

    axios
      .request({
        method: "GET",
        url: "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors",
        headers: { Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo" },
      })
      .then((response) => {
        setColor(response.data.colors);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const filterProducts = (type, filterParamId) => {
    let newProductList;

    if (type === "All") {
      if (filterParamId <= 5) {
        newProductList = allProducts?.filter((singleProduct) => {
          return filterParamId === singleProduct.colorId;
        });
      } else {
        newProductList = allProducts?.filter((singleProduct) => {
          return filterParamId - 5 === singleProduct.materialId;
        });
      }
    } else if (type === "Color") {
      newProductList = allProducts?.filter((singleProduct) => {
        return filterParamId === singleProduct.colorId;
      });
    } else {
      newProductList = allProducts?.filter((singleProduct) => {
        return filterParamId === singleProduct.materialId;
      });
    }

    setviewProducts([...newProductList]);
  };

  return (
    <>
      <nav className="h-16 bg-gray-100 flex justify-between items-center px-12">
        <div className="space-x-4">
          <button
            className="text-sm font-light hover:font-semibold ease-in-out transition-all duration-300"
            onClick={() => {
              setviewProducts([...allProducts]);
            }}
          >
            ALL Products
          </button>
          <button
            className="text-sm font-light hover:font-semibold ease-in-out transition-all duration-300"
            onClick={() => {
              featureData();
            }}
          >
            Featured Product
          </button>
        </div>
        <button className="text-2xl relative p-4">
          <FaShoppingCart />
          {cart.length > 0 ? (
            <div className="absolute rounded-full h-5 w-5 right-0 top-0 text-[15px] text-white bg-[red] flex justify-center items-center">
              {cart.length}
            </div>
          ) : (
            <></>
          )}
        </button>
      </nav>

      <div className="flex flex-row bg-blue">
        <div className="w-1/6 flex h-full flex-col justify-center px-8 pl-12 py-16">
          <h2 className="mb-4 font-extralight">Tags</h2>
          <TagList
            listName="All"
            tags={[...color, ...material]}
            filterProducts={filterProducts}
          />
          <TagList
            listName="Color"
            tags={color}
            filterProducts={filterProducts}
          />
          <TagList
            listName="Materials"
            tags={material}
            filterProducts={filterProducts}
          />
        </div>
        <ProductList
          cart={cart}
          setCart={setCart}
          productData={productData}
          color={color}
          material={material}
        />
      </div>
    </>
  );
};

export default ProductPage;
