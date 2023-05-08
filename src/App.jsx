import { useState, useEffect } from "react";
import ProductPage from "./Components/ProductPage";
import axios from "axios";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [viewProducts, setviewProducts] = useState([]);
  const [productIdArray, setproductIdArray] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    try {
      const options = {
        method: "GET",
        url: "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products",
        headers: { Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo" },
      };
      axios
        .request(options)
        .then(function (response) {
          setAllProducts(response.data.products);
          setviewProducts(response.data.products);
        })
        .catch(function (error) {
          console.error(error);
        });
      const SecondOptions = {
        method: "GET",
        url: "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured",
        headers: { Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo" },
      };
      axios
        .request(SecondOptions)
        .then(function (response) {
          let productIdArrayData = response.data.featured.map((item) => {
            return item.productId;
          });
          setproductIdArray([...productIdArrayData]);
          setFeaturedProducts(response.data.featured);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const featureData = () => {
    const featuredData = allProducts.filter((item) => {
      return productIdArray.includes(item.id);
    });
    setviewProducts([...featuredData]);
  };

  return (
    <div className="h-screen overflow-hidden">
      <title className="flex justify-center items-center h-20">
        MYCOOLSHOP.COM
      </title>
      <ProductPage
        allProducts={allProducts}
        productData={viewProducts}
        featureData={featureData}
        setviewProducts={setviewProducts}
        setCart={setCart}
        cart={cart}
      />
    </div>
  );
}

export default App;
