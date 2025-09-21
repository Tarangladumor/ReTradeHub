"use client";
import React, { FC, useRef, useState } from "react";

const Footer: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const body = { email: formData.get("email") };

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data.success) {
        alert("Subscribed successfully!");
        formRef.current?.reset();
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (err) {
      alert("Something went wrong.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Newsletter Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
          <p className="text-sm leading-relaxed opacity-90">
           eBuddy is on its way! 🚀 Stay informed about our launch updates, new features, and how you’ll soon be able to sell your old electronic products with ease. Subscribe now and be the first to know when we go live.
            </p>
        </div>

        {/* Email Input Section */}
        <form
          ref={formRef}
          onSubmit={handleSubscribe}
          className="relative w-full md:w-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full md:w-[420px] p-4 bg-blue-600 text-white placeholder-white rounded-full outline-none focus:ring-2 focus:ring-blue-300 pr-36"
            required
            disabled={loading}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 bg-white text-blue-600 font-semibold px-6 py-2 m-2 rounded-full hover:bg-gray-100 transition flex items-center"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : null}
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 border-t border-white/20 pt-4 pb-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/80">
          <div className="mb-2 sm:mb-0">
            &copy; {new Date().getFullYear()} <span className="font-semibold">Ebuddy</span>. All rights reserved.
          </div>
          <div>
            Developed by{" "}
            <a
              href="https://codenixlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-white transition-colors duration-200"
            >
              Codenix Labs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
