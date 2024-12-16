import Image from "next/image";

const OurServices = () => {
    return (
        <div className="bg-[linear-gradient(90deg,_#091B2C_0%,_#04090D_57.5%,_#020202_100%)] text-white py-10">
            <div className="w-9/12 mx-auto px-5">
                {/* Section Title */}
                <div className="flex justify-center items-center mb-8">
                    <div className="flex space-x-2 border-[1.5px] py-1.5 px-3 w-fit rounded-full border-[#D9D9D9]">
                        <div className="bg-[#18A0FB] rounded-full w-4 h-4"></div>
                        <div className="text-[#fff] text-sm font-medium">How it Works?</div>
                    </div>
                </div>

                {/* First Row with 70%-30% Layout */}
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    {/* First Grid - 60% Width */}
                    <div className="md:w-[60%] bg-gray-900 rounded-[40px] relative">
                        {/* Laptop Image */}
                        <Image
                            src="/assest/laptopMockUp.png"
                            alt="Laptop Mockup"
                            width={300}
                            height={100}
                            className="w-full h-96 object-cover opacity-90 rounded-t-[40px]"
                        />

                        {/* Rupee SVG Centered */}
                        <div className="absolute inset-0 flex justify-center top-6">
                            <Image
                                src="/assest/ruppeSVG.svg"
                                alt="Rupee Icon"
                                width={80}
                                height={80}
                                className="w-32 h-32"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-[40px]">
                            <h3 className="font-semibold text-lg mb-1">Instant Device Listings</h3>
                            <p className="text-sm">
                                Easily list your old or non-working electronics on our platform
                                in just a few steps and get connected with shopkeepers ready to
                                bid on your items.
                            </p>
                        </div>
                    </div>

                    {/* Second Grid - 40% Width */}
                    <div className="md:w-[40%] bg-blue-500 text-white p-6 rounded-[40px] shadow-md flex flex-col justify-center">
                        <h3 className="text-4xl md:text-7xl font-bold mb-2">Device Inspection Reports</h3>
                        <p className="text-sm">
                            For added transparency, our platform includes technician-generated
                            reports on your electronics, giving shopkeepers confidence in
                            their purchases.
                        </p>
                    </div>
                </div>

                {/* Second Row */}
                <div className="bg-[linear-gradient(90deg,_#091B2C_0%,_#04090D_57.5%,_#020202_100%)] text-white p-6 rounded-[40px] shadow-md flex flex-col md:flex-row justify-evenly items-center gap-4">
                    {/* Text Content */}
                    <div className="basis-2/3 mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">Competitive Bidding</h3>
                        <p className="text-lg md:text-xl leading-relaxed">
                            Receive competitive offers from multiple shopkeepers, ensuring
                            you get the best value for your devices without the hassle of
                            negotiating.
                        </p>
                    </div>

                    {/* Hammer Image */}
                    <Image
                        src="/assest/hammer.png"
                        alt="Competitive Bidding"
                        width={350}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
};

export default OurServices;
