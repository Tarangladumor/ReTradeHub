"use client";

import { useState } from "react";
import Image from "next/image";
import registerIcon from "../../../../public/icons/registerIcon.png";
import technicianIcon from "../../../../public/icons/technicianIcon.png";
import dollarIcon from "../../../../public/icons/dollarIcon.png";
import bidIcon from "../../../../public/icons/bidIcon.png";

export default function WorkFlow() {
  const [user, setUser] = useState("seller");

  const steps = [
    {
      icon: registerIcon,
      step: "Step 1",
      description: "List your product on our platform.",
    },
    {
      icon: technicianIcon,
      step: "Step 2",
      description: "Wait for our technician to review your product physically.",
    },
    {
      icon: bidIcon,
      step: "Step 3",
      description: "Shopkeepers will bid for your listed product.",
    },
    {
      icon: dollarIcon,
      step: "Step 4",
      description:
        "The deal is completed, and you’ll receive payment through your preferred payment method.",
    },
  ];

  return (
    <div>
      <div className="flex-col space-y-8">
        {/* Header */}
        <div className="flex justify-center items-center">
          <div className="flex space-x-2 border-[1.5px] py-1.5 mt-8 px-3 w-fit rounded-full border-[#D9D9D9]">
            <div className="bg-[#18A0FB] rounded-full w-4 h-4"></div>
            <div className="text-[#010] text-sm font-medium">How it Works?</div>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center space-x-1 px-3 py-1 bg-[#f0f0f0] w-fit rounded-full border-[1px] border-[#8D8D8D]">
            <button
              onClick={() => setUser("seller")}
              className={`transition-all duration-300 ease-in-out px-4 py-1 rounded-full text-base ${user === "seller"
                  ? "bg-[#fff] shadow-[0px_4px_6px_0px_#1690E280] font-medium text-[#000]"
                  : "text-[#464646]"
                }`}
            >
              For Sellers
            </button>
            <button
              onClick={() => setUser("Buyer")}
              className={`transition-all duration-300 ease-in-out px-4 py-1 rounded-full text-base ${user === "Buyer"
                  ? "bg-[#fff] shadow-[0px_4px_6px_0px_#1690E280] font-medium text-[#000]"
                  : "text-[#464646]"
                }`}
            >
              For Buyers
            </button>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="flex justify-center">
          <div className="flex items-start justify-between w-[85%]">
            {steps.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-1/4 relative space-y-3"
              >
                {/* Icon */}
                <div className="bg-gradient-to-b from-black to-gray-800 p-4 rounded-full">
                  <Image
                    src={item.icon}
                    alt={item.step}
                    className="w-10 h-10"
                  />
                </div>
                {/* Step */}
                <h3 className="text-center text-base font-semibold">
                  {item.step}
                </h3>
                {/* Description */}
                <p className="text-center text-xs text-gray-600 h-14 flex items-center justify-center">
                  {item.description}
                </p>
                {/* Dashed Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-[15%] -right-[51%] w-[90%] h-0.5 border-t border-dashed border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
