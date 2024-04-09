import React from "react";
import { pricingOptions } from "../constants";
import { CircleCheck } from "lucide-react";

const Pricing = () => {
  return (
    <div className="m-8">
      <h1 className="text-center lg:text-6xl sm:text-4xl tracking-wide mb-10 text-3xl">
        Pricing
      </h1>
      <div className="flex flex-wrap">
        {pricingOptions.map((elem, index) => (
          <div key={index} className="lg:w-1/3 sm:w-1/2 w-full">
            <div className="border border-neutral-700 rounded-md p-3 m-3">
              <h3 className="text-2xl mb-3">
                {elem.title}
                {elem.title === "Pro" && (
                  <span className="bg-gradient-to-r text-sm bg-clip-text text-transparent from-orange-500 to-orange-800">
                    {" "}
                    (Most popular)
                  </span>
                )}
              </h3>
              <h1 className="text-3xl mb-5">
                {elem.price}
                <span className="text-neutral-500 text-sm">/Month</span>
              </h1>
              <ul>
                {elem.features.map((val, index) => (
                  <li key={index} className="flex items-center mt-8">
                    <CircleCheck />

                    <span className="text-sm mt-1 ml-2">{val}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 rounded-lg transition duration-200 border border-orange-900"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
