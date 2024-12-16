import Image from "next/image";

export default function Banner() {
  return (
    <div className="mt-16 bg-gradient-to-r px-16 from-gray-900 via-black to-gray-900 max-h-[300px] flex flex-col md:flex-row items-center justify-center relative overflow-visible">
      {/* Left: Image Section with Glow */}
      <div className="lg:w-1/2 flex justify-center items-center relative">
        {/* Animated Glow Background */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <div className="w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-blue-500 rounded-full blur-[80px] opacity-60 animate-pulse"></div>
        </div>

        {/* Image Positioned Outside */}
        <div className="relative">
          <Image
            src="/assest/phone.png"
            alt="Phone"
            width={650}
            height={1000}
            className="rounded-xl object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Right: Text and Blue Bar Section */}
      <div className="w-full md:w-1/2 flex items-center relative">
        {/* Text Content */}
        <div className="text-white px-6 md:px-12 text-right flex-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white leading-snug tracking-wide">
            Re-Trade Hub is your go-to platform for transforming old electronics into opportunities, connecting you with shopkeepers who offer top prices with just a few clicks
          </h2>
        </div>

        {/* Blue Bar */}
        <div className="absolute right-0 top-0 bottom-0 w-[6px] bg-blue-500 rounded-r-xl"></div>
      </div>
    </div>
  );
}
