import Image from "next/image";

export default function Banner() {
  return (
    <div className="border rounded-2xl mt-7 bg-gradient-to-r from-gray-900 via-black to-gray-900 max-h-[500px] flex flex-col md:flex-row items-center justify-center">
      {/* Left: Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/assest/phone.png" // Place your image in the `public/assets` folder
          alt="Phone"
          width={400}
          height={1000}
          className="object-contain max-w-[80%] sm:max-w-[60%] md:max-w-full"
          priority
        />
      </div>

      {/* Right: Text Section */}
      <div className="w-full md:w-1/2 text-white text-center md:text-left px-6 md:px-12 py-6 md:py-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
          Re-Trade Hub is your go-to platform for transforming old electronics
          into opportunities, connecting you with shopkeepers who offer top
          prices with just a few clicks.
        </h2>
      </div>
    </div>
  );
}
