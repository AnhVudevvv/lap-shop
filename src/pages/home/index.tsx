import React, { useEffect, useState } from "react";
// Make sure the file exists at the specified path, or update the path if necessary
import Brand from "../../components/brand";
import HotProducts from "../../components/hot-products";
import HomeBanner from "../../components/home-banner";
import HomePromotion from "../../components/home-promotion";
import HomeTypeProducts from "../../components/home-type-products";
import { IProduct } from "../../components/home-type-products/homeTypeProducts.interface";
import axios from "axios";
import { useUserInfo } from "../../store/useUserInfor";


const Home = () => {
  const [productData, setProductData] = useState<IProduct[]>([]);
  const [productHotData, setProductHotData] = useState<IProduct[]>(productData.filter((p: any) => p.isHot).slice(0, 4));

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
  const { userInfo } = useUserInfo();


  const getProductsIncart = () => {
    const url = `https://lapshop-be.onrender.com/api/cart/${userInfo?.id}`;

    axios.get(url)
      .then(function (response) {
        console.log("Thanh cong", response.data);
        const totalProducts = response.data?.data?.item?.length;
        console.log("totalProducts", totalProducts);
        // setCartQuantity(totalProducts);
      })
      .catch(function (error) {
        console.log("That bai");
      });
  }
  useEffect(() => {
    if (userInfo) {
      getProductsIncart();
    }
  }, [userInfo]);



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