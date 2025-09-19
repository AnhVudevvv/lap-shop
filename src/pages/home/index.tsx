import React, { useEffect, useState } from "react";
// Make sure the file exists at the specified path, or update the path if necessary
import Brand from "../../components/brand";
import HotProducts from "../../components/hot-products";
import HomeBanner from "../../components/home-banner";
import HomePromotion from "../../components/home-promotion";
import HomeTypeProducts from "../../components/home-type-products";
import { IProduct } from "../../components/home-type-products/homeTypeProducts.interface";



const Home = () => {
  const [productData, setProductData] = useState<IProduct[]>([]);
  const [productHotData, setProductHotData] = useState<IProduct[]>(productData.filter((p: any) => p.isHot).slice(0,4));
  
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const url = `https://lapshop-be.onrender.com/api/product`;
    handleFilterProducts(url);
  };

  const handleFilterProducts = async (url: string) => {
    // setIsLoading(true);
    try {
      const response = await fetch(url, { method: "GET" });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log("KET QUA HOT PRODUCTS: ", result);
      setProductData(result.data);
    //   setPanigation({
    //     page: result.pagination.page,
    //     total: result.pagination.total,
    //   });
    //   setIsLoading(false);
    } catch (error: any) {
      console.error(error.message);
    //   setIsLoading(false);
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <HomeBanner />
      <Brand />
      <HotProducts />
      <HomePromotion />
      <HomeTypeProducts productData={productData} />
    </div>
  );
};

export default Home;