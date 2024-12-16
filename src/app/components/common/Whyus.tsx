import React from "react";

const WhyUs: React.FC = () => {
  const features = [
    {
      title: "Commitment to Sustainability",
      description:
        "Our platform helps you sell devices while promoting responsible recycling, reducing e-waste, and supporting a greener future.",
      icon: "♻️",
    },
    {
      title: "Trusted and Verified Shopkeepers",
      description:
        "We only work with verified shopkeepers, ensuring every transaction is secure, reliable, and fair.",
      icon: "🔒",
    },
    {
      title: "Professional Inspection Reports",
      description:
        "Detailed inspection reports give shopkeepers clear device info, ensuring smooth and trustworthy deals.",
      icon: "📝",
    },
    {
      title: "Hassle-Free Selling Experience",
      description:
        "Our simple listings and transparent bidding make selling old gadgets easy and convenient.",
      icon: "💼",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Title Section */}
      <div className="text-center mb-10">
        <span className="text-blue-500 font-semibold text-lg">
          • Why Us? •
        </span>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md flex items-start space-x-4"
          >
            {/* Icon */}
            <div className="text-blue-500 text-4xl">{feature.icon}</div>

            {/* Text Content */}
            <div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
