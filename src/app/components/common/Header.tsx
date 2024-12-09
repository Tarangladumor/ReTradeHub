"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border rounded-3xl mt-3 max-h-[535px] bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full flex justify-between items-center px-4 sm:px-8 py-4">
        <div className="text-xl sm:text-2xl font-bold">E-W</div>
 

        {/* Desktop Navigation */}
 
        <nav className="hidden sm:flex space-x-4 sm:space-x-8">
          <a href="#home" className="hover:text-blue-400 text-sm sm:text-base">
            Home
          </a>
          <a href="#sell" className="hover:text-blue-400 text-sm sm:text-base">
            Sell Gadgets
          </a>
          <a href="#buy" className="hover:text-blue-400 text-sm sm:text-base">
            Buy Gadgets
          </a>
          <a href="#about" className="hover:text-blue-400 text-sm sm:text-base">
            About Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden bg-gray-800 hover:bg-gray-700 text-white text-sm px-3 py-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop Login Button */}
        <button className="hidden sm:block bg-gray-800 hover:bg-gray-700 text-white text-sm sm:text-base px-4 py-2 rounded-lg">
          Login
        </button>
      </header>
 
      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="sm:hidden flex flex-col space-y-2 w-full px-4 py-2 bg-gray-800 text-white">
          <a href="#home" className="hover:text-blue-400 text-sm">
            Home
          </a>
          <a href="#sell" className="hover:text-blue-400 text-sm">
            Sell Gadgets
          </a>
          <a href="#buy" className="hover:text-blue-400 text-sm">
            Buy Gadgets
          </a>
          <a href="#about" className="hover:text-blue-400 text-sm">
            About Us
          </a>
        </nav>
      )}

=======
 
      {/* Main Section */}
      <main className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-24 py-8 sm:py-16 w-full">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold">
            Turn Your Old Electronics into Cash Today!
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            List your gadgets and let shopkeepers bid for the best price—quick,
            easy, and rewarding.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg">
              Sell And Earn
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 relative">
          <Image
            src="/assest/image1.png"
            alt="Phones"
            width={500}
            height={500}
            className="mx-auto mt-6 sm:mt-11 rounded-xl relative z-10"
          />
          {/* Animated Background */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-blue-500 rounded-full blur-[50px] sm:blur-[80px] lg:blur-[100px] opacity-50"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
