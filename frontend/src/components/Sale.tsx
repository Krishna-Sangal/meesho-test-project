import { SaleData } from "../Data/SaleData"

const Sale = () => {
  return (
    <>
      <div className="w-full min-h-90 flex flex-col lg:flex-row justify-center items-center bg-amber-700 relative overflow-hidden py-8 lg:py-0">
           
            <img className="absolute inset-0 h-full w-full object-cover" src="4.webp"/>
           <button className="relative lg:absolute h-12 sm:h-14 w-40 sm:w-48 text-lg sm:text-2xl text-pink-900 bg-white rounded-md lg:bottom-14 lg:left-24 z-10">Download Now</button>
           <div className="relative lg:absolute w-full lg:w-auto flex flex-row gap-5 sm:gap-9 items-center justify-start lg:left-1/3 lg:bottom-20 overflow-x-auto hide-scrollbar px-4 mt-6 lg:mt-0 z-10">
            {SaleData.map((item:any)=>{
                return <div key={item.id} className="h-56 sm:h-60 w-36 sm:w-40 shrink-0 hover:-translate-y-1 border-2 rounded-sm border-transparent hover:border-pink-900 transition-all duration-300" >
                 <img className="h-48 sm:h-60 w-full object-cover" src={item.image}/>
                 <p className="h-10 w-full text-base sm:text-xl text-pink-900 bg-white font-semibold rounded-xl mt-3 flex items-center justify-center">Trending Now</p>
                    </div>
            })}
            
              
            </div>

           
      </div>
    </>
  )
}

export default Sale
