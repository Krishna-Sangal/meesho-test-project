

const HeroSection = () => {
  return (
    <>
      <div className="h-180 w-full bg-white flex flex-row justify-center items-center ">
        <div className="h-140 w-260 bg-amber-500 grid grid-cols-2 space justify-between ">

         <div className="h-140 w-130 bg-purple-900 flex flex-col justify-center"> 
            <h1 className="text-5xl text-white font-bold underline decoration-2">Shop Smarter With Premium Products </h1>
            <p className="text-sm mt-2 text-white">Explore top-quality products at the best prices with fast delivery and secure shopping.</p>
            <div className="h-70 w-119 flex flex-row justify-around items-center  ml-10 mt-3"> 
              <div className="h-60 w-34 flex flex-col justify-center items-center">
                <img src="/f1.jpg" className="h-50 w-34 rounded-sm "/>
                <p className="text-sm mt-2 text-white font-bold"> Happy Customers</p>
              </div>
               
               <div className="h-60 w-34 flex flex-col justify-center items-center">
                <img src="/f4.jpg" className="h-50 w-34 rounded-sm "/>
                <p className="text-sm mt-2 text-white font-bold"> Huge Varities</p>
                </div>
              
              <div className="h-60 w-34 flex flex-col justify-center items-center">
                <img src="/f2.jpg" className="h-50 w-32 rounded-sm "/>
                <p className="text-sm mt-2 text-white font-bold">Best Quality</p>
                </div>

                     
            </div>
            <button className="h-10 w-20 text-white text-sm flex items-center justify-center ml-52 font-bold rounded-sm bg-amber-800 border-2">More</button>
             </div>



             <div className="h-140 w-130 bg-purple-900 flex flex-col justify-center items-center"> 
                 <div className="h-1 w-full flex flex-col justify-around items-center ">
            
                 </div>
                 
                 
                 <div className="h-90 w-110 bg-amber-900">
                    
                <img src="/f5.jpg" className="h-95 w-110 rounded-xl "/>
                <p className="text-sm mt-2 text-white font-bold">Everything You Need, All in One Place</p>
                
                 </div>








             </div>




        </div>

      </div>








    </>
  )
}

export default HeroSection
