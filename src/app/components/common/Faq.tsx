"use client"
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What types of devices can I sell?",
      answer:
        "You can sell a variety of electronics, including smartphones, laptops, tablets, and other gadgets. Whether they’re fully functional, damaged, or non-working, our platform accepts most devices.",
    },
    {
      question: "How do I know I’m getting the best offer?",
      answer:
        "We ensure competitive pricing through transparent bidding and verified shopkeepers.",
    },
    {
      question: "Is there any cost to list my device?",
      answer:
        "No, listing your device on our platform is completely free of charge.",
    },
    {
      question: "Are the shopkeepers verified?",
      answer:
        "Yes, we verify all shopkeepers to ensure secure and trustworthy transactions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          <span className="text-blue-500">•</span> FAQ’s{" "}
          <span className="text-blue-500">•</span>
        </h2>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`mb-4 p-4 border ${
              openIndex === index ? "border-blue-400" : "border-gray-200"
            } rounded-lg shadow-sm`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span
                className={`text-2xl transform ${
                  openIndex === index ? "rotate-180 text-blue-500" : ""
                }`}
              >
                &#x25BC;
              </span>
            </button>
            {/* Answer */}
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
