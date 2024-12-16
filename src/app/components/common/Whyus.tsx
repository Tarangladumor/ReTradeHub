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
        "Our platform helps you sell devices while promoting responsible recycling, reducing e-waste, and supporting a greener future.",
      icon: <BsTree />,
    },
    {
      title: "Trusted and Verified Shopkeepers",
      description:
        "We only work with verified shopkeepers, ensuring every transaction is secure, reliable, and fair.",
      icon: <IoCloudDoneOutline />,
    },
    {
      title: "Professional Inspection Reports",
      description:
        "Detailed inspection reports give shopkeepers clear device info, ensuring smooth and trustworthy deals.",
      icon: <PiNotepadBold />,
    },
    {
      title: "Hassle-Free Selling Experience",
      description:
        "Our simple listings and transparent bidding make selling old gadgets easy and convenient.",
      icon: <FaComputer />,
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Title Section */}
      <div className="flex justify-center items-center mb-8">
        <div className="flex space-x-2 border-2 py-1.5 px-3 w-fit rounded-full border-gray-300">
          <div className="bg-blue-500 rounded-full w-4 h-4"></div>
          <div className="text-black text-sm font-medium">Why Us?</div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="py-10 px-8 rounded-3xl bg-white border border-gray-200 transition-all duration-500 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/50 hover:text-white group"
          >
            {/* Icon and Title Row */}
            <div className="flex items-center mb-5">
              <div className="flex items-center justify-center bg-gradient-to-b from-white to-blue-200 text-blue-600 rounded-full w-14 h-14 mr-4 transition-all duration-500 group-hover:bg-black group-hover:shadow-lg">
                <div className="text-3xl">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-black transition-all duration-500 group-hover:text-white">
                {feature.title}
              </h3>
            </div>
            {/* Description Below */}
            <p className="text-gray-600 text-sm transition-all duration-500 group-hover:text-white">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
