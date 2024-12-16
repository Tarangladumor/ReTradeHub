import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const ContactForm: React.FC = () => {
  return (
    <section className="bg-[#12151B] text-white py-12 px-4">
      {/* Title */}
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <div className="text-left mb-8">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Contact Us
          </p>
          <h2 className="text-6xl font-bold my-4">
            Get in touch with us.
            <br /> We&apos;re here to assist you.
          </h2>
        </div>

        <div className="flex-col space-y-4 items-center">
          <div className="border border-gray-500 p-2 rounded-full hover:bg-blue-500 transition duration-300">
            <FaInstagram />
          </div>
          <div className="border border-gray-500 p-2 rounded-full hover:bg-blue-500 transition duration-300">
            <FaFacebookF />
          </div>
          <div className="border border-gray-500 p-2 rounded-full hover:bg-blue-500 transition duration-300">
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Name */}
          <div>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              required
              className="w-full px-4 pb-5 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 placeholder:text-md transition duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              required
              className="w-full px-4 pb-5 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 placeholder:text-md transition duration-300"
            />
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              id="phone"
              placeholder="Your phone"
              className="w-full px-4 pb-5 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 placeholder:text-md transition duration-300"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <textarea
            id="message"
            rows={4}
            placeholder="Message"
            required
            className="w-full px-4 pb-5 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 placeholder:text-md transition duration-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-left">
          <button
            type="submit"
            className="bg-white text-gray-900 py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Leave us a Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
