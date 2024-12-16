import React, { FC } from "react";

const Footer: FC = () => {
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
                <form className="relative w-full md:w-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full md:w-[500px] p-4 bg-blue-600 text-white placeholder-white rounded-full outline-none focus:ring-2 focus:ring-blue-300 pr-32"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-0 bottom-0 bg-white text-blue-500 font-semibold px-6 py-2 m-2 rounded-full hover:bg-gray-200 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Footer Copyright */}
            <div className="text-center mt-6 text-sm">
                &copy; E-Waste management 2024
            </div>
        </footer>
    );
};

export default Footer;
