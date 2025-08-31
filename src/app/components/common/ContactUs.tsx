"use client";
import React, { useRef, useState } from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent!");
        formRef.current?.reset();
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#12151B] text-white py-12 px-4">
      {/* Title and Social Media Icons */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center max-w-4xl mx-auto">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold my-4">
            Get in touch with us.
            <br /> We&apos;re here to assist you.
          </h2>
        </div>

        <div className="flex justify-center lg:flex-col space-x-6 lg:space-x-0 lg:space-y-4 items-center">
          <div className="border border-gray-500 p-3 rounded-full hover:bg-blue-500 transition duration-300">
            <FaInstagram size={24} />
          </div>
          <div className="border border-gray-500 p-3 rounded-full hover:bg-blue-500 transition duration-300">
            <FaFacebookF size={24} />
          </div>
          <div className="border border-gray-500 p-3 rounded-full hover:bg-blue-500 transition duration-300">
            <FaTwitter size={24} />
          </div>
        </div>
      </div>

      {/* Form */}
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 pb-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 placeholder:text-md transition duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full px-4 pb-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 placeholder:text-md transition duration-300"
            />
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phone"
              maxLength={10}
              pattern="[0-9]{10}"
              placeholder="Your phone"
              className="w-full px-4 pb-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 placeholder:text-md transition duration-300"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            required
            className="w-full px-4 pb-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 placeholder:text-md transition duration-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center lg:text-left">
          <button
            type="submit"
            className="bg-white text-gray-900 py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 flex items-center justify-center min-w-[180px]"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Leave us a Message"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;