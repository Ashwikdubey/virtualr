import React from "react";
import { features } from "../constants";

const Features = () => {
  return (
    <div className="mt-20  border-b border-neutral-800 relative">
      <div className="text-center">
        <span className="uppercase text-orange-500 bg-neutral-900 px-2 h-6 text-sm font-medium py-1 rounded-full">
          feature
        </span>
        <h2 className="uppercase tracking-wide text-3xl sm:text-4xl lg:text-6xl lg:mt-20 mt-10">
          easily build{" "}
          <span className="uppercase tracking-wide bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className="flex lg:mt-20 mt-10 flex-wrap">
        {features.map((elem, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="text-orange-800 w-10 h-10 mx-6 p-2 rounded-full bg-neutral-900 flex justify-center items-center">
                {elem.icon}
              </div>
              <div>
                <h5 className="mt-1 text-xl mb-6 ">{elem.text}</h5>
                <p className="text-neutral-500 mb-20 p-2 text-md">{elem.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
