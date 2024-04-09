import React from "react";
import code from "../assets/code.jpg";
import { CircleCheck } from "lucide-react";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 flex flex-col ">
      <h1 className="lg:text-6xl text-center sm:text-4xl text-3xl">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-600 to-orange-900 text-transparent bg-clip-text">
          coding workflow
        </span>
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="lg:w-1/2 w-full p-2">
          <img src={code} alt="" />
        </div>
        <div className="pt-12 lg:w-1/2 w-full">
          {checklistItems.map((elem, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-500 p-2 mx-2 h-10 w-10 flex justify-center items-center rounded-full border border-neutral-900 bg-neutral-900">
                <CircleCheck />
              </div>
              <div className="">
                <h5 className="text-xl mb-6 mt-1">{elem.title}</h5>
                <p className="text-neutral-500 text-md mb-10">
                  {elem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
