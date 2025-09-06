"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border rounded-3xl mt-12 max-h-[600px] bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center overflow-hidden relative">
      {/* Header Section */}
      <header className="w-full flex justify-between items-center px-4 sm:px-8 py-4 relative z-10">
        {/* Mobile Menu Button */}
        <button
          className="sm:hidden bg-gray-800 hover:bg-gray-700 text-white text-sm px-3 py-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="sm:hidden flex flex-col space-y-3 w-full px-4 py-4 bg-gray-800 text-white rounded-b-2xl z-10">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#sell" className="hover:text-blue-400 transition-colors">Sell Gadgets</a>
          <a href="#buy" className="hover:text-blue-400 transition-colors">Buy Gadgets</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
        </nav>
      )}

      {/* Main Section */}
      <main className="flex flex-col md:flex-row lg:flex-row items-center justify-between px-6 sm:px-10 md:px-20 lg:px-20 py-28 sm:py-[140px] md:py-[140px] lg:py-[140px] w-full relative overflow-hidden">
        
        {/* Grid Background (left side) */}
        <div className="absolute left-0 top-10 h-full w-1/2 flex justify-start items-center ">
          <Image
            src="/assest/grid.png"
            alt="Grid Background"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-4/5 lg:w-4/5 space-y-6 text-center md:text-left lg:text-left z-10">
          <h1 className="text-[clamp(1.75rem,4vw,3.75rem)] clash-font font-bold leading-tight">
            Soon, Your Unused Electronics Will Be Worth More Than You Think.
          </h1>
          <p className="text-gray-400 clash-font text-[clamp(0.9rem,2vw,1.1rem)]">
            Why settle for less? Let shops bid for your gadgets.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 lg:w-1/2 relative flex justify-center">
          <div className="relative w-full flex justify-center">
            {/* Animated Glow Background */}
            <div className="absolute inset-0 flex justify-center items-center z-0">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-96 lg:h-96 bg-blue-500 rounded-full blur-[70px] opacity-40 animate-pulse"></div>
            </div>
            {/* Foreground Image */}
            <Image
              src="/assest/image1.png"
              alt="Phones"
              width={800}
              height={800}
              className="mx-auto rounded-xl z-10 drop-shadow-2xl absolute -bottom-[260px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
