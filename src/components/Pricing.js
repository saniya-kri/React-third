import { pricingOptions } from "../data";
// import { useState } from "react";
// import { CiCircleCheck } from "react-icons/ci";

function Pricing() {
  // const [changeColor, setChangeColor] = useState(false)

  // //function for handlerClick
  // const  handlerClick =() =>{
  //   setChangeColor(!changeColor)
  // }

  return (
    <div className="bgImg w-full overflow-x-hidden">
      <div className="lg:w-8/12 w-10/12 mx-auto lg:mt-32 mt-12">
        <h2 className="text-[#5041bc] text-3xl font-medium">Plans & Pricing</h2>
        <div className="flex lg:flex-nowrap flex-wrap w-full justify-between">
          <div>
            <p className="text-[14px] font-medium mt-10">
              Whether your GROWTH needs are large or small, we’re here to help
              you scale.
            </p>
          </div>
          <div className="space-x-12 flex justify-around lg:items-center items-end">
            <div className="mt-5 lg:text-[12px] text-[14px] lg:pb-0 pb-2 text-[#5041bc] font-bold mx-10">
              <button>Monthly</button>
            </div>
            <div className="mt-5">
              {" "}
              <button className="mr-10 py-3 px-5 rounded-3xl bg-[#ff8057] text-white text-[12px] font-bold">
                Yearly
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 w-8/12 mx-auto mb-40 lg:px-10 lg:bg-white rounded-lg">
        <div className="flex flex-wrap justify-center">
          {pricingOptions.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 lg:hover:bg-[#5041bc] bg-white lg:m-0 m-4 hover:text-white rounded-lg">
              <div className="lg:p-10 p-4 h-[600px] relative rounded-xl">
                <p className="text-4xl mb-2">{option.title}</p>
                <p className="mb-8">
                  <span className="lg:text-5xl text-3xl mt-6 mr-2">{option.price}</span>
                  <span className="text-neutral-400 tracking-tight">
                    /Month
                  </span>
                </p>
                <p className="mb-2 text-[13px]">{option.para}</p>
                <p className="mb-3">
                  <span className="lg:text-2xl text-[15px] text-[#5041bc] mr-2">
                    {option.tag}
                  </span>
                </p>
                <ul>
                  {option.features.map((features, index) => (
                    <div key={index} className="mt-0 py-2 flex items-center">
                      <div className="flex flex-row">
                        <div className="mt-2 w-6 h-6 leading-6 text-2xl text-center bg-blue-100 text-orange-500 rounded-full mx-3">
                          {option.icon}
                        </div>
                        <div>
                          <span className="text-[13px]">{features}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
                <a
                  href="#"
                  className="justify-center absolute text-[13px] lg:bottom-[10%] bottom-[20px] left-[10%] items-center text-center py-2 px-4 inline-flex w-10/12 mx-auto lg:h-12 h-9 tracking-tight hover:bg-[#ff5217] font-semibold text-white border bg-[#5041bc] rounded-full transition-all duration-300"
                >
                  choose plan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
