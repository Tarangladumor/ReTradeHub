"use client";
import Image from "next/image";
export default function Header() {

  return (
    <div className="border rounded-3xl mt-3  max-h-[600px] bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center overflow-hidden relative">
      {/* Header Section */}
 

     <header className="w-full flex justify-between items-center px-4 sm:px-8 py-2  relative z-10">
  {/* Logo */}
  <Image
    src="/assest/ebuddy.png" // <-- replace with your actual logo path
    alt="Ebuddy"
    width={200}
    height={200}
      className="pt-2 w-36 sm:w-40 md:w-48 lg:w-52 h-auto"
  />

  {/* Join Community Button */}
  <a
    href="https://chat.whatsapp.com/your-group-link" // <-- replace with your WhatsApp group link
    target="_blank"
    rel="noopener noreferrer"
    className="hidden sm:inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition"
  >
    Click to Join Community
  </a>

  {/* Mobile Menu Button */}
  {/* <button
    className="sm:hidden bg-gray-800 hover:bg-gray-700 text-white text-sm px-3 py-2 rounded-lg"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? "Close" : "Menu"}
  </button> */}
</header>


      {/* Mobile Navigation Menu
      {menuOpen && (
        <nav className="sm:hidden flex flex-col space-y-3 w-full px-4 py-4 bg-gray-800 text-white rounded-b-2xl z-10">
          <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#sell" className="hover:text-blue-400 transition-colors">Sell Gadgets</a>
          <a href="#buy" className="hover:text-blue-400 transition-colors">Buy Gadgets</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
        </nav>
      )} */}

      {/* Main Section */}
      <main className="flex flex-col md:flex-row lg:flex-row items-center justify-between px-6 sm:px-10 md:px-20 lg:px-20 py-20 sm:py-[100px] md:py-[110px] lg:py-[110px] w-full relative overflow-hidden">
        
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
        <div className="md:w-4/5 lg:w-4/5 space-y-3 text-center md:text-left lg:text-left z-10">
          <h1 className="text-[clamp(1.75rem,4vw,3.75rem)] clash-font font-bold leading-tight">
            Soon, Your Old Electronics Will Be Worth More Than You Think.
          </h1>
          <p className="text-gray-400 clash-font text-[clamp(0.9rem,2vw,1.1rem)]">
            Why settle for less? Let shops bid for your gadgets.
          </p>
        </div>

        {/* Image Section */}
      {/* Image Section */}
<div className="md:w-1/2 lg:w-1/2 relative flex justify-center mt-10 md:mt-0">
  <div className="relative w-full flex justify-center">
    {/* Animated Glow Background */}
    <div className="absolute inset-0 flex justify-center items-center z-0">
      <div className="w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-80 lg:w-96 lg:h-60 bg-blue-500 rounded-full blur-[70px] opacity-40 animate-pulse"></div>
    </div>

    {/* Foreground Image */}
    <Image
      src="/assest/image2.png"
      alt="Phones"
      width={600}
      height={600}
      className="mx-auto rounded-xl z-10 drop-shadow-2xl relative md:absolute md:-bottom-[222px]"
    />
  </div>
</div>

      </main>

      
    </div>
  );
}
