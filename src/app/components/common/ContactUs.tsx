import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Contact Us
        </p>
        <h2 className="text-4xl font-bold mt-2">
          Get in touch with us.
          <br /> We're here to assist you.
        </h2>
      </div>

      {/* Form */}
      <form className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-400 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-400 mb-1">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-400 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Write your message here..."
            className="w-full px-4 py-2 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-white text-gray-900 py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Leave us a Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
