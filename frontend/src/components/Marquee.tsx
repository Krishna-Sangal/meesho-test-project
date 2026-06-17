import { MarqueData } from "../Data/MarqueData"

const Marquee = () => {


 const LoopData=[...MarqueData,...MarqueData]   
  return (
    <>
    <div className="h-40 w-full overflow-hidden bg-purple-200 px-4 ">
        <div className="marquee-container">
     <div className="marquee">
     {LoopData.map((item,index)=>{
        return <div key={`${item.id}-${index}`} className="h-24 w-40 bg-white flex-shrink-0 rounded-xl gap-6 flex items-center justify-center mt-8 ">
            <img className="h-full w-full rounded-xl " src={item.image}/>
                   
                    </div>
     })}
           </div>     
                </div>
    </div>
      
    </>
  )
}

export default Marquee
