import { GoldSectionData } from "../Data/GoldSectionData"


const GoldSection = () => {
    return (
        <>
            <div className="w-full min-h-80 md:h-110 flex flex-col md:flex-row justify-center items-center mt-10 md:mt-30 relative overflow-hidden bg-pink-50">
                <img src="2.webp" className="absolute inset-0 h-full w-full object-cover" />
                
                
                    <div className="relative md:absolute grid grid-cols-2 gap-4 sm:gap-8 md:right-12 lg:right-30 p-4">
                        {GoldSectionData.map((item: any) => {
                        return <div key={item.id} className="h-28 w-28 sm:h-36 sm:w-34 bg-pink-200 rounded-t-full rounded-b-xl overflow-hidden border-2 border-[#d4a34f] hover:-translate-y-1 transition-transform">
                            <img className=" w-full h-full object-cover " src={item.image} />
                        </div>
                    })}</div>

                
            </div>
        </>
    )
}

export default GoldSection
