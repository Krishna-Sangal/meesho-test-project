import { BrandSectionData } from "../Data/BrandSectionData"


const Brand = () => {
  return (
     <div className="w-full bg-pink-100 flex flex-row justify-center items-center py-6">   
                   <div className="w-full max-w-7xl bg-pink-100 flex flex-row justify-start lg:justify-center items-center gap-4 sm:gap-6 overflow-x-auto hide-scrollbar px-4">
                    {BrandSectionData.map((item:any)=>{
                       return <div key={item.id} className="h-40 w-30 shrink-0 bg-pink-200 rounded-t-full overflow-hidden text-center">
                          <img className="h-34 w-30 object-cover"src={item.image}/>
                          <h5 className="h-6 w-full text-black text-xs sm:text-sm truncate px-1">{item.title}</h5>
                          
                         </div>
                    })}
                         
                   </div>
              </div>
  )
}

export default Brand
