import Image from "next/image";

export default function Banner() {
  return (
    <div className="mt-7 bg-gradient-to-r from-gray-900 via-black to-gray-900 flex flex-col md:flex-row items-center justify-center">
      {/* Left: Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div className="border rounded-2xl mx-4 my-8 md:my-16 py-8 md:py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 flex items-center justify-center">
          <Image
            src="/assest/phone.png" // Ensure the image is correctly placed in the `public/assets` folder
            alt="Phone"
            width={500}
            height={800}
            className="object-contain max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]"
            priority
          />
        </div>
      </div>

      {/* Right: Text Section */}
      <div className="w-full md:w-1/2 text-white text-center md:text-left px-6 md:px-12 py-6 md:py-0">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
          Re-Trade Hub is your go-to platform for transforming old electronics
          into opportunities, connecting you with shopkeepers who offer top
          prices with just a few clicks.
        </h2>
      </div>
    </div>
  );
}
