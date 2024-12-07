import Image from "next/image";

export default function Header() {
  return (
    <div className="border rounded-3xl mt-3 max-h-[535px] bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center">
      <header className="w-full flex justify-between items-center px-4 sm:px-8 py-4">
        <div className="text-xl sm:text-2xl font-bold">E-W</div>
        <nav className="space-x-4 sm:space-x-8 hidden sm:flex">
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
        <button className="hidden sm:block bg-gray-800 hover:bg-gray-700 text-white text-sm sm:text-base px-4 py-2 rounded-lg">
          Login
        </button>
      </header>
      <main className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-24 py-8 sm:py-16 w-full">
        <div className="lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
        <Image
            src="/assest/grid.png" // Add your image file in the `public` folder as `phone.png`
            alt="Phones"
            width={800}
            height={600}
            className="right-[750px] absolute max-h-[315px] mx-auto sm:ml-[30%] sm:mt-11 rounded-xl z-11 opacity-40" 
          />
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
        <div className="lg:w-1/2 mt-6 sm:mt-8 lg:mt-0 relative">
          {/* Add permanent animated background */}
          <div className="ml-auto sm:ml-[65%] mt-[100px] sm:mt-[200px] absolute inset-0 before:absolute before:w-40 sm:before:w-64 lg:before:w-80 before:h-40 sm:before:h-64 lg:before:h-80 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-blue-500 before:rounded-full before:blur-[50px] sm:before:blur-[80px] lg:before:blur-[100px] before:opacity-100">
            {/* Empty div for animated background */}
          </div>
          <Image
            src="/assest/image1.png" // Add your image file in the `public` folder as `phone.png`
            alt="Phones"
            width={500}
            height={500}
            className="mx-auto sm:ml-[30%] mt-6 sm:mt-11 rounded-xl relative z-10"
          />
        </div>
      </main>
    </div>
  );
}
