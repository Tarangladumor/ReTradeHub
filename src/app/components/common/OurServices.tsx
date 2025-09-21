import Image from "next/image";

const OurServices = () => {
  return (
    <div className="bg-[linear-gradient(90deg,_#091B2C_0%,_#04090D_57.5%,_#020202_100%)] clash-font text-white py-16">
      <div className="w-11/12 md:w-9/12 mx-auto px-4">
        {/* Section Title */}
        <div className="flex justify-center items-center  mb-12">
          <div className="flex items-center space-x-3 border animate-pulse shadow-[0_0_12px_#18A0FB] border-[#D9D9D9]/40 py-2 px-4 w-fit rounded-full bg-white/5 backdrop-blur-sm ">
            <div className="bg-[#18A0FB] rounded-full w-4 h-4 animate-pulse shadow-[0_0_12px_#18A0FB]"></div>
            <div className="text-white text-sm md:text-base font-semibold tracking-wide">
              Simple. Smart. Profitable.
            </div>
          </div>
        </div>

        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Left Card */}
          <div className="md:w-[60%] bg-black rounded-[32px] overflow-hidden relative shadow-lg">
            {/* Laptop Image */}
            <Image
              src="/assest/laptopMockUp.png"
              alt="Laptop Mockup"
              width={500}
              height={300}
              className="w-full h-80 md:h-96  object-cover bg-black opacity-90"
            />

            {/* Rupee SVG Overlay */}
            <div className="absolute inset-0 flex justify-center items-start pt-8">
              <Image
                src="/assest/ruppeSVG.svg"
                alt="Rupee Icon"
                width={96}
                height={96}
                className="w-24 md:w-32 h-24 md:h-32 animate-bounce"
              />
            </div>

            {/* Text Content */}
            <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="font-semibold text-xl mb-2">List in Minutes</h3>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                your old or unused device details, 
                and your listing goes live instantly for verified shopkeepers to see.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="md:w-[40%] bg-gradient-to-br from-blue-800 to-blue-300 text-white p-8 rounded-[32px] shadow-lg flex flex-col justify-center">
            <h3 className="text-3xl md:text-5xl font-extrabold mb-4 leading-snug">
              Verified Device Reports
            </h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              Every device gets a technician's inspection report so shopkeepers 
              buy with trust and you sell with confidence. No hidden issues, no doubts.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="bg-gradient-to-r from-[#243e5c] via-[#09131D] to-[#1c1b1b] p-8 rounded-[32px] shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Text Content */}
          <div className="basis-2/3">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Real-Time Bidding</h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Watch shopkeepers compete for your device with transparent bids. 
              No endless negotiations just genuine offers, live and in your favor.
            </p>
          </div>

          {/* Hammer Image */}
          <div className="flex justify-center">
            <Image
              src="/assest/hammer.png"
              alt="Competitive Bidding"
              width={300}
              height={200}
              className="w-48 md:w-72 h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
