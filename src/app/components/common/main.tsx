import Image from "next/image";

export default function Banner() {
  return (
    <div className="border rounded-2xl my-20 py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 max-h-[500px] flex items-center justify-center">
      {/* Left: Image Section */}
      <div className="relative w-2/3 flex justify-center items-center">
        <Image
          src="/assest/phone.png" // Place your image in the `public/assets` folder
          alt="Phone"
          width={700}
          height={1000}
          className="absolute object-contain"
        />
      </div>

      {/* Right: Text Section */}
      <div className="w-full text-white text-center md:text-left px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold">
          Re-Trade Hub is your go-to platform for transforming old electronics
          into opportunities, connecting you with shopkeepers who offer top
          prices with just a few clicks.
        </h2>
      </div>
    </div>
  );
}
