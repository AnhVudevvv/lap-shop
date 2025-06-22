import React from "react";
import Brand from "../../components/navbar/brand";
import HotProduct from "../../components/hot-products";
import HomeBanner from "../../components/home-banner";
import HomePromotion from "../../components/home-promotion";
import HomeTypeProducts from "../../components/home-type-products";
const Home = () => {
   return (
      <div  >
         <HomeBanner />
         <Brand />
         <HotProduct />
         <HomePromotion/>
         <HomeTypeProducts/>
      </div>
   )
}
export default Home;