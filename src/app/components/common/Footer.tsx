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
            console.log("Error", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="bg-blue-500 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Newsletter Section */}
                <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
                    <p className="text-sm">
                        Subscribe for Updates: Stay informed about the latest investor updates,
                        financial results, and announcements by subscribing to our newsletter.
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
                        className="w-full md:w-[500px] p-4 bg-blue-600 text-white placeholder-white rounded-full outline-none focus:ring-2 focus:ring-blue-300 pr-32"
                        required
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-0 bottom-0 bg-white text-blue-500 font-semibold px-6 py-2 m-2 rounded-full hover:bg-gray-200 transition flex items-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                            </svg>
                        ) : null}
                        {loading ? "Subscribing..." : "Subscribe"}
                    </button>
                </form>
            </div>

            {/* Footer Copyright */}
            <div className="text-center mt-6 text-sm">
                &copy; Re-TradeHub 2024
            </div>
        </footer>
    );
};

export default Footer;