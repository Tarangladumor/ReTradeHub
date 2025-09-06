import React, { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="bg-blue-500 px-10 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Newsletter Section */}
                <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
                    <p className="text-sm">
                        eBuddy is on its way! 🚀 Stay informed about our launch updates, new features, and how you’ll soon be able to sell your old electronic products with ease. Subscribe now and be the first to know when we go live.
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
           <div className="flex flex-col sm:flex-row justify-between items-center text-center px-5 mt-6 text-sm ">
  <p>&copy; EBuddy 2025. All rights reserved.</p>
  <p className="mt-2 sm:mt-0">Developed by <a href="https://www.codenixlabs.com" className="hover:underline">codenixlabs.com</a></p>
</div>

        </footer>
    );
};

export default Footer;
