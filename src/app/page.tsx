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
    <div className="bg-white text-white min-h-screen">
      {/* Header */}
      <div className=" w-[96%]  mx-auto">
        <Header />
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
        <OurServices/>
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
