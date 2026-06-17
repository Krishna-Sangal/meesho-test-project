
import Navbar from "../components/Navbar"
import { IoReturnDownBackOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoPricetagsSharp } from "react-icons/io5";
import Brand from "../components/Brand";
import GoldSection from "../components/GoldSection";
import OriginalBrand from "../components/OriginalBrand";
import { useState, useEffect } from "react";
import Marquee from "../components/Marquee";
import Sale from "../components/Sale";
import Products from "../components/Products";
import Footer from "../components/Footer";

const HomePage = () => {

const banners = [
  "/1.webp",
  "/2.webp",
  "/3.webp",
];

const [currentBanner, setCurrentBanner] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);


  return (
    <div className="w-full overflow-x-hidden">
      <Navbar/>
     
      <div className="h-64 md:h-80 w-full flex flex-row justify-center relative">
      <div className="h-full w-full relative z-0 overflow-hidden">
  {banners.map((banner, index) => (
    <img
      key={index}
      src={banner}
      className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000 ${
        currentBanner === index ? "opacity-100" : "opacity-0"
      }`}
    />
  ))}
</div>

        <div className="absolute inset-y-0 right-4 md:right-24 lg:right-40 flex w-48 sm:w-64 flex-col items-center justify-center">
          <p className="w-full text-white text-xl sm:text-2xl md:text-3xl text-center whitespace-nowrap">Smart Shooping</p>
          <p className="w-full text-white text-xl sm:text-2xl md:text-3xl text-center whitespace-nowrap">Trusted By Millions</p>
          <button className="mt-4 h-14 w-36 sm:w-44 md:w-50 bg-white rounded-xl font-semibold text-[#580A46] cursor-pointer text-xl md:text-2xl">Shop Now</button>
        </div>



      </div>

       
       <div className="w-full flex justify-center items-center bg-pink-300 px-2 py-2">
        <div className="w-full max-w-7xl flex flex-wrap gap-2 flex-row justify-center items-center bg-pink-200 border-2 border-pink-200">
                <div className="h-10 w-40 flex justify-center items-center text-sm text-black gap-2"> <IoReturnDownBackOutline /> 7 Days Easy Return</div>
                 <div className="h-10 w-40 flex justify-center items-center text-sm text-black gap-2"> <CiDeliveryTruck /> Cash On Delivery</div>
                 <div className="h-10 w-40 flex justify-center items-center text-sm text-black gap-2"> <IoPricetagsSharp /> Lowest Price</div>
        </div>
       </div>

              {/* <div className="h-60 w-full bg-pink-100 flex flex-row justify-center items-center ">   
                   <div className="h-40 w-300 bg-pink-100 flex flex-row justify-center items-center gap-6">
                         <div className="h-30 w-30  bg-pink-200 rounded-t-full overflow-hidden ">

                         </div>
                   </div>
              </div> */}

<Brand/>
<GoldSection/>
<OriginalBrand/>
      <Marquee/>
      <Sale/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default HomePage
