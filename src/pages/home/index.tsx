import React from "react";
import Brand from "../../components/navbar/brand";
import HotProduct from "../../components/hot-products";
import HomeBanner from "../../components/home-banner";
const Home = () => {
   return (
      <div  >
         <HomeBanner />
         <Brand />
         <HotProduct />
      </div>
   )
}
export default Home;