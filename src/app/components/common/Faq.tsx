"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

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
      <div className="flex justify-center items-center mb-8">
        <div className="flex space-x-2 border-2 py-1.5 px-3 w-fit rounded-full border-gray-300">
          <div className="bg-blue-500 rounded-full w-4 h-4"></div>
          <div className="text-black text-sm font-medium">FAQ&apos;s</div>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`mb-4 p-6 md:p-8 rounded-2xl bg-white border border-gray-200 transition-all duration-500 ${openIndex === index ? "border-blue-300 shadow-lg shadow-blue-500/50" : "shadow-sm"
              }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span
                className={`text-2xl flex items-center justify-center transform transition-all duration-300 ease-in-out ${openIndex === index
                    ? "text-white rotate-90 bg-blue-500 p-2 rounded-full"
                    : "text-blue-500 bg-gray-100 rounded-full p-2 shadow-md"
                  }`}
              >
                <IoIosArrowForward className="w-5 h-5" />
              </span>
            </button>
            {/* Answer */}
            <div
              id={`faq-${index}`}
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? "max-h-screen mt-4" : "max-h-0"
                }`}
            >
              <p className="text-sm md:text-base text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
