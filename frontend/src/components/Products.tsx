import { RelevanceData } from "../Data/RelevanceData"
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { RelevanceCategory } from "../Data/RelevanceCategory";
import { GenderData } from "../Data/RelevanceCategory";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import { ColorData } from "../Data/RelevanceCategory";
import { FabricData } from "../Data/RelevanceCategory";
import { sizeData } from "../Data/RelevanceCategory";
import { priceData } from "../Data/RelevanceCategory";
import { ratingData } from "../Data/RelevanceCategory";
import { occassionData } from "../Data/RelevanceCategory";
import { comboData } from "../Data/RelevanceCategory";
import { discountData } from "../Data/RelevanceCategory";
import { meeshoGold } from "../Data/RelevanceCategory";
import { meeshoMall } from "../Data/RelevanceCategory";
import { fitShape } from "../Data/RelevanceCategory";
import { Material } from "../Data/RelevanceCategory";
import { BottomLength } from "../Data/RelevanceCategory";
import { printOrPatternType } from "../Data/RelevanceCategory";
import { Ornamentation } from "../Data/RelevanceCategory";
import { BottomPatternType } from "../Data/RelevanceCategory";
import { SurfaceStyling } from "../Data/RelevanceCategory";
import { BackType } from "../Data/RelevanceCategory";
import { KType } from "../Data/RelevanceCategory";
import { CompatibleModels } from "../Data/RelevanceCategory";
import { WarrantyPeriod } from "../Data/RelevanceCategory";
import { WaistRise } from "../Data/RelevanceCategory";
import { BottomType } from "../Data/RelevanceCategory";
import { DialDesign } from "../Data/RelevanceCategory";
import { Concern } from "../Data/RelevanceCategory";
import { Type } from "../Data/RelevanceCategory";
import { useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";











const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Relevance");
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [showMoreColor, setShowMoreColor] = useState(false);
  const [isFabricOpen, setIsFabricOpen] = useState(true);
  const [showMoreFabric, setShowMoreFabric] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [showMoreSize, setShowMoreSize] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [showMorePrice, setShowMorePrice] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(true);
  const [isOccasionOpen, setIsOccasionOpen] = useState(true);
  const [isComboOpen, setIsComboOpen] = useState(true);
  const [isDiscountOpen, setIsDiscountOpen] = useState(true);
  const [isMeeshoGoldOpen, setIsMeeshoGoldOpen] = useState(true);
  const [isMeeshoMallOpen, setIsMeeshoMallOpen] = useState(true);
  const [isFitShapeOpen, setIsFitShapeOpen] = useState(true);
  const [isMaterialOpen, setIsMaterialOpen] = useState(true);
  const [isBottomLengthOpen, setIsBottomLengthOpen] = useState(true);
  const [isPrintPatternOpen, setIsPrintPatternOpen] = useState(true);
  const [isOrnamentationOpen, setIsOrnamentationOpen] = useState(true);
  const [isBottomPatternOpen, setIsBottomPatternOpen] = useState(true);
  const [isSurfaceStylingOpen, setIsSurfaceStylingOpen] = useState(true);
  const [isBackTypeOpen, setIsBackTypeOpen] = useState(true);
  const [isLoomTypeOpen, setIsLoomTypeOpen] = useState(true);
  const [isCompatibleModelsOpen, setIsCompatibleModelsOpen] = useState(true);
  const [isWarrantyOpen, setIsWarrantyOpen] = useState(true);
  const [isWaistRiseOpen, setIsWaistRiseOpen] = useState(true);
  const [isBottomTypeOpen, setIsBottomTypeOpen] = useState(true);
  const [isDialDesignOpen, setIsDialDesignOpen] = useState(true);
  const [isConcernOpen, setIsConcernOpen] = useState(true);
  const [isTypeOpen, setIsTypeOpen] = useState(true);
  const [showMoreType, setShowMoreType] = useState(false);



  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setData((data.products))
        console.log("Data", data);
      })

  }, [])

  const getReviewText = (item: any) => {
    if (item.review) {
      return item.review;
    }

    const reviewCount = ((item.id * 137) % 9000) + 100;
    return `${reviewCount} Reviews`;
  };







  return (
    <>
      <div className="w-full bg-white flex flex-col justify-center items-center px-3 py-8">
        <div className="w-full max-w-7xl bg-white flex flex-row justify-between text-xl text-amber-300">
          <h1 className="bg-white text-2xl sm:text-3xl text-black font-semibold mb-6">Products For You </h1>


        </div>
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-4 justify-center items-start bg-white">
          <div className="w-full lg:w-80 bg-white flex flex-col shrink-0">
            <div className="h-8 w-full bg-white relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="h-8 border border-gray-300 rounded-md flex items-center justify-between px-6 cursor-pointer bg-white"
              >
                <p>
                  <span className="text-gray-500 text-sm">Sort by :</span>{" "}
                  <span className="font-semibold text-black text-sm">{selected}</span>
                </p>

                <IoChevronDown
                  className={`text-xl transition-transform ${isOpen ? "rotate-180" : ""
                    }`}
                />
              </div>
              {/* Dropdown */}
              {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white overflow-y-auto  scrollbar-thin max-h-60 border border-gray-300 rounded-md shadow-lg z-10 flex flex-col justify-start items-start">
                  {RelevanceData.map((item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setSelected(item);
                        setIsOpen(false);
                      }}
                      className="px-6 py-3 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>

              )}
            </div>



            <div className="w-full bg-white border border-gray-200 rounded-md mt-3 flex flex-col justify-start items-start p-4 sm:p-6 max-h-128 lg:max-h-none overflow-y-auto lg:overflow-visible">
              <h2 className="text-sm font-semibold text-black">
                FILTERS
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                1000+ Products
              </p>
              <hr className="w-full border-gray-300" />
              <div className="border-b border-gray-300 mt-4"></div>

              <div className="mt-6">
                <div className="flex justify-between items-center w-70">
                  <h2 className="text-md font-semibold text-black">
                    Category
                  </h2>

                  <button onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                    <IoChevronDown
                      className={`text-sm transition-transform ${isCategoryOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>


              </div>
              {isCategoryOpen && (
                <>
                  {/* Search Box */}
                  <div className="relative mt-4 ">
                    <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />

                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full border border-gray-300 rounded-md py-3 pl-12 pr-4"
                    />
                  </div>


                  {/* Category List */}
                  <div className="mt-4 flex flex-col text-black">
                    {RelevanceCategory
                      .slice(0, showMore ? RelevanceCategory.length : 10)
                      .map((item) => (
                        <label
                          key={item.id}
                          className="flex items-center gap-3 py-2 cursor-pointer"
                        >
                          <input
                            type={item.type}
                            className="h-4 w-4"
                          />

                          <span className=" text-sm text-black">
                            {item.name}
                          </span>
                        </label>
                      ))}

                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="text-pink-600 font-semibold text-left mt-2 text-sm px-5"
                    >
                      {showMore ? "Show Less" : "Show More"}
                    </button>

                    <hr className="w-full border-gray-300 mt-3" />

                  </div>
                </>
              )}



              <div className="border-b pb-4 ">
                <div className="flex items-center justify-between mb-4 w-70 mt-4">
                  <h3 className="font-semibold text-md text-black ">Gender</h3>
                  <button onClick={() => setIsGenderOpen(!isGenderOpen)}>
                    <IoChevronUp
                      className={`text-sm transition-transform ${isGenderOpen ? "" : "rotate-180"
                        }`}
                    />
                  </button>
                </div>


                {isGenderOpen && (
                  <div className="flex flex-wrap gap-3">
                    {GenderData.map((item) => (
                      <button
                        key={item.id}
                        className="px-3 py-1 text-black border border-gray-300 rounded-full hover:bg-gray-100 text-sm"
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b pb-4">
                <div className="flex items-center justify-between mb-4 w-70 mt-4 ">
                  <h3 className="font-semibold text-md text-black">Color</h3>

                  <button onClick={() => setIsColorOpen(!isColorOpen)}>
                    <IoChevronUp
                      className={`text-sm transition-transform ${isColorOpen ? "" : "rotate-180"
                        }`}
                    />
                  </button>
                </div>

                {isColorOpen && (
                  <>
                    <div className="flex flex-wrap gap-3">
                      {ColorData
                        .slice(0, showMoreColor ? ColorData.length : 12)
                        .map((item) => (
                          <button
                            key={item.id}
                            className="px-1 py-0 w-17 h-8 text-black border border-gray-300 rounded-full hover:bg-gray-100 text-sm"
                          >
                            {item.title}
                          </button>
                        ))}
                    </div>

                    <button
                      onClick={() => setShowMoreColor(!showMoreColor)}
                      className="mt-4 text-pink-600 font-semibold"
                    >
                      {showMoreColor ? "Show Less" : "Show More"}
                    </button>
                  </>
                )}
              </div>

              <div className="border-b pb-4 mt-4">
                {/* Header */}
                <div className="w-70 flex justify-between items-center mb-4 mt-4">
                  <h3 className="font-semibold text-md text-black">Fabric</h3>

                  <button onClick={() => setIsFabricOpen(!isFabricOpen)}>
                    <IoChevronDown
                      className={`text-sm transition-transform ${isFabricOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Content */}
                {isFabricOpen && (
                  <>
                    <div className="flex flex-col gap-3">
                      {FabricData
                        .slice(0, showMoreFabric ? FabricData.length : 12)
                        .map((item) => (
                          <label
                            key={item.id}
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <input
                              type={item.type}
                              className="h-4 w-4"
                            />

                            <span className="text-black text-sm ">
                              {item.title}
                            </span>
                          </label>
                        ))}
                    </div>

                    {/* Show More Button */}
                    <button
                      onClick={() => setShowMoreFabric(!showMoreFabric)}
                      className="text-pink-600 font-semibold mt-4"
                    >
                      {showMoreFabric ? "Show Less" : "Show More"}
                    </button>
                  </>
                )}
              </div>


              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">Size</h3>

                  <button onClick={() => setIsSizeOpen(!isSizeOpen)}>
                    <IoChevronDown
                      className={`text-sm transition-transform ${isSizeOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open/Close Section */}
                {isSizeOpen && (
                  <>
                    {/* Search Box */}
                    <div className="relative mt-4">
                      <IoSearchOutline
                        className="absolute left-4 top-1/2 -translate-y-1/2
                     text-gray-400 text-2xl"
                      />

                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full border border-gray-300 rounded-md
                     py-3 pl-12 pr-4"
                      />
                    </div>

                    {/* Size List */}
                    <div className="mt-4 flex flex-col">
                      {sizeData
                        .slice(0, showMoreSize ? sizeData.length : 10)
                        .map((item) => (
                          <label
                            key={item.id}
                            className="flex items-center gap-3 py-2 cursor-pointer"
                          >
                            <input
                              type={item.type}
                              className="h-4 w-4"
                            />

                            <span className="text-black text-sm ">
                              {item.size}
                            </span>
                          </label>
                        ))}

                      {/* Show More */}
                      <button
                        onClick={() => setShowMoreSize(!showMoreSize)}
                        className="text-pink-600 font-semibold text-left mt-2"
                      >
                        {showMoreSize ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  </>
                )}
              </div>





              {/* Price Section */}
              <div className="border-b pb-4 mt-4">
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">Price</h3>

                  <button onClick={() => setIsPriceOpen(!isPriceOpen)}>
                    <IoChevronDown
                      className={`text-sm transition-transform ${isPriceOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {isPriceOpen && (
                  <>
                    <div className="flex flex-wrap gap-3">
                      {priceData
                        .slice(0, showMorePrice ? priceData.length : 8)
                        .map((item) => (
                          <button
                            key={item.id}
                            className="px-3 py-1 text-black border border-gray-300 rounded-full hover:bg-gray-100 text-sm"
                          >
                            {item.label}
                          </button>
                        ))}
                    </div>

                    <button
                      onClick={() => setShowMorePrice(!showMorePrice)}
                      className="mt-4 text-pink-600 font-semibold"
                    >
                      {showMorePrice ? "Show Less" : "Show More"}
                    </button>
                  </>
                )}
              </div>



              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">Rating</h3>

                  <button onClick={() => setIsRatingOpen(!isRatingOpen)}>
                    <IoChevronDown
                      className={`transition-transform ${isRatingOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isRatingOpen && (
                  <div className="flex flex-col gap-4 ">
                    {ratingData.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>







              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Occasion
                  </h3>

                  <button
                    onClick={() => setIsOccasionOpen(!isOccasionOpen)}
                  >
                    <IoChevronDown
                      className={`transition-transform ${isOccasionOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isOccasionOpen && (
                  <div className="flex flex-col gap-4">
                    {occassionData.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.title}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>




              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">Combo</h3>

                  <button onClick={() => setIsComboOpen(!isComboOpen)}>
                    <IoChevronDown
                      className={`transition-transform ${isComboOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isComboOpen && (
                  <div className="flex flex-col gap-4">
                    {comboData.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>

              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">Discount</h3>

                  <button onClick={() => setIsDiscountOpen(!isDiscountOpen)}>
                    <IoChevronDown
                      className={`transition-transform ${isDiscountOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isDiscountOpen && (
                  <div className="flex flex-wrap gap-3">
                    {discountData.map((item) => (
                      <button
                        key={item.id}
                        className="px-3 py-0 text-black border border-gray-300 rounded-full hover:bg-gray-100 text-sm"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}

              </div>




              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Meesho Gold
                  </h3>

                  <button
                    onClick={() =>
                      setIsMeeshoGoldOpen(!isMeeshoGoldOpen)
                    }
                  >
                    <IoChevronDown
                      className={`transition-transform ${isMeeshoGoldOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isMeeshoGoldOpen && (
                  <div>
                    {meeshoGold.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>

              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Meesho Mall
                  </h3>

                  <button
                    onClick={() =>
                      setIsMeeshoMallOpen(!isMeeshoMallOpen)
                    }
                  >
                    <IoChevronDown
                      className={`transition-transform ${isMeeshoMallOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isMeeshoMallOpen && (
                  <div>
                    {meeshoMall.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>

              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Fit / Shape
                  </h3>

                  <button
                    onClick={() => setIsFitShapeOpen(!isFitShapeOpen)}
                  >
                    <IoChevronDown
                      className={`transition-transform ${isFitShapeOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isFitShapeOpen && (
                  <div className="flex flex-col gap-4">
                    {fitShape.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>



              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Material
                  </h3>

                  <button
                    onClick={() => setIsMaterialOpen(!isMaterialOpen)}
                  >
                    <IoChevronDown
                      className={`transition-transform ${isMaterialOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isMaterialOpen && (
                  <div className="flex flex-col gap-4">
                    {Material.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>

              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Bottom Length
                  </h3>

                  <button
                    onClick={() =>
                      setIsBottomLengthOpen(!isBottomLengthOpen)
                    }
                  >
                    <IoChevronDown
                      className={`transition-transform ${isBottomLengthOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isBottomLengthOpen && (
                  <div className="flex flex-wrap gap-3">
                    {BottomLength.map((item) => (
                      <button
                        key={item.id}
                        className="px-2 py-1 text-black border border-gray-300 rounded-full hover:bg-gray-100 text-sm"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}

              </div>


              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Print Or Pattern Type
                  </h3>

                  <button
                    onClick={() =>
                      setIsPrintPatternOpen(!isPrintPatternOpen)
                    }
                  >
                    <IoChevronDown
                      className={`transition-transform ${isPrintPatternOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isPrintPatternOpen && (
                  <div>
                    {printOrPatternType.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>


              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Ornamentation
                  </h3>

                  <button
                    onClick={() =>
                      setIsOrnamentationOpen(!isOrnamentationOpen)
                    }
                  >
                    <IoChevronDown
                      className={`transition-transform ${isOrnamentationOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isOrnamentationOpen && (
                  <div className="flex flex-col gap-4">
                    {Ornamentation.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>

              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Bottom Pattern Type
                  </h3>

                  <button
                    onClick={() =>
                      setIsBottomPatternOpen(!isBottomPatternOpen)
                    }
                  >
                    <IoChevronDown
                      className={`transition-transform ${isBottomPatternOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isBottomPatternOpen && (
                  <div>
                    {BottomPatternType.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>


              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Surface Styling
                  </h3>

                  <button
                    onClick={() =>
                      setIsSurfaceStylingOpen(!isSurfaceStylingOpen)
                    }
                  >
                    <IoChevronDown
                      className={`transition-transform ${isSurfaceStylingOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isSurfaceStylingOpen && (
                  <div className="flex flex-col gap-4">
                    {SurfaceStyling.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>


              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-md text-black">
                    Back Type
                  </h3>

                  <button
                    onClick={() => setIsBackTypeOpen(!isBackTypeOpen)}
                  >
                    <IoChevronDown
                      className={`transition-transform ${isBackTypeOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isBackTypeOpen && (
                  <div>
                    {BackType.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>


              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Loom Type
                  </h3>

                  <button
                    onClick={() => setIsLoomTypeOpen(!isLoomTypeOpen)}
                  >
                    <IoChevronDown
                      className={`transition-transform ${isLoomTypeOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isLoomTypeOpen && (
                  <div>
                    {KType.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>

              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Compatible Models
                  </h3>

                  <button
                    onClick={() =>
                      setIsCompatibleModelsOpen(!isCompatibleModelsOpen)
                    }
                  >
                    <IoChevronDown
                      className={`transition-transform ${isCompatibleModelsOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isCompatibleModelsOpen && (
                  <div>
                    {CompatibleModels.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>

              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Warranty Period
                  </h3>

                  <button
                    onClick={() => setIsWarrantyOpen(!isWarrantyOpen)}
                  >
                    <IoChevronDown
                      className={`transition-transform ${isWarrantyOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isWarrantyOpen && (
                  <div className="flex flex-wrap gap-3">
                    {WarrantyPeriod.map((item) => (
                      <button
                        key={item.id}
                        className="px-1 py-0 border border-gray-300 rounded-full hover:bg-gray-100 text-black text-sm"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}

              </div>

              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Waist Rise
                  </h3>

                  <button
                    onClick={() => setIsWaistRiseOpen(!isWaistRiseOpen)}
                  >
                    <IoChevronDown
                      className={`transition-transform ${isWaistRiseOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isWaistRiseOpen && (
                  <div className="flex flex-wrap gap-3">
                    {WaistRise.map((item) => (
                      <button
                        key={item.id}
                        className="px-2 text-sm text-black py-0 border border-gray-300 rounded-full hover:bg-gray-100"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}

              </div>

              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Bottom Type
                  </h3>

                  <button
                    onClick={() => setIsBottomTypeOpen(!isBottomTypeOpen)}
                  >
                    <IoChevronDown
                      className={`transition-transform ${isBottomTypeOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isBottomTypeOpen && (
                  <div className="flex flex-wrap gap-3">
                    {BottomType.map((item) => (
                      <button
                        key={item.id}
                        className="px-1 text-sm text-black py-0 border border-gray-300 rounded-full hover:bg-gray-100"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}

              </div>


              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Dial Design
                  </h3>

                  <button
                    onClick={() => setIsDialDesignOpen(!isDialDesignOpen)}
                  >
                    <IoChevronDown
                      className={`transition-transform ${isDialDesignOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isDialDesignOpen && (
                  <div className="flex flex-wrap gap-3">
                    {DialDesign.map((item) => (
                      <button
                        key={item.id}
                        className="px-1 py-0  border border-gray-300 rounded-full hover:bg-gray-100 text-sm text-black"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}

              </div>


              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Concern
                  </h3>

                  <button
                    onClick={() => setIsConcernOpen(!isConcernOpen)}
                  >
                    <IoChevronDown
                      className={`transition-transform ${isConcernOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isConcernOpen && (
                  <div className="flex flex-col gap-3">
                    {Concern.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type={item.type}
                          className="h-4 w-4"
                        />

                        <span className="text-black text-sm">
                          {item.name}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

              </div>



              <div className="border-b pb-4 mt-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-4 w-70">
                  <h3 className="font-semibold text-md text-black">
                    Type
                  </h3>

                  <button onClick={() => setIsTypeOpen(!isTypeOpen)}>
                    <IoChevronDown
                      className={`transition-transform ${isTypeOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>

                {/* Open / Close */}
                {isTypeOpen && (
                  <>
                    <div className="flex flex-col gap-3">

                      {Type
                        .slice(0, showMoreType ? Type.length : 12)
                        .map((item) => (
                          <label
                            key={item.id}
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <input
                              type={item.type}
                              className="h-4 w-4"
                            />

                            <span className="text-black text-sm">
                              {item.name}
                            </span>
                          </label>
                        ))}

                    </div>

                    <button
                      onClick={() => setShowMoreType(!showMoreType)}
                      className="text-pink-600 font-semibold mt-4 text-sm flex justify-between"
                    >
                      {showMoreType ? "Show Less" : "Show More"}
                    </button>
                  </>
                )}

              </div>




            </div>


          </div>







          <div className="w-full flex flex-row justify-center items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full bg-white">

              {
                data.map((item: any) => {
                  return <div key={item.id} className="min-h-90 w-full flex flex-col justify-start gap-3 items-start p-3 bg-white border-4 border-gray-100 rounded-lg">
                    <img className="h-48 sm:h-54 w-full flex justify-start object-contain" src={item.thumbnail} />
                    <h3 className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-left text-[15px] text-gray-500 capitalize font-semibold ">{item.title}</h3>
                    <div className="w-full flex justify-start items-center gap-1">
                      <FaRupeeSign className="text-xl text-slate-700" />
                      <span className="text-2xl font-bold text-slate-900">
                        {item.price}
                      </span>
                    </div>
                    <div className="mt-auto flex items-center gap-2">
                      <div className="  w-14 h-10 rounded-2xl bg-green-700 text-white flex items-center justify-center gap-1">
                        <span className="text-xs font-semibold">{item.rating}</span>
                        <FaStar className="text-xs" />
                      </div>
                      <span className="text-sm text-gray-500">
                        {getReviewText(item)}
                      </span>
                    </div>
                  </div>
                })
              }












            </div>



          </div>
        </div>
      </div>

    </>
  )
}

export default Products
