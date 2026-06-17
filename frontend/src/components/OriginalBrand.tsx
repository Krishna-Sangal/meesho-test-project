import {OriginalBrandData } from "../Data/OriginalBrandData"

const OriginalBrand = () => {
  return (
    <>
    <div className="w-full flex flex-col justify-center items-center bg-blue-50 py-8">
        <div className="w-full max-w-7xl flex flex-row justify-between items-center bg-blue-50 px-4">
  <h1 className="text-xl flex items-center text-black font-semibold bg-blue-50">Original Brands</h1>
<button className="text-base sm:text-xl flex items-center text-pink-900 bg-blue-50">VIEW ALL </button>
</div>

        <div className="h-70 w-full max-w-7xl flex flex-row items-center gap-4 whitespace-nowrap overflow-x-auto hide-scrollbar px-4 mt-4">
            {OriginalBrandData.map((item:any)=>{
                return <div key={item.id} className="h-64 sm:h-70 w-44 sm:w-50 flex-shrink-0 rounded-xl border-2 border-gray-300">
                   <img className="h-full w-full rounded-xl object-cover" src={item.image}/>
                   
                    </div>
            })}
        </div>
    </div>
      
    </>
  )
}

export default OriginalBrand
