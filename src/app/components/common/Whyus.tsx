import React from "react";
import { BsTree } from "react-icons/bs";
import { IoCloudDoneOutline } from "react-icons/io5";
import { PiNotepadBold } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";

const WhyUs: React.FC = () => {
  const features = [
    {
      title: "Commitment to Sustainability",
      description:
        "Turn old devices into new opportunities while helping the planet. Every sale supports responsible recycling and a greener tomorrow.",
      icon: <BsTree />,
    },
    {
      title: "Verified & Trusted Network",
      description:
        "We partner only with verified shopkeepers, so every deal is safe, reliable, and built on trust.",
      icon: <IoCloudDoneOutline />,
    },
    {
      title: "Certified Inspection Reports",
      description:
        "Each device comes with a professional inspection report—bringing confidence to shopkeepers and transparency to you.",
      icon: <PiNotepadBold />,
    },
    {
      title: "Seamless Selling Journey",
      description:
        "List your device in minutes, watch bids roll in, and get the best value—without the usual hassle.",
      icon: <FaComputer />,
    },
  ];

  return (
    <div className="bg-gradient-to-b clash-font from-gray-50 to-white py-16 relative overflow-hidden">
      {/* Subtle floating background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-pink-50 opacity-70 animate-pulse"></div>

      {/* Title Section */}
      <div className="relative flex justify-center items-center mb-8">
        <div className="flex items-center animate-pulse shadow-[0_0_12px_#18A0FB] space-x-3 border border-gray-200 py-2 px-8 rounded-full bg-white/80 backdrop-blur-md  transition-all duration-500 hover:shadow-blue-200/70">
 <div className="bg-[#18A0FB] rounded-full w-4 h-4 animate-pulse shadow-[0_0_12px_#18A0FB]"></div>
          <div className="text-gray-900 text-lg md:text-xl font-semibold tracking-wide">
            Why Choose Us?
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative p-10 rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-700 ease-in-out hover:-translate-y-1"
          >
            {/* Icon & Title */}
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-blue-100 to-blue-200 text-blue-500 text-3xl transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:from-blue-500 group-hover:to-blue-700 group-hover:text-white shadow-md group-hover:shadow-lg group-hover:shadow-blue-400/40">
                {feature.icon}
              </div>
              <h3 className="ml-4 text-xl font-bold text-gray-900 transition-all duration-700 ease-in-out group-hover:text-blue-600">
                {feature.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed transition-all duration-700 ease-in-out group-hover:text-gray-800">
              {feature.description}
            </p>

            {/* Animated Glow Line */}
            <span className="absolute inset-x-0 w-[95%] ml-3 bottom-0 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-b-3xl opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-700 ease-in-out"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
