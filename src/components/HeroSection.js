import React from "react";
import systmeImg from "../images/asset 3.png";
import orangeBall from "../images/asset 1.png";

function HeroSection() {
  return (
    <div className="flex flex-col nextBall relative pb-96">
      <img
        className="bottomBall lg:w-[500px] w-[350px] -z-0"
        src={orangeBall}
      />
      <div className="lg:w-6/12 tracking-tighter w-full mx-auto py-6">
        <h1 className="text-neutral-200 text-3xl lg:text-[46px] font-semibold text-center lg:leading-[58px]">
          Game-Changing<br></br>
          B2B Commerce Platform
        </h1>
      </div>
      <div className="lg:w-9/12 w-full justify-center items-center text-center mx-auto">
        <p className="text-white text-center">
          Stop stressing yourself with doing everything manually. Focus on
          what’s important and leave the rest to us. Digitize your orders &
          payments, send automatic collection reminders, get actionable insights
          from just one platform.
        </p>
        <div className="w-full mt-2">
          <div className="flex w-8/12 justify-around lg:flex-row flex-col m-2 mx-auto p-0 mt-8">
            <div className="lg:w-9/12 lg:mb-0 mb-3">
              <input
                className="w-full p-3 border-none rounded-md text-[14px] text-neutral-700"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="rounded-md bg-[#ff8057]">
              <button className="px-3 hover:bg-[#ff5217] transition-all duration-300 ease-in-out py-2 items-center mt-1 font-bold text-[13px] text-white ">
                Request Demo
              </button>
            </div>
          </div>
          <div className="mt-1 w-9/12 mx-auto flex justify-center">
            <img src={systmeImg} alt="laptop image" />
          </div>
          <h2 className="mt-1 text-white font-bold lg:text-4xl text-3xl">
            See what's inside
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
