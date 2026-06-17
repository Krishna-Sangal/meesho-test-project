import { NavLinkData } from "../Data/NavLinkData";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfileApi } from "../services/authApi";



const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [user, setUser] = useState<any>(null);
     
    useEffect(()=>{
      const fetchProfile =async()=>{
        try{
          const res = await getProfileApi();// axios call
         console.log("Profile API Response:", res);
         if(res?.user){
          setUser(res.user);
         }

         } catch(error){
          console.log("Profile fetch error :",error);
         }
         };
      fetchProfile();
    },[]);  



  useEffect(() => {
    const closeMenu = () => {
      setActiveMenu(null);
    };

    window.addEventListener("resize", closeMenu);
    window.addEventListener("orientationchange", closeMenu);
    window.addEventListener("scroll", closeMenu, { passive: true });

    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("orientationchange", closeMenu);
      window.removeEventListener("scroll", closeMenu);
    };
  }, []);

  return (
    <>



      <div className="w-full sticky top-0 z-[9999] bg-white shadow-sm">
        <div className="min-h-16 w-full flex flex-wrap gap-3 px-4 py-2 flex-row justify-between lg:justify-around items-center">
          <div className="h-12 w-24 bg-white text-3xl text-pink-950 font-bold flex items-center">meesho</div>
          <div className="order-3 lg:order-none h-12 w-full lg:w-120 bg-white flex justify-center items-center border rounded-xl">
            <CiSearch className="ml-3 text-gray-500 text-xl" />
            <input type="text" placeholder="  Try Sarre, Kurti or Search by Product Code " className="h-full w-full px-3 text-sm outline-none  " />
          </div>
          <div className="hidden md:flex h-14 w-34 bg-white items-center justify-center text-sm font-semibold border-r border-gray-400 ">Become a Supplier</div>
          <div className="hidden md:flex h-14 w-34 bg-white items-center justify-center text-sm font-semibold  border-r border-gray-400">Investors Relation</div>
          <div className="h-14 w-34 sm:w-40 bg-white flex flex-row items-center justify-end sm:justify-center text-sm gap-4">
           
           
           
           
           
           
            <div className="h-14 w-14 flex flex-col items-center justify-center bg-white ">
              {/* Profile */}
  <div className="relative group">

    <div className="h-14 w-14 flex flex-col items-center justify-center bg-white cursor-pointer">
      <CgProfile className="h-8 w-10" />
      Profile
    </div>

    {/* Dropdown */}
    <div
      className="


      absolute top-full left-1/2 -translate-x-1/2 mt-1
      w-58 bg-white border shadow-lg rounded-md
      opacity-0 invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all duration-200
      z-50"
    >
      <div className="p-2">
        <h2 className="text-xl font-medium text-black">
          Hello User {user?.mobile || ""}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          To access your Meesho account
        </p>

        <Link to="/signup"><button className="w-full bg-fuchsia-700 text-white py-2 rounded-md mt-3 font-semibold">
          Sign Up
        </button></Link>
      </div>

      <hr />

      <div className="p-2 text-black">
        <div className="py-1 cursor-pointer hover:text-[#9F2089]">
          My Orders
        </div>

        <hr className="my-2" />

        <div className="py-2 cursor-pointer hover:text-[#9F2089]">
          Delete Account
        </div>
      </div>
    </div>

  </div>

</div>




            <div className=" h-14 w-14 bg-white text-sm flex flex-col items-center justify-center"><CiShoppingCart className="h-8 w-10 items-center justify-center" />cart</div>
          </div>

        </div>






        <div className="h-12 w-full bg-white flex justify-start lg:justify-center items-center text-white relative overflow-visible px-2">

          <div className="h-12 w-full lg:w-300 text-sm text-black flex flex-row whitespace-nowrap overflow-x-auto overflow-y-visible hide-scrollbar relative">

            {NavLinkData.map((item: any) => {
              return <div key={item.id} className="relative shrink-0 h-12 flex items-center"
                onMouseEnter={() => setActiveMenu(item.id)}
                onMouseLeave={() => setActiveMenu(null)}>
                <p className="h-full px-4 shrink-0 whitespace-nowrap hover:text-[#9F2089] border-b-4 border-transparent hover:border-[#9F2089] bg-white text-sm text-black flex items-center">{item.title}</p>
{activeMenu === item.id  && (
  <div className="fixed top-36 sm:top-28 left-1/2 -translate-x-1/2 w-[calc(100vw-1rem)] lg:w-300 max-w-[calc(100vw-1rem)] min-h-72 overflow-x-auto bg-white shadow-lg border border-gray-200 rounded-md flex items-stretch gap-2 p-2 z-[10000]">

    {Object.entries(item.children || {}).map(([heading, values], index) => (
      <div
        key={heading}
        className={`p-5 w-72 shrink-0 text-left flex flex-col items-start rounded-sm ${
          index % 2 === 1 ? "bg-gray-50" : "bg-white"
        }`}
      >
        <h3 className="w-full text-left font-bold text-[#9F2089] mb-3">
          {heading}
        </h3>

        <div className="w-full space-y-2 text-left">
          {(values as string[]).map((value) => (
            <p key={value} className="w-full text-left text-sm font-semibold text-gray-700 leading-5">{value}</p>
          ))}
        </div>
      </div>
    ))}

  </div>
)}






              </div>
            })}



          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar




