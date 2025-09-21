import ContactForm from "./components/common/ContactUs";
import FAQSection from "./components/common/Faq";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Banner from "./components/common/main";
import OurServices from "./components/common/OurServices";
import WhyUs from "./components/common/Whyus";
import WorkFlow from "./components/common/WorkFlow";

export default function Home() {
  return (
    <div className="bg-white  overflow-x-hidden text-white min-h-screen">
      {/* Header */}

      <div className="gradient-edge left-0" />
      <div className="gradient-edge right-0" />

      <div className="marquee h-10 mt-3  bg-gradient-to-l from-blue-400 to-violet-800 flex items-center">
        <div className="marquee-box flex gap-2 animate-marquee">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex-none whitespace-nowrap px-4 text-white font-semibold text-lg tracking-wide"
            >
              🚀 Ebuddy is on its way — Stay tuned for updates!
            </div>
          ))}
        </div>
      </div>


      <div className=" w-[96%]  mx-auto">

        <Header />
      </div>

      <div className="relative mt-3  overflow-hidden">

      </div>

      {/* Banner */}
      <div className="w-full">
        <Banner />
      </div>

      {/* WorkFlow */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-6 sm:py-12">
        <WorkFlow />
      </div>

      <div>
        <OurServices />
      </div>

      <div className="w-full">
        <WhyUs />
      </div>

      <div className="w-full">
        <FAQSection />
      </div>

      <div className="w-full">
        <ContactForm />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
