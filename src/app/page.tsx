import Header from "./components/common/Header";
import Banner from "./components/common/main";
import WorkFlow from "./components/common/WorkFlow";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <div className="w-full">
        <Header />
      </div>

      {/* Banner */}
      <div className="w-full">
        <Banner />
      </div>

      {/* WorkFlow */}
      <div className="w-full bg-gradient-to-b from-gray-900 to-black px-4 sm:px-8 md:px-16 lg:px-24 py-6 sm:py-12">
        <WorkFlow />
      </div>
    </div>
  );
}
