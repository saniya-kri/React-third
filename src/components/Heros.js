import React from "react";
import logoImg from "../images/download.png";
import shape1 from "../images/shape-1.png";

function Heros() {
  return (
    <div className="flex lg:justify-between w-full justify-around h-full">
      <div>
        <img className="w-[160px] lg:ml-40 mt-10 ml-10" src={logoImg} alt="logo" />
      </div>
      <div className="relative lg:-right-32 lg:-top-56 -right-24 -top-32">
        <img className="lg:w-[450px] w-[300px]" src={shape1} />
      </div>
    </div>
  );
}

export default Heros;
