"use client";

import { useState } from "react";
import Image from "next/image";
import registerIcon from "../../../../public/icons/register.gif";
import technicianIcon from "../../../../public/icons/technision.gif";
import dollarIcon from "../../../../public/icons/money.gif";
import bidIcon from "../../../../public/icons/bid.gif";

export default function WorkFlow() {
  const [user, setUser] = useState("seller");

  // Seller workflow steps
const sellerSteps = [
  {
    icon: registerIcon,
    step: "Step 1",
    description: "List your product in minutes and reach verified shopkeepers instantly.",
  },
  {
    icon: technicianIcon,
    step: "Step 2",
    description: "Our certified technician inspects your product for trust and quality.",
  },
  {
    icon: bidIcon,
    step: "Step 3",
    description: "Sit back as shopkeepers bid, ensuring you get the best deal.",
  },
  {
    icon: dollarIcon,
    step: "Step 4",
    description: "Close the deal and receive quick, secure payment to your account.",
  },
];


  // Buyer workflow steps
const buyerSteps = [
  {
    icon: registerIcon,
    step: "Step 1",
    description: "Browse our wide range of verified products with ease.",
  },
  {
    icon: technicianIcon,
    step: "Step 2",
    description: "Check detailed technician reports for full transparency.",
  },
  {
    icon: bidIcon,
    step: "Step 3",
    description: "Place your bid and compete fairly with other buyers.",
  },
  {
    icon: dollarIcon,
    step: "Step 4",
    description: "Secure your deal with a smooth, safe checkout process.",
  },
];


  // Select steps dynamically
  const steps = user === "seller" ? sellerSteps : buyerSteps;

  return (
    <div className="py-14 px-6 text-white rounded-b-[40px] ">
      {/* Header */}
      <div className="flex justify-center  items-center mb-10">
        <div className="flex space-x-3  shadow-[0px_4px_12px_0px_#1690E280] animate-pulse py-2 px-5 w-fit rounded-full  bg-white ">
        <div className="bg-[#18A0FB] rounded-full w-5 h-5 mt-[4px] animate-pulse shadow-[0_0_12px_#18A0FB]"></div>
          <div className="text-[#000] clash-font text-lg font-bold">Turning Steps Into success</div>
        </div>
      </div>

      {/* Toggle Buttons */}
     <div className="flex justify-center clash-font items-center mb-10">
        <div className="relative flex justify-center items-center bg-gray-100 rounded-full border border-gray-400 px-2 py-2 shadow-sm w-fit overflow-hidden">
          {/* Sliding highlight background */}
          <span
            className={`absolute top-[6px] bottom-[6px] w-[calc(50%-8px)] bg-white rounded-full shadow-[0px_4px_12px_0px_#1690E280] transition-all duration-500 ease-in-out ${
              user === "seller" ? "left-[6px]" : "left-1/2"
            }`}
          />

          {/* Seller Button */}
          <button
            onClick={() => setUser("seller")}
            className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-in-out transform ${
              user === "seller"
                ? "font-semibold text-black scale-105"
                : "text-[#464646] hover:scale-105"
            }`}
          >
            For Sellers
          </button>

          {/* Buyer Button */}
          <button
            onClick={() => setUser("buyer")}
            className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 ease-in-out transform ${
              user === "buyer"
                ? "font-semibold text-black scale-105"
                : "text-[#464646] hover:scale-105"
            }`}
          >
            For Buyers
          </button>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="flex clash-font flex-wrap justify-center gap-9">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full sm:w-[45%] lg:w-[22%] relative group"
          >
            {/* Icon */}
            <div className="bg-gradient-to-b from-[#58ace4] to-white p-8 rounded-full shadow-xl group-hover:scale-105 transition-transform duration-300">
              <Image src={item.icon} alt={item.step} className="w-24 h-24" />
            </div>

            {/* Step */}
            <h3 className="text-center text-lg font-bold text-gray-900 mt-4">
              {item.step}
            </h3>

            {/* Description */}
            <p className="text-center text-sm text-gray-700 max-w-[80%] mt-2">
              {item.description}
            </p>

            {/* Dashed Line with Glow */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-[30%] -right-[50%] w-[65%] h-[3px] border-t border-dashed border-white overflow-hidden">
                <span
                  className="absolute top-1/2 left-0 -translate-y-1/2 h-[16px] w-1/2 
                  bg-gradient-to-r from-[#18A0FB] via-[#4facfe] to-[#18A0FB]
                  opacity-90 blur-lg animate-dashGlow"
                ></span>
              </div>
            )}
          </div>
        ))}
      </div>


    </div>
  );
}
