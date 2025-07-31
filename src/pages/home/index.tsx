import React from "react";
// Make sure the file exists at the specified path, or update the path if necessary
import Brand from "../../components/brand";
import HotProducts from "../../components/hot-products";
import HomeBanner from "../../components/home-banner";
import HomePromotion from "../../components/home-promotion";
import HomeTypeProducts from "../../components/home-type-products";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <HomeBanner />
      <Brand />
      <HotProducts />
      <HomePromotion />
      <HomeTypeProducts />
    </div>
  );
};

export default Home;